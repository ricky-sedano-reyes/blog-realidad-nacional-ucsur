/**
 * ============================================================================
 * UNIVERSIDAD CIENTÍFICA DEL SUR (UCSUR) — DATOS DEL INFORME Y ATLAS REGIONAL
 * Archivo: assets/js/data-report.js
 * Fuente: PROBLEMÁTICA DE LA AGROEXPORTACIÓN EN EL PERÚ - IMPACTO EN EL ÁMBITO SOCIOAMBIENTAL.docx (Grupo 1 - EC1)
 * ============================================================================
 */

window.UCSUR_REPORT_DATA = {
  metadata: {
    title: "PROBLEMÁTICA DE LA AGROEXPORTACIÓN EN EL PERÚ: IMPACTO EN EL ÁMBITO SOCIOAMBIENTAL",
    university: "Universidad Científica del Sur",
    course: "Análisis de la Realidad Nacional y Ambiental",
    cycle: "Ciclo 2026-2",
    evaluation: "Evaluación Continua 1 (EC1)",
    professor: "Giovanni Paolo Figari Salas",
    group: "Grupo 1",
    date: "Octubre 2026",
    blogUrl: "https://blog-realidad-nacional-ucsur.netlify.app/",
    docxPath: "./PROBLEMÁTICA DE LA AGROEXPORTACIÓN EN EL PERÚ - IMPACTO EN EL ÁMBITO SOCIOAMBIENTAL.docx"
  },

  /* Datos para el Gráfico 1: Valor de Agroexportaciones por Rubro (US$ Millones) */
  exportValuesChart: [
    {
      id: "total-2024",
      label: "Agroexportaciones Totales del Perú (Récord 2024)",
      valueLabel: "US$ 12 784 millones",
      percentageWidth: 100,
      colorClass: "bar-fill-navy",
      growth: "+21.4% interanual",
      source: "MIDAGRI (2025)",
      detail: "Cifra récord al cierre de 2024; la canasta no tradicional representó el 90 % de los envíos."
    },
    {
      id: "arandano-2025",
      label: "Hecho 2: Arándano Fresco (Campaña 2025)",
      valueLabel: "US$ 2 457 millones",
      percentageWidth: 76,
      colorClass: "bar-fill-blue",
      growth: "> 385 000 toneladas (+18%)",
      source: "Fresh Fruit Perú (2026)",
      detail: "Principal producto de la canasta agroexportadora nacional; La Libertad, Lambayeque e Ica lideran la producción."
    },
    {
      id: "cafe-2025",
      label: "Hecho 1A: Café Peruano en Grano (Cierre 2025)",
      valueLabel: "> US$ 1 700 millones",
      percentageWidth: 62,
      colorClass: "bar-fill-green",
      growth: "US$ 1 100 M en 2024 (+33.1%)",
      source: "MINCETUR (2025) / Fresh Fruit Perú (2025)",
      detail: "Sustento directo de más de 223 000 familias cafetaleras en la selva alta y ceja de selva."
    },
    {
      id: "cacao-2024",
      label: "Hecho 1B: Cacao y Derivados (Cierre 2024)",
      valueLabel: "US$ 1 294 millones",
      percentageWidth: 52,
      colorClass: "bar-fill-green",
      growth: "+202.9% en valor exportado",
      source: "MINCETUR (2025) / Infobae (2024)",
      detail: "Impulsado por la cotización histórica internacional que superó los US$ 10 000 por tonelada en 2024."
    },
    {
      id: "esparrago-2023",
      label: "Hecho 3: Espárrago Fresco (Cierre 2023)",
      valueLabel: "US$ 391 millones",
      percentageWidth: 32,
      colorClass: "bar-fill-amber",
      growth: "97 000 t (-25% en volumen)",
      source: "Agraria.pe (2024a, 2024c)",
      detail: "El alza del precio internacional compensó financieramente la caída del 25 % en volumen por El Niño Costero."
    }
  ],

  /* Datos para el Gráfico 2: Anomalías Climáticas, Precios y Desaceleración (2023-2026) */
  climateAndPriceShocks: [
    {
      id: "shock-cacao-2024",
      label: "Alza conjunta del valor de Café y Cacao (2024)",
      valueLabel: "+85.0% interanual",
      percentageWidth: 92,
      colorClass: "bar-fill-green",
      badge: "Efecto Precio Internacional",
      source: "Agraria.pe (2024b)",
      detail: "Escasez mundial en África Occidental y Brasil elevó las cotizaciones internacionales de cacao y café."
    },
    {
      id: "shock-enero-2024",
      label: "Contracción agroexportadora tras El Niño (Enero 2024)",
      valueLabel: "-29.2% mensual",
      percentageWidth: 64,
      colorClass: "bar-fill-alert",
      badge: "Estrés Térmico e Hídrico",
      source: "ADEX Data Trade / Gestión (2024)",
      detail: "Las anomalías térmicas del Fenómeno de El Niño 2023 alteraron la floración en la costa norte y central."
    },
    {
      id: "shock-esparrago-vol",
      label: "Caída en volumen exportado de Espárrago Fresco (2023)",
      valueLabel: "-25.0% en toneladas",
      percentageWidth: 58,
      colorClass: "bar-fill-alert",
      badge: "Agotamiento Acuífero + Clima",
      source: "Agraria.pe (2024a)",
      detail: "Reducción a ~97 000 toneladas por estrés térmico y descenso del nivel freático en el valle de Ica."
    },
    {
      id: "shock-arandano-2026",
      label: "Ajuste en precio internacional del Arándano (Ene-Feb 2026)",
      valueLabel: "-23.1% en precio FOB",
      percentageWidth: 54,
      colorClass: "bar-fill-amber",
      badge: "Sobreoferta Estacional",
      source: "León Carrasco (2026b)",
      detail: "A pesar de crecer +14.6 % en volumen (58 552 t), el valor cayó -11.9 % (US$ 278.4 millones) en el primer bimestre de 2026."
    },
    {
      id: "shock-bimestre-2026",
      label: "Crecimiento total del sector agroexportador (Ene-Feb 2026)",
      valueLabel: "+1.9% (US$ 2 165 M)",
      percentageWidth: 24,
      colorClass: "bar-fill-navy",
      badge: "Desaceleración 2026",
      source: "ADEX / León Carrasco (2026b)",
      detail: "Representó el 10.8 % de las exportaciones totales del Perú, evidenciando la vulnerabilidad ante precios y clima."
    }
  ],

  /* Datos para el Atlas Territorial Interactivo (Regiones del Perú) */
  territories: [
    {
      id: "selva-cafe",
      name: "San Martín, Junín y Cajamarca",
      zone: "Ceja de Selva / Selva Alta",
      zoneClass: "zone-selva",
      crop: "Café de Especialidad y Convencional",
      kicker: "EJE AMAZÓNICO Y ANDINO-ORIENTAL · HECHO 1",
      title: "Corredor Cafetalero de Selva Alta (San Martín, Junín, Cajamarca, Amazonas y Cusco)",
      description: "Concentra el grueso de las más de 223 000 familias de pequeños productores cafetaleros. La expansión histórica desde mediados del siglo XX hacia laderas de ceja de selva ha generado fragmentación de bosques nubosos, erosión de suelos y alta vulnerabilidad frente a plagas como la roya amarilla (2013) y a las exigencias de trazabilidad satelital del Reglamento EUDR de la Unión Europea.",
      stats: [
        { label: "Familias Productoras", value: "> 223 000 familias" },
        { label: "Exportación 2025", value: "> US$ 1 700 millones" },
        { label: "Bimestre Ene-Feb 2026", value: "US$ 89 M (-40.3%)" },
        { label: "Riesgo Socioambiental", value: "Fragmentación de bosque nuboso" }
      ]
    },
    {
      id: "loreto-tamshiyacu",
      name: "Loreto (Caso Tamshiyacu)",
      zone: "Selva Baja Amazónica",
      zoneClass: "zone-selva",
      crop: "Cacao Corporativo vs. Bosque Primario",
      kicker: "CASO EMBLEMÁTICO AUDITADO · HECHO 1",
      title: "Tamshiyacu (Loreto): Deforestación por Monocultivo de Cacao",
      description: "Caso documentado por Salazar et al. (2021) sobre las operaciones de United Cacao en Tamshiyacu (Loreto). La sustitución de más de 2 000 hectáreas de bosque primario amazónico provocó una pérdida del 63 % de la cobertura arbórea durante el primer año de operación y una reducción del 50 % en la diversidad de aves nativas en los primeros tres años, además de liberar carbono almacenado en suelos turbosos.",
      stats: [
        { label: "Bosque Primario Afectado", value: "> 2 000 hectáreas" },
        { label: "Pérdida Arbórea (Año 1)", value: "-63 % cobertura" },
        { label: "Aves Nativas (Años 1-3)", value: "-50 % diversidad" },
        { label: "Fuente Científica", value: "Salazar et al. (2021)" }
      ]
    },
    {
      id: "ucayali-huanuco",
      name: "Ucayali, Huánuco y San Martín",
      zone: "Cuencas Amazónicas",
      zoneClass: "zone-selva",
      crop: "Cacao Fino de Aroma y Desarrollo Alternativo",
      kicker: "DESARROLLO ALTERNATIVO · HECHO 1",
      title: "Cuencas Cacaoteras de Ucayali, Huánuco y San Martín",
      description: "Regiones donde los programas de desarrollo alternativo promovidos por DEVIDA y la cooperación internacional impulsaron la sustitución de cultivos ilícitos de hoja de coca por cacao. Aunque el valor exportado de cacao y derivados creció 202.9 % en 2024 (US$ 1 294 millones), persiste una fuerte presión sobre bosques secundarios y brechas de titulación para implementar sistemas agroforestales certificados.",
      stats: [
        { label: "Exportación Cacao 2024", value: "US$ 1 294 millones" },
        { label: "Crecimiento 2024", value: "+202.9 % en valor" },
        { label: "Precio Internacional 2024", value: "> US$ 10 000 / t" },
        { label: "Reto Regulatorio", value: "Georreferenciación EUDR" }
      ]
    },
    {
      id: "costa-norte-arandano",
      name: "La Libertad y Lambayeque",
      zone: "Costa Norte Árida",
      zoneClass: "zone-costa",
      crop: "Arándano de Alta Tecnología",
      kicker: "MEGAPROYECTOS DE IRRIGACIÓN · HECHO 2",
      title: "Chavimochic (Virú y Chao) y Olmos: Epicentro Mundial del Arándano",
      description: "Gracias a los grandes proyectos hidráulicos estatales (Chavimochic en La Libertad y Olmos en Lambayeque) y al régimen promocional de la Ley N.º 27360 y Ley N.º 31110, antiguos arenales desérticos se transformaron en enclaves agroindustriales de escala mundial. Sin embargo, concentran la tenencia de la tierra y del agua superficial trasvasada, generando crecimiento urbano desordenado y déficits de saneamiento en distritos como Chao y Virú.",
      stats: [
        { label: "Valor Exportado 2025", value: "US$ 2 457 millones" },
        { label: "Volumen Récord 2025", value: "> 385 000 toneladas" },
        { label: "Infraestructura Hídrica", value: "Chavimochic y Olmos" },
        { label: "Tensión Social", value: "Brecha de servicios en Virú/Chao" }
      ]
    },
    {
      id: "valle-ica",
      name: "Ica (Valle de Ica y Villacurí)",
      zone: "Costa Sur-Central Hiperárida",
      zoneClass: "zone-costa",
      crop: "Espárrago Fresco y Arándano",
      kicker: "EMERGENCIA HÍDRICA SUBTERRÁNEA · HECHOS 2 Y 3",
      title: "Valle de Ica y Pampas de Villacurí: Sobreexplotación del Acuífero",
      description: "Caso crítico de metabolismo hídrico insostenible documentado por Muñoz (2016), ANA (2023) y OXFAM (2023). La extracción intensiva mediante pozos tubulares profundos para irrigar espárrago y arándano supera la tasa natural de recarga subterránea, provocando un descenso del nivel freático de entre 0.5 y 1.5 metros por año, intrusión salina y el encarecimiento del agua potable para la población urbana y los pequeños agricultores.",
      stats: [
        { label: "Descenso Nivel Freático", value: "-0.5 a -1.5 m / año" },
        { label: "Huella Hídrica Espárrago", value: "1 500 a 2 500 L / kg" },
        { label: "Exportación Espárrago", value: "US$ 391 M (97 000 t)" },
        { label: "Diagnóstico ANA / OXFAM", value: "Veda y estrés hídrico severo" }
      ]
    },
    {
      id: "ancash-lima",
      name: "Áncash y Lima Provincias",
      zone: "Costa Norcentral",
      zoneClass: "zone-costa",
      crop: "Espárrago y Agroexportación Costera",
      kicker: "VALLES COSTEROS · HECHO 3",
      title: "Valles Costeros de Áncash y Norte Chico de Lima",
      description: "Articulados desde la década de 1990 al corredor logístico de exportación en fresco hacia Estados Unidos y Europa. Experimentaron en 2023 el impacto directo del Fenómeno de El Niño Costero, cuyas temperaturas nocturnas elevadas alteraron el ciclo fisiológico del espárrago y aceleraron el desplazamiento de inversiones hacia cultivos de mayor margen relativo o recambio varietal.",
      stats: [
        { label: "Impacto El Niño 2023", value: "-25 % caída en volumen" },
        { label: "Mano de Obra", value: "Asalariada estacional" },
        { label: "Efecto Precio 2023", value: "Compensó caída física" },
        { label: "Tendencia", value: "Reconversión hacia berries/palto" }
      ]
    }
  ],

  /* Índice de Búsqueda Instantánea (Ctrl+K) */
  searchIndex: [
    {
      sec: "Sección 1",
      title: "Introducción: Problemática de la Agroexportación en el Perú",
      targetId: "sec-introduccion",
      keywords: "introducción récord 12784 millones midagri 2024 agroexportación costa amazonía crecimiento económico sostenibilidad"
    },
    {
      sec: "Sección 2.1",
      title: "Descripción de la Problemática: Café, Cacao, Arándano y Espárrago",
      targetId: "sec-2-1",
      keywords: "descripción problemática café 1700 millones cacao 1294 millones arándano 2457 millones 385000 toneladas espárrago 391 millones desaceleración 2026"
    },
    {
      sec: "Sección 2.2",
      title: "Contexto Histórico y Social: Del Latifundio Republicano al Agronegocio",
      targetId: "sec-2-2",
      keywords: "historia república siglo xix haciendas reforma agraria 1969 velasco decreto ley 17716 ley 27360 chlimper ley 31110 devida chavimochic olmos"
    },
    {
      sec: "Sección 2.3",
      title: "Causas de la Problemática (Social, Económica, Política y Ambiental)",
      targetId: "sec-2-3",
      keywords: "causas migración pobreza rural demanda internacional estados unidos europa china políticas públicas agua virtual suelo ácido"
    },
    {
      sec: "Sección 2.4",
      title: "Consecuencias de la Problemática (Social, Económica, Política y Ambiental)",
      targetId: "sec-2-4",
      keywords: "consecuencias paro agrario 2020 ica la libertad tamshiyacu united cacao loreto 63% aves 50% acuífero ica 1.5 metros el niño 2023"
    },
    {
      sec: "Sección 2.5",
      title: "Relación entre los Tres Hechos y Tabla 1 Comparativa APA",
      targetId: "sec-2-5",
      keywords: "tabla 1 semejanzas diferencias causas comunes consecuencias compartidas 223000 familias huella hídrica 2500 litros"
    },
    {
      sec: "Sección 2.6",
      title: "Desafíos Territoriales, Reglamento EUDR y Hoja de Ruta de Sostenibilidad",
      targetId: "sec-2-6",
      keywords: "desafíos territoriales sostenibilidad reglamento europeo eudr deforestación cero sistemas agroforestales gobernanza hídrica ana"
    },
    {
      sec: "Sección 3",
      title: "Conclusiones del Informe Académico (Puntos 1 al 6)",
      targetId: "sec-conclusiones",
      keywords: "conclusiones síntesis modelo agroexportador vulnerabilidad climática brechas estructurales reforma hídrica y forestal"
    },
    {
      sec: "Sección 4",
      title: "Referencias Bibliográficas Oficiales (22 fuentes en Formato APA 7)",
      targetId: "sec-referencias",
      keywords: "referencias bibliografía apa 7 agraria.pe ana bcrp cepal fao midagri minam mincetur muñoz oxfam salazar senamhi"
    },
    {
      sec: "Equipo",
      title: "Integrantes del Grupo 1 y Datos Académicos (UCSUR)",
      targetId: "sec-integrantes",
      keywords: "integrantes autores grupo 1 garcía mori garcía valdera marchan rozand sedano vasquez universidad científica del sur"
    }
  ]
};
