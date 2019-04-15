<template>
  <div id="app">
    <app-frame>
      <router-view/>
    </app-frame>
  </div>
</template>

<script lang="ts" src="./app.ts"></script>

<style lang="scss">
  :root {
    --primary-background: #555;
    --secondary-background: #444;
    --primary-foreground: #eee;
    --accent: #3fe;
  }
  html, body {
    width: 100%;
    height: 100%;
  }

  body, head {
    padding: 0;
    margin: 0;
    background-color: var(--primary-background);
    color: var(--primary-foreground);
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    height: 100%;
    width: 100%;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
