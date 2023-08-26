<template>
  <h1 class="title">Vue-Maps</h1>
  <router-view/>
  <img src="./assets/logo.png" alt="Vue Logo" class="logo">
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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

  .title{
    font-size: 3rem;
    font-weight: bold;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    color: #42b983;
    background-color: transparent;
    text-shadow: 2px 2px 2px #2c3e50;
    display: flex !important;
    justify-content: center !important;
    position: absolute;
    z-index: 999;
    top: 20px;
    left: 30%;
    right: 30%;
  }

  .logo{
    position: fixed;
    bottom: 20px;
    right: 30px;
    width: 100px;
  }

</style>
