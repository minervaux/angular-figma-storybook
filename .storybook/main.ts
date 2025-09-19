import type { StorybookConfig } from '@storybook/angular';

/**
 * Archivo de configuración de Storybook.  Indica a Storybook dónde encontrar
 * tus historias de componentes y qué addons habilitar.  Ajusta la ruta de
 * `stories` si eliges una estructura de carpetas diferente.
 */
const config: StorybookConfig = {
  stories: ['../projects/ui-core/src/lib/**/*.stories.@(ts|js)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
  framework: {
    name: '@storybook/angular',
    options: {}
  }
};

export default config;
