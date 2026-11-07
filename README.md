# Portal Académico EC1 — PROBLEMÁTICA DE LA AGROEXPORTACIÓN EN EL PERÚ: IMPACTO EN EL ÁMBITO SOCIOAMBIENTAL

**Universidad Científica del Sur (UCSUR)**  
**Asignatura:** Análisis de la Realidad Nacional y Ambiental (Ciclo 2026-2)  
**Evaluación:** Evaluación Continua 1 (EC1) — Informe Académico y Portafolio de Actividades  
**Docente:** Prof. Giovanni Paolo Figari Salas  
**Enlace Oficial del Blog:** https://blog-realidad-nacional-ucsur.netlify.app/  

---

## Integrantes del Grupo 1

| Código | Apellidos y Nombres |
| :--- | :--- |
| `100221138` | **García Mori, Luis Miguel** |
| `100035063` | **García Valdera, Enrique** |
| `100221024` | **Marchan Infante, Enni Juliana** |
| `100233029` | **Rozand Copara, Erick Enrique** |
| `100228037` | **Sedano Reyes, Ricky Jhony** |
| `100228809` | **Vasquez Morales, Milagros** |
| `100002537` | **Calle Ruiz, Samanta Hilda** |

---

## Arquitectura del Proyecto

```text
BLOG/
├── index.html                          # Publicación principal (Informe Académico + Laboratorio de Datos + Actividades)
├── actividades.html                    # Entrada directa a la sección «Actividades en clase» (18 evidencias)
├── styles.css                          # Hoja de estilos maestra (importa módulos CSS institucionales UCSUR)
├── app.js                              # Inicializador principal de la aplicación
├── logo-ucsur.png                      # Logotipo oficial de la Universidad Científica del Sur
├── netlify.toml                        # Configuración de despliegue continuo para Netlify
├── PROBLEMÁTICA DE LA AGROEXPORTACIÓN EN EL PERÚ - IMPACTO EN EL ÁMBITO SOCIOAMBIENTAL.docx # Informe oficial en formato Word (APA 7)
├── actividades en clase/               # Portafolio completo de evidencias académicas (Semanas 1 a 5)
│   ├── Actividad en clase 1..docx      # Semana 1 (Geopolítica y Tratados)
│   ├── Guía 1.docx                     # Semana 1 (Ventajas Geopolíticas y Recursos)
│   ├── EL COBRE - RECURSO NO RENOVABLE -  SEMANA 1.jpeg # Semana 1 (Infografía)
│   ├── INCENDIOS FORESTALES EN PERÚ - SEMANA 2.jpeg     # Semana 2 (Infografía)
│   ├── OSO DE ANTEOJOS - SEMANA 2.jpeg                  # Semana 2 (Infografía)
│   ├── PARQUES NACIONALES DEL PERÚ -  SEMANA 2.jpeg     # Semana 2 (Infografía)
│   ├── extorcion en lima metropolitana- semana 3.jpeg   # Semana 3 (Infografía)
│   ├── CHOQUE DE PODERES Y DEGRADACIÓN INSTITUCIONAL EN EL PERÚ.docx # Semana 3 (Guía 3)
│   ├── Choque de poderes en Perú.png                    # Semana 3 (Infografía Guía 3)
│   ├── LA TOLERANCIA EN LA DEMOCRACIA.docx              # Semana 3 (Guía 3)
│   ├── Infografía sobre tolerancia democrática en Perú.png # Semana 3 (Infografía Guía 3)
│   ├── LA INTELIGENCIA ARTIFICIAL Y SU INCIDENCIA EN EL MERCADO LABORAL PERUANO.docx # Semana 4 (Guía 4)
│   ├── IA y mercado laboral peruano.png                 # Semana 4 (Infografía Guía 4)
│   ├── GUÍA 5 actividad 1.docx                         # Semana 5 (Guía 5 - Turismo Sostenible)
│   ├── TURISMO SOSTENIBLE EN EL PERÚ - SEMANA 5.png     # Semana 5 (Infografía Guía 5)
│   ├── POTENCIAL TURÍSTICO DEL PERÚ - SEMANA 5.png      # Semana 5 (Infografía Guía 5)
│   ├── GUÍA 5 actividad 2.docx                         # Semana 5 (Guía 5 - Las Bambas)
│   └── CONFLICTO DE LAS BAMBAS - LÍNEA DE TIEMPO - SEMANA 5.png # Semana 5 (Infografía Guía 5)
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

