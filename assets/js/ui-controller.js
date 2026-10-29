/**
 * ============================================================================
 * UNIVERSIDAD CIENTÍFICA DEL SUR (UCSUR) — CONTROLADOR DE INTERFAZ Y VISORES
 * Archivo: assets/js/ui-controller.js
 * ============================================================================
 */

window.UCSUR_UI_CONTROLLER = (function () {
  "use strict";

  var currentActivityFilter = "all";
  var currentActivityQuery = "";
  var currentLightboxIndex = -1;
  var currentZoomScale = 1;

  /* --------------------------------------------------------------------------
     0. PANTALLA DE CARGA Y AJUSTE EXACTO DE ALTURA DE PORTADA (100% PANTALLA)
     -------------------------------------------------------------------------- */
  function syncHeroViewportHeight() {
    var topbar = document.querySelector(".ucsur-topbar");
    var header = document.querySelector(".site-header");
    var container = document.querySelector(".hero-cover-container");
    var viewportH = window.innerHeight || document.documentElement.clientHeight || 768;
    var topbarH = topbar ? topbar.offsetHeight : 0;
    var headerH = header ? header.offsetHeight : 0;
    var exactHeroH = Math.max(320, viewportH - topbarH - headerH);

    document.documentElement.style.setProperty("--hero-exact-height", exactHeroH + "px");
    document.documentElement.style.setProperty("--hero-content-scale", "1");

    if (container) {
      var naturalH = container.scrollHeight;
      if (naturalH > exactHeroH - 12 && naturalH > 0) {
        var scale = Math.max(0.78, (exactHeroH - 16) / naturalH);
        document.documentElement.style.setProperty("--hero-content-scale", scale.toFixed(3));
      }
    }
  }

  function initPageLoader() {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    syncHeroViewportHeight();
    window.addEventListener("resize", syncHeroViewportHeight, { passive: true });
    window.addEventListener("orientationchange", function () {
      setTimeout(syncHeroViewportHeight, 120);
    }, { passive: true });

    /* Garantizar que al abrir o recargar la página inicie exactamente arriba en la portada */
    if (window.location.hash !== "#actividades-en-clase" && window.location.hash !== "#actividades") {
      if (history.replaceState) {
        history.replaceState(null, "", window.location.pathname + window.location.search);
      }
      window.scrollTo(0, 0);
    }

    var loader = document.getElementById("page-loader");
    if (!loader) return;

    setTimeout(function () {
      syncHeroViewportHeight();
      if (window.location.hash !== "#actividades-en-clase" && window.location.hash !== "#actividades") {
        window.scrollTo(0, 0);
      }
      loader.classList.add("loaded");
    }, 2350);
  }

  /* --------------------------------------------------------------------------
     1. NAVEGACIÓN ENTRE «BLOG» Y «ACTIVIDADES EN CLASE»
     -------------------------------------------------------------------------- */
  function switchMainView(viewName, targetSectionId) {
    var viewBlog = document.getElementById("view-blog");
    var viewActividades = document.getElementById("view-actividades");
    if (!viewBlog || !viewActividades) return;

    var isAct = viewName === "actividades";
    viewBlog.classList.toggle("active", !isAct);
    viewActividades.classList.toggle("active", isAct);

    var navBtns = document.querySelectorAll("[data-switch-view]");
    Array.prototype.forEach.call(navBtns, function (btn) {
      var btnView = btn.getAttribute("data-switch-view");
      var btnSec = btn.getAttribute("data-scroll-to");
      if (btn.classList.contains("nav-tab-btn")) {
        if (isAct) {
          btn.classList.toggle("active", btnView === "actividades");
        } else {
          if (targetSectionId && btnSec === targetSectionId) {
            btn.classList.add("active");
          } else if (!targetSectionId && btnView === "blog" && !btnSec) {
            btn.classList.add("active");
          } else {
            btn.classList.remove("active");
          }
        }
      }
    });

    if (history.replaceState) {
      var cleanBase = window.location.pathname + window.location.search;
      var newUrl = isAct ? cleanBase + "#actividades-en-clase" : (targetSectionId ? cleanBase + "#" + targetSectionId : cleanBase);
      history.replaceState(null, "", newUrl);
    }

    syncHeroViewportHeight();

    if (targetSectionId && !isAct) {
      var targetEl = document.getElementById(targetSectionId);
      if (targetEl) {
        setTimeout(function () {
          targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 40);
        return;
      }
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function initViewNavigation() {
    document.addEventListener("click", function (e) {
      var trigger = e.target.closest("[data-switch-view]");
      if (!trigger) return;
      e.preventDefault();
      var targetView = trigger.getAttribute("data-switch-view");
      var scrollTarget = trigger.getAttribute("data-scroll-to");
      switchMainView(targetView, scrollTarget);
    });

    var hash = window.location.hash;
    if (hash === "#actividades-en-clase" || hash === "#actividades" || document.body.getAttribute("data-default-view") === "actividades") {
      switchMainView("actividades");
    }
  }

  /* --------------------------------------------------------------------------
     2. BARRA DE PROGRESO, SCROLL-SPY Y BOTÓN FLOTANTE DE SUBIR (↑)
     -------------------------------------------------------------------------- */
  function initScrollAndTocSpy() {
    var progressBar = document.getElementById("reading-progress-bar");
    var tocPct = document.getElementById("toc-progress-pct");
    var scrollTopBtn = document.getElementById("btn-scroll-top");
    var tocLinks = document.querySelectorAll(".toc-link");
    var sections = document.querySelectorAll(".manuscript-section, .subsection-article, .team-closing-section");

    function onScroll() {
      var scrollTop = window.scrollY || document.documentElement.scrollTop;
      var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var pct = docHeight > 0 ? Math.min(100, Math.max(0, Math.round((scrollTop / docHeight) * 100))) : 0;

      if (progressBar) progressBar.style.width = pct + "%";
      if (tocPct) tocPct.textContent = pct + "% leído";

      if (scrollTopBtn) {
        scrollTopBtn.classList.toggle("visible", scrollTop > 320);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (scrollTopBtn) {
      scrollTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    if ("IntersectionObserver" in window && sections.length && tocLinks.length) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var id = entry.target.getAttribute("id");
            if (!id) return;
            Array.prototype.forEach.call(tocLinks, function (link) {
              link.classList.toggle("active", link.getAttribute("href") === "#" + id);
            });
          }
        });
      }, { rootMargin: "-14% 0px -74% 0px", threshold: 0 });

      Array.prototype.forEach.call(sections, function (sec) {
        if (sec.id) observer.observe(sec);
      });
    }
  }

  /* --------------------------------------------------------------------------
     3. HERRAMIENTAS DE LECTURA (IMPRESIÓN)
     -------------------------------------------------------------------------- */
  function initReadingTools() {
    var btnPrint = document.getElementById("btn-print-report");

    if (btnPrint) {
      btnPrint.addEventListener("click", function () {
        window.print();
      });
    }
  }

  /* --------------------------------------------------------------------------
     4. FILTRO DE REFERENCIAS APA 7 Y BOTÓN DE COPIADO DE CITA
     -------------------------------------------------------------------------- */
  function showToast(message) {
    var toast = document.getElementById("editorial-toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("visible");
    setTimeout(function () {
      toast.classList.remove("visible");
    }, 2600);
  }

  function initReferencesTools() {
    var searchInput = document.getElementById("ref-search-input");
    var refCards = document.querySelectorAll(".apa-ref-card");
    var refCountLabel = document.getElementById("ref-count-label");

    Array.prototype.forEach.call(refCards, function (card) {
      var rawCitation = card.textContent.trim();
      var copyBtn = document.createElement("button");
      copyBtn.type = "button";
      copyBtn.className = "copy-ref-btn";
      copyBtn.textContent = "Copiar APA";
      copyBtn.addEventListener("click", function () {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(rawCitation).then(function () {
            showToast("Cita APA 7 copiada al portapapeles");
          });
        } else {
          showToast("Cita seleccionada: " + rawCitation.substring(0, 48) + "...");
        }
      });
      card.appendChild(copyBtn);
    });

    if (searchInput) {
      searchInput.addEventListener("input", function () {
        var q = searchInput.value.trim().toLowerCase();
        var visibleCount = 0;
        Array.prototype.forEach.call(refCards, function (card) {
          var match = !q || card.textContent.toLowerCase().indexOf(q) !== -1;
          card.style.display = match ? "" : "none";
          if (match) visibleCount++;
        });
        if (refCountLabel) {
          refCountLabel.textContent = visibleCount + " de 22 fuentes APA 7";
        }
      });
    }
  }

  /* --------------------------------------------------------------------------
     5. BUSCADOR GLOBAL INSTANTÁNEO (CTRL+K)
     -------------------------------------------------------------------------- */
  function initGlobalSearchModal() {
    var modal = document.getElementById("search-modal-backdrop");
    var openBtn = document.getElementById("btn-open-search");
    var closeBtn = document.getElementById("btn-close-search");
    var input = document.getElementById("global-search-input");
    var resultsEl = document.getElementById("search-results-list");
    if (!modal || !input || !resultsEl || !window.UCSUR_REPORT_DATA) return;

    function renderResults(query) {
      var q = (query || "").trim().toLowerCase();
      var items = window.UCSUR_REPORT_DATA.searchIndex.filter(function (item) {
        if (!q) return true;
        return (
          item.title.toLowerCase().indexOf(q) !== -1 ||
          item.sec.toLowerCase().indexOf(q) !== -1 ||
          item.keywords.toLowerCase().indexOf(q) !== -1
        );
      });

      var actMatches = (window.UCSUR_ACTIVITIES_DATA || []).filter(function (act) {
        if (!q) return false;
        return (
          act.title.toLowerCase().indexOf(q) !== -1 ||
          act.summary.toLowerCase().indexOf(q) !== -1 ||
          act.tags.join(" ").toLowerCase().indexOf(q) !== -1
        );
      });

      var html = items.map(function (item) {
        return (
          '<button type="button" class="search-result-item" data-jump-sec="' + item.targetId + '">' +
            '<div class="search-result-sec">' + item.sec + ' · Informe Académico</div>' +
            '<div class="search-result-title">' + item.title + '</div>' +
          '</button>'
        );
      }).join("");

      html += actMatches.map(function (act) {
        return (
          '<button type="button" class="search-result-item" data-jump-act="' + act.id + '">' +
            '<div class="search-result-sec">' + act.weekLabel + ' · Actividades en clase</div>' +
            '<div class="search-result-title">' + act.title + '</div>' +
            '<div class="search-result-snippet">' + act.academicCategory + '</div>' +
          '</button>'
        );
      }).join("");

      resultsEl.innerHTML = html || '<div style="padding:1rem;color:var(--ink-600);font-size:0.86rem;">No se encontraron coincidencias para "' + query + '".</div>';
    }

    function openSearch() {
      modal.classList.add("open");
      renderResults(input.value);
      setTimeout(function () { input.focus(); }, 50);
    }

    function closeSearch() {
      modal.classList.remove("open");
    }

    if (openBtn) openBtn.addEventListener("click", openSearch);
    if (closeBtn) closeBtn.addEventListener("click", closeSearch);

    modal.addEventListener("click", function (e) {
      if (e.target === modal) closeSearch();
    });

    input.addEventListener("input", function () {
      renderResults(input.value);
    });

    resultsEl.addEventListener("click", function (e) {
      var secBtn = e.target.closest("[data-jump-sec]");
      var actBtn = e.target.closest("[data-jump-act]");
      if (secBtn) {
        closeSearch();
        switchMainView("blog", secBtn.getAttribute("data-jump-sec"));
      } else if (actBtn) {
        closeSearch();
        switchMainView("actividades");
      }
    });

    document.addEventListener("keydown", function (e) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openSearch();
      }
    });
  }

  /* --------------------------------------------------------------------------
     6. GALERÍA Y VISORES DE «ACTIVIDADES EN CLASE»
     -------------------------------------------------------------------------- */
  function getFilteredActivities() {
    var list = window.UCSUR_ACTIVITIES_DATA || [];
    return list.filter(function (item) {
      var passFilter =
        currentActivityFilter === "all" ||
        item.week === currentActivityFilter ||
        item.format === currentActivityFilter;

      var q = currentActivityQuery.trim().toLowerCase();
      var passSearch =
        !q ||
        item.title.toLowerCase().indexOf(q) !== -1 ||
        item.academicCategory.toLowerCase().indexOf(q) !== -1 ||
        item.summary.toLowerCase().indexOf(q) !== -1 ||
        item.tags.join(" ").toLowerCase().indexOf(q) !== -1;

      return passFilter && passSearch;
    });
  }

  function renderActivitiesGallery() {
    var grid = document.getElementById("activities-cards-grid");
    var counterEl = document.getElementById("activities-results-count");
    if (!grid) return;

    var items = getFilteredActivities();
    if (counterEl) {
      counterEl.textContent = "Mostrando " + items.length + " de " + (window.UCSUR_ACTIVITIES_DATA || []).length + " trabajos académicos";
    }

    if (!items.length) {
      grid.innerHTML =
        '<div style="grid-column:1/-1;background:var(--bg-white);border:1px solid var(--line-strong);padding:2.5rem;text-align:center;">' +
          '<h3 style="font-family:var(--font-serif);color:var(--ucsur-navy);margin-bottom:0.5rem;">Sin resultados para el filtro seleccionado</h3>' +
          '<p style="color:var(--ink-600);font-size:0.9rem;">Prueba seleccionando otra semana o borrando el término de búsqueda.</p>' +
        '</div>';
      return;
    }

    grid.innerHTML = items.map(function (item) {
      var isImage = item.format === "image";
      var actionLabel = isImage ? "Ampliar Infografía" : "Leer Trabajo Completo";

      var tagsHtml = item.tags.map(function (t) {
        return '<span class="evidence-topic-tag">' + t + '</span>';
      }).join("");

      return (
        '<article class="evidence-card ' + (isImage ? "evidence-image" : "evidence-docx") + '">' +
          '<div class="evidence-preview-box" data-open-evidence="' + item.id + '">' +
            '<div class="evidence-top-badges">' +
              '<span class="week-badge">' + item.weekLabel + '</span>' +
              '<span class="format-badge ' + (isImage ? "" : "badge-docx") + '">' + item.formatBadge + ' · ' + item.fileSize + '</span>' +
            '</div>' +
            '<img class="evidence-preview-img" src="' + item.previewThumbnail + '" alt="' + item.title + '" loading="lazy">' +
            '<div class="evidence-hover-overlay">' +
              '<span class="overlay-action-pill">' + actionLabel + '</span>' +
            '</div>' +
          '</div>' +
          '<div class="evidence-card-body">' +
            '<h3 class="evidence-card-title">' + item.title + '</h3>' +
            '<div class="evidence-filename">' + item.academicCategory + '</div>' +
            '<p class="evidence-card-desc">' + item.summary + '</p>' +
            '<div class="evidence-tags-row">' + tagsHtml + '</div>' +
            '<div class="evidence-card-actions">' +
              '<button type="button" class="btn-card-primary" data-open-evidence="' + item.id + '">' +
                (isImage ? "Ampliar Imagen" : "Abrir Lector Académico") +
              '</button>' +
              '<a class="btn-card-secondary" href="' + item.relativePath + '" download="' + item.fileName + '">' +
                'Descargar' +
              '</a>' +
            '</div>' +
          '</div>' +
        '</article>'
      );
    }).join("");
  }

  function openEvidenceById(itemId) {
    var allItems = window.UCSUR_ACTIVITIES_DATA || [];
    var item = allItems.find(function (x) { return x.id === itemId; });
    if (!item) return;

    if (item.format === "image") {
      var imageItems = allItems.filter(function (x) { return x.format === "image"; });
      currentLightboxIndex = imageItems.findIndex(function (x) { return x.id === item.id; });
      openImageLightbox(imageItems[currentLightboxIndex]);
    } else {
      openDocReaderModal(item);
    }
  }

  function openImageLightbox(item) {
    var modal = document.getElementById("lightbox-modal-backdrop");
    var img = document.getElementById("lightbox-target-img");
    var title = document.getElementById("lightbox-modal-title");
    var kicker = document.getElementById("lightbox-modal-kicker");
    var downloadLink = document.getElementById("lightbox-download-btn");
    var openTabLink = document.getElementById("lightbox-newtab-btn");
    if (!modal || !img) return;

    currentZoomScale = 1;
    img.style.transform = "scale(1)";
    img.src = item.relativePath;
    img.alt = item.title;
    if (title) title.textContent = item.title;
    if (kicker) kicker.textContent = item.academicCategory;
    if (downloadLink) {
      downloadLink.href = item.relativePath;
      downloadLink.setAttribute("download", item.fileName);
    }
    if (openTabLink) {
      openTabLink.href = item.relativePath;
    }

    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function openDocReaderModal(item) {
    var modal = document.getElementById("doc-modal-backdrop");
    var title = document.getElementById("doc-modal-title");
    var kicker = document.getElementById("doc-modal-kicker");
    var viewport = document.getElementById("doc-modal-viewport");
    var downloadLink = document.getElementById("doc-download-btn");
    if (!modal || !viewport) return;

    if (title) title.textContent = item.title;
    if (kicker) kicker.textContent = item.academicCategory;
    viewport.innerHTML = item.docContentHtml || "";
    if (downloadLink) {
      downloadLink.href = item.relativePath;
      downloadLink.setAttribute("download", item.fileName);
    }

    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeAllModals() {
    var modals = document.querySelectorAll(".modal-backdrop");
    Array.prototype.forEach.call(modals, function (m) {
      m.classList.remove("open");
    });
    document.body.style.overflow = "";
  }

  function initActivitiesAndModals() {
    renderActivitiesGallery();

    var filterBtns = document.querySelectorAll(".filter-pill-btn");
    Array.prototype.forEach.call(filterBtns, function (btn) {
      btn.addEventListener("click", function () {
        currentActivityFilter = btn.getAttribute("data-act-filter") || "all";
        Array.prototype.forEach.call(filterBtns, function (b) {
          b.classList.toggle("active", b === btn);
        });
        renderActivitiesGallery();
      });
    });

    var actSearch = document.getElementById("act-search-input");
    if (actSearch) {
      actSearch.addEventListener("input", function () {
        currentActivityQuery = actSearch.value || "";
        renderActivitiesGallery();
      });
    }

    document.addEventListener("click", function (e) {
      var openTrigger = e.target.closest("[data-open-evidence]");
      if (openTrigger) {
        e.preventDefault();
        openEvidenceById(openTrigger.getAttribute("data-open-evidence"));
      }
    });

    var btnZoomIn = document.getElementById("lightbox-zoom-in");
    var btnZoomOut = document.getElementById("lightbox-zoom-out");
    var btnPrev = document.getElementById("lightbox-prev-btn");
    var btnNext = document.getElementById("lightbox-next-btn");
    var lightboxImg = document.getElementById("lightbox-target-img");

    if (btnZoomIn && lightboxImg) {
      btnZoomIn.addEventListener("click", function () {
        currentZoomScale = Math.min(2.4, currentZoomScale + 0.35);
        lightboxImg.style.transform = "scale(" + currentZoomScale.toFixed(2) + ")";
      });
    }

    if (btnZoomOut && lightboxImg) {
      btnZoomOut.addEventListener("click", function () {
        currentZoomScale = Math.max(0.7, currentZoomScale - 0.35);
        lightboxImg.style.transform = "scale(" + currentZoomScale.toFixed(2) + ")";
      });
    }

    function stepLightbox(delta) {
      var imageItems = (window.UCSUR_ACTIVITIES_DATA || []).filter(function (x) { return x.format === "image"; });
      if (!imageItems.length) return;
      currentLightboxIndex = (currentLightboxIndex + delta + imageItems.length) % imageItems.length;
      openImageLightbox(imageItems[currentLightboxIndex]);
    }

    if (btnPrev) btnPrev.addEventListener("click", function () { stepLightbox(-1); });
    if (btnNext) btnNext.addEventListener("click", function () { stepLightbox(1); });

    var closeBtns = document.querySelectorAll("[data-close-modal]");
    Array.prototype.forEach.call(closeBtns, function (btn) {
      btn.addEventListener("click", closeAllModals);
    });

    var backdrops = document.querySelectorAll(".modal-backdrop");
    Array.prototype.forEach.call(backdrops, function (backdrop) {
      backdrop.addEventListener("click", function (e) {
        if (e.target === backdrop) closeAllModals();
      });
    });

    document.addEventListener("keydown", function (e) {
      var lightboxModal = document.getElementById("lightbox-modal-backdrop");
      var isLightboxOpen = lightboxModal && lightboxModal.classList.contains("open");
      if (e.key === "Escape") {
        closeAllModals();
      } else if (isLightboxOpen && e.key === "ArrowRight") {
        stepLightbox(1);
      } else if (isLightboxOpen && e.key === "ArrowLeft") {
        stepLightbox(-1);
      }
    });
  }

  return {
    init: function () {
      initPageLoader();
      initViewNavigation();
      initScrollAndTocSpy();
      initReadingTools();
      initReferencesTools();
      initGlobalSearchModal();
      initActivitiesAndModals();
    },
    switchMainView: switchMainView
  };
})();
