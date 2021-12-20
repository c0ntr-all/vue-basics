<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Динамические и асинхронные компоненты</h2>

      <app-buton
          :color="active === 'one' ? 'primary' : ''"
          @action="active = 'one'"
      >One</app-buton>
      <app-buton
          :color="active === 'two' ? 'primary' : ''"
          @action="active = 'two'"
      >Two</app-buton>
    </div>

    <component :is="componentName"></component>
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
    }
  },
  components: {AppButon, AppTextOne, AppTextTwo}
}
</script>

<style scoped>

</style>
