<template>
  <div>
    <div class="title-bar" ref="titleBar">
      <div class="title">Title goes here</div>
      <div class="control">X</div>
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
    background: ActiveCaption;
    color: CaptionText;
    -webkit-app-region: drag;
    display: flex;
    flex-direction: row;
    height: $titlebar-scale;
    .title {
      flex: 1;
    }
    .control {
      width: $titlebar-scale;
    }
  }
</style>
