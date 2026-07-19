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

  document.querySelectorAll(".contact-form").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const msg = form.querySelector(".form-success");
      if (msg) {
        msg.hidden = false;
        form.reset();
      }
    });
  });

  const zoomImages = document.querySelectorAll("[data-zoomable]");
  if (zoomImages.length) {
    let lightbox = null;

    function closeLightbox() {
      if (!lightbox) return;
      lightbox.classList.remove("open");
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeydown);
    }

    function onKeydown(e) {
      if (e.key === "Escape") closeLightbox();
    }

    function openLightbox(src, alt) {
      if (!lightbox) {
        lightbox = document.createElement("div");
        lightbox.className = "lightbox";
        lightbox.innerHTML =
          '<button class="lightbox__close" type="button" aria-label="Close">&times;</button>' +
          '<img class="lightbox__img" alt="" />';
        lightbox.addEventListener("click", (e) => {
          if (e.target === lightbox || e.target.closest(".lightbox__close")) {
            closeLightbox();
          }
        });
        document.body.appendChild(lightbox);
      }
      const img = lightbox.querySelector(".lightbox__img");
      img.src = src;
      img.alt = alt || "";
      lightbox.classList.add("open");
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", onKeydown);
    }

    zoomImages.forEach((img) => {
      img.setAttribute("role", "button");
      img.setAttribute("tabindex", "0");
      img.addEventListener("click", () => openLightbox(img.src, img.alt));
      img.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openLightbox(img.src, img.alt);
        }
      });
    });
  }

  const toc = document.querySelector(".platform-toc");
  if (toc) {
    const sections = document.querySelectorAll(".platform-accordion[id]");
    const links = toc.querySelectorAll("#TableOfContents a");

    function openAccordion(id) {
      const section = document.getElementById(id);
      if (section?.classList.contains("platform-accordion")) {
        section.open = true;
      }
    }

    links.forEach((link) => {
      link.addEventListener("click", () => {
        const id = link.getAttribute("href")?.slice(1);
        if (id) openAccordion(id);
      });
    });

    if (location.hash) {
      openAccordion(location.hash.slice(1));
    }

    if (sections.length && links.length) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              links.forEach((a) => a.classList.remove("active"));
              const match = toc.querySelector(
                `a[href="#${entry.target.id}"]`
              );
              if (match) {
                match.classList.add("active");
                match.scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                  inline: "nearest",
                });
              }
            }
          });
        },
        { rootMargin: "-140px 0px -60% 0px", threshold: 0 }
      );
      sections.forEach((section) => observer.observe(section));
    }
  }
})();
