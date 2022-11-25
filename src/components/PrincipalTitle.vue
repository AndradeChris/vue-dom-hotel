<template>
   <h1>{{text}}</h1>
</template>

<script>
export default {
  name: 'Title',
  props: {
    text: String
  }
}
</script>

<style scoped>
 h1{
  text-decoration: underline;
 }
</style>
