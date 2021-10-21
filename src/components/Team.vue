<script setup>
import { defineProps } from 'vue'

defineProps({
  name: String,
  alignment: {
    type: String,
    default: 'left',
  },
})
</script>

<template>
  <div>
    <h1>Team {{ name }}</h1>

    <div>
      <ul :style="`text-align: ${alignment}`">
        <li>Someguy 1</li>
        <li>Someguy 2</li>
        <li>Someguy 3</li>
        <li>Someguy 4</li>
        <li>Someguy 5</li>
        <li>Someguy 6</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
</style>
