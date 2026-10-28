
(function () {
  function initHomeScroll() {
    const regions = Array.from(
      document.querySelectorAll("[data-home-scroll]")
    );

    if (!regions.length) return;

    const phone = window.matchMedia(
      "(max-width: 575.98px)"
    );

    const tablet = window.matchMedia(
      "(max-width: 991.98px)"
    );

    function getScrollAfter(region) {
      let value;

      if (phone.matches) {
        value = region.dataset.scrollPhone;
      } else if (tablet.matches) {
        value = region.dataset.scrollTablet;
      } else {
        value = region.dataset.scrollDesktop;
      }

      return parseInt(value, 10);
    }

    function updateRegion(region) {
      const selector = region.dataset.homeScrollItem;
      const items = Array.from(
        region.querySelectorAll(selector)
      );

      const count = getScrollAfter(region);

      // No scrolling if disabled by count or
      // if everything already fits.
      if (
        !Number.isFinite(count) ||
        count < 1 ||
        items.length <= count
      ) {
        region.style.removeProperty("max-height");
        region.classList.remove("is-scrollable");
        region.removeAttribute("tabindex");
        region.scrollTop = 0;
        return;
      }

      // Find the lowest bottom edge among the
      // first N items. This also works for grids.
      const visibleItems = items.slice(0, count);

      const regionRect =
        region.getBoundingClientRect();

      const bottom = Math.max(
        ...visibleItems.map(
          item => item.getBoundingClientRect().bottom
        )
      );

      const paddingBottom =
        parseFloat(
          window.getComputedStyle(region).paddingBottom
        ) || 0;

      // Account for any existing scroll position.
      const height = Math.ceil(
        bottom -
        regionRect.top +
        region.scrollTop +
        paddingBottom +
        2
      );

      region.style.maxHeight = `${height}px`;

      // Enable keyboard access only when
      // content actually overflows.
      const needsScroll =
        region.scrollHeight > region.clientHeight + 1;

      region.classList.toggle(
        "is-scrollable",
        needsScroll
      );

      if (needsScroll) {
        region.setAttribute("tabindex", "0");
      } else {
        region.removeAttribute("tabindex");
      }
    }

    let scheduled = false;

    function scheduleUpdate() {
      if (scheduled) return;

      scheduled = true;

      window.requestAnimationFrame(() => {
        scheduled = false;

        regions.forEach(updateRegion);
      });
    }

    // React when item dimensions change.
    if ("ResizeObserver" in window) {
      const observer = new ResizeObserver(
        scheduleUpdate
      );

      regions.forEach(region => {
        const selector =
          region.dataset.homeScrollItem;

        region.querySelectorAll(selector).forEach(
          item => observer.observe(item)
        );

        const content = region.querySelector(
          ".pinned-home-grid, table"
        );

        if (content) {
          observer.observe(content);
        }
      });
    }

    // React to viewport size changes.
    window.addEventListener(
      "resize",
      scheduleUpdate
    );

    // Recalculate after images and other
    // resources finish loading.
    window.addEventListener(
      "load",
      scheduleUpdate
    );

    // Recalculate when custom fonts finish loading.
    if (document.fonts) {
      document.fonts.ready.then(scheduleUpdate);
    }

    regions.forEach(region => {
      region.querySelectorAll("img").forEach(img => {
        img.addEventListener(
          "load",
          scheduleUpdate
        );
      });
    });

    scheduleUpdate();
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      initHomeScroll
    );
  } else {
    initHomeScroll();
  }
})();
