document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-pill");
  const catalogGrid = document.getElementById("catalog-grid");
  const catalogDetail = document.getElementById("catalog-detail");

  // Custom descriptions text dictionary for each filtered program selection
  // To change a class image, update the file path below to point to your new image in img/samples/
  const categoryImages = {
    foundations: "img/samples/art-8.JPG",
    little_lambs: "img/samples/art-9.JPG",
    barn_owls: "img/samples/art-10.JPG",
    sacred_art: "img/samples/art-11.jpeg",
    art_cafe: "img/samples/art-12.jpeg",
    lamp_lighters: "img/samples/art-13.jpeg"
  };

  const categoryData = {
    foundations: {
      title: "Art Foundations and Skill Building (Primary)",
      desc: "Art Foundations and Skill Building “Dolphins” Primary Level Atelier. Dolphins are known for their playfulness, intelligence, harmony, strong community, friendship and teamwork. They are enthusiastic and bring a freshness and spontaneity to their work. Art Foundations and Skill Building is the course that I have been providing for ages 7-16. Over the past two the years I have learned a great deal from my students. This summer I refined and planned the curriculum to best serve the needs, interests and developmental level of the enthusiastic and lively children of this age group. I offer Bi-monthly (8 sessions per semester) classes for elementary aged students, over the age of 7 and up to age 16. This class is perfect for beginners to intermediate artists. Introduction to art history, elements of art, and principles of design. Students work with media such as chalk pastel, oil pastel, watercolor, acrylic on canvas, and printmaking. I highly recommend that students plan to attend art the entire year since lessons in the curriculum are crafted so projects build on one another. One project will assume knowledge of concepts and experience that were taught in previous ones beginning in September. NEW FOR 2026-2027 year. The duration of time at the Atelier will now be Three and a half hours. This will allow for 2.75 hours of solid work time after instruction. The added thirty minutes allows for mini stretch breaks, sufficient time for a 20 minute snack/recess mid-session, and 10 minute clean-up time at session’s end. Classes will be limited to 7 students. The semi-private group size allows for plenty of individual attention and protects the ‘learning-from-a-state-of-rest’ atmosphere. Premium art materials are used, and all supplies are provided. Tuition for one full semester at the Atelier $240 That’s 28 hours of art instruction and supervision (3.5 x 8 = 28 240/8 = 8.57 per hour) This year I request payments be made by the first of each month rather than at each class. Ideally, payments would be made one time-at the start of each semester since this would ease confusion at the beginning or end of each session. If there is a special need or concern, please do not hesitate to consult with the instructor."
    },
    little_lambs: {
      title: "Little Lambs (Ages 4–6)",
      desc: "“Little Lambs” An Atelier for children ages 4-6years old. Tuesdays at 9:00AM-11:15AM. This is a workshop to allow very young children ages 4-6 years old to explore line, shape and color. Students are introduced to art history and projects integrating elements of art on level that meets their development needs. Since the ‘sweet spot’ for these classes is at 6-7 students, this year I have created two sections in order for more families to participate. Each section of little lambs will meet only one time a month. There’re two sections to choose from. Class sessions meet only four times per semester. The Tuition is $100.00 per student. (25.00 per session) due to the specialized set-up time and supplies required by this age group. Little Lambs section A: Meets First Tuesdays of the month: September 1, October 6, November 3, December 1. Little Lambs section B: Meets the Third Tuesdays of the month September 16, October 13* (* second Tuesday of the month in October due to obligation of instructor) November 17, December 15."
    },
    barn_owls: {
      title: "Silent Flight Barn Owls - Skill Refinement for Teens",
      desc: "“Silent Flight Barn Owls” Skill Refinement and Mastery Atelier for Teens. Quiet your mind. Focus your art. Leave the noise outside. Barn owls are famous for their silent flight and highly acute hearing. They represent quiet concentration, observation, and peaceful independent work. If a 14-18 year old desires a place to sharpen and hone artistic skills, The First Thursday of the month is your time and space. Instructor led projects are a bit more complex than those in art foundations classes but the approach is the same. Classes include art history instruction, elements of art, and principles of design. Students work with media such as chalk pastel, oil pastel, watercolor, acrylic on canvas, and printmaking. Barn Owls will have more liberty for artistic choice, and will work independently rather than step-by-step for many projects. Some mediums used are graphite, charcoal, chalk pastel, colored pencil, watercolor, gouache, scratch board and acrylic on canvas. There is an option to do a study of a Master Artist of his or her choice if a teen artist wishes to do so. Tuition: 30.00 per student per class."
    },
    sacred_art: {
      title: "St. Joseph’s Sacred Art Atelier and Scriptorium",
      desc: "“The beauty of the faith is a call to live out the faith more freely and fully so that we ourselves can become a beautiful icon for God’s glory in the world.” Dr Jared Stauth, Institute of Catholic Culture. This Saint Joseph’s Atelier will be an exploration of the Catholic faith through beauty of art found in churches, sacred books and items used for Catholic liturgy so that we can continue to rebuild Christendom in our own work and lives. Would you like to paint an icon and create an embossed metal frame for it? Would you be interested in learning calligraphy and Illuminating a favorite scripture passage? Would you like to carve or sculpt a model of your favorite saint? Are you interested in wood-burning an image from the stations of the cross or making a tissue-paper model of a stained glass window? How would you like to carve a linocut block and transfer a print of your block to a ceramic clay slab? Then join me for an exploration of All things Sacred Art in this special Atelier! Journey with me on the third Thursday of the month from 9:00-12:30PM. Due to the focused nature of this class, I would like any proposed student ages 8-18 to fill out and submit an interest form before being admitted. (See Registration tab) Tuition: 30.00 per student per class due to premium art supplies required for some projects."
    },
    art_cafe: {
      title: "Art Café Days (Ages 7–18)",
      desc: "Art Cafe Days are focused on Art Process and Experimentation. Each Art Cafe Day will serve up a different menu of art media. Particular media and tools are set out and available to use. This art session has the feel of an art camp. The themes of an Art Cafe day may be ‘collage and paper building’, ‘design and printing’, ‘ceramic enterprise’, or ‘paint with a purpose.’ After brief instruction for working in the media, students will be free to choose their own subject matter, style and composition. Inspirational photos, prompts and examples of art made using the media will be available. Instructor support and coaching is offered as needed. Otherwise this is a relaxed time where students can create according to personal inspiration. On Art Cafe Day The Atelier is open at 9:30 and available for working until 2:30. (Students should plan to attend at minimum 2.5 hours or the amount of time it takes for them to completely finish their masterpiece. They take work home that day or they place it on the shelves ready to be fired in the kiln. (There will be no opportunity to store unfinished art from Art Cafe days at the Ateleir.) Students may bring their own snacks or lunch. The cost of an ART CAFE day runs from $30.00 - 45.00 per person depending on cost of the items on the menu. ART CAFE days will be offered one time each month and will focus on using a different art media each time. Check the calendar to see which Art Cafe theme attracts you! Recommended sign-up is two weeks in advance. Seats are limited to 10 students for each Art Cafe Day. If there is space, Parents may choose to participate with their child on Art Cafe Days."
    },
    lamp_lighters: {
      title: "Mary’s Lamp-Lighters - Moms & Young Adult Women",
      desc: "“No one lights a lamp and then covers it with a bowl or hides it under a bed. A lamp is placed on a stand, where its light can be seen by all who enter the house” Luke 8:16. Join other Catholic Women for a time of prayer, peace and community. Second or Third Wednesday of the Month - Evenings 7-9:30 PM. Saint Joseph’s Atelier is not just for kids! If you are interested in joining a community where you can work from a prayerful place of peace and rest, please call or e-mail me! You can choose a project that my students are presently working on, try a therapeutic art project, or just work on your personal art in a contemplative atmosphere. Join a community of Catholic women who desire support and encouragement in nurturing their creative side, making art that helps us calm our system, develop skills, or explore different media- all for the purpose of creating even more beauty in the world than you already do! Open Studio fee for Mary’s Lamp Lighters: $20.00 pay for each session at the time of attendance to cover art supplies and possible visit from a Catholic priest who will be our chaplain. Call or contact me! Let’s create together! “While all Catholics are called to uncover their lamps and spread their fire, Catholic artists have a third mission. We’re here to make the fuel that keeps the fire burning. To inspire faith with our stanzas, sculptures, and songs. Our works are the kindling, oil, wicks, and wax that feed the Church’s flames. But they’re only effective if we don’t isolate ourselves, steal the glory, or shy away.” Katie Lovett"
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

        // Update detail hero image to match the selected category
        if (categoryImages[targetValue]) {
          catalogDetail.querySelector(".detail-hero-placeholder").src = categoryImages[targetValue];
        }

        catalogDetail.style.display = "flex";
      }
    });
  });
});
