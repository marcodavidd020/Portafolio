# Portfolio - Marco David Toledo Canna

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/marcodavidd020/portfolio)

## 🚀 Sobre el Proyecto

Portfolio profesional de Marco David Toledo Canna, Full Stack Developer especializado en Laravel, NestJS y Flutter. Este sitio web moderno presenta mis proyectos, habilidades y experiencia de manera interactiva y visualmente atractiva.

### ✨ Características

- **Diseño Responsive**: Optimizado para todos los dispositivos
- **Animaciones Suaves**: Transiciones y efectos visuales modernos
- **Performance Optimizada**: Carga rápida y experiencia fluida
- **SEO Friendly**: Metadatos optimizados para motores de búsqueda
- **PWA Ready**: Preparado para convertirse en Progressive Web App
- **Accesibilidad**: Cumple con estándares de accesibilidad web

### 🛠️ Tecnologías Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Styling**: Tailwind CSS
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Inter)
- **Deployment**: Vercel
- **Build Tools**: PostCSS, Terser

## 🏃‍♂️ Inicio Rápido

### Prerrequisitos

- Node.js >= 16.0.0
- npm o yarn

### Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/marcodavidd020/portfolio.git
   cd portfolio
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador en** `http://localhost:3000`

### Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo con live reload

# Build y Optimización
npm run build        # Construye los archivos para producción
npm run optimize     # Optimiza CSS, JS e imágenes
npm run preview      # Preview de la versión de producción

# Linting
npm run lint:css     # Linter para CSS
npm run lint:js      # Linter para JavaScript

# Despliegue
npm run deploy       # Despliega a Vercel
```

## 🚀 Despliegue

### Despliegue en Vercel (Recomendado)

1. **Fork este repositorio**

2. **Conecta tu cuenta de GitHub con Vercel**

3. **Importa el proyecto en Vercel**
   - Ve a [vercel.com/new](https://vercel.com/new)
   - Selecciona tu repositorio
   - Haz clic en "Deploy"

4. **Configuración automática**
   - Vercel detectará automáticamente la configuración
   - El sitio se desplegará en unos minutos

### Despliegue Manual

```bash
# Instalar Vercel CLI
npm i -g vercel

# Hacer login en Vercel
vercel login

# Desplegar
vercel --prod
```

### Otras Plataformas

El proyecto también es compatible con:

- **Netlify**: Arrastra la carpeta del proyecto a [netlify.com/drop](https://netlify.com/drop)
- **GitHub Pages**: Configura GitHub Actions para despliegue automático
- **Surge.sh**: `npm i -g surge && surge`

## 📁 Estructura del Proyecto

```
portfolio/
├── index.html          # Página principal
├── styles.css          # Estilos principales
├── script.js           # JavaScript principal
├── vercel.json         # Configuración de Vercel
├── package.json        # Dependencias y scripts
├── README.md           # Este archivo
└── assets/             # (Opcional) Imágenes y recursos
```

## 🎨 Personalización

### Colores

Los colores principales están definidos en Tailwind CSS:

```javascript
// En index.html - Tailwind Config
colors: {
    primary: "#1E3A8A",    // Azul primario
    secondary: "#64748B",  // Gris secundario
    accent: "#38BDF8"      // Azul accent
}
```

### Contenido

Para personalizar el contenido, edita:

1. **Información personal**: En `index.html`, sección Hero
2. **Proyectos**: En `index.html`, sección Projects
3. **Habilidades**: En `index.html`, sección About
4. **Contacto**: En `index.html`, sección Contact

### Animaciones

Las animaciones están definidas en `styles.css` y controladas por `script.js`:

- **Intersection Observer**: Para animaciones al hacer scroll
- **CSS Animations**: Definidas en `@keyframes`
- **JavaScript Animations**: Para efectos interactivos

## 📊 Performance

- **Lighthouse Score**: 95+ en todas las categorías
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔒 Seguridad

- Headers de seguridad configurados en `vercel.json`
- CSP (Content Security Policy) implementado
- XSS Protection habilitado
- HTTPS forzado en producción

## 📱 Responsive Design

Breakpoints soportados:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto

**Marco David Toledo Canna**

- 📧 Email: [marcodaviddtc@gmail.com](mailto:marcodaviddtc@gmail.com)
- 📱 Teléfono: [+591 67733399](tel:+59167733399)
- 💼 LinkedIn: [marco-david-toledo-canna](https://linkedin.com/in/marco-david-toledo-canna-813bb2165)
- 🐙 GitHub: [marcodavidd020](https://github.com/marcodavidd020)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

⭐ **¡No olvides dar una estrella al proyecto si te gustó!**

🚀 **Live Demo**: [marco-portfolio.vercel.app](https://marco-portfolio.vercel.app)

---

*Desarrollado con ❤️ por Marco David Toledo Canna* 