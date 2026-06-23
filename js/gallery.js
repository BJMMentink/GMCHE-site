// js/gallery.js

document.addEventListener('DOMContentLoaded', () => {
  const galleryContainer = document.getElementById('gallery-container');

  // Lightbox Elements
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.querySelector('.lightbox-close');

  // CONFIGURATION
  const imagePath = 'img/';
  const imagePrefix = 'gallery_';
  const imageExtension = '.jpg';

  let currentIndex = 1;
  let captionsData = {};

  // 1. Fetch the optional captions file
  fetch('captions.json')
    .then(response => {
      if (!response.ok) throw new Error("No captions file found.");
      return response.json();
    })
    .then(data => {
      captionsData = data;
    })
    .catch(err => {
      console.log("No optional captions file found. Proceeding without captions.");
    })
    .finally(() => {
      loadNextImage();
    });

  function loadNextImage() {
    const imgTest = new Image();
    const currentSrc = `${imagePath}${imagePrefix}${currentIndex}${imageExtension}`;

    imgTest.onload = function() {
      const wrapper = document.createElement('div');
      wrapper.className = 'gallery-item';

      const imgElement = document.createElement('img');
      imgElement.src = currentSrc;
      imgElement.alt = `Student Artwork ${currentIndex}`;

      // Add click event to open the lightbox
      const currentImgNumber = currentIndex;
      wrapper.addEventListener('click', () => openLightbox(currentSrc, currentImgNumber));

      wrapper.appendChild(imgElement);
      galleryContainer.appendChild(wrapper);

      currentIndex++;
      loadNextImage();
    };

    imgTest.onerror = function() {
      console.log(`Gallery finished loading. Total images: ${currentIndex - 1}`);
    };

    imgTest.src = currentSrc;
  }

  // Lightbox Functions
  function openLightbox(imageSrc, imageNumber) {
    lightbox.style.display = "flex";
    lightboxImg.src = imageSrc;

    // Check if a caption exists for this specific image number
    const specificCaption = captionsData[`gallery_${imageNumber}`];

    if (specificCaption) {
      lightboxCaption.textContent = specificCaption;
      lightboxCaption.style.display = "block"; // Show the transparent box
    } else {
      lightboxCaption.textContent = "";
      lightboxCaption.style.display = "none"; // Hide the box completely
    }
  }

  function closeLightbox() {
    lightbox.style.display = "none";
  }

  // Close when clicking the 'X'
  closeBtn.addEventListener('click', closeLightbox);

  // Close when clicking anywhere outside the image
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Close when pressing the 'Escape' key
  document.addEventListener('keydown', (e) => {
    if (e.key === "Escape" && lightbox.style.display === "flex") {
      closeLightbox();
    }
  });
});
