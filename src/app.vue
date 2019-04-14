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
