/**
 * ============================================================================
 * UNIVERSIDAD CIENTÍFICA DEL SUR (UCSUR) — CATÁLOGO DE «ACTIVIDADES EN CLASE»
 * Archivo: assets/js/data-activities.js
 * Asignatura: Análisis de la Realidad Nacional y Ambiental · Grupo 1
 * Ciclo 2026-2 · Evaluación Continua 1 (EC1) y Portafolio de Evidencias (Semanas 1 a 5)
 * ============================================================================
 */

window.UCSUR_ACTIVITIES_DATA = [
  {
    id: "act-1-docx",
    title: "Actividad en Clase 1: Línea de Tiempo Geopolítica y Tratados del Perú",
    academicCategory: "Trabajo Grupal de Análisis Geopolítico · Semana 1",
    fileName: "Actividad en clase 1..docx",
    relativePath: "./actividades%20en%20clase/Actividad%20en%20clase%201..docx",
    previewThumbnail: "./assets/img/linea-tiempo-geopolitica.jpeg",
    week: "semana-1",
    weekLabel: "Semana 1",
    format: "docx",
    formatBadge: "Documento Académico",
    fileSize: "Word (.docx)",
    summary: "Análisis de los principales hitos geopolíticos de la República del Perú (1851–2024), cuadro comparativo de acuerdos multilaterales (OMC, APEC, CAN, Alianza del Pacífico, CPTPP) y tratados fronterizos y comerciales con Ecuador, Colombia, Brasil, Bolivia y Chile.",
    tags: ["Geopolítica del Perú", "Línea de Tiempo 1851–2024", "Acuerdos Multilaterales", "Tratados Fronterizos", "Semana 1"],
    docContentHtml: `
      <div class="doc-sheet">
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;padding-bottom:1rem;margin-bottom:1.25rem;border-bottom:3px solid #0A387D;">
          <div>
            <span style="font-family:var(--font-mono);font-size:0.72rem;font-weight:700;color:#E88320;text-transform:uppercase;letter-spacing:0.08em;">Universidad Científica del Sur · Semana 1</span>
            <h3 style="font-family:var(--font-serif);font-size:1.45rem;color:#0A387D;margin-top:0.2rem;">Actividad en Clase 1: Eventos Geopolíticos, Acuerdos Multilaterales y Tratados Fronterizos</h3>
          </div>
          <span style="font-family:var(--font-mono);font-size:0.74rem;background:#EEF4FB;color:#0A387D;border:1px solid #C5D8F0;padding:0.3rem 0.65rem;border-radius:3px;">Trabajo Grupal · Semana 1</span>
        </div>

        <p><strong>Integrantes del equipo:</strong> Luis Miguel García Mori &middot; Enrique García Valdera &middot; Enni Juliana Marchan Infante &middot; Erick Enrique Rozand Copara &middot; Ricky Jhony Sedano Reyes &middot; Milagros Vasquez Morales &middot; Samanta Hilda Calle Ruiz.</p>

        <div class="doc-embedded-figure">
          <img src="./assets/img/linea-tiempo-geopolitica.jpeg" alt="Línea de tiempo y análisis de acuerdos internacionales de la geopolítica del Perú">
          <div class="doc-embedded-caption"><strong>Figura 1:</strong> Línea de tiempo y análisis de acuerdos internacionales de la geopolítica del Perú (1851–2024).</div>
        </div>

        <h4>1. Línea de Tiempo de los Principales Eventos Geopolíticos del Perú (1851–2024)</h4>
        <ul>
          <li><strong>1851 – Convención Fluvial con Brasil:</strong> Primer acuerdo amazónico relevante; aseguró la navegación y el comercio por el río Amazonas e inició la proyección geopolítica oriental del Perú.</li>
          <li><strong>1879–1883 – Guerra del Pacífico y Tratado de Ancón:</strong> Redefinió la frontera sur del país, implicó la pérdida de Tarapacá y dejó pendiente la situación de Tacna y Arica.</li>
          <li><strong>1909 – Tratados con Brasil (Velarde-Río Branco) y con Bolivia (Polo-Bustamante):</strong> Consolidaron los límites amazónicos y altiplánicos mediante negociación diplomática y arbitraje internacional.</li>
          <li><strong>1922 – Tratado Salomón-Lozano con Colombia:</strong> Fijó la frontera en el río Putumayo y el trapecio amazónico.</li>
          <li><strong>1929 – Tratado de Lima con Chile:</strong> Estableció la devolución de Tacna al Perú y la permanencia de Arica en Chile, cerrando la controversia terrestre del sur.</li>
          <li><strong>1942 – Protocolo de Río de Janeiro con Ecuador:</strong> Definió el marco jurídico fronterizo tras el conflicto de 1941.</li>
          <li><strong>1947 – Decreto Supremo N.º 781 (200 millas marítimas):</strong> Hito geopolítico mundial en la defensa de la soberanía marítima y los recursos hidrobiológicos del mar peruano.</li>
          <li><strong>1969 – Suscripción del Acuerdo de Cartagena (Pacto Andino / CAN):</strong> Impulsó la integración subregional andina junto a Bolivia, Colombia, Ecuador y Chile.</li>
          <li><strong>1998 – Acta Presidencial de Brasilia con Ecuador e Ingreso al APEC:</strong> Selló la paz definitiva en la frontera norte y proyectó al Perú hacia la cuenca del Asia-Pacífico.</li>
          <li><strong>2009–2011 – Entrada en vigor de los TLC con EE. UU., China, Unión Europea y creación de la Alianza del Pacífico:</strong> Consolidó la apertura comercial e inserción en cadenas globales.</li>
          <li><strong>2014 – Fallo de la Corte Internacional de Justicia de La Haya:</strong> Delimitó de forma definitiva y pacífica la frontera marítima con Chile.</li>
          <li><strong>2021 – Entrada en vigor del CPTPP para el Perú:</strong> Amplió el acceso preferencial a mercados del Asia-Pacífico.</li>
          <li><strong>2024 – Inauguración del Megapuerto de Chancay:</strong> Posicionó al Perú como nodo logístico y portuario bioceánico entre Sudamérica y Asia.</li>
        </ul>

        <h4>2. Principales Aportes de los Acuerdos Multilaterales para el País</h4>
        <div class="apa-table-scroll">
          <table class="apa-table" style="min-width:600px;">
            <thead>
              <tr>
                <th>Acuerdo / Bloque Multilateral</th>
                <th>Aportes Estratégicos y Comerciales para el Perú</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>OMC (Organización Mundial del Comercio, 1995)</strong></td>
                <td>Brinda seguridad jurídica comercial, acceso a mecanismos de solución de diferencias y reducción de barreras arancelarias y técnicas.</td>
              </tr>
              <tr>
                <td><strong>Comunidad Andina (CAN, 1969)</strong></td>
                <td>Zona de libre comercio al 100 % para manufacturas y agroindustria con Colombia, Ecuador y Bolivia, además de libre tránsito ciudadano e interconexión eléctrica.</td>
              </tr>
              <tr>
                <td><strong>Foro APEC (1998)</strong></td>
                <td>Articula al Perú con las 21 economías más dinámicas del Asia-Pacífico (China, EE. UU., Japón, Corea del Sur, Australia), facilitando inversión portuaria y agroexportación.</td>
              </tr>
              <tr>
                <td><strong>Alianza del Pacífico (2011)</strong></td>
                <td>Integración profunda con Chile, Colombia y México: desgravación del 92 % de partidas, acumulación de origen, movilidad académica y mercado integrado (MILA).</td>
              </tr>
              <tr>
                <td><strong>CPTPP (Tratado Integral y Progresista de Asociación Transpacífico, 2021)</strong></td>
                <td>Abre nuevos mercados en el Sudeste Asiático y Oceanía (Vietnam, Malasia, Nueva Zelanda, Brunéi) para productos agroindustriales y pesqueros peruanos.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4>3. Tratados Comerciales y Fronterizos con Países Vecinos</h4>
        <div class="apa-table-scroll">
          <table class="apa-table" style="min-width:600px;">
            <thead>
              <tr>
                <th>País Fronterizo</th>
                <th>Instrumentos Jurídicos y Dinámica de Integración</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Ecuador</strong></td>
                <td>Protocolo de Río de Janeiro (1942), Acta de Brasilia (1998) y Acuerdo Amplio de Integración Fronteriza: desarrollo de ejes viales binacionales, comercio libre en la CAN y gabinetes binacionales.</td>
              </tr>
              <tr>
                <td><strong>Colombia</strong></td>
                <td>Tratado Salomón-Lozano (1922), Protocolo de Río de Janeiro (1934), marco CAN y Alianza del Pacífico: cooperación en la cuenca del Putumayo y Amazonas e intenso intercambio manufacturero y agrícola.</td>
              </tr>
              <tr>
                <td><strong>Brasil</strong></td>
                <td>Tratado Velarde-Río Branco (1909) y Acuerdo de Complementación Económica ACE N.º 58 (Perú-Mercosur): articulación mediante la Carretera Interoceánica Sur y proyección bioceánica hacia el puerto de Chancay.</td>
              </tr>
              <tr>
                <td><strong>Bolivia</strong></td>
                <td>Tratado Polo-Bustamante (1909), Convenio de Ilo (BoliviaMar, 1992/2010) y Comunidad Andina: facilidades portuarias en el sur peruano y gestión binacional del Lago Titicaca (ALT).</td>
              </tr>
              <tr>
                <td><strong>Chile</strong></td>
                <td>Tratado de Lima (1929), Acuerdo de Libre Comercio Perú-Chile (2009), Alianza del Pacífico y Fallo de La Haya (2014): alto flujo de inversiones recíprocas, comercio agroalimentario y tránsito fronterizo Tacna-Arica.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="doc-embedded-figure" style="margin-top:1.5rem;">
          <img src="./assets/img/evidencia-canvas-act1.png" alt="Constancia de actividad en el Aula Virtual UCSUR">
          <div class="doc-embedded-caption"><strong>Figura 2:</strong> Constancia de las indicaciones de la Actividad en Clase 1 en el Aula Virtual de la Universidad Científica del Sur.</div>
        </div>
      </div>
    `
  },
  {
    id: "guia-1-docx",
    title: "Guía de Autoaprendizaje 1: Ventajas Geopolíticas y Recursos Naturales del Perú",
    academicCategory: "Guía de Autoaprendizaje Grupal · Semana 1",
    fileName: "Guía 1.docx",
    relativePath: "./actividades%20en%20clase/Gu%C3%ADa%201.docx",
    previewThumbnail: "./assets/img/evidencia-canvas-guia1.png",
    week: "semana-1",
    weekLabel: "Semana 1",
    format: "docx",
    formatBadge: "Documento Académico",
    fileSize: "Word (.docx)",
    summary: "Desarrollo de la Guía de Autoaprendizaje sobre la posición geoestratégica del Perú en Sudamérica (eje marítimo del Pacífico, Megapuerto de Chancay, conexión amazónica y presencia antártica) y el potencial económico de sus recursos naturales estratégicos.",
    tags: ["Guía de Autoaprendizaje", "Ventajas Geopolíticas", "Recursos Naturales", "Megapuerto de Chancay", "Semana 1"],
    docContentHtml: `
      <div class="doc-sheet">
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;padding-bottom:1rem;margin-bottom:1.25rem;border-bottom:3px solid #0A387D;">
          <div>
            <span style="font-family:var(--font-mono);font-size:0.72rem;font-weight:700;color:#E88320;text-transform:uppercase;letter-spacing:0.08em;">Universidad Científica del Sur · Semana 1</span>
            <h3 style="font-family:var(--font-serif);font-size:1.45rem;color:#0A387D;margin-top:0.2rem;">Guía de Autoaprendizaje 1: Ventajas Geopolíticas y Potencial de Recursos Naturales del Perú</h3>
          </div>
          <span style="font-family:var(--font-mono);font-size:0.74rem;background:#EEF4FB;color:#0A387D;border:1px solid #C5D8F0;padding:0.3rem 0.65rem;border-radius:3px;">Guía de Autoaprendizaje · Semana 1</span>
        </div>

        <p><strong>Integrantes del equipo:</strong> Luis Miguel García Mori &middot; Enrique García Valdera &middot; Enni Juliana Marchan Infante &middot; Erick Enrique Rozand Copara &middot; Ricky Jhony Sedano Reyes &middot; Milagros Vasquez Morales &middot; Samanta Hilda Calle Ruiz.</p>

        <h4>1. Ventajas Geopolíticas del Perú en Relación con sus Países Vecinos</h4>
        <ul>
          <li><strong>Ubicación Marítima Central en el Pacífico Sudamericano:</strong> Con más de 3 080 km de litoral sobre la cuenca del Pacífico, el Perú constituye la puerta natural de salida e ingreso entre Sudamérica y las economías del Asia-Pacífico.</li>
          <li><strong>Nodo Bioceánico y Megapuerto de Chancay:</strong> La articulación entre los puertos del Callao, Chancay y Paita con los corredores viales interoceánicos permite conectar la producción brasileña, boliviana y peruana directamente con Shanghái, reduciendo entre 10 y 12 días el tiempo de travesía marítima frente a otros puertos de la región.</li>
          <li><strong>Condición Tricontinental y Bioceánica (Pacífico – Amazonas – Antártida):</strong> A través del río Amazonas, el Perú posee salida navegable hacia el océano Atlántico, mientras que mediante la Estación Científica Antártica Machu Picchu mantiene presencia activa como miembro consultivo del Tratado Antártico.</li>
          <li><strong>Pisos Altitudinales y Diversidad Climática Todo el Año:</strong> La Cordillera de los Andes genera microclimas que permiten producir y exportar alimentos en contraestación respecto al hemisferio norte, ventaja competitiva frente a países de clima homogéneo.</li>
        </ul>

        <h4>2. Principales Recursos Naturales del Perú y su Potencialidad Económica</h4>
        <div class="apa-table-scroll">
          <table class="apa-table" style="min-width:600px;">
            <thead>
              <tr>
                <th>Categoría de Recurso</th>
                <th>Recursos Estratégicos</th>
                <th>Potencialidad Económica y Productiva</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Recursos Minerales Metálicos (No Renovables)</strong></td>
                <td>Cobre, oro, zinc, plata, molibdeno, estaño y proyectos de litio.</td>
                <td>El Perú es el segundo productor mundial de cobre; la minería aporta cerca del 60 % de las divisas por exportaciones totales y resulta crítica para la transición energética global (electromovilidad y redes eléctricas).</td>
              </tr>
              <tr>
                <td><strong>Recursos Energéticos</strong></td>
                <td>Gas natural de Camisea (Cusco), potencial hidroeléctrico andino, radiación solar en el sur y vientos costeros.</td>
                <td>El gas de Camisea sostiene la matriz eléctrica nacional y la industria manufacturera, mientras que el sur peruano posee una de las mayores radiaciones solares del planeta para energías renovables.</td>
              </tr>
              <tr>
                <td><strong>Recursos Hidrobiológicos (Mar de Grau)</strong></td>
                <td>Anchoveta, pota, perico, jurel, caballa y acuicultura (concha de abanico, langostino, trucha).</td>
                <td>El afloramiento de la Corriente de Humboldt convierte al mar peruano en uno de los más productivos del mundo, liderando la exportación mundial de harina y aceite de pescado.</td>
              </tr>
              <tr>
                <td><strong>Recursos Agrobiodiversos y Forestales</strong></td>
                <td>84 de las 117 zonas de vida del planeta, 73 millones de hectáreas de bosques amazónicos, cultivos nativos y de agroexportación.</td>
                <td>Sustenta el auge agroexportador (arándano, café, cacao, espárrago, palta, uva), el ecoturismo de naturaleza, la biotecnología y el potencial de bonos de carbono forestal.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="doc-embedded-figure" style="margin-top:1.5rem;">
          <img src="./assets/img/evidencia-canvas-guia1.png" alt="Constancia de la Guía 1 en el Aula Virtual UCSUR">
          <div class="doc-embedded-caption"><strong>Figura 1:</strong> Constancia de las instrucciones de la Guía de Autoaprendizaje 1 en el Aula Virtual de la Universidad Científica del Sur.</div>
        </div>
      </div>
    `
  },
  {
    id: "cobre-semana-1",
    title: "El Cobre: Recurso No Renovable y Pilar Estratégico del Perú",
    academicCategory: "Infografía de Investigación sobre Recursos Naturales · Semana 1",
    fileName: "EL COBRE - RECURSO NO RENOVABLE -  SEMANA 1.jpeg",
    relativePath: "./actividades%20en%20clase/EL%20COBRE%20-%20RECURSO%20NO%20RENOVABLE%20-%20%20SEMANA%201.jpeg",
    previewThumbnail: "./actividades%20en%20clase/EL%20COBRE%20-%20RECURSO%20NO%20RENOVABLE%20-%20%20SEMANA%201.jpeg",
    week: "semana-1",
    weekLabel: "Semana 1",
    format: "image",
    formatBadge: "Infografía Académica",
    fileSize: "Alta Resolución",
    summary: "Mapa conceptual e infografía analítica sobre el cobre como recurso natural no renovable en el Perú: ubicación de los principales yacimientos (Antamina, Cerro Verde, Las Bambas, Quellaveco), aporte al PBI y al canon minero, y desafíos socioambientales en las cabeceras de cuenca.",
    tags: ["Cobre", "Recurso No Renovable", "Minería y Canon", "Semana 1"]
  },
  {
    id: "incendios-semana-2",
    title: "Incendios Forestales en el Perú: Causas, Regiones Críticas e Impactos",
    academicCategory: "Infografía de Diagnóstico Socioambiental · Semana 2",
    fileName: "INCENDIOS FORESTALES EN PERÚ - SEMANA 2.jpeg",
    relativePath: "./actividades%20en%20clase/INCENDIOS%20FORESTALES%20EN%20PER%C3%9A%20-%20SEMANA%202.jpeg",
    previewThumbnail: "./actividades%20en%20clase/INCENDIOS%20FORESTALES%20EN%20PER%C3%9A%20-%20SEMANA%202.jpeg",
    week: "semana-2",
    weekLabel: "Semana 2",
    format: "image",
    formatBadge: "Infografía Académica",
    fileSize: "Alta Resolución",
    summary: "Infografía sobre la emergencia por incendios forestales en departamentos amazónicos y andinos (Amazonas, San Martín, Ucayali, Cusco y Cajamarca), analizando la interacción entre quemas agrícolas para ampliación de frontera agropecuaria, sequías severas y pérdida de cobertura boscosa.",
    tags: ["Incendios Forestales", "Amazonía y Andes", "Pérdida de Bosques", "Semana 2"]
  },
  {
    id: "oso-anteojos-semana-2",
    title: "El Oso de Anteojos (Tremarctos ornatus): Conservación y Fragmentación de Hábitat",
    academicCategory: "Infografía de Biodiversidad y Ecosistemas · Semana 2",
    fileName: "OSO DE ANTEOJOS - SEMANA 2.jpeg",
    relativePath: "./actividades%20en%20clase/OSO%20DE%20ANTEOJOS%20-%20SEMANA%202.jpeg",
    previewThumbnail: "./actividades%20en%20clase/OSO%20DE%20ANTEOJOS%20-%20SEMANA%202.jpeg",
    week: "semana-2",
    weekLabel: "Semana 2",
    format: "image",
    formatBadge: "Infografía Académica",
    fileSize: "Alta Resolución",
    summary: "Estudio visual sobre el oso andino o ucumari (Tremarctos ornatus), única especie de úrsido nativo de Sudamérica. Examina su rol ecológico como dispersor de semillas y especie paraguas en los bosques nubosos y páramos, así como la amenaza directa por deforestación agrícola.",
    tags: ["Oso de Anteojos", "Biodiversidad Endémica", "Bosques Nubosos", "Semana 2"]
  },
  {
    id: "parques-nacionales-semana-2",
    title: "Parques Nacionales del Perú: Patrimonio Natural y Áreas Protegidas (SERNANP)",
    academicCategory: "Infografía de Conservación Territorial · Semana 2",
    fileName: "PARQUES NACIONALES DEL PERÚ -  SEMANA 2.jpeg",
    relativePath: "./actividades%20en%20clase/PARQUES%20NACIONALES%20DEL%20PER%C3%9A%20-%20%20SEMANA%202.jpeg",
    previewThumbnail: "./actividades%20en%20clase/PARQUES%20NACIONALES%20DEL%20PER%C3%9A%20-%20%20SEMANA%202.jpeg",
    week: "semana-2",
    weekLabel: "Semana 2",
    format: "image",
    formatBadge: "Infografía Académica",
    fileSize: "Alta Resolución",
    summary: "Lámina comparativa sobre los Parques Nacionales del Perú administrados por el SERNANP (como el Parque Nacional Huascarán y el Parque Nacional Otishi), destacando su función en la regulación hídrica glaciar y amazónica, resguardo de biodiversidad y mitigación climática.",
    tags: ["Parques Nacionales", "SERNANP", "Conservación Ecosistémica", "Semana 2"]
  },
  {
    id: "extorsion-lima-semana-3",
    title: "Problemática de la Extorsión e Inseguridad Ciudadana en Lima Metropolitana",
    academicCategory: "Infografía de Análisis de la Realidad Nacional · Semana 3",
    fileName: "extorcion en lima metropolitana- semana 3.jpeg",
    relativePath: "./actividades%20en%20clase/extorcion%20en%20lima%20metropolitana-%20semana%203.jpeg",
    previewThumbnail: "./actividades%20en%20clase/extorcion%20en%20lima%20metropolitana-%20semana%203.jpeg",
    week: "semana-3",
    weekLabel: "Semana 3",
    format: "image",
    formatBadge: "Infografía Académica",
    fileSize: "Alta Resolución",
    summary: "Análisis socioeconómico e institucional sobre el fenómeno de la extorsión en Lima Metropolitana, su impacto directo en el sector transporte, pequeños comercios y emprendimientos urbanos, y los retos del sistema de justicia y seguridad ciudadana.",
    tags: ["Realidad Nacional Urbana", "Seguridad Ciudadana", "Lima Metropolitana", "Semana 3"]
  },
  {
    id: "choque-poderes-docx",
    title: "Guía 3: Choque de Poderes y Degradación Institucional en el Perú (2016–2022)",
    academicCategory: "Guía de Autoaprendizaje Grupal · Semana 3",
    fileName: "CHOQUE DE PODERES Y DEGRADACIÓN INSTITUCIONAL EN EL PERÚ.docx",
    relativePath: "./actividades%20en%20clase/CHOQUE%20DE%20PODERES%20Y%20DEGRADACI%C3%93N%20INSTITUCIONAL%20EN%20EL%20PER%C3%9A.docx",
    previewThumbnail: "./actividades%20en%20clase/Choque%20de%20poderes%20en%20Per%C3%BA.png",
    week: "semana-3",
    weekLabel: "Semana 3",
    format: "docx",
    formatBadge: "Documento Académico",
    fileSize: "Word (.docx)",
    summary: "Análisis crítico y debate grupal sobre la crisis política peruana (2016–2022) a partir de Dargent y Rousseau (2022): transformación del equilibrio de poderes sin reformas constitucionales, uso recurrente de la vacancia presidencial y cuestión de confianza, impacto del caso Lava Jato y persistencia de la confrontación.",
    tags: ["Choque de Poderes", "Degradación Institucional", "Congreso y Ejecutivo", "Crisis Política", "Semana 3", "Guía 3"],
    docContentHtml: `
      <div class="doc-sheet">
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;padding-bottom:1rem;margin-bottom:1.25rem;border-bottom:3px solid #0A387D;">
          <div>
            <span style="font-family:var(--font-mono);font-size:0.72rem;font-weight:700;color:#E88320;text-transform:uppercase;letter-spacing:0.08em;">Universidad Científica del Sur · Semana 3</span>
            <h3 style="font-family:var(--font-serif);font-size:1.4rem;color:#0A387D;margin-top:0.2rem;">Choque de Poderes y Degradación Institucional en el Perú (2016–2022): Análisis Crítico</h3>
          </div>
          <span style="font-family:var(--font-mono);font-size:0.74rem;background:#EEF4FB;color:#0A387D;border:1px solid #C5D8F0;padding:0.3rem 0.65rem;border-radius:3px;">Guía de Autoaprendizaje 3</span>
        </div>

        <p><strong>Integrantes del equipo:</strong> Luis Miguel García Mori (100221138) &middot; Enni Juliana Marchan Infante (100221024) &middot; Enrique García Valdera (100035063) &middot; Milagros Vasquez Morales (100228809) &middot; Erick Enrique Rozand Copara (100233029) &middot; Ricky Jhony Sedano Reyes (100228037) &middot; Samanta Hilda Calle Ruiz (100002537).</p>

        <div class="doc-embedded-figure">
          <img src="./actividades%20en%20clase/Choque%20de%20poderes%20en%20Per%C3%BA.png" alt="Infografía Choque de Poderes y Degradación Institucional en el Perú">
          <div class="doc-embedded-caption"><strong>Figura 1:</strong> Infografía resumen del análisis crítico sobre el choque de poderes y degradación institucional (2016–2022).</div>
        </div>

        <h4>1. Introducción</h4>
        <p>La crisis política vivida en Perú entre 2016 y 2022 puso de manifiesto las profundas dificultades existentes en la relación entre los poderes ejecutivo y legislativo. Dargent y Rousseau (2022) analizan cómo Perú pasó de un sistema presidencialista dominado por el poder ejecutivo a otro caracterizado por una mayor influencia del Congreso, sin que se produjeran cambios sustanciales en las normas constitucionales. A partir de este análisis, exponemos nuestros puntos de acuerdo y desacuerdo con respecto a las principales explicaciones de los autores.</p>

        <h4>2. Análisis Crítico de las Ideas Principales</h4>

        <h5>2.1. Cambio del equilibrio de poderes sin reforma constitucional</h5>
        <p><strong>El argumento de los autores:</strong> Dargent y Rousseau (2022) sostienen que el sistema político peruano experimentó una transformación significativa en la distribución del poder, aunque sus normas constitucionales se mantuvieron sustancialmente estables.</p>
        <p><strong>Consenso del grupo:</strong> Estamos de acuerdo en que el funcionamiento de las instituciones no depende exclusivamente de normas escritas, sino también de las prácticas y decisiones de los actores políticos. La capacidad del Congreso para influir en el poder ejecutivo demuestra que una misma Constitución puede dar lugar a diferentes relaciones de poder.</p>
        <p><strong>Fundamento:</strong> Este argumento nos ayuda a comprender que la estabilidad institucional requiere no solo normas adecuadas, sino también mecanismos de cooperación y respeto mutuo entre las autoridades.</p>

        <h5>2.2. Las elecciones de 2016 como detonante de la crisis</h5>
        <p><strong>El argumento de los autores:</strong> Según Dargent y Rousseau (2022), los resultados de las elecciones de 2016 alteraron significativamente el equilibrio institucional al otorgar a la oposición una amplia mayoría parlamentaria.</p>
        <p><strong>Acuerdo parcial:</strong> Reconocemos que este resultado fue decisivo para intensificar el enfrentamiento entre los poderes del Estado. Sin embargo, creemos que, por sí solo, no explica la crisis política.</p>
        <p><strong>Justificación:</strong> También deben tenerse en cuenta la debilidad de los partidos políticos, los problemas de representación y un historial de inestabilidad institucional. Por lo tanto, distinguimos entre el acontecimiento que aceleró el conflicto y las condiciones estructurales que facilitaron su desarrollo.</p>

        <h5>2.3. Utilización de mecanismos constitucionales extremos</h5>
        <p><strong>La postura de los autores:</strong> Dargent y Rousseau (2022) señalan que la vacancia presidencial y el voto de confianza son mecanismos que han cobrado protagonismo en los enfrentamientos entre los poderes del Estado.</p>
        <p><strong>Consenso del grupo:</strong> Consideramos que estos instrumentos son legítimos dentro del marco constitucional, pero su uso recurrente como herramientas de confrontación puede socavar la estabilidad democrática.</p>
        <p><strong>Fundamento:</strong> El control político debe garantizar la rendición de cuentas de los cargos públicos sin convertirse en un mecanismo permanente de bloqueo institucional. Desde nuestro punto de vista, es necesario establecer interpretaciones claras de las normas y promover procedimientos que reduzcan la incertidumbre política.</p>

        <h5>2.4. El caso Lava Jato y la degradación institucional</h5>
        <p><strong>El argumento de los autores:</strong> Dargent y Rousseau (2022) señalan el escándalo de corrupción &laquo;Lava Jato&raquo; como un factor que aceleró el proceso de transformación institucional y de confrontación.</p>
        <p><strong>Acuerdo con matizaciones:</strong> Estamos de acuerdo en que los escándalos de corrupción han socavado la legitimidad de los actores políticos. Sin embargo, creemos que es importante distinguir entre las consecuencias políticas de las investigaciones y el ejercicio legítimo de la justicia.</p>
        <p><strong>Fundamento:</strong> La investigación de la corrupción es esencial para la democracia. El problema surge cuando los conflictos políticos socavan la independencia institucional o merman la confianza en los procedimientos legales.</p>

        <h5>2.5. Persistencia de la confrontación política</h5>
        <p><strong>El argumento de los autores:</strong> Dargent y Rousseau (2022) señalan que se siguieron utilizando mecanismos extremos de confrontación incluso después de que desaparecieran las amplias mayorías parlamentarias.</p>
        <p><strong>Consenso del grupo:</strong> Estamos de acuerdo con esta interpretación porque demuestra que la confrontación se ha convertido en una dinámica recurrente en la política peruana, más allá de la correlación de fuerzas de cada momento.</p>
        <p><strong>Fundamento:</strong> La persistencia de estas prácticas sugiere que el problema adquirió características institucionales y culturales que van más allá de una legislatura o de un gobierno concreto.</p>

        <h4>3. Conclusión Grupal</h4>
        <p>Como grupo, coincidimos con Dargent y Rousseau (2022) en que Perú experimentó una profunda transformación de su sistema político, en la que el Congreso asumió un papel predominante frente al poder ejecutivo, a través del uso reiterado de mecanismos constitucionales y en un contexto de desconfianza agravado por los escándalos de corrupción.</p>
        <p>Sin embargo, nuestro principal punto de desacuerdo parcial es que estas explicaciones deben complementarse con una mayor consideración de los problemas estructurales relacionados con la representación, la cultura democrática y la legitimidad institucional.</p>
        <p>Concluimos que el fortalecimiento de la democracia peruana requiere normas claras, partidos políticos responsables, instituciones independientes y autoridades capaces de dar prioridad al diálogo y al interés público frente a la confrontación.</p>

        <h4>Referencia Bibliográfica (APA 7.&ordf; ed.)</h4>
        <p style="padding-left:1.5rem;text-indent:-1.5rem;font-size:0.88rem;">Dargent, E., &amp; Rousseau, S. (2022). Choque de poderes y degradación institucional: Cambio de sistema sin cambio de reglas en el Perú (2016-2022). <em>Política y Gobierno</em>, 29(2), 1–28. https://www.politicaygobierno.cide.edu/index.php/pyg/article/view/1627</p>
      </div>
    `
  },
  {
    id: "choque-poderes-infografia",
    title: "Choque de Poderes y Degradación Institucional en el Perú (2016–2022)",
    academicCategory: "Infografía de Análisis Crítico Político · Semana 3",
    fileName: "Choque de poderes en Perú.png",
    relativePath: "./actividades%20en%20clase/Choque%20de%20poderes%20en%20Per%C3%BA.png",
    previewThumbnail: "./actividades%20en%20clase/Choque%20de%20poderes%20en%20Per%C3%BA.png",
    week: "semana-3",
    weekLabel: "Semana 3",
    format: "image",
    formatBadge: "Infografía Académica",
    fileSize: "Alta Resolución",
    summary: "Infografía resumen sobre la confrontación entre el Poder Ejecutivo y el Congreso de la República (2016–2022), las elecciones 2016 como detonante, el uso de mecanismos constitucionales extremos, el impacto de Lava Jato y las conclusiones del equipo.",
    tags: ["Choque de Poderes", "Infografía Política", "Equilibrio Institucional", "Semana 3"]
  },
  {
    id: "tolerancia-democracia-docx",
    title: "Guía 3: La Tolerancia en la Democracia: Gobernabilidad, Gestión Pública y Gobernanza",
    academicCategory: "Guía de Autoaprendizaje Grupal · Semana 3",
    fileName: "LA TOLERANCIA EN LA DEMOCRACIA.docx",
    relativePath: "./actividades%20en%20clase/LA%20TOLERANCIA%20EN%20LA%20DEMOCRACIA.docx",
    previewThumbnail: "./actividades%20en%20clase/Infograf%C3%ADa%20sobre%20tolerancia%20democr%C3%A1tica%20en%20Per%C3%BA.png",
    week: "semana-3",
    weekLabel: "Semana 3",
    format: "docx",
    formatBadge: "Documento Académico",
    fileSize: "Word (.docx)",
    summary: "Reflexión académica basada en el análisis de Henry Pease (PUCP) y estándares internacionales del Banco Mundial y la OCDE: articulación entre tolerancia democrática, diálogo ciudadano, ética en la gestión pública y gobernanza multinivel colaborativa.",
    tags: ["Tolerancia Democrática", "Gobernabilidad", "Gestión Pública", "Gobernanza", "Semana 3", "Guía 3"],
    docContentHtml: `
      <div class="doc-sheet">
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;padding-bottom:1rem;margin-bottom:1.25rem;border-bottom:3px solid #0A387D;">
          <div>
            <span style="font-family:var(--font-mono);font-size:0.72rem;font-weight:700;color:#E88320;text-transform:uppercase;letter-spacing:0.08em;">Universidad Científica del Sur · Semana 3</span>
            <h3 style="font-family:var(--font-serif);font-size:1.4rem;color:#0A387D;margin-top:0.2rem;">La Tolerancia en la Democracia: Análisis desde la Gobernabilidad, la Gestión Pública y la Gobernanza</h3>
          </div>
          <span style="font-family:var(--font-mono);font-size:0.74rem;background:#EEF4FB;color:#0A387D;border:1px solid #C5D8F0;padding:0.3rem 0.65rem;border-radius:3px;">Guía de Autoaprendizaje 3</span>
        </div>

        <p><strong>Integrantes del equipo:</strong> Luis Miguel García Mori (100221138) &middot; Enni Juliana Marchan Infante (100221024) &middot; Enrique García Valdera (100035063) &middot; Milagros Vasquez Morales (100228809) &middot; Erick Enrique Rozand Copara (100233029) &middot; Ricky Jhony Sedano Reyes (100228037) &middot; Samanta Hilda Calle Ruiz (100002537).</p>

        <div class="doc-embedded-figure">
          <img src="./actividades%20en%20clase/Infograf%C3%ADa%20sobre%20tolerancia%20democr%C3%A1tica%20en%20Per%C3%BA.png" alt="Infografía sobre tolerancia democrática en el Perú">
          <div class="doc-embedded-caption"><strong>Figura 1:</strong> Infografía analítica: La tolerancia en la democracia desde la gobernabilidad, la gestión pública y la gobernanza.</div>
        </div>

        <h4>Introducción</h4>
        <p>La tolerancia es un principio esencial de la democracia, ya que nos permite reconocer y respetar las diferencias de opinión. En el vídeo <em>La tolerancia en la democracia</em>, Henry Pease reflexiona sobre la importancia de los valores democráticos ante problemas como la corrupción y la desigualdad (Pontificia Universidad Católica del Perú [PUCP], 2011). Partiendo de este enfoque, evaluamos su relación con la gobernanza, la administración pública y el buen gobierno.</p>

        <h4>Análisis Crítico</h4>
        <p><strong>Gobernanza:</strong> Coincidimos con la importancia que Pease atribuye al reconocimiento de quienes piensan de forma diferente. Creemos que una democracia requiere diálogo y voluntad para alcanzar consensos entre actores con intereses diversos. Desde una perspectiva institucional, el Banco Mundial (2026) identifica la estabilidad política, el Estado de derecho y la rendición de cuentas como dimensiones clave para evaluar la gobernanza. Por lo tanto, sostenemos que la tolerancia promueve la gobernanza, pero debe complementarse con instituciones sólidas y respeto por la ley.</p>

        <p><strong>Gestión pública:</strong> Creemos que la tolerancia también debe estar presente en la relación entre el Estado y sus ciudadanos. Los funcionarios públicos deben actuar con respeto, imparcialidad y rendición de cuentas, independientemente de las diferencias sociales, culturales o políticas. La Organización para la Cooperación y el Desarrollo Económicos (OCDE, 2016) destaca la importancia de la coordinación institucional, la profesionalización de la función pública y la transparencia para mejorar la gestión pública peruana. Por consiguiente, la gobernanza democrática requiere tanto valores éticos como capacidades institucionales.</p>

        <p><strong>Gobernabilidad:</strong> Desde nuestro punto de vista, la tolerancia fomenta la participación de diversos grupos de interés en la toma de decisiones. Reconocer las opiniones divergentes enriquece las políticas públicas y refuerza la legitimidad de las decisiones colectivas. La OCDE (2016) identifica el gobierno abierto y la participación ciudadana como ámbitos clave para mejorar la gobernanza. Sin embargo, creemos que escuchar a los ciudadanos no es suficiente si sus aportaciones no se tienen en cuenta mediante mecanismos transparentes y eficaces.</p>

        <h4>Conclusión</h4>
        <p>Como grupo, llegamos a la conclusión de que la tolerancia es esencial para la democracia, ya que fomenta el respeto, la convivencia y la resolución pacífica de conflictos. Su práctica refuerza la gobernanza, fomenta una administración pública inclusiva y contribuye a una gobernanza participativa. Sin embargo, mantenemos que tolerar opiniones diferentes no significa justificar la violencia, la corrupción o la violación de los derechos. La democracia requiere ciudadanos capaces de entablar un diálogo y autoridades comprometidas con el bien común.</p>

        <h4>Referencias Bibliográficas (APA 7.&ordf; ed.)</h4>
        <p style="padding-left:1.5rem;text-indent:-1.5rem;font-size:0.88rem;">Banco Mundial. (2026). <em>Worldwide governance indicators</em>. https://www.worldbank.org/en/publication/worldwide-governance-indicators</p>
        <p style="padding-left:1.5rem;text-indent:-1.5rem;font-size:0.88rem;">Organización para la Cooperación y el Desarrollo Económicos. (2016). <em>Estudios de la OCDE sobre gobernanza pública: Perú: Gobernanza integrada para un crecimiento inclusivo</em>. OECD Publishing. https://doi.org/10.1787/9789264265226-es</p>
        <p style="padding-left:1.5rem;text-indent:-1.5rem;font-size:0.88rem;">Pontificia Universidad Católica del Perú. (2011, 2 de diciembre). <em>La tolerancia en la democracia (Henry Pease) [PUCP]</em> [Video]. YouTube. https://www.youtube.com/watch?v=yL4He4mvK3w</p>
      </div>
    `
  },
  {
    id: "tolerancia-democracia-infografia",
    title: "La Tolerancia en la Democracia: Gobernabilidad, Gestión Pública y Gobernanza",
    academicCategory: "Infografía de Ética y Gestión Pública · Semana 3",
    fileName: "Infografía sobre tolerancia democrática en Perú.png",
    relativePath: "./actividades%20en%20clase/Infograf%C3%ADa%20sobre%20tolerancia%20democr%C3%A1tica%20en%20Per%C3%BA.png",
    previewThumbnail: "./actividades%20en%20clase/Infograf%C3%ADa%20sobre%20tolerancia%20democr%C3%A1tica%20en%20Per%C3%BA.png",
    week: "semana-3",
    weekLabel: "Semana 3",
    format: "image",
    formatBadge: "Infografía Académica",
    fileSize: "Alta Resolución",
    summary: "Infografía sobre la tolerancia como pilar democrático, analizando su incidencia en la gobernabilidad (búsqueda de consensos), gestión pública (imparcialidad y profesionalización) y gobernanza participativa (gobierno abierto).",
    tags: ["Tolerancia Democrática", "Gobernabilidad", "Gestión Pública", "Infografía", "Semana 3"]
  },
  {
    id: "ia-mercado-laboral-docx",
    title: "Guía 4: La Inteligencia Artificial y su Incidencia en el Mercado Laboral Peruano",
    academicCategory: "Guía de Autoaprendizaje Grupal · Semana 4",
    fileName: "LA INTELIGENCIA ARTIFICIAL Y SU INCIDENCIA EN EL MERCADO LABORAL PERUANO.docx",
    relativePath: "./actividades%20en%20clase/LA%20INTELIGENCIA%20ARTIFICIAL%20Y%20SU%20INCIDENCIA%20EN%20EL%20MERCADO%20LABORAL%20PERUANO.docx",
    previewThumbnail: "./actividades%20en%20clase/IA%20y%20mercado%20laboral%20peruano.png",
    week: "semana-4",
    weekLabel: "Semana 4",
    format: "docx",
    formatBadge: "Documento Académico",
    fileSize: "Word (.docx)",
    summary: "Investigación académica integral sobre la transformación digital y la IA en el empleo peruano: automatización por sectores (INEI), nuevas competencias requeridas, plataformas digitales, marco normativo (Ley N.º 31814, D.S. N.º 115-2025-PCM, Ley N.º 29733) y propuestas de políticas públicas laborales inclusivas.",
    tags: ["Inteligencia Artificial", "Mercado Laboral", "Transformación Digital", "Ley 31814", "Semana 4", "Guía 4"],
    docContentHtml: `
      <div class="doc-sheet">
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;padding-bottom:1rem;margin-bottom:1.25rem;border-bottom:3px solid #0A387D;">
          <div>
            <span style="font-family:var(--font-mono);font-size:0.72rem;font-weight:700;color:#E88320;text-transform:uppercase;letter-spacing:0.08em;">Universidad Científica del Sur · Semana 4</span>
            <h3 style="font-family:var(--font-serif);font-size:1.4rem;color:#0A387D;margin-top:0.2rem;">La Inteligencia Artificial y su Incidencia en el Mercado Laboral Peruano</h3>
          </div>
          <span style="font-family:var(--font-mono);font-size:0.74rem;background:#EEF4FB;color:#0A387D;border:1px solid #C5D8F0;padding:0.3rem 0.65rem;border-radius:3px;">Guía de Autoaprendizaje 4</span>
        </div>

        <p><strong>Integrantes del equipo:</strong> Luis Miguel García Mori (100221138) &middot; Enni Juliana Marchan Infante (100221024) &middot; Enrique García Valdera (100035063) &middot; Milagros Vasquez Morales (100228809) &middot; Erick Enrique Rozand Copara (100233029) &middot; Ricky Jhony Sedano Reyes (100228037) &middot; Samanta Hilda Calle Ruiz (100002537).</p>

        <div class="doc-embedded-figure">
          <img src="./actividades%20en%20clase/IA%20y%20mercado%20laboral%20peruano.png" alt="Organizador Visual de la Inteligencia Artificial y el Mercado Laboral Peruano">
          <div class="doc-embedded-caption"><strong>Figura 1:</strong> Organizador visual síntesis sobre oportunidades, riesgos, implicancias legales y propuestas de política pública para la IA en el Perú.</div>
        </div>

        <h4>1. Introducción</h4>
        <p>La transformación digital es uno de los procesos más significativos de cambio económico, social y organizativo. Su implementación acelerada tras la pandemia por COVID-19 reconfiguró las dinámicas productivas y la gestión del talento en el Perú. En este contexto, la inteligencia artificial (IA) está transformando las actividades laborales, las competencias profesionales requeridas y las relaciones de empleo (Cornejo Cachay, 2023). El objetivo de este informe es analizar críticamente la incidencia de la IA en el mercado laboral peruano, examinando oportunidades, riesgos y el marco regulatorio vigente.</p>

        <h4>2. Transformación Digital e Inteligencia Artificial</h4>
        <p>La transformación digital trasciende la mera adquisición tecnológica: implica un cambio integral en la cultura organizativa, los procesos operativos y los modelos de negocio. La IA, como tecnología capaz de emular funciones cognitivas como el aprendizaje, el razonamiento y la toma de decisiones automatizada, amplifica este proceso al permitir procesar masivos volúmenes de datos en tiempo real.</p>

        <h4>3. Incidencia de la Inteligencia Artificial en el Mercado Laboral Peruano</h4>
        <h5>3.1. Automatización y transformación de las ocupaciones</h5>
        <p>Según estimaciones del Instituto Nacional de Estadística e Informática (INEI, 2025), las ocupaciones con mayor riesgo de sustitución corresponden a tareas administrativas, atención rutinaria al cliente y procesamiento manual de información. Sin embargo, en sectores complejos se observa un fenómeno de complementariedad o aumento de capacidades, donde la IA optimiza la productividad sin desplazar al trabajador calificado.</p>

        <h5>3.2. Oportunidades económicas y profesionales</h5>
        <p>La adopción de IA fomenta la creación de nuevos empleos especializados en ciencia de datos, ciberseguridad, ingeniería de prompts y mantenimiento predictivo. Asimismo, permite que micro y pequeñas empresas peruanas automaticen procesos de facturación, inventario y marketing digital, elevando su competitividad.</p>

        <h5>3.3. Riesgos de desplazamiento y desigualdad laboral</h5>
        <p>El principal riesgo reside en la asimetría formativa y la brecha digital existente en el Perú. La sustitución de empleos no calificados puede profundizar la precarización y la informalidad si no existen programas universales de reconversión laboral (reskilling).</p>

        <h4>4. Transformación Digital, Pandemia y Gestión Pública</h4>
        <p>La emergencia sanitaria por COVID-19 aceleró el despliegue del trabajo remoto y la digitalización de servicios públicos en el Perú (Decreto Legislativo N.º 1412). La incorporación de herramientas inteligentes en entidades como RENIEC, SUNAT y el Poder Judicial evidencia el potencial de la tecnología para optimizar la atención ciudadana con transparencia y celeridad.</p>

        <h4>5. Consecuencias e Implicaciones Legales</h4>
        <p><strong>5.1. Derechos laborales:</strong> El uso de algoritmos para evaluar rendimiento o asignar turnos debe garantizar el principio de no discriminación y el derecho al debido proceso laboral.</p>
        <p><strong>5.2. Protección de datos personales:</strong> Conforme a la Ley N.º 29733, los datos biométricos y perfiles de los trabajadores no pueden ser transferidos ni monetizados sin consentimiento expreso.</p>
        <p><strong>5.3. Regulación de la IA:</strong> El Perú aprobó la <strong>Ley N.º 31814</strong> y su reglamento mediante <strong>Decreto Supremo N.º 115-2025-PCM</strong>, fijando un enfoque ético de IA centrado en la persona y basado en riesgos.</p>
        <p><strong>5.4. Supervisión humana:</strong> Las decisiones que afecten el vínculo laboral o los derechos fundamentales no pueden quedar delegadas exclusivamente a sistemas algorítmicos (human-in-the-loop).</p>

        <h4>6. Posición Crítica y Propuestas del Grupo</h4>
        <p>Como equipo, sostenemos que el desarrollo de la IA en el Perú no debe concebirse como un dilema entre innovación o empleo, sino como una política de Estado orientada a la inclusión digital productiva. Proponemos tres ejes prioritarios: (1) fortalecimiento de la educación digital técnica y universitaria con enfoque regional; (2) fiscalización laboral especializada frente a la gestión algorítmica; y (3) incentivos tributarios para empresas que reinviertan en la reconversión tecnológica de su personal.</p>

        <h4>7. Marco Normativo Complementario</h4>
        <ul>
          <li><strong>Ley N.º 31814 (2023):</strong> Ley que promueve el uso de la inteligencia artificial en favor del desarrollo económico y social del país.</li>
          <li><strong>D.S. N.º 115-2025-PCM:</strong> Reglamento de la Ley de Inteligencia Artificial.</li>
          <li><strong>Ley N.º 29733:</strong> Ley de Protección de Datos Personales.</li>
          <li><strong>R.M. N.º 152-2026-PCM:</strong> Lineamientos de gobernanza ética de algoritmos en la administración pública.</li>
        </ul>

        <h4>8. Conclusiones Grupales</h4>
        <p>Concluimos que la inteligencia artificial representa una oportunidad histórica para superar cuellos de botella en la productividad peruana, pero su beneficio colectivo dependerá de la capacidad del Estado para regular sus asimetrías, resguardar la dignidad de los trabajadores y garantizar un acceso equitativo al conocimiento tecnológico.</p>

        <h4>Referencias (APA 7.&ordf; ed.)</h4>
        <p style="padding-left:1.5rem;text-indent:-1.5rem;font-size:0.88rem;">Cornejo Cachay, D. L. (2023). La inteligencia artificial y su incidencia en el mercado laboral peruano. <em>Revista de Derecho Procesal del Trabajo</em>, 6(8), 179–214. https://doi.org/10.47308/rdpt.v6i8.752</p>
        <p style="padding-left:1.5rem;text-indent:-1.5rem;font-size:0.88rem;">Instituto Nacional de Estadística e Informática. (2025). <em>¿Qué trabajos podrían ser reemplazados por la automatización y la inteligencia artificial generativa en el Perú?</em> https://www.gob.pe/institucion/inei/noticias/1302665</p>
        <p style="padding-left:1.5rem;text-indent:-1.5rem;font-size:0.88rem;">Presidencia del Consejo de Ministros. (2025). <em>Decreto Supremo N.º 115-2025-PCM, que aprueba el Reglamento de la Ley N.º 31814</em>.</p>
        <p style="padding-left:1.5rem;text-indent:-1.5rem;font-size:0.88rem;">Congreso de la República del Perú. (2023). <em>Ley N.º 31814, Ley que promueve el uso de la inteligencia artificial</em>.</p>
      </div>
    `
  },
  {
    id: "ia-mercado-laboral-infografia",
    title: "La Inteligencia Artificial y su Incidencia en el Mercado Laboral Peruano",
    academicCategory: "Organizador Visual e Infografía · Semana 4",
    fileName: "IA y mercado laboral peruano.png",
    relativePath: "./actividades%20en%20clase/IA%20y%20mercado%20laboral%20peruano.png",
    previewThumbnail: "./actividades%20en%20clase/IA%20y%20mercado%20laboral%20peruano.png",
    week: "semana-4",
    weekLabel: "Semana 4",
    format: "image",
    formatBadge: "Infografía Académica",
    fileSize: "Alta Resolución",
    summary: "Organizador visual sobre la transformación digital en el empleo: oportunidades de eficiencia, riesgos de desplazamiento y brecha digital, marco normativo peruano (Ley 31814 y D.S. 115-2025-PCM) y conclusiones del Grupo 1.",
    tags: ["Inteligencia Artificial", "Mercado Laboral", "Organizador Visual", "Semana 4"]
  },
  {
    id: "turismo-conserva-docx",
    title: "Guía 5 – Actividad 1: Turismo que Conserva: Aprovechamiento Sostenible del Potencial Turístico del Perú",
    academicCategory: "Guía de Autoaprendizaje Grupal · Semana 5",
    fileName: "GUÍA 5 actividad 1.docx",
    relativePath: "./actividades%20en%20clase/GU%C3%8DA%205%20actividad%201.docx",
    previewThumbnail: "./actividades%20en%20clase/TURISMO%20SOSTENIBLE%20EN%20EL%20PER%C3%9A%20-%20SEMANA%205.png",
    week: "semana-5",
    weekLabel: "Semana 5",
    format: "docx",
    formatBadge: "Documento Académico",
    fileSize: "Word (.docx)",
    summary: "Propuesta de aprovechamiento turístico sostenible sobre la base de los 36 ecosistemas continentales del Perú (MINAM, 2019) en Costa, Sierra y Selva. Formula 5 acciones transversales: ordenamiento territorial, participación comunitaria, gestión ambiental, límites de carga y educación ecológica (MINCETUR / ONU Turismo).",
    tags: ["Turismo Sostenible", "36 Ecosistemas", "Costa Sierra y Selva", "MINAM MINCETUR", "Semana 5", "Guía 5"],
    docContentHtml: `
      <div class="doc-sheet">
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;padding-bottom:1rem;margin-bottom:1.25rem;border-bottom:3px solid #0A387D;">
          <div>
            <span style="font-family:var(--font-mono);font-size:0.72rem;font-weight:700;color:#E88320;text-transform:uppercase;letter-spacing:0.08em;">Universidad Científica del Sur · Semana 5</span>
            <h3 style="font-family:var(--font-serif);font-size:1.4rem;color:#0A387D;margin-top:0.2rem;">Guía 5 – Actividad 1: Turismo que Conserva: Aprovechamiento Sostenible del Potencial Turístico del Perú</h3>
          </div>
          <span style="font-family:var(--font-mono);font-size:0.74rem;background:#EEF4FB;color:#0A387D;border:1px solid #C5D8F0;padding:0.3rem 0.65rem;border-radius:3px;">Guía de Autoaprendizaje 5</span>
        </div>

        <p><strong>Integrantes del equipo:</strong> Luis Miguel García Mori (100221138) &middot; Enni Juliana Marchan Infante (100221024) &middot; Enrique García Valdera (100035063) &middot; Milagros Vasquez Morales (100228809) &middot; Erick Enrique Rozand Copara (100233029) &middot; Ricky Jhony Sedano Reyes (100228037) &middot; Samanta Hilda Calle Ruiz (100002537).</p>

        <div class="doc-embedded-figure">
          <img src="./actividades%20en%20clase/TURISMO%20SOSTENIBLE%20EN%20EL%20PER%C3%9A%20-%20SEMANA%205.png" alt="Infografía Turismo Sostenible en el Perú">
          <div class="doc-embedded-caption"><strong>Figura 1:</strong> Infografía síntesis: Aprovechar el potencial turístico sin degradar el patrimonio natural y cultural (36 ecosistemas continentales).</div>
        </div>

        <h4>Diagnóstico y Potencial Ecosistémico</h4>
        <p>El Perú posee un importante potencial turístico sustentado en su diversidad de ecosistemas, paisajes y manifestaciones culturales. Según el Ministerio del Ambiente (MINAM, 2019), el país cuenta con 36 ecosistemas continentales identificados, distribuidos en la Costa, Sierra y Selva. Esta riqueza constituye una oportunidad para generar empleo e ingresos, siempre que el turismo respete los límites ecológicos y contribuya al bienestar de las comunidades anfitrionas.</p>

        <p>El turismo sostenible busca equilibrar los beneficios económicos, la conservación ambiental y el respeto sociocultural, considerando sus impactos presentes y futuros (ONU Turismo, s. f.). Por ello, proponemos implementar un modelo de gestión turística sostenible y participativa, adaptado a las características de las tres regiones naturales del Perú.</p>

        <h4>Estrategias de Turismo Sostenible por Región</h4>
        <ul>
          <li><strong>En la Costa:</strong> Donde destacan los ecosistemas marinos, playas, humedales y bosques secos, se propone fortalecer el turismo de naturaleza y cultural mediante el ahorro de agua, la adecuada gestión de residuos, la protección de hábitats sensibles y la regulación de actividades turísticas. Estas medidas contribuirían a reducir la contaminación y la presión sobre los recursos naturales.</li>
          <li><strong>En la Sierra:</strong> Caracterizada por paisajes montañosos, ecosistemas altoandinos y patrimonio cultural, se propone impulsar el turismo rural y comunitario mediante senderos señalizados, manejo de residuos, uso eficiente del agua y participación de las comunidades en la prestación de servicios turísticos. Estas acciones permitirían conservar el patrimonio y distribuir mejor los beneficios económicos.</li>
          <li><strong>En la Selva:</strong> Donde se concentra una importante biodiversidad, se propone promover el ecoturismo y la observación responsable de flora y fauna, utilizando grupos pequeños, guías locales capacitados, infraestructura de bajo impacto y mecanismos de protección de los ecosistemas. Estas medidas contribuirían a conservar los bosques y generar oportunidades económicas compatibles con la naturaleza.</li>
        </ul>

        <h4>Cinco Acciones Transversales para un Turismo Eficiente y Sostenible</h4>
        <ol>
          <li><strong>Planificación territorial:</strong> Basada en información ambiental, zonificación ecológica y capacidad de carga turística.</li>
          <li><strong>Participación comunitaria:</strong> Involucramiento de las comunidades locales y distribución equitativa de los beneficios económicos.</li>
          <li><strong>Gestión eficiente de recursos:</strong> Ahorro riguroso del agua, uso de energías renovables y manejo integral de residuos sólidos.</li>
          <li><strong>Límites de visitantes y monitoreo:</strong> Establecimiento de límites de carga en sitios vulnerables y monitoreo permanente de impactos.</li>
          <li><strong>Educación ambiental y valoración patrimonial:</strong> Sensibilización a visitantes y operadores sobre el respeto a la naturaleza y las identidades culturales locales (MINCETUR, 2019, 2023).</li>
        </ol>

        <div class="doc-embedded-figure" style="margin-top:1.5rem;">
          <img src="./actividades%20en%20clase/POTENCIAL%20TUR%C3%8DSTICO%20DEL%20PER%C3%9A%20-%20SEMANA%205.png" alt="Infografía Potencial Turístico del Perú: Uso Sostenible y Eficiente">
          <div class="doc-embedded-caption"><strong>Figura 2:</strong> Infografía complementaria: Potencial turístico del Perú, riqueza natural (12 patrimonios UNESCO, 84 zonas de vida) y metas de sostenibilidad.</div>
        </div>

        <h4>Conclusión</h4>
        <p>En conclusión, el potencial turístico peruano debe aprovecharse mediante actividades que generen valor económico sin comprometer la biodiversidad, los servicios ecosistémicos ni los derechos de las comunidades. Un turismo verdaderamente sostenible no solo atrae visitantes: conserva los recursos y mejora la calidad de vida de la población local.</p>

        <h4>Referencias (APA 7.&ordf; ed.)</h4>
        <p style="padding-left:1.5rem;text-indent:-1.5rem;font-size:0.88rem;">Ministerio del Ambiente. (2019). <em>Mapa Nacional de Ecosistemas del Perú: Memoria explicativa</em>. MINAM.</p>
        <p style="padding-left:1.5rem;text-indent:-1.5rem;font-size:0.88rem;">Ministerio de Comercio Exterior y Turismo. (2023). <em>Plan Estratégico Nacional de Turismo – PENTUR 2023–2030</em>. MINCETUR.</p>
        <p style="padding-left:1.5rem;text-indent:-1.5rem;font-size:0.88rem;">Organización Mundial del Turismo (ONU Turismo). (s. f.). <em>Desarrollo sostenible del turismo</em>.</p>
      </div>
    `
  },
  {
    id: "turismo-sostenible-infografia",
    title: "Turismo Sostenible en el Perú: Aprovechamiento sin Degradación Patrimonial",
    academicCategory: "Infografía de Ecosistemas y Gestión Turística · Semana 5",
    fileName: "TURISMO SOSTENIBLE EN EL PERÚ - SEMANA 5.png",
    relativePath: "./actividades%20en%20clase/TURISMO%20SOSTENIBLE%20EN%20EL%20PER%C3%9A%20-%20SEMANA%205.png",
    previewThumbnail: "./actividades%20en%20clase/TURISMO%20SOSTENIBLE%20EN%20EL%20PER%C3%9A%20-%20SEMANA%205.png",
    week: "semana-5",
    weekLabel: "Semana 5",
    format: "image",
    formatBadge: "Infografía Académica",
    fileSize: "Alta Resolución",
    summary: "Infografía de investigación territorial sobre los 36 ecosistemas continentales del Perú (MINAM, 2019), estrategias de sostenibilidad en Costa, Sierra y Selva, y las 5 acciones clave para el aprovechamiento turístico responsable.",
    tags: ["Turismo Sostenible", "Costa Sierra y Selva", "36 Ecosistemas", "Semana 5"]
  },
  {
    id: "potencial-turistico-infografia",
    title: "Potencial Turístico del Perú: Uso Sostenible y Eficiente de los Recursos",
    academicCategory: "Infografía Territorial y Económica · Semana 5",
    fileName: "POTENCIAL TURÍSTICO DEL PERÚ - SEMANA 5.png",
    relativePath: "./actividades%20en%20clase/POTENCIAL%20TUR%C3%8DSTICO%20DEL%20PER%C3%9A%20-%20SEMANA%205.png",
    previewThumbnail: "./actividades%20en%20clase/POTENCIAL%20TUR%C3%8DSTICO%20DEL%20PER%C3%9A%20-%20SEMANA%205.png",
    week: "semana-5",
    weekLabel: "Semana 5",
    format: "image",
    formatBadge: "Infografía Académica",
    fileSize: "Alta Resolución",
    summary: "Lámina infográfica sobre los 12 Patrimonios Mundiales de la UNESCO en Perú, 84 zonas de vida, aporte del 2.9 % al PBI, 1.2 millones de empleos y estrategias de resiliencia frente al cambio climático.",
    tags: ["Potencial Turístico", "UNESCO", "Biodiversidad", "PBI Empleo", "Semana 5"]
  },
  {
    id: "conflicto-las-bambas-docx",
    title: "Guía 5 – Actividad 2: Conflicto Socioambiental de Las Bambas",
    academicCategory: "Guía de Autoaprendizaje Grupal · Semana 5",
    fileName: "GUÍA 5 actividad 2.docx",
    relativePath: "./actividades%20en%20clase/GU%C3%8DA%205%20actividad%202.docx",
    previewThumbnail: "./actividades%20en%20clase/CONFLICTO%20DE%20LAS%20BAMBAS%20-%20L%C3%8DNEA%20DE%20TIEMPO%20-%20SEMANA%205.png",
    week: "semana-5",
    weekLabel: "Semana 5",
    format: "docx",
    formatBadge: "Documento Académico",
    fileSize: "Word (.docx)",
    summary: "Estudio de caso sobre el conflicto socioambiental en Cotabambas, Apurímac: cronología histórica de hitos 2004–2022 (Defensoría del Pueblo / CooperAcción), matriz comparativa de causas y consecuencias asociadas al corredor minero, y propuestas de gobernanza territorial y diálogo intercultural.",
    tags: ["Las Bambas", "Conflicto Socioambiental", "Minería y Corredor Vial", "Defensoría del Pueblo", "Semana 5", "Guía 5"],
    docContentHtml: `
      <div class="doc-sheet">
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;padding-bottom:1rem;margin-bottom:1.25rem;border-bottom:3px solid #0A387D;">
          <div>
            <span style="font-family:var(--font-mono);font-size:0.72rem;font-weight:700;color:#E88320;text-transform:uppercase;letter-spacing:0.08em;">Universidad Científica del Sur · Semana 5</span>
            <h3 style="font-family:var(--font-serif);font-size:1.4rem;color:#0A387D;margin-top:0.2rem;">Guía 5 – Actividad 2: Conflicto Socioambiental de Las Bambas</h3>
          </div>
          <span style="font-family:var(--font-mono);font-size:0.74rem;background:#EEF4FB;color:#0A387D;border:1px solid #C5D8F0;padding:0.3rem 0.65rem;border-radius:3px;">Guía de Autoaprendizaje 5</span>
        </div>

        <p><strong>Integrantes del equipo:</strong> Luis Miguel García Mori (100221138) &middot; Enni Juliana Marchan Infante (100221024) &middot; Enrique García Valdera (100035063) &middot; Milagros Vasquez Morales (100228809) &middot; Erick Enrique Rozand Copara (100233029) &middot; Ricky Jhony Sedano Reyes (100228037) &middot; Samanta Hilda Calle Ruiz (100002537).</p>

        <div class="doc-embedded-figure">
          <img src="./actividades%20en%20clase/CONFLICTO%20DE%20LAS%20BAMBAS%20-%20L%C3%8DNEA%20DE%20TIEMPO%20-%20SEMANA%205.png" alt="Línea de tiempo del Conflicto de Las Bambas">
          <div class="doc-embedded-caption"><strong>Figura 1:</strong> Infografía: Línea de tiempo de los principales hitos, causas, consecuencias y lecciones del conflicto socioambiental de Las Bambas (2004–2022).</div>
        </div>

        <h4>1. Contextualización</h4>
        <p>El conflicto de Las Bambas se desarrolla principalmente en la provincia de Cotabambas, departamento de Apurímac, en torno a una de las principales operaciones mineras de cobre del Perú. Su origen y evolución están relacionados con modificaciones del proyecto, preocupaciones por los impactos ambientales del transporte de concentrados, disputas sobre el uso de vías y tierras, demandas de compensación y desarrollo local, así como desacuerdos sobre el cumplimiento de compromisos. La Defensoría del Pueblo documentó estos acontecimientos en su cronología institucional del caso Las Bambas, que abarca el periodo 2003–2019.</p>

        <h4>2. Línea de Tiempo del Conflicto (2004–2022)</h4>
        <ul>
          <li><strong>2004 — Adjudicación del proyecto:</strong> Se adjudica el proyecto minero Las Bambas. Comienza una etapa de desarrollo y relaciones con las comunidades del área de influencia.</li>
          <li><strong>2014 — Cambio de operador y modificaciones:</strong> El proyecto pasa a manos de un consorcio encabezado por MMG. Las modificaciones del diseño y la logística minera adquieren notoriedad.</li>
          <li><strong>2015 — Escalamiento de las protestas:</strong> En septiembre se registran movilizaciones contra cambios del proyecto. El 28 de septiembre ocurren enfrentamientos con tres personas fallecidas y numerosos heridos.</li>
          <li><strong>2016 — Inicio comercial y nuevos enfrentamientos:</strong> Comienza la producción comercial. Persisten protestas por el corredor vial minero y el 14 de octubre fallece el comunero Quintino Cereceda Huisa.</li>
          <li><strong>2017–2018 — Disputas por el corredor minero:</strong> Continúan bloqueos y reclamos sobre la vía utilizada para transportar concentrados. Se cuestionan decisiones de clasificación vial y se solicitan compensaciones.</li>
          <li><strong>2019 — Crisis y negociación:</strong> Nuevos bloqueos del corredor minero y controversias con comunidades, entre ellas Fuerabamba, llevan a la intervención de autoridades y procesos de diálogo.</li>
          <li><strong>2022 — Paralización y exigencias comunales:</strong> Las protestas de comunidades como Fuerabamba y Huancuire se intensifican. La Defensoría informa que la operación minera llevaba 29 días suspendida al 18 de mayo y exhorta a restablecer el diálogo.</li>
        </ul>

        <h4>3. Matriz Comparativa de Causas y Consecuencias</h4>
        <div class="apa-table-scroll">
          <table class="apa-table" style="min-width:650px;">
            <thead>
              <tr>
                <th>Causas Principales Documentadas</th>
                <th>Consecuencias Asociadas en el Territorio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Modificaciones del proyecto y preocupaciones por sus efectos ambientales (polvo, ruido, transporte).</td>
                <td>Desconfianza y controversias entre las comunidades campesinas, la empresa minera y el Estado.</td>
              </tr>
              <tr>
                <td>Transporte diario de concentrados de cobre por carretera terrestre y disputas sobre la clasificación del corredor minero.</td>
                <td>Bloqueos sistemáticos de vías, dificultades severas de transporte y paralizaciones prolongadas de las operaciones mineras.</td>
              </tr>
              <tr>
                <td>Demandas de compensación económica, proyectos de desarrollo local y desacuerdos en el cumplimiento de compromisos suscritos.</td>
                <td>Protestas sociales recurrentes, desgaste institucional y procesos de negociación prolongados sin cierre definitivo.</td>
              </tr>
              <tr>
                <td>Debilidades en los mecanismos de participación ciudadana, comunicación oportuna y prevención temprana de conflictos.</td>
                <td>Deterioro continuo de las relaciones institucionales y aumento de la tensión social en el sur andino.</td>
              </tr>
              <tr>
                <td>Enfrentamientos violentos durante las jornadas de protesta y desalojo de vías.</td>
                <td>Pérdida irreparable de vidas humanas, decenas de personas heridas y grave afectación de derechos y seguridad ciudadana.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4>4. Propuestas de Solución y Gobernanza</h4>
        <p>Se propone fortalecer un mecanismo permanente de diálogo intercultural, con participación vinculante de las comunidades, la empresa y las instituciones públicas del Estado. Este espacio debería incorporar compromisos verificables, cronogramas públicos, responsables definidos y mecanismos independientes de seguimiento.</p>
        <p>Asimismo, es indispensable implementar un <strong>monitoreo ambiental participativo</strong> del corredor minero, garantizar información transparente y accesible sobre cualquier modificación del proyecto, atender las demandas territoriales mediante procedimientos legales claros y priorizar inversiones sociales concertadas en educación, salud e infraestructura hídrica.</p>

        <h4>Conclusión</h4>
        <p>El caso Las Bambas demuestra que la explotación de recursos minerales no garantiza por sí sola el desarrollo sostenible. Se requiere gobernanza territorial sólida, transparencia, participación comunitaria efectiva, respeto irrestricto de los derechos humanos y una distribución equitativa de los beneficios económicos para construir una paz social duradera.</p>

        <h4>Referencias (APA 7.&ordf; ed.)</h4>
        <p style="padding-left:1.5rem;text-indent:-1.5rem;font-size:0.88rem;">Defensoría del Pueblo. (2019, 5 de abril). <em>Cronología del conflicto social del caso Las Bambas</em>. https://www.defensoria.gob.pe/cronologia-del-conflicto-social-del-caso-las-bambas/</p>
        <p style="padding-left:1.5rem;text-indent:-1.5rem;font-size:0.88rem;">Defensoría del Pueblo. (2022, 18 de mayo). <em>Defensoría del Pueblo exhorta al Ejecutivo, a dirigentes comunales y a empresa minera a restablecer el diálogo en Challhuahuacho y Coyllurqui</em>. https://www.defensoria.gob.pe/defensoria-del-pueblo-exhorta-al-ejecutivo-a-dirigentes-comunales-y-a-empresa-minera-a-restablecer-el-dialogo-en-challhuahuacho-y-coyllurqui/</p>
        <p style="padding-left:1.5rem;text-indent:-1.5rem;font-size:0.88rem;">Las Bambas. (s. f.). <em>Hitos históricos</em>. https://www.lasbambas.com/seccion-acerca-de-las-bambas-historia</p>
        <p style="padding-left:1.5rem;text-indent:-1.5rem;font-size:0.88rem;">Leyva, A., &amp; Martínez, D. (2022). <em>Territorialidad de los conflictos sociales: Los casos de Cusco y Apurímac</em>. CooperAcción. https://cooperaccion.org.pe/wp-content/uploads/2022/10/Territorialidad-de-los-conflictos-Leyva-Martinez-CooperAccion-2022.pdf</p>
      </div>
    `
  },
  {
    id: "linea-tiempo-las-bambas-infografia",
    title: "Conflicto de Las Bambas (Apurímac): Línea de Tiempo de Principales Hitos (2004–2022)",
    academicCategory: "Infografía de Cronología Socioambiental · Semana 5",
    fileName: "CONFLICTO DE LAS BAMBAS - LÍNEA DE TIEMPO - SEMANA 5.png",
    relativePath: "./actividades%20en%20clase/CONFLICTO%20DE%20LAS%20BAMBAS%20-%20L%C3%8DNEA%20DE%20TIEMPO%20-%20SEMANA%205.png",
    previewThumbnail: "./actividades%20en%20clase/CONFLICTO%20DE%20LAS%20BAMBAS%20-%20L%C3%8DNEA%20DE%20TIEMPO%20-%20SEMANA%205.png",
    week: "semana-5",
    weekLabel: "Semana 5",
    format: "image",
    formatBadge: "Infografía Académica",
    fileSize: "Alta Resolución",
    summary: "Lámina cronológica sobre el conflicto minero en Cotabambas: hitos históricos (2004, 2014, 2015, 2016, 2017–2018, 2019, 2022), análisis de causas y consecuencias en el corredor vial, y propuestas para la gobernanza territorial.",
    tags: ["Las Bambas", "Línea de Tiempo", "Conflicto Minero", "Apurímac", "Semana 5"]
  }
];
