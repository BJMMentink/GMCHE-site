document.addEventListener('DOMContentLoaded', async () => {
  const galleryContainer = document.getElementById('gallery-container');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

  let galleryData = [];
  let activeIndex = 0;

  // 1. Load the manifest
  try {
    const response = await fetch('gallery.json');
    const data = await response.json();

    // --- ADDED: Verify each image actually exists before adding to galleryData ---
    const verifiedImages = [];
    for (const item of data.images) {
      const exists = await new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = `img/gallery/${item.filename}`;
      });
      if (exists) verifiedImages.push(item);
    }

    galleryData = verifiedImages;
    renderGallery();
  } catch (err) {
    console.error("Error loading gallery.json:", err);
  }

  function renderGallery() {
    galleryData.forEach((item, index) => {
      const wrapper = document.createElement('div');
      wrapper.className = 'gallery-item';
      wrapper.innerHTML = `<img src="img/gallery/${item.filename}" alt="${item.caption || 'Artwork'}">`;
      wrapper.addEventListener('click', () => openLightbox(index));
      galleryContainer.appendChild(wrapper);
    });
  }

  function openLightbox(index) {
    activeIndex = index;
    const item = galleryData[activeIndex];
    lightboxImg.src = `img/gallery/${item.filename}`;

    const caption = item.caption;
    lightboxCaption.textContent = caption || "";
    lightboxCaption.style.display = caption ? "block" : "none";

    lightbox.style.display = "flex";
  }

  // Navigation Logic
  const next = () => {
    activeIndex = (activeIndex + 1) % galleryData.length;
    openLightbox(activeIndex);
  };

  const prev = () => {
    activeIndex = (activeIndex - 1 + galleryData.length) % galleryData.length;
    openLightbox(activeIndex);
  };

  // Event Listeners
  nextBtn.addEventListener('click', (e) => { e.stopPropagation(); next(); });
  prevBtn.addEventListener('click', (e) => { e.stopPropagation(); prev(); });

  document.addEventListener('keydown', (e) => {
    if (lightbox.style.display !== "flex") return;
    if (e.key === "Escape") lightbox.style.display = "none";
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
      lightbox.style.display = "none";
    }
  });
});
// --- Back to Top Button Logic ---
const backToTopBtn = document.getElementById("backToTop");

window.onscroll = () => {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
