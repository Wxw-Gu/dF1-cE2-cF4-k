import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, transformerAttributifyJsx } from 'unocss'

export default defineConfig({
  separators: [':', '-'],
  theme: {

  },
  shortcuts: {
    'my-flex-ja': 'flex items-center justify-center',
    'my-flex-jac': 'flex items-center justify-center flex-col',
    'my-custom-shortcut': 'text-lg text-orange hover:text-teal',
    'my-animate': 'animate-bounce-alt animate-count-infinite animate-duration-1s',
  },
  safelist: [

  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: { 'display': 'inline-block', 'vertical-align': 'middle' },
    }),
    presetTypography(),
  ],
  transformers: [
    transformerAttributifyJsx(),
  ],
})
