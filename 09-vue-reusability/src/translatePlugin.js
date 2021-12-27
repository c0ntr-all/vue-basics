export default {
  // Метод install Должен быть обязательно реализован
  install(app, options) {
    app.config.globalProperties.$alert = text => {
      window.alert(text)
    }
  }
}