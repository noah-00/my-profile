import { iconsPlugin, getIconCollections } from '@egoist/tailwindcss-icons'

import { THEME_DARK, THEME_LIGHT } from './utils/Const'

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/[lng]/*.tsx',
    './app/[lng]/**/*.tsx',
    './components/templates/**/*.tsx',
    './components/parts/**/*.tsx'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: [
    require('daisyui'),
    iconsPlugin({
      collections: getIconCollections([
        'ion',
        'nonicons',
        'fa6-brands',
        'clarity',
        'akar-icons',
        'vscode-icons',
        'devicon',
        'logos'
      ])
    })
  ],
  daisyui: {
    themes: [
      {
        [THEME_DARK]: {
          primary: '#5eead4',
          secondary: '#FFF',
          accent: '#EA5E74',
          neutral: '#18342b',
          'base-100': '#111921',
          info: '#3abff8',
          success: '#36d399',
          warning: '#fbbd23',
          error: '#f87272'
        }
      },
      THEME_LIGHT
    ]
  }
}
export default config
