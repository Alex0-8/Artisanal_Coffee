[English Version](#english)

# ☕ Artisanal Coffee – Landing de Café

<div align="center">
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white&style=flat-square" alt="React" /></a>
  <a href="https://styled-components.com/"><img src="https://img.shields.io/badge/Styled%20Components-DB7093?logo=styled-components&logoColor=white&style=flat-square" alt="Styled Components" /></a>
  <a href="https://testing-library.com/"><img src="https://img.shields.io/badge/Jest%20%2B%20RTL-99424B?logo=jest&logoColor=white&style=flat-square" alt="Jest + RTL" /></a>
  <a href="https://alex0-8.github.io/Artisanal_Coffee"><img src="https://img.shields.io/badge/Live%20Demo-brightgreen?logo=vercel&logoColor=white&style=flat-square" alt="Live demo" /></a>
</div>

---

**Artisanal Coffee** es una landing page responsiva de una cafetería ficticia llamada **Café Crate**. Construida con React (Create React App) y estilizada con styled-components, presenta planes de suscripción, testimonios, sección "Cómo funciona" y un formulario accesible para unirse.

🔗 **Demo en vivo** → [Artisanal Coffee](https://alex0-8.github.io/Artisanal_Coffee)

<div align="center">
  <img width="300" height="auto" alt="ArtisanalCoffee_Small" src="https://github.com/user-attachments/assets/3ce5b604-d02e-4c58-8dc8-ca02e859d0d2" />
  <img width="500" height="auto" alt="ArtisanalCoffee_DEsktop" src="https://github.com/user-attachments/assets/665407d9-d273-40c2-9248-a019a41c50c7" />
</div>

---

## ✨ Características principales

- Diseño **responsive mobile-first** con imágenes de alta calidad
- Navegación fija con logo y enlaces a secciones internas
- Sección de planes de suscripción con diferentes opciones (Básico, Clásico, Premium)
- Formulario modal con control de foco, validación y trap-focus accesible
- Testimonios con fotos y comentarios de clientes satisfechos
- Sección "Cómo funciona" explicando el proceso de entrega
- FAQ interactivo y pie de página con derechos reservados
- Estilizado con **styled-components** y tema global
- Pruebas básicas usando **Jest + React Testing Library**

---

## 🛠️ Stack Tecnológico

| Categoría          | Tecnología / Herramienta                          | Notas                                      |
|--------------------|---------------------------------------------------|--------------------------------------------|
| Framework          | React                          | SPA con scripts ya configurados            |
| Lenguaje           | JavaScript                                        | Estructura funcional con hooks             |
| Estilos            | styled-components                                 | Tema central y estilos encapsulados        |
| Formularios        | Hooks personalizados                              | Validación y accesibilidad manual          |
| Imagen & Assets    | WebP/AVIF + jpg                                   | Optimización para performance              |
| Testing            | Jest + React Testing Library                      | Componentes clave y formulario             |
| Deploy             | gh-pages                                          | Publicación en GitHub Pages                |

---

## 🔥 Retos enfrentados y cómo los resolví

| Reto                                          | Solución aplicada                                                                 | Impacto / Aprendizaje                              |
|-----------------------------------------------|-----------------------------------------------------------------------------------|----------------------------------------------------|
| Mantener foco dentro del modal de suscripción | Implementé `useEffect` con trap-focus y cierre al hacer click fuera             | Accesibilidad mejorada y UX más fluida              |
| Layout responsive con imágenes grandes        | Uso de `picture` con formatos AVIF/WebP y media queries                        | Carga más rápida en móviles y mejor aspecto visual  |
| Creación de componente FAQ interactivo        | Estado local por ítem + animaciones simples                                    | Sección informativa sin sobrecargar la UI           |
| Probar interacciones sin librerías externas   | Escribí tests manuales simulando envío y errores                               | Confianza en la lógica del formulario               |

---

## 🚀 Cómo empezar 

### 1. ¿Qué necesito tener instalado?

- **Node.js** versión 16 o superior   
  → [Descargar](https://nodejs.org/)

### 2. Pasos para verlo en tu computadora

```bash
git clone https://github.com/Alex0-8/Artisanal_Coffee.git
cd artisanal_coffe
npm install
npm start
```
→ Abre http://localhost:3000 en tu navegador.

Comandos útiles

```bash
  npm start            # Modo desarrollo
  npm test             # Ejecutar pruebas
  npm run build        # Generar build de producción
```

---

# 📄 Licencia
Siéntete libre de usar, modificar y aprender de este proyecto.
Última actualización: 1 de Marzo de 2026
¡Gracias por visitar Café Crate!

---

## English

# ☕ Artisanal Coffee – Coffee Landing Page

<div align="center">
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white&style=flat-square" alt="React" /></a>
  <a href="https://styled-components.com/"><img src="https://img.shields.io/badge/Styled%20Components-DB7093?logo=styled-components&logoColor=white&style=flat-square" alt="Styled Components" /></a>
  <a href="https://testing-library.com/"><img src="https://img.shields.io/badge/Jest%20%2B%20RTL-99424B?logo=jest&logoColor=white&style=flat-square" alt="Jest + RTL" /></a>
  <a href="https://alex0-8.github.io/Artisanal_Coffee"><img src="https://img.shields.io/badge/Live%20Demo-brightgreen?logo=vercel&logoColor=white&style=flat-square" alt="Live demo" /></a>
</div>

---

**Artisanal Coffee** is a responsive single-page landing built for a fictional café called **Café Crate**. Created with React (Create React App) and styled-components, the site showcases subscription plans, testimonials, a "how it works" section and an accessible signup form.

🔗 **Live demo** → [Artisanal Coffee](https://alex0-8.github.io/Artisanal_Coffee)

<div align="center">
  <img width="300" height="auto" alt="ArtisanalCoffee_Small" src="https://github.com/user-attachments/assets/3ce5b604-d02e-4c58-8dc8-ca02e859d0d2" />
  <img width="500" height="auto" alt="ArtisanalCoffee_DEsktop" src="https://github.com/user-attachments/assets/665407d9-d273-40c2-9248-a019a41c50c7" />
</div>

---

## ✨ Key Features

- Mobile-first responsive design with high-quality images
- Fixed header with logo and internal section links
- Subscription plans section (Basic, Classic, Premium)
- Modal form with focus trapping, validation and accessibility
- Testimonials with customer photos and comments
- "How it works" explanation of the delivery process
- Interactive FAQ and footer with copyright
- Styled using **styled-components** and global theme
- Basic tests using **Jest + React Testing Library**

---

## 🛠️ Tech Stack

| Category           | Technology / Tool                          | Notes                                      |
|--------------------|---------------------------------------------|--------------------------------------------|
| Framework          | React                    | SPA with built‑in scripts                  |
| Language           | JavaScript                                 | Functional components + hooks              |
| Styling            | styled-components                          | Central theme, scoped styles               |
| Forms              | Custom hooks                               | Manual validation & accessibility          |
| Assets             | WebP/AVIF, JPG                              | Optimized media                            |
| Testing            | Jest + React Testing Library               | Core components & form logic               |
| Deployment         | gh-pages                                   | GitHub Pages hosting                       |

---

## 🔥 Challenges Faced and Solutions

| Challenge                                   | Applied Solution                                                       | Impact / Learning                             |
|---------------------------------------------|------------------------------------------------------------------------|-----------------------------------------------|
| Keeping focus inside subscription modal     | Added `useEffect` trap-focus logic and click-outside close           | Improved accessibility and smoother UX        |
| Responsive layout with large images         | Used `picture` element with AVIF/WebP and media queries              | Faster load on mobile and better visuals      |
| Building interactive FAQ                    | Local state per item with simple animations                          | Informative yet uncluttered section           |
| Testing interactions without libs           | Wrote manual tests simulating submit and error flows                 | Confidence in form logic                      |

---

## 🚀 Getting Started 

### 1. Prerequisites

- **Node.js** 16+   
  → [Download](https://nodejs.org/)

### 2. Local setup

```bash
git clone https://github.com/Alex0-8/Artisanal_Coffee.git
cd artisanal_coffe
npm install
npm start
```

→ Visit http://localhost:3000.

Useful commands

```bash
  npm start            # Dev mode
  npm test             # Run tests
  npm run build        # Production build
```

---

# 📄 License
Feel free to use, modify, and learn from this project.
Last update: March 1, 2026
Thank you for visiting Café Crate!
