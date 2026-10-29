/**
 * ============================================================================
 * UNIVERSIDAD CIENTÍFICA DEL SUR (UCSUR) — MOTOR DE GRÁFICOS Y ATLAS REGIONAL
 * Archivo: assets/js/charts-engine.js
 * ============================================================================
 */

window.UCSUR_CHARTS_ENGINE = (function () {
  "use strict";

  function renderExportValuesChart() {
    var container = document.getElementById("chart-export-values");
    if (!container || !window.UCSUR_REPORT_DATA) return;

    var items = window.UCSUR_REPORT_DATA.exportValuesChart;
    container.innerHTML = items.map(function (item) {
      return (
        '<div class="bar-row-item">' +
          '<div class="bar-row-header">' +
            '<span class="bar-row-label">' + item.label + '</span>' +
            '<span class="bar-row-value">' + item.valueLabel + '</span>' +
          '</div>' +
          '<div class="bar-track">' +
            '<div class="bar-fill ' + item.colorClass + '" style="width:' + item.percentageWidth + '%;"></div>' +
          '</div>' +
          '<div class="bar-row-note">' +
            '<span>' + item.detail + '</span>' +
            '<span style="font-family:var(--font-mono);font-size:0.72rem;font-weight:700;color:var(--ucsur-navy);">' +
              item.growth + ' · Fuente: ' + item.source +
            '</span>' +
          '</div>' +
        '</div>'
      );
    }).join("");
  }

  function renderClimateShocksChart() {
    var container = document.getElementById("chart-climate-shocks");
    if (!container || !window.UCSUR_REPORT_DATA) return;

    var items = window.UCSUR_REPORT_DATA.climateAndPriceShocks;
    container.innerHTML = items.map(function (item) {
      return (
        '<div class="bar-row-item">' +
          '<div class="bar-row-header">' +
            '<span class="bar-row-label">' + item.label + '</span>' +
            '<span class="bar-row-value">' + item.valueLabel + '</span>' +
          '</div>' +
          '<div class="bar-track">' +
            '<div class="bar-fill ' + item.colorClass + '" style="width:' + item.percentageWidth + '%;"></div>' +
          '</div>' +
          '<div class="bar-row-note">' +
            '<span>' + item.detail + '</span>' +
            '<span style="font-family:var(--font-mono);font-size:0.72rem;font-weight:700;color:var(--ucsur-amber-hover);">' +
              item.badge + ' · ' + item.source +
            '</span>' +
          '</div>' +
        '</div>'
      );
    }).join("");
  }

  function renderTerritoryExplorer() {
    var listEl = document.getElementById("territory-selector-list");
    var detailEl = document.getElementById("territory-detail-card");
    if (!listEl || !detailEl || !window.UCSUR_REPORT_DATA) return;

    var territories = window.UCSUR_REPORT_DATA.territories;

    function selectTerritory(territoryId) {
      var selected = territories.find(function (t) { return t.id === territoryId; }) || territories[0];

      Array.prototype.forEach.call(listEl.querySelectorAll(".territory-btn"), function (btn) {
        btn.classList.toggle("active", btn.getAttribute("data-territory-id") === selected.id);
      });

      var statsHtml = selected.stats.map(function (s) {
        return (
          '<div class="territory-stat-box">' +
            '<span class="territory-stat-label">' + s.label + '</span>' +
            '<span class="territory-stat-val">' + s.value + '</span>' +
          '</div>'
        );
      }).join("");

      detailEl.innerHTML =
        '<div>' +
          '<div class="territory-detail-kicker">' + selected.kicker + '</div>' +
          '<h4 class="territory-detail-title">' + selected.title + '</h4>' +
          '<p class="territory-detail-desc">' + selected.description + '</p>' +
        '</div>' +
        '<div class="territory-stats-grid">' + statsHtml + '</div>';
    }

    listEl.innerHTML = territories.map(function (t, idx) {
      return (
        '<button type="button" class="territory-btn' + (idx === 0 ? " active" : "") + '" data-territory-id="' + t.id + '">' +
          '<div class="territory-btn-top">' +
            '<span class="territory-btn-name">' + t.name + '</span>' +
            '<span class="territory-btn-zone ' + t.zoneClass + '">' + t.zone + '</span>' +
          '</div>' +
          '<div class="territory-btn-sub">' + t.crop + '</div>' +
        '</button>'
      );
    }).join("");

    listEl.addEventListener("click", function (e) {
      var btn = e.target.closest(".territory-btn");
      if (!btn) return;
      selectTerritory(btn.getAttribute("data-territory-id"));
    });

    selectTerritory(territories[0].id);
  }

  function initDataLabTabs() {
    var tabButtons = document.querySelectorAll(".lab-tab-btn");
    var panes = document.querySelectorAll(".chart-pane");
    if (!tabButtons.length) return;

    Array.prototype.forEach.call(tabButtons, function (btn) {
      btn.addEventListener("click", function () {
        var targetPane = btn.getAttribute("data-pane");
        Array.prototype.forEach.call(tabButtons, function (b) {
          b.classList.toggle("active", b === btn);
        });
        Array.prototype.forEach.call(panes, function (pane) {
          pane.classList.toggle("active", pane.id === targetPane);
        });
      });
    });
  }

  function initApaTableHighlighter() {
    var filterBtns = document.querySelectorAll(".col-filter-btn");
    var table = document.getElementById("apa-tabla-1");
    if (!filterBtns.length || !table) return;

    Array.prototype.forEach.call(filterBtns, function (btn) {
      btn.addEventListener("click", function () {
        var colIndex = parseInt(btn.getAttribute("data-col"), 10);
        Array.prototype.forEach.call(filterBtns, function (b) {
          b.classList.toggle("active", b === btn);
        });

        var rows = table.querySelectorAll("tr");
        Array.prototype.forEach.call(rows, function (row) {
          var cells = row.querySelectorAll("th, td");
          Array.prototype.forEach.call(cells, function (cell, idx) {
            cell.classList.remove("col-highlighted", "col-dimmed");
            if (colIndex > 0 && idx > 0) {
              if (idx === colIndex) {
                cell.classList.add("col-highlighted");
              } else {
                cell.classList.add("col-dimmed");
              }
            }
          });
        });
      });
    });
  }

  return {
    init: function () {
      renderExportValuesChart();
      renderClimateShocksChart();
      renderTerritoryExplorer();
      initDataLabTabs();
      initApaTableHighlighter();
    }
  };
})();
