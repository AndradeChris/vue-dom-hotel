<template>
  <h4>{{ text }}</h4>
</template>

<script>
export default {
  name: 'MiniTitle',
  props: {
    text: String
  }
};
</script>

<style scoped>
h4 {
  color: var(--green-dark)
}
</style>
