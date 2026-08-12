// src/js/components/Banner.js
function initBanner() {
  document.querySelectorAll(".sandbox-banner__dismiss").forEach((button) => {
    button.addEventListener("click", () => {
      const banner = button.closest(".sandbox-banner");
      if (banner) banner.hidden = true;
    });
  });
}

// src/js/components/Composite.js
function initComposite() {
  document.querySelectorAll("[data-sandbox-composite]").forEach((el) => {
    el.dataset.sandboxHydrated = "true";
  });
}

// src/global.vbt.js
var boot = () => {
  initBanner();
  initComposite();
};
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot);
} else {
  boot();
}
