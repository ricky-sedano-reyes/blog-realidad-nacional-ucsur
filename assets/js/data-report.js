/**
 * ============================================================================
 * UNIVERSIDAD CIENTÍFICA DEL SUR (UCSUR) — DATOS DEL INFORME EC2
 * Archivo: assets/js/data-report.js
 * Fuente: EC2.docx (Grupo 1 - Evaluación Continua 2)
 * Asignatura: Análisis de la Realidad Nacional y Ambiental (Ciclo 2026-2)
 * ============================================================================
 */

window.UCSUR_REPORT_DATA = {
  metadata: {
    title: "PROBLEMÁTICA DE LA AGROEXPORTACIÓN EN EL PERÚ: IMPACTO EN EL ÁMBITO SOCIOAMBIENTAL",
    university: "Universidad Científica del Sur",
    course: "Análisis de la Realidad Nacional y Ambiental",
    cycle: "Ciclo 2026-2",
    evaluation: "Evaluación Continua 2 (EC2)",
    professor: "Giovanni Paolo Figari Salas",
    group: "Grupo 1",
    date: "Noviembre 2026",
    blogUrl: "https://blog-realidad-nacional-ucsur.netlify.app/",
    docxPath: "./EC2.docx"
  },

  /* Métricas y Datos Clave del Informe EC2 */
  kpiStats: [
    {
      id: "stat-agroideas",
      label: "Inversión en Planes de Negocio (AGROIDEAS)",
      value: "S/ 1 240 M",
      detail: "> 2 600 planes ejecutados desde 2010 beneficiando a 97 400 familias.",
      source: "MIDAGRI (2025)"
    },
    {
      id: "stat-sunafil",
      label: "Trabajadores Agrarios Asistidos (SUNAFIL)",
      value: "36 248",
      detail: "184 asistencias técnicas en 13 regiones sobre formalización y SST.",
      source: "SUNAFIL (2024)"
    },
    {
      id: "stat-psi",
      label: "Proyectos de Riego Tecnificado (PSI)",
      value: "680 proyectos",
      detail: "10 497 agricultores beneficiados a nivel nacional (1999–2017).",
      source: "PSI (2024)"
    },
    {
      id: "stat-brecha-riego",
      label: "Superficie sin Riego Tecnificado",
      value: "87.4 %",
      detail: "Brecha nacional de infraestructura agrícola y 56.6 % en estado inadecuado.",
      source: "MEF (2025b)"
    }
  ],

  /* Índice de Búsqueda Instantánea Global (Ctrl+K) centrado en EC2 */
  searchIndex: [
    {
      sec: "Sección 1",
      title: "1. Introducción a la Problemática Socioambiental",
      targetId: "sec-introduccion",
      keywords: "introducción problemática agroexportación recursos hídricos crecimiento económico ocde 2026 empleo pequeños productores financiamiento tecnología"
    },
    {
      sec: "Figura 1",
      title: "Figura 1: Árbol de Problemas de los Impactos Socioambientales",
      targetId: "sec-arbol-problemas",
      keywords: "figura 1 arbol de problemas causas efectos consecuencias problema central degradacion agua suelo bosques apa 7 lightbox descarga"
    },
    {
      sec: "Sección 2",
      title: "2. Revisión de Antecedentes y Propuestas Previas de Solución",
      targetId: "sec-antecedentes",
      keywords: "antecedentes propuestas solucion estado midagri mef sunafil psi agroideas ley 31110 riego tecnificado"
    },
    {
      sec: "Sección 2.1",
      title: "2.1. Primera Propuesta: Programa AGROIDEAS (MIDAGRI)",
      targetId: "sec-agroideas",
      keywords: "agroideas midagri 2010 planes de negocio 1240 millones 97400 familias cafe cuyes mef evaluacion impacto asociatividad"
    },
    {
      sec: "Sección 2.2",
      title: "2.2. Segunda Propuesta: Ley N.º 31110 – Régimen Laboral Agrario",
      targetId: "sec-ley31110",
      keywords: "ley 31110 regimen laboral agrario sunafil mtpe derechos laborales beta utilidades inspeccion 36248 trabajadores formalizacion"
    },
    {
      sec: "Sección 2.3",
      title: "2.3. Tercera Propuesta: Programa de Tecnificación del Riego (PSI)",
      targetId: "sec-psi",
      keywords: "psi riego tecnificado goteo aspersion midagri 680 proyectos 10497 agricultores psi sierra 1969 hectareas capacitacion mantenimiento"
    },
    {
      sec: "Sección 2.4",
      title: "2.4. Tabla 1: Comparación entre las Tres Propuestas de Solución",
      targetId: "sec-comparacion-propuestas",
      keywords: "tabla 1 comparacion propuestas agroideas ley 31110 tecnificacion riego aprendizaje clave fiscalizacion acompanamiento"
    },
    {
      sec: "Sección 3",
      title: "3. Identificación de las Causas y Aprendizajes Clave",
      targetId: "sec-causas",
      keywords: "causas limitaciones obstaculos diagnostico politicas economicas sociales aprendizaje clave"
    },
    {
      sec: "Sección 3.1",
      title: "3.1. Causas Políticas: Coordinación Fragmentada y Fiscalización",
      targetId: "sec-causas-politicas",
      keywords: "causas politicas coordinacion institucional ocde 2026 fiscalizacion insuficiente supervision gestion publica"
    },
    {
      sec: "Sección 3.2",
      title: "3.2. Causas Económicas: Brecha Tecnológica y Financiamiento",
      targetId: "sec-causas-economicas",
      keywords: "causas economicas financiamiento credito mef 2025b 87.4% sin riego tecnificado 56.6% inadecuado desigualdad mercados"
    },
    {
      sec: "Sección 3.3",
      title: "3.3. Causas Sociales: Informalidad, Desigualdad y Conflictos por Agua",
      targetId: "sec-causas-sociales",
      keywords: "causas sociales informalidad laboral enganchadores estres hidrico costa ocde 2026 conflictos agua trabajo decente"
    },
    {
      sec: "Sección 3.4",
      title: "3.4. Tabla 2: Principales Obstáculos Identificados",
      targetId: "sec-obstaculos",
      keywords: "tabla 2 obstaculos identificados financiamiento tecnologia mercado cumplimiento laboral capacitacion mantenimiento"
    },
    {
      sec: "Sección 3.5",
      title: "3.5. Reflexión General: Aprendizajes Clave del Diagnóstico",
      targetId: "sec-reflexion-causas",
      keywords: "reflexion general continuidad recursos coordinacion participacion politicas publicas efectivas"
    },
    {
      sec: "Sección 4",
      title: "4. Enfoque Teórico: Sostenibilidad, Bienes Comunes y Agroecología",
      targetId: "sec-enfoque-teorico",
      keywords: "enfoque teorico desarrollo sostenible bienes comunes agroecologia ostrom fao tittonell brundtland"
    },
    {
      sec: "Sección 4.1",
      title: "4.1. Teoría del Desarrollo Sostenible (WCED 1987 / FAO 2021)",
      targetId: "sec-teoria-desarrollo",
      keywords: "desarrollo sostenible brundtland 1987 fao 2021 tres dimensiones economica social ambiental agricultura sostenible"
    },
    {
      sec: "Sección 4.2",
      title: "4.2. Teoría de los Bienes Comunes – Elinor Ostrom (1990)",
      targetId: "sec-teoria-comunes",
      keywords: "bienes comunes elinor ostrom 1990 gestion colectiva recursos uso comun agua cuencas juntas regantes monitoreo"
    },
    {
      sec: "Sección 4.3",
      title: "4.3. Enfoque de la Agroecología – FAO y Pablo Tittonell (2023)",
      targetId: "sec-teoria-agroecologia",
      keywords: "agroecologia pablo tittonell 2023 fao sistemas alimentarios sostenibles suelo biodiversidad agroforesteria saberes campesinos"
    },
    {
      sec: "Sección 4.4",
      title: "4.4. Tabla 3: Relación de Enfoques Teóricos con la Problemática",
      targetId: "sec-relacion-teorica",
      keywords: "tabla 3 relacion teorica interpretacion limites biofisicos gobernanza comunitaria regeneracion ambiental"
    },
    {
      sec: "Sección 4.5",
      title: "4.5. Reflexión del Enfoque Teórico y Propuestas",
      targetId: "sec-reflexion-teorica",
      keywords: "reflexion teorica ordenamiento territorial gobernanza agua transicion agroecologica etica ambiental"
    },
    {
      sec: "Sección 5",
      title: "5. Conclusiones del Estudio (Puntos 1 al 4)",
      targetId: "sec-conclusiones",
      keywords: "conclusiones sintesis modelo balance respuestas estatales factores limitantes politicas publicas futuras"
    },
    {
      sec: "Sección 6",
      title: "6. Referencias Bibliográficas Oficiales (APA 7.ª edición)",
      targetId: "sec-referencias",
      keywords: "referencias bibliografia apa 7 congreso damonte midagri mef fao ocde ostrom psi sunafil tittonell wced brundtland"
    },
    {
      sec: "Equipo",
      title: "Integrantes del Grupo 1 y Ficha Académica UCSUR",
      targetId: "sec-integrantes",
      keywords: "integrantes autores grupo 1 calle ruiz garcia mori garcia valdera marchan rozand sedano vasquez universidad cientifica del sur figari salas"
    }
  ]
};
