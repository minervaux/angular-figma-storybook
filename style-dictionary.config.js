/**
 * Style Dictionary configuration file
 *
 * This configuration se utiliza para convertir los tokens de diseño en formato JSON exportados desde Figma
 * en varios formatos de destino como variables SCSS, propiedades personalizadas de CSS y
 * constantes de TypeScript.  El array `source` apunta al archivo `tokens.json` generado por Figma
 * que se encuentra en la raíz de este repositorio.  Cuando ejecutes
 * `npx style-dictionary build` o el script provisto (`npm run build:tokens`)
 * leerá ese archivo y generará la salida en el directorio `projects/ui-core/src/styles/tokens/`.
 */

const StyleDictionary = require('style-dictionary');

module.exports = {
  // Ruta(s) a las definiciones de tokens de Figma.  La función de sincronización de Tokens Studio en GitHub
  // colocará cambios en este archivo.  Puedes añadir más archivos o patrones glob si divides tus tokens por tema.
  source: ['tokens.json'],
  platforms: {
    // Generar variables SCSS para usar en las hojas de estilo de los componentes
    scss: {
      transformGroup: 'scss',
      buildPath: 'projects/ui-core/src/styles/tokens/',
      files: [
        {
          destination: '_variables.scss',
          format: 'scss/variables'
        }
      ]
    },
    // Generar un módulo TypeScript exportando constantes para cada token
    ts: {
      transformGroup: 'js',
      buildPath: 'projects/ui-core/src/styles/tokens/',
      files: [
        {
          destination: 'tokens.ts',
          format: 'javascript/es6'
        }
      ]
    },
    // Generar propiedades personalizadas de CSS para consumo global
    css: {
      transformGroup: 'css',
      buildPath: 'projects/ui-core/src/styles/tokens/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables'
        }
      ]
    }
  }
};
