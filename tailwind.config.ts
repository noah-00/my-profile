import { iconsPlugin, getIconCollections } from '@egoist/tailwindcss-icons'

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
      collections: getIconCollections(['ion'])
    })
  ],
  daisyui: {
    themes: [
      {
        myDark: {
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
      'winter'
    ]
  }
}
export default config
