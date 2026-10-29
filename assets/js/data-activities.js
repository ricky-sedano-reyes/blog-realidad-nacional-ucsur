/**
 * ============================================================================
 * UNIVERSIDAD CIENTÍFICA DEL SUR (UCSUR) — CATÁLOGO DE «ACTIVIDADES EN CLASE»
 * Archivo: assets/js/data-activities.js
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
    tags: ["Geopolítica del Perú", "Línea de Tiempo 1851–2024", "Acuerdos Multilaterales", "Tratados Fronterizos"],
    docContentHtml: `
      <div class="doc-sheet">
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;padding-bottom:1rem;margin-bottom:1.25rem;border-bottom:3px solid #0A387D;">
          <div>
            <span style="font-family:var(--font-mono);font-size:0.72rem;font-weight:700;color:#E88320;text-transform:uppercase;letter-spacing:0.08em;">Universidad Científica del Sur · Semana 1</span>
            <h3 style="font-family:var(--font-serif);font-size:1.45rem;color:#0A387D;margin-top:0.2rem;">Actividad en Clase 1: Eventos Geopolíticos, Acuerdos Multilaterales y Tratados Fronterizos</h3>
          </div>
          <span style="font-family:var(--font-mono);font-size:0.74rem;background:#EEF4FB;color:#0A387D;border:1px solid #C5D8F0;padding:0.3rem 0.65rem;border-radius:3px;">Trabajo Grupal · Semana 1</span>
        </div>

        <p><strong>Integrantes del equipo:</strong> García Mori, Luis Miguel · García Valdera, Enrique · Marchan Infante, Enni Juliana · Rozand Copara, Erick Enrique · Sedano Reyes, Ricky Jhony · Vasquez Morales, Milagros.</p>

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
    tags: ["Guía de Autoaprendizaje", "Ventajas Geopolíticas", "Recursos Naturales", "Megapuerto de Chancay"],
    docContentHtml: `
      <div class="doc-sheet">
        <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:1rem;padding-bottom:1rem;margin-bottom:1.25rem;border-bottom:3px solid #0A387D;">
          <div>
            <span style="font-family:var(--font-mono);font-size:0.72rem;font-weight:700;color:#E88320;text-transform:uppercase;letter-spacing:0.08em;">Universidad Científica del Sur · Semana 1</span>
            <h3 style="font-family:var(--font-serif);font-size:1.45rem;color:#0A387D;margin-top:0.2rem;">Guía de Autoaprendizaje 1: Ventajas Geopolíticas y Potencial de Recursos Naturales del Perú</h3>
          </div>
          <span style="font-family:var(--font-mono);font-size:0.74rem;background:#EEF4FB;color:#0A387D;border:1px solid #C5D8F0;padding:0.3rem 0.65rem;border-radius:3px;">Guía de Autoaprendizaje · Semana 1</span>
        </div>

        <p><strong>Integrantes del equipo:</strong> García Mori, Luis Miguel · García Valdera, Enrique · Marchan Infante, Enni Juliana · Rozand Copara, Erick Enrique · Sedano Reyes, Ricky Jhony · Vasquez Morales, Milagros.</p>

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
  }
];
