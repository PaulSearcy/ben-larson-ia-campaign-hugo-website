(function () {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  const dropdown = document.querySelector(".nav-dropdown");
  const dropdownBtn = dropdown?.querySelector("button");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
    });
  }

  if (dropdownBtn) {
    dropdownBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdown.classList.toggle("open");
      dropdownBtn.setAttribute(
        "aria-expanded",
        dropdown.classList.contains("open")
      );
    });
    document.addEventListener("click", () => {
      dropdown.classList.remove("open");
      dropdownBtn.setAttribute("aria-expanded", "false");
    });
  }

  document.querySelectorAll(".newsletter-form").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const msg = form.querySelector(".form-success");
      if (msg) {
        msg.hidden = false;
        form.reset();
      }
    });
  });
})();
