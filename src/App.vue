<template>
  <div id="app">
    <h1>My Practice Site</h1>
    <nav>
      <router-link to="/todo">Home</router-link>
      <router-link to="/about/Jordan">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
  </script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    text-align: center;
    margin-top: 60px;
  }
</style>


