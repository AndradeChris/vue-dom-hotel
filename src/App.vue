<template>
  <nav>
    <router-link to="/">Início</router-link> |
    <router-link to="/acomodacoes">Acomodações</router-link> |
    <router-link to="/reservas">Reservas</router-link> |
    <router-link to="/contato">Contato</router-link> |
    <router-link to="/sobre">Sobre</router-link> 
  </nav>
  <router-view />
</template>

<style>
*{
  box-sizing:border-box;
  margin: 0;
  padding: 0;
}


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
