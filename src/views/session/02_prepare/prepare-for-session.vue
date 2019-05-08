<template>
  <step>
    <div class="main" slot="content">
      <p>
        Before focus time, do you need to:
      </p>
      <ul class="check-list">
        <li v-for="item in beforeSessionChecklist">
          <check-item
            :item="item"
            @item-toggled="itemToggled"
            @delete-item="deleteItem"></check-item>
        </li>
       </ul>
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
