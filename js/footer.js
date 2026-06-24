document.addEventListener("DOMContentLoaded", async () => {
  const footerMount = document.getElementById("footer");
  if (!footerMount) return;

  try {
    const response = await fetch("components/footer.html");
    if (!response.ok) throw new Error(`Footer request failed: ${response.status}`);
    footerMount.innerHTML = await response.text();
  } catch (error) {
    console.error("Unable to load the site footer:", error);
  }
});
