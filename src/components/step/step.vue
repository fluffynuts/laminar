<template>
  <div class="step">
    <div class="content">
      <slot name="content"></slot>
    </div>
    <div class="buttons">
      <slot name="buttons"></slot>
    </div>
  </div>
</template>

<script lang="ts" src="./step.ts">
</script>

<style lang="scss">

  .step {
    .content {
      display: flex;
    }
    .buttons {
      height: 48px;
      position: absolute;
      width: 100%;
      bottom: 0;
    }
  }

</style>
