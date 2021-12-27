export default {
  // Метод install Должен быть обязательно реализован
  install(app, options) {
    let current = 'ru'

    const changeLanguage = name => {
      current = name
      console.log(current)
    }

    app.config.globalProperties.$alert = text => {
      window.alert(text)
    }

    app.config.globalProperties.$i18n = key => {
      // key = app.title -> [app, title]
      return key.split('.').reduce((words, k) => {
        return words[k] || '=== UNKNOWN ==='
      }, options[current])
    }

    app.provide('changeI18N', changeLanguage)
  }
}