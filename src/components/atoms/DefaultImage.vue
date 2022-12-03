<template>
  <img :src="src" />
</template>

<script>
export default {
  name: 'DefaultImage',
  props: {
    src: String
  }
};
</script>

<style scoped>
img {
  width: 100%;
  border-radius: 10px;
}
</style>
