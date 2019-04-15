<template>
  <step>
    <div class="main" slot="content">
      <p>
        Before planning, do you need to:
      </p>
      <pre>
        - fetch a snack
        - fetch a beverage
        - visit the facilities
        - attend to something blocking a team-mate
      </pre>
    </div>
    <div class="navigation" slot="buttons">
      <button class="proceed" @click="next">Establish a plan</button>
    </div>
  </step>
</template>

<script lang="ts" src="./prepare-for-session.ts"></script>
<style lang="scss" scoped>
  button.proceed {
    position: absolute;
    background: transparent;
    color: var(--primary-foreground);
    border: none;
    &.proceed {
      right: 32px;
    }
  }
</style>
