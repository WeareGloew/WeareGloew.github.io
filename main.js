
// --------------------------------
// GLOBAL WEBSITE SETTINGS
// --------------------------------

document.addEventListener("DOMContentLoaded", () => {

  // Set footer year
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }


  // --------------------------------
  // CONSISTENT WEBSITE NAVIGATION
  // --------------------------------

  const navigationLinks = [
    { name: "Home", url: "index.html" },
    { name: "About", url: "about.html" },
    { name: "Programme", url: "programme.html" },
    { name: "Join", url: "join.html" },
    { name: "Partners", url: "partners.html" },
    { name: "Sisterhood", url: "sisterhood.html" },
    { name: "Support & Resources", url: "resources.html" },
    { name: "Contact", url: "contact.html" }
  ];

  const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

  const navigationMenus = document.querySelectorAll(
    ".desktop-nav, .mobile-nav"
  );

  navigationMenus.forEach(nav => {

    nav.replaceChildren();

    navigationLinks.forEach(item => {

      const link = document.createElement("a");

      link.href = item.url;
      link.textContent = item.name;

      // Highlight the current page
      if (currentPage === item.url) {
        link.setAttribute("aria-current", "page");
        link.classList.add("active");
      }

      nav.appendChild(link);

    });

  });


  // --------------------------------
  // HAMBURGER MENU
  // --------------------------------

  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobile-nav");

  if (hamburger && mobileNav) {

    hamburger.setAttribute("aria-expanded", "false");

    function closeMenu() {

      hamburger.classList.remove("active");
      mobileNav.classList.remove("open");

      hamburger.setAttribute("aria-expanded", "false");
      hamburger.setAttribute("aria-label", "Open navigation");

    }

    hamburger.addEventListener("click", () => {

      const isOpen = mobileNav.classList.toggle("open");

      hamburger.classList.toggle("active", isOpen);

      hamburger.setAttribute("aria-expanded", String(isOpen));

      hamburger.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
      );

    });

    // Close menu when a link is clicked
    mobileNav.querySelectorAll("a").forEach(link => {

      link.addEventListener("click", closeMenu);

    });

    // Close menu when clicking outside
    document.addEventListener("click", event => {

      if (
        !hamburger.contains(event.target) &&
        !mobileNav.contains(event.target)
      ) {
        closeMenu();
      }

    });

    // Close menu when pressing Escape
    document.addEventListener("keydown", event => {

      if (
        event.key === "Escape" &&
        mobileNav.classList.contains("open")
      ) {
        closeMenu();
        hamburger.focus();
      }

    });

    // Reset mobile menu when switching to desktop
    window.addEventListener("resize", () => {

      if (window.innerWidth > 1100) {
        closeMenu();
      }

    });

  }


  // --------------------------------
  // FADE-IN SCROLL ANIMATIONS
  // --------------------------------

  const animatedElements = document.querySelectorAll(
    ".fade-in, .fade-in-stagger"
  );

  function handleFade() {

    animatedElements.forEach(el => {

      const rect = el.getBoundingClientRect();

      if (rect.top < window.innerHeight - 100) {
        el.classList.add("visible");
      }

    });

  }

  window.addEventListener("scroll", handleFade, {
    passive: true
  });

  window.addEventListener("load", handleFade);

  handleFade();

});
