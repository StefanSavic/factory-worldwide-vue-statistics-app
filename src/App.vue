<template>
  <div id="app">
    <div id="nav" class="shadow-md mb-3">
      <a class="navbar-brand logo" href="#">
        <img width="30" height="30" class="mr-auto" src="./assets/chart.png" alt />
      </a>
      <router-link to="/">Home</router-link>
      <span class="m-2">|</span>
      <router-link to="/statistics">Statistics</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand&display=swap");
html {
  /* background: #33363b; */
  background: #264348;
}
#app {
  font-family: "Quicksand", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #264348;
  min-height: 100vh;

  /* background: linear-gradient(#323531, #3d4242); */
}

#nav {
  padding: 30px;
}
.logo {
  position: absolute;
  left: 20px;
  top: 20px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  color: #f5f7fa;
}

#nav a.router-link-exact-active {
  color: #42b983;
  color: #2c3e50;
  color: #f5f7fa;
}
</style>
