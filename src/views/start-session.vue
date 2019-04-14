<template>
  <div>
    <step>
      <div class="main" slot="content">
        (imagine an svg animation of waves which become calm as the mouse enters the frame)
      </div>
      <div class="buttons" slot="buttons">
        <button class="defer">defer</button>
        <button class="proceed">go with the flow</button>
      </div>
    </step>
  </div>
</template>

<script lang="ts" src="./start-session.ts">
</script>

<style lang="scss" scoped>
  .main {
    padding-top: 150px;
  }
  .buttons {
    button {
      position: absolute;
      background: transparent;
      color: var(--primary-foreground);
      border: none;
      &.defer {
        left: 32px;
      }
      &.proceed {
        right: 32px;
      }
    }
  }
</style>
