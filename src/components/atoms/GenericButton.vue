<template>
  <button class="green-button" v-bind:class="class">{{ text }}</button>
</template>

<script>
export default {
  name: 'GenericButton',
  props: {
    text: String,
    class: String
  }
};
</script>

<style scoped>
.green-button {
  background-color: var(--green-default);
  padding: 15px 20px;
  color: #fff;
  font-size: 1rem;
  letter-spacing: 0.1rem;
  font-weight: 600;
  border: none;
  min-width: fit-content;
  border-radius: 0.5rem;
}

.green-button:hover {
  background-color: var(--green-dark);
}
</style>
