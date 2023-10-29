export const fallbackLng = 'en'
export const languages = [fallbackLng, 'ja']
export const defaultNS = 'main'
export const labels = {
  ja: '日本語',
  en: 'English'
}

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns
  }
}
