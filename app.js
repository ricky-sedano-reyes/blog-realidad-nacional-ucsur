/**
 * ============================================================================
 * UNIVERSIDAD CIENTÍFICA DEL SUR (UCSUR) — PUNTO DE ENTRADA DE APLICACIÓN
 * Archivo: app.js
 * Curso: Análisis de la Realidad Nacional y Ambiental (Ciclo 2026-2)
 * Docente: Giovanni Paolo Figari Salas · Evaluación Continua 1 (EC1)
 * ----------------------------------------------------------------------------
 * Módulos cargados:
 *  - ./assets/js/data-report.js     (Estadísticas 2023-2026, Atlas Regional, Panel)
 *  - ./assets/js/data-activities.js (Catálogo de ./actividades en clase/)
 *  - ./assets/js/charts-engine.js   (Motor de visualizaciones y Tabla 1 APA)
 *  - ./assets/js/ui-controller.js   (Navegación, Lector de Word, Lightbox HD)
 * ============================================================================
 */

(function () {
  "use strict";

  function bootstrapApplication() {
    if (window.UCSUR_CHARTS_ENGINE && typeof window.UCSUR_CHARTS_ENGINE.init === "function") {
      window.UCSUR_CHARTS_ENGINE.init();
    }
    if (window.UCSUR_UI_CONTROLLER && typeof window.UCSUR_UI_CONTROLLER.init === "function") {
      window.UCSUR_UI_CONTROLLER.init();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootstrapApplication);
  } else {
    bootstrapApplication();
  }
})();
