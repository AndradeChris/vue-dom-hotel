<template>
  <p>{{ text }}</p>
</template>

<script>
export default {
  name: 'DescriptionParagraph',
  props: {
    text: String
  }
};
</script>

<style scoped>
p {
  text-align: justify;
  line-height: 1.5rem;
}
</style>
