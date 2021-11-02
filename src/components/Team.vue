<script setup>
import { defineProps } from 'vue'

defineProps({
  name: String,
  alignment: {
    type: String,
    default: 'left',
  },
  players: Array,
})
</script>

<template>
  <div>
    <h1>Team {{ name }}</h1>

    <div>
      <ul :style="`text-align: ${alignment}`" v-for="player in players">
        <li>
          {{ player.name }}/{{ player.champion }} {{ player.kda }}
          <div>
            <span v-for="item in player.items" v-text="item + ', '"></span>
          </div>
        </li>
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
