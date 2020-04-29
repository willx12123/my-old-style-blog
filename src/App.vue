<template>
  <div id="app">
    <div class="top-bg"></div>
    <div class="nav">
      <router-link class="nav" to="/">博客</router-link>
    </div>
    <!-- <router-link to="/about">About</router-link> -->
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  z-index: auto;
}

body {
  width: 100%;
  background: #F9DDAB;
}

.top-bg {
  position: absolute;
  top: 0;
  width: 100%;
  height: 400px;
  z-index: -1;
  background-image: linear-gradient(#FCEAC9, #FCEED5);
}

.nav {
  z-index: 1;
  width: 960px;
  height: 40px;
  margin: 0 auto;

  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
