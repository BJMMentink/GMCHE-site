document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-pill");
  const catalogGrid = document.getElementById("catalog-grid");
  const catalogDetail = document.getElementById("catalog-detail");

  // Custom descriptions text dictionary for each filtered tab selection
  const categoryData = {
    first_class: {
      title: "Drawing",
      desc: "Build a strong artistic foundation by learning observation, line, proportion, shading, and composition through guided drawing exercises and creative projects."
    },
    second_class: {
      title: "Painting",
      desc: "Explore watercolor, tempera, and acrylic techniques while learning color mixing, brushwork, light, and texture inspired by master artists."
    },
    third_class: {
      title: "Printmaking",
      desc: "Discover the art of creating unique prints through techniques like linoleum block printing, while learning about pattern, design, and composition."
    }
  };

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      // 1. Manage active button states
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const targetValue = button.getAttribute("data-target");

      // 2. View Switching State Logic
      if (targetValue === "all") {
        // Return back to full grid view
        catalogDetail.style.display = "none";
        catalogGrid.style.display = "grid";
      } else {
        // Swap grid view out for single descriptions content layout block
        catalogGrid.style.display = "none";

        // Dynamically update inner text contexts safely
        if (categoryData[targetValue]) {
          document.getElementById("detail-title").textContent = categoryData[targetValue].title;
          document.getElementById("detail-description").textContent = categoryData[targetValue].desc;
        }

        catalogDetail.style.display = "flex";
      }
    });
  });
});
