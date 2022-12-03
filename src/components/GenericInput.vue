<template>
    <input v-bind:type="type" v-bind:placeholder="placeholder" v-bind:id="id"/>
</template>

<script>
export default {
  name: 'GenericInput',
  props: {
    type: String,
    placeholder: String,
    id: String
   /*  style: String */
  }
}
</script>

<style scoped>
input{
    border: 2px solid transparent;
    background-color: rgba(204, 204, 204, 0.12);
    padding: 1rem;
    width: 100%;
    text-transform: uppercase;
    border-radius: 0.5rem;
    box-shadow: 5px 5px 5px #a0a0a0ea;
 }

 input:hover{
  border: 2px solid #02732A
 }
</style>