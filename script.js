(function () {
  'use strict';

  var root = document.documentElement;
  var btn = document.getElementById("theme");

  if (!btn) return;

  function updateAriaLabel() {
    var isDark = root.getAttribute("data-theme") === "dark";
    var label = isDark ? "Switch to light theme" : "Switch to dark theme";
    btn.setAttribute("aria-label", label);
    btn.setAttribute("title", label);
  }

  updateAriaLabel();

  btn.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root.classList.add("t");
      setTimeout(function () {
        root.classList.remove("t");
      }, 350);
    }

    root.setAttribute("data-theme", next);

    try {
      localStorage.setItem("theme", next);
    } catch (e) {
    }

    updateAriaLabel();
  });
})();
