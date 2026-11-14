/* Airsoftový klub SSPŠ – header, mobile menu, scroll reveal */
(function () {
  "use strict";

  var doc = document.documentElement;
  doc.classList.add("js");

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  /* ---------- Header scroll state ---------- */
  var header = document.querySelector(".site-header");

  function updateHeader() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  /* ---------- One primary button per screen ----------
     The header CTA turns ghost while any other primary button in <main> is in view. */
  var pagePrimaries = document.querySelectorAll("main .btn--primary");

  if (header && pagePrimaries.length && "IntersectionObserver" in window) {
    var visible = new Set();
    var ctaObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) visible.add(entry.target);
        else visible.delete(entry.target);
      });
      header.classList.toggle("is-cta-muted", visible.size > 0);
    });
    pagePrimaries.forEach(function (btn) { ctaObserver.observe(btn); });
  }

  /* ---------- Mobile menu ---------- */
  var toggle = document.querySelector(".menu-toggle");
  var menu = document.getElementById("mobile-menu");

  if (toggle && menu) {
    var focusable = function () {
      return Array.prototype.slice.call(
        document.querySelectorAll(".brand, .menu-toggle, #mobile-menu a")
      );
    };

    var openMenu = function () {
      menu.hidden = false;
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Zavřít menu");
      document.body.classList.add("is-locked");
      header.classList.add("site-header--menu-open");
      var first = menu.querySelector("a");
      if (first) first.focus();
    };

    var closeMenu = function (returnFocus) {
      menu.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Otevřít menu");
      document.body.classList.remove("is-locked");
      header.classList.remove("site-header--menu-open");
      if (returnFocus) toggle.focus();
    };

    toggle.addEventListener("click", function () {
      if (toggle.getAttribute("aria-expanded") === "true") closeMenu(true);
      else openMenu();
    });

    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) closeMenu(false);
    });

    document.addEventListener("keydown", function (e) {
      if (menu.hidden) return;
      if (e.key === "Escape") {
        closeMenu(true);
        return;
      }
      if (e.key === "Tab") {
        var items = focusable();
        var first = items[0];
        var last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    });

    window.matchMedia("(min-width: 1024px)").addEventListener("change", function (mq) {
      if (mq.matches && !menu.hidden) closeMenu(false);
    });
  }

  /* ---------- Scroll reveal ---------- */
  var revealItems = document.querySelectorAll(".reveal");

  if (reduceMotion.matches || !("IntersectionObserver" in window)) {
    revealItems.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.05 });

    revealItems.forEach(function (el) { observer.observe(el); });
  }
})();
