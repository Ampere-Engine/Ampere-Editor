import { createI18n } from 'vue-i18n'
import store from '@/store/index'
function loadLocaleMessages() {
  const locales = require.context(
    '@/locales',
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  )
  const messages = {}
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key).default
    }
  })
  return messages
}
export default createI18n({
  legacy: false,
  locale: store.getters.getAppLanguage,
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  globalInjection: true,
  message: loadLocaleMessages(),
})
//# sourceMappingURL=i18n.js.map
