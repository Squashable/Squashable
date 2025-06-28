fetch("navbar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar-placeholder").innerHTML = data;

    // Set the header title based on the page
    const pageMap = {
      "index.html": "Welcome to My Portfolio<br><span style='font-size:22px;'>Joshua Hudgell BEng (Hons) Mechatronics Engineering </span>",
      "Artifical.html": "My Stance on AI Use",
      "website-turret.html": "Turret",
      "website-model-rail.html": "Model Rail",
      "website-project.html": "Website Building",
      "Project04.html": "Future Project 04",
      "Project05.html": "Future Project 05",
      "Project06.html": "Future Project 06",
      "Project07.html": "Future Project 07",
      "Project08.html": "Future Project 08",
      "Project09.html": "Future Project 09",
      "Project10.html": "Future Project 10"
    };
    const currentPage = window.location.pathname.split("/").pop();
    const title = pageMap[currentPage] || "Portfolio";
    document.getElementById("page-title").innerHTML = title;

    // Highlight current nav link
    document.querySelectorAll(".navbar a").forEach(link => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
      }
    });
  });