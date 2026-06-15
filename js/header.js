document.addEventListener("DOMContentLoaded", () => {
  fetch("components/header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;
    });
  // Add this inside your js/header.js logic module loop
  document.addEventListener("click", (e) => {
    const container = document.querySelector(".header-container");
    if (!container) return;

    // Toggle state if the user clicks the hamburger text pseudo element marker zone
    if (e.target.matches(".header-container") && e.offsetX > container.clientWidth - 50) {
      container.classList.toggle("menu-active");
    } else if (!container.contains(e.target)) {
      // Closes out the menu context drawer if user clicks off the header frame bounding boxes
      container.classList.remove("menu-active");
    }
  });

});
