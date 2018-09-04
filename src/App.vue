<template>
  <div id="app">
      <h1>Todo List</h1>
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
  body {
    display: grid;
    grid-template-rows: auto;
    justify-items: center;
    padding-top: 50px;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    width: 30%;
    text-align: center;
  }

  nav {
    padding: 15px;
  }

  nav a {
    padding: 10px;
    text-decoration: none;
    color: blue;
    background-color:rgb(237, 240, 242);
    font-weight: bold;
    border: 2px solid black;
    margin: 5px;
  }

  nav a:hover {
    background-color: rgb(255, 145, 151);
  }
</style>


