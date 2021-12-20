<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Динамические и асинхронные компоненты</h2>

      <app-buton
          :color="oneColor"
          @action="active = 'one'"
      >One</app-buton>
      <app-buton
          :color="twoColor"
          @action="active = 'two'"
      >Two</app-buton>
    </div>
    <!-- keep-alive - сохраняет состояние компонента -->
    <keep-alive>
      <component :is="componentName"></component>
    </keep-alive>
  </div>
</template>

<script>
import AppButon from './AppButton'
import AppTextOne from './AppTextOne'
import AppTextTwo from './AppTextTwo'
export default {
  data() {
    return {
      active: 'one' //two
    }
  },
  computed: {
    componentName() {
      // if(this.active === 'one') {
      //   return 'app-text-one'
      // }
      // return 'app-text-two'
      return 'app-text-' + this.active
    },
    oneColor() {
      return this.active === 'one' ? 'primary' : ''
    },
    twoColor() {
      return this.active === 'two' ? 'primary' : ''
    },
  },
  components: {AppButon, AppTextOne, AppTextTwo}
}
</script>

<style scoped>

</style>
