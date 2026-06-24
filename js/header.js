document.addEventListener("DOMContentLoaded", async () => {
  const headerMount = document.getElementById("header");
  if (!headerMount) return;

  try {
    const response = await fetch("components/header.html");
    if (!response.ok) throw new Error(`Header request failed: ${response.status}`);
    headerMount.innerHTML = await response.text();

    const container = headerMount.querySelector(".header-container");
    const toggle = headerMount.querySelector(".menu-toggle");
    const nav = headerMount.querySelector(".nav");
    if (!container || !toggle || !nav) return;

    const closeMenu = () => {
      container.classList.remove("menu-active");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open navigation");
    };

    toggle.addEventListener("click", () => {
      const isOpen = container.classList.toggle("menu-active");
      toggle.setAttribute("aria-expanded", String(isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });

    nav.addEventListener("click", event => {
      if (event.target.closest("a")) closeMenu();
    });

    document.addEventListener("click", event => {
      if (!headerMount.contains(event.target)) closeMenu();
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) closeMenu();
    });
  } catch (error) {
    console.error("Unable to load the site header:", error);
  }
});
