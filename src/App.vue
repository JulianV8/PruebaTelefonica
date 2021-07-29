<template>
  <div id="app">
    <div id="nav" class="">
      <router-link to="/">Home</router-link> |
      <router-link to="/hv">Hoja de vida</router-link> |
      <router-link to="/Cuadratica">Cuadratica</router-link> |
      <router-link to="/Fibonacci">Fibonacci</router-link> |
    </div>
    <hr>
    <br>
    <router-view/>
    
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
