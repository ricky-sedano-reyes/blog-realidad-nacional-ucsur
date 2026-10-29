# Portal Académico EC1 — El Boom Agroexportador Peruano y sus Impactos Socioambientales

**Universidad Científica del Sur (UCSUR)**  
**Asignatura:** Análisis de la Realidad Nacional y Ambiental (Ciclo 2026-2)  
**Evaluación:** Evaluación Continua 1 (EC1) — Informe Académico, Panel de Análisis y Portafolio de Actividades  
**Docente:** Prof. Giovanni Paolo Figari Salas  
**Enlace Oficial del Blog:** https://blog-realidad-nacional-ucsur.netlify.app/  

---

## Integrantes del Grupo 1

| Código | Apellidos y Nombres | Sección Responsable en el Informe y Panel |
| :--- | :--- | :--- |
| `100221138` | **García Mori, Luis Miguel** | Sección 1 (Introducción) y Sección 2.1 (Descripción de la problemática) |
| `100035063` | **García Valdera, Enrique** | Sección 2.2 (Contexto histórico y social desde la República) |
| `100221024` | **Marchan Infante, Enni Juliana** | Sección 2.3 (Causas: social, económica, política y ambiental) |
| `100233029` | **Rozand Copara, Erick Enrique** | Sección 2.4 (Consecuencias: social, económica, política y ambiental) |
| `100228037` | **Sedano Reyes, Ricky Jhony** | Sección 2.5 y Tabla 1 APA (Relación entre los tres hechos) |
| `100228809` | **Vasquez Morales, Milagros** | Sección 2.6 (Desafíos territoriales y sostenibilidad) y Sección 3 (Conclusiones) |

---

## Arquitectura del Proyecto

```text
BLOG/
├── index.html                          # Publicación principal (Informe Académico + Laboratorio de Datos + Panel)
├── actividades.html                    # Entrada directa a la sección «Actividades en clase»
├── styles.css                          # Hoja de estilos maestra (importa módulos CSS institucionales UCSUR)
├── app.js                              # Inicializador principal de la aplicación
├── logo-ucsur.png                      # Logotipo oficial de la Universidad Científica del Sur
├── netlify.toml                        # Configuración de despliegue continuo para Netlify
├── TRABAJO_GRUPAL_Analisis_realidad_FINAL_v2.docx # Informe oficial corregido en formato Word (APA 7)
├── actividades en clase/               # Carpeta oficial de evidencias (Semanas 1, 2 y 3)
│   ├── Actividad en clase 1..docx
│   ├── Guía 1.docx
│   ├── EL COBRE - RECURSO NO RENOVABLE -  SEMANA 1.jpeg
│   ├── INCENDIOS FORESTALES EN PERÚ - SEMANA 2.jpeg
│   ├── OSO DE ANTEOJOS - SEMANA 2.jpeg
│   ├── PARQUES NACIONALES DEL PERÚ -  SEMANA 2.jpeg
│   └── extorcion en lima metropolitana- semana 3.jpeg
└── assets/
    ├── css/
    │   ├── variables.css               # Paleta institucional UCSUR (#0A387D, #E88320) y tokens tipográficos
    │   ├── layout.css                  # Maquetación editorial Swiss Grid, cabecera, TOC y estructura
    │   ├── components.css              # Gráficos interactivos, Atlas regional, Tabla 1 APA, Lightbox y Lector Word
    │   └── responsive.css              # Diseño adaptable (móvil, tablet, escritorio) e impresión académica
    ├── js/
    │   ├── data-report.js              # Base de datos estadística (2023–2026), Atlas regional y Guía de Panel
    │   ├── data-activities.js          # Catálogo conectado a ./actividades en clase/ y contenido de documentos
    │   ├── charts-engine.js            # Motor de visualización interactiva y filtro de columnas de Tabla 1
    │   └── ui-controller.js            # Navegación, cronómetro de 15 min, buscador Ctrl+K, Lightbox y Lector .docx
    └── img/
        ├── logo-ucsur.png
        ├── linea-tiempo-geopolitica.jpeg
        ├── evidencia-canvas-act1.png
        └── evidencia-canvas-guia1.png
```

---

## Despliegue en GitHub y Netlify

1. Sube este repositorio a **GitHub**.
2. En **Netlify**, selecciona **Add new site → Import an existing project → GitHub**.
3. El archivo `netlify.toml` configurará automáticamente la publicación desde la raíz (`.`) sin requerir pasos adicionales de compilación.

