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
