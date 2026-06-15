document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-pill");
  const catalogGrid = document.getElementById("catalog-grid");
  const catalogDetail = document.getElementById("catalog-detail");

  // Custom descriptions text dictionary for each filtered tab selection
  const categoryData = {
    first_class: {
      title: "Canvas' Class",
      desc: "Text for the Canvas class (just ideas for names) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat"
    },
    second_class: {
      title: "Mosaics Class",
      desc: "Text for the Mosaics class (just ideas for names) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat"
    },
    third_class: {
      title: "Pigments Class",
      desc: "Text for the Pigment class (just ideas for names) Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat"
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
