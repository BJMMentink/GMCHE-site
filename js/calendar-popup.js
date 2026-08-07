document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("calendar-popup-overlay");
  if (!overlay) return;

  const programs = {
    foundations_a: { name: "Foundations A", time: "11:30 AM-3:00 PM" },
    foundations_b: { name: "Foundations B", time: "12:30 PM-4:00 PM" },
    foundations_c: { name: "Foundations C", time: "9:00 AM-12:30 PM" },
    little_lambs_a: { name: "Little Lambs A", time: "9:00 AM-11:15 AM" },
    little_lambs_b: { name: "Little Lambs B", time: "9:00 AM-11:15 AM" },
    barn_owls: { name: "Barn Owls", time: "9:00 AM-12:30 PM" },
    sacred_art: { name: "Sacred Art", time: "9:00 AM-12:30 PM" },
    art_cafe: { name: "Art Café", time: "9:30 AM-2:30 PM" }
  };

  const events = {
    "2026-08-31": ["foundations_a"],
    "2026-09-01": ["little_lambs_a"],
    "2026-09-02": ["foundations_b"],
    "2026-09-03": ["barn_owls"],
    "2026-09-04": ["foundations_c"],
    "2026-09-14": ["foundations_a"],
    "2026-09-15": ["little_lambs_b"],
    "2026-09-16": ["foundations_b"],
    "2026-09-17": ["sacred_art"],
    "2026-09-18": ["foundations_c"],
    "2026-09-28": ["foundations_a"],
    "2026-09-29": ["art_cafe"],
    "2026-09-30": ["foundations_b"],
    "2026-10-01": ["barn_owls"],
    "2026-10-02": ["foundations_c"],
    "2026-10-06": ["little_lambs_a"],
    "2026-10-09": ["art_cafe"],
    "2026-10-12": ["foundations_a"],
    "2026-10-13": ["little_lambs_b"],
    "2026-10-14": ["foundations_b"],
    "2026-10-15": ["sacred_art"],
    "2026-10-16": ["foundations_c"],
    "2026-11-02": ["foundations_a"],
    "2026-11-03": ["little_lambs_a"],
    "2026-11-04": ["foundations_b"],
    "2026-11-05": ["barn_owls"],
    "2026-11-06": ["foundations_c"],
    "2026-11-11": ["art_cafe"],
    "2026-11-16": ["foundations_a"],
    "2026-11-17": ["little_lambs_b"],
    "2026-11-18": ["foundations_b"],
    "2026-11-19": ["sacred_art"],
    "2026-11-20": ["foundations_c"],
    "2026-11-30": ["foundations_a"],
    "2026-12-01": ["little_lambs_a"],
    "2026-12-02": ["foundations_b"],
    "2026-12-03": ["barn_owls"],
    "2026-12-04": ["foundations_c"],
    "2026-12-07": ["art_cafe"],
    "2026-12-14": ["foundations_a"],
    "2026-12-15": ["little_lambs_b"],
    "2026-12-16": ["foundations_b"],
    "2026-12-17": ["sacred_art"],
    "2026-12-18": ["foundations_c"]
  };

  const semester = [
    { label: "August/September 2026", year: 2026, month: 8, mergedFrom: new Date(2026, 7, 30) },
    { label: "October 2026", year: 2026, month: 9 },
    { label: "November 2026", year: 2026, month: 10 },
    { label: "December 2026", year: 2026, month: 11 }
  ];

  const grid = document.getElementById("calendar-popup-grid");
  const monthLabel = document.getElementById("calendar-popup-month");
  const prevBtn = document.getElementById("calendar-popup-prev");
  const nextBtn = document.getElementById("calendar-popup-next");
  const closeBtn = document.getElementById("calendar-popup-close");
  const openBtn = document.getElementById("open-calendar-popup");
  const legendBox = document.getElementById("calendar-popup-legend");

  const weekdayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let index = 0;

  const pad = n => String(n).padStart(2, "0");

  function renderLegend() {
    const items = [];
    Object.keys(programs).forEach(key => {
      items.push(
        '<span class="calendar-popup-legend-item">' +
        '<span class="calendar-popup-legend-swatch chip-' + key + '"></span>' +
        programs[key].name +
        "</span>"
      );
    });
    items.push(
      '<span class="calendar-popup-legend-item">' +
      '<span class="calendar-popup-legend-swatch" style="background-color:#c7c7c7;"></span>' +
      "Lamp-Lighters</span>"
    );
    legendBox.innerHTML = items.join("");
  }

  function renderMonth() {
    const entry = semester[index];
    const { label, year, month } = entry;
    monthLabel.textContent = label;
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === semester.length - 1;

    const cells = [];
    weekdayLabels.forEach(w => cells.push('<div class="calendar-popup-dow">' + w + "</div>"));

    const monthShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const startDate = entry.mergedFrom ? new Date(entry.mergedFrom) : new Date(year, month, 1);
    const endDate = new Date(year, month + 1, 0);

    for (let i = 0; i < startDate.getDay(); i++) {
      cells.push('<div class="calendar-popup-day empty"></div>');
    }

    const cursor = new Date(startDate);
    let dayCount = 0;
    while (cursor <= endDate) {
      const key = cursor.getFullYear() + "-" + pad(cursor.getMonth() + 1) + "-" + pad(cursor.getDate());
      const dayEvents = events[key] || [];
      const otherMonth = cursor.getMonth() !== month;
      let chips = "";
      dayEvents.forEach(pKey => {
        const p = programs[pKey];
        const chipTitle = p.time ? p.name + " " + p.time : p.name;
        chips +=
          '<span class="calendar-popup-chip chip-' + pKey + '" title="' + chipTitle + '">' +
          '<span class="chip-name">' + p.name + "</span>" +
          (p.time ? '<span class="chip-time">' + p.time + "</span>" : "") +
          "</span>";
      });
      const dayLabel = otherMonth ? monthShort[cursor.getMonth()] + " " + cursor.getDate() : String(cursor.getDate());
      cells.push(
        '<div class="calendar-popup-day' + (otherMonth ? " other-month" : "") + '">' +
        '<span class="calendar-popup-day-num">' + dayLabel + "</span>" +
        chips +
        "</div>"
      );
      dayCount++;
      cursor.setDate(cursor.getDate() + 1);
    }

    const totalDayCells = startDate.getDay() + dayCount;
    const trailing = (7 - (totalDayCells % 7)) % 7;
    for (let i = 0; i < trailing; i++) {
      cells.push('<div class="calendar-popup-day empty"></div>');
    }

    grid.innerHTML = cells.join("");
  }

  function openPopup() {
    overlay.hidden = false;
    document.body.style.overflow = "hidden";
    closeBtn.focus();
  }

  function closePopup() {
    overlay.hidden = true;
    document.body.style.overflow = "";
    openBtn.focus();
  }

  renderLegend();
  renderMonth();

  openBtn.addEventListener("click", openPopup);
  closeBtn.addEventListener("click", closePopup);

  prevBtn.addEventListener("click", () => {
    if (index > 0) {
      index--;
      renderMonth();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (index < semester.length - 1) {
      index++;
      renderMonth();
    }
  });

  overlay.addEventListener("click", event => {
    if (event.target === overlay) closePopup();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !overlay.hidden) closePopup();
  });
});
