# Ferretería El Tornillo

Sitio estático del taller «Del código local a internet: GitHub + Vercel». HTML, CSS y JavaScript sin frameworks, backend ni base de datos.

## Uso local
Abrir `index.html` en un navegador. No necesita instalación ni compilación.

## Requisitos
Inicio con nombre, eslogan, horario y ubicación; cuatro categorías de productos; formulario con nombre y mensaje. El formulario valida un nombre de al menos dos caracteres después de eliminar espacios exteriores. Es una demostración: no envía ni persiste datos. Diseño adaptable y navegación accesible.

## Prompt de generación
**Contexto:** Ferretería El Tornillo vende herramientas, pintura, tornillería y material eléctrico. Horario: lunes a sábado, 8:00 a.m. a 6:00 p.m. Ubicación: Calle 10 #23-45, barrio Los Pinos.

**Objetivo:** Una página con Inicio, Servicios/Productos (cuatro tarjetas) y Contacto (nombre y mensaje).

**Restricciones:** HTML, CSS y JavaScript simples; sin frameworks, backend ni base de datos. Validación en el navegador y diseño para computador y celular.

**Criterio de aceptación:** Se ven las tres secciones; enviar sin nombre muestra un aviso; nombres de menos de dos caracteres no pasan; datos válidos muestran éxito de la demostración.

## Procedencia
Implementado con Codex por solicitud del usuario. No se afirma que Antigravity haya generado este proyecto. Ese punto literal de la checklist del PDF requiere realizar la actividad en Antigravity.

## Administración
En Vercel, abrir el proyecto → Deployments para consultar versiones y Build Logs. Para recuperar una versión estable, seleccionarla y usar Instant Rollback o Promote to Production según las opciones disponibles. Settings → Domains permite revisar el dominio y HTTPS. Analytics permite activar estadísticas si se desean. No se necesita comprar un dominio para este taller. En GitHub, Commits muestra el historial; cada push a main debe activar un despliegue mediante la integración Git de Vercel.
