<script setup>
import Team from './components/Team.vue'
</script>

<template>
  <div class="flex">
    <Team name="Red" />
    <Team name="Green" alignment="right" />
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  justify-content: space-between;
}
</style>
