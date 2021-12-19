<template>
  <div class="card">
    <slot name="header"></slot>
    <!-- Дефолтное значение, если ничего не передается из основного компонента. name указывать необязательно -->
    <slot name="default">No text</slot>
    <div v-id="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
      console.log(this.$slots)
    }
  }
</script>

<style scoped>

</style>