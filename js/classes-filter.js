document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-pill");
  const catalogGrid = document.getElementById("catalog-grid");
  const catalogDetail = document.getElementById("catalog-detail");

  // Custom descriptions text dictionary for each filtered program selection
  const categoryData = {
    foundations: {
      title: "Art Foundations and Skill Building (Primary)",
      desc: "Ages 7–16. Bi-monthly sessions (8 per semester) for beginners to intermediate artists. Introduction to art history, elements of art, and principles of design. Students work with chalk pastel, oil pastel, watercolor, acrylic on canvas, and printmaking. Lessons build across the year, so attending the full year is highly recommended. Classes are limited for personal attention; all premium supplies are provided. See the Calendar for group days, times, dates, and tuition."
    },
    little_lambs: {
      title: "Little Lambs (Ages 4–6)",
      desc: "A workshop for very young children to explore line, shape, and color. Students are introduced to art history and projects that meet their developmental needs, with instructor-led lessons and plenty of room for exploration. Sessions meet once a month (about 2 hours 15 minutes). Two sections are offered so more families can participate. See the Calendar for section dates and tuition."
    },
    barn_owls: {
      title: "Silent Flight Barn Owls — Skill Refinement for Teens",
      desc: "Quiet your mind. Focus your art. Leave the noise outside. For teens who want to sharpen skills beyond Art Foundations—typically ages 14–18—meeting once monthly. Projects are more complex, with art history, elements of art, and principles of design. Students have more liberty for artistic choice and often work independently rather than step-by-step. Media may include graphite, charcoal, chalk pastel, colored pencil, watercolor, gouache, scratchboard, acrylic on canvas, and printmaking. A master-artist study is available for teens who wish. See the Calendar for meeting times and tuition."
    },
    sacred_art: {
      title: "St. Joseph’s Sacred Art Atelier and Scriptorium",
      desc: "An exploration of the Catholic faith through the beauty of art found in churches, sacred books, and items used for liturgy. Projects may include painting an icon with an embossed metal frame, calligraphy and illuminating Scripture, carving or sculpting a favorite saint, wood-burning stations of the cross, tissue-paper stained glass, or linocut prints transferred to ceramic clay. Typically meets on the third Thursday of the month. Proposed students ages 8–18 should contact the instructor about interest before admission. See the Calendar for times and tuition."
    },
    art_cafe: {
      title: "Art Café Days (Ages 7–18)",
      desc: "Focused on art process and experimentation. Each Art Café Day serves a different menu of media—themes may include collage and paper building, design and printing, ceramic enterprise, or paint with a purpose. After brief instruction, students choose their own subject matter, style, and composition, with inspirational prompts and coaching as needed. The Atelier is open for a flexible art-camp-style day. See the Calendar for scheduled Café dates."
    },
    lamp_lighters: {
      title: "Mary’s Lamp-Lighters — Moms & Young Adult Women",
      desc: "A time to work from a prayerful place of peace and rest. Join a community of Catholic women who desire support and encouragement in nurturing their creative side—making art that helps calm the system, develop skills, or explore different media, all for the purpose of creating even more beauty in the world. See the Calendar or Contact page for current evening session details."
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
