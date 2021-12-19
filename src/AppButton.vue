<template>
  <div>
    <button class="btn" :class="color" @click="$emit('action')">
      {{ text }}
    </button>
  </div>
</template>

<script>
  export default {
    emits: ['action'],
    props: {
      text: {
        type: String,
        required: true
      },
      color: {
        type: String,
        default: '',
        validator(value) {
          return ['', 'primary', 'danger'].includes(value) //includes возвращает boolean
        }
      }
    }
  }
</script>

<style scoped>

</style>