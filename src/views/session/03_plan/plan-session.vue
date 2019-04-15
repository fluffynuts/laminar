<template>
  <step>
    <div slot="content">
      <p>
        Think about what you'd like to achieve this session.
        Write down your goals, one per line. Try to keep the list as short and focused
        as possible -- ideally, you should have just one or two goals for the session.</p>
      <textarea aria-label="goals"></textarea>
    </div>
    <div slot="buttons">
      <button class="proceed">start the session</button>
    </div>
  </step>
</template>

<script lang="ts" src="./plan-session.ts"></script>

<style lang="scss" scoped></style>
