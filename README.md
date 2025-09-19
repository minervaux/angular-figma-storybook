# Angular + Storybook Playground

Este repositorio es un ejemplo mínimo de **prueba de concepto** para conectar los **tokens de diseño de Figma** con un proyecto Angular y documentarlos en Storybook.  La idea es que los diseñadores definan sus tokens en Figma mediante el plugin **Tokens Studio**, los sincronicen a GitHub y luego generen variables de código para que los desarrolladores puedan utilizarlas directamente en los componentes.

## ¿Qué contiene?

* `tokens.json`: archivo exportado desde Figma que contiene los tokens de diseño.  Los diseñadores pueden sincronizar este archivo mediante la funcionalidad de GitHub del plugin de Figma.  Según el artículo _Building a Scalable Design System with Angular, Storybook and Figma Tokens_, Figma puede empujar automáticamente un `tokens.json` al repositorio【746338302848036†L141-L147】.
* `style-dictionary.config.js`: configuración para [Style Dictionary](https://amzn.github.io/style-dictionary/#/), que convierte el `tokens.json` en variables SCSS, CSS y TypeScript.  El artículo explica cómo instalar y configurar Style Dictionary【746338302848036†L162-L207】.
* Una biblioteca Angular (`projects/ui-core`) con un componente de ejemplo (`ButtonComponent`) y sus historias de Storybook (`button.component.stories.ts`), donde se utilizan las variables de tokens para aplicar estilos.  Los tokens se importan desde `src/styles/tokens/_variables.scss` y se usan como CSS custom properties.
* Un archivo `.storybook/main.ts` de configuración que indica dónde se encuentran las historias.

## Cómo probarlo

1. **Clonar o forquear este repositorio** en tu cuenta.  Si tu equipo de diseño sincroniza sus tokens desde Figma, este archivo `tokens.json` se actualizará automáticamente【746338302848036†L130-L147】.
2. **Instalar las dependencias** del proyecto (`npm install`).  Asegúrate de tener Node JS y npm instalados.
3. **Construir los tokens** para generar variables SCSS, CSS y TypeScript:

   ```bash
   npx style-dictionary build
   # o con el script definido en package.json
   npm run build:tokens
   ```

   Esto creará tres archivos en `projects/ui-core/src/styles/tokens/` (`_variables.scss`, `variables.css` y `tokens.ts`) tal como describe el artículo【746338302848036†L215-L231】.  Estos archivos son consumidos por tus componentes y por Storybook.

4. **Ejecutar Storybook** para ver el resultado:

   ```bash
   npm run storybook
   ```

   Según la guía, Storybook se instala con `npx storybook@latest init --type angular` y se ejecuta con `npm run storybook`【746338302848036†L83-L121】.

## Integración con Figma

1. En Figma, utiliza el plugin **Tokens Studio** para definir colores, tipografías, espacios y radios.  Es importante que todas las decisiones de diseño se expresen como tokens【746338302848036†L130-L137】.
2. Configura la sincronización con GitHub desde el plugin.  Así, cada vez que un diseñador actualice un token en Figma, se enviará una versión actualizada del `tokens.json` a este repositorio【746338302848036†L130-L147】.
3. En el repositorio, ejecuta `npm run build:tokens` para convertir los tokens en variables de código y que los desarrolladores puedan utilizarlas directamente.

## Notas

* El archivo `tokens.json` incluido en este playground es el mismo que proporcionó el usuario (contiene escalas de grises, colores del sistema, tipografías, espacios, radios, etc.).  Puedes sustituirlo por tu propio archivo de Figma.
* Puedes consultar un ejemplo más avanzado de este flujo en el artículo [Design token automation from Figma to Storybook]【346065838403670†L162-L190】, que describe cómo transformar tokens, generar variables CSS y automatizar el proceso con GitHub Actions.

Esperamos que este playground sirva como punto de partida para un mejor *handoff* entre diseño y desarrollo en vuestros proyectos Angular.
