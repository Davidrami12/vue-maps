<template>

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

.logo{
position: fixed;
bottom: 20px;
right: 30px;
width: 100px;
}

/*h1{
  text-align: center;
  font-weight: bold;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: rgb(1, 89, 1);
  background-color: red IMP !important;
  z-index: -1;
  display: inline IMPO !important;
}*/

</style>
