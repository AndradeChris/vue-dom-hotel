<template>
    <input v-bind:type="type" v-bind:placeholder="placeholder" v-bind:id="id" />
</template>

<script>
export default {
    name: 'Button',
    props: {
        type: String,
        placeholder: String,
        id: String
        /*  style: String */
    }
}
</script>

<style scoped>
.green-button {
    width: 100%;
}

.botao-vazado {
    border: 2px solid var(--green-dark);
    color: var(--green-dark);
    background-color: white;
    /* margin-bottom: 80px; */
}

.botao-vazado:hover {
    color: white;
}
</style>