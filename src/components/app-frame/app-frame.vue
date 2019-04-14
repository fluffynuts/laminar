<template>
  <div>
    <div class="title-bar" ref="titleBar">
      <div class="title">{{ title }}</div>
      <div class="control" @click="close">X</div>
    </div>
    <div class="main-content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" src="./app-frame.ts">
</script>
<style lang="scss" scoped>
  $titlebar-scale: 32px;
  .title-bar {
    width: 100%;
    background: var(--secondary-background);
    color: var(--primary-foreground);
    line-height: $titlebar-scale;
    display: flex;
    flex-direction: row;
    height: $titlebar-scale;
    .title {
      flex: 1;
      -webkit-app-region: drag;
    }
    .control {
      width: $titlebar-scale;
      cursor: pointer;
    }
  }
</style>
