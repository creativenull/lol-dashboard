<script setup>
import { onMounted, ref } from 'vue'
import Team from './components/Team.vue'
import { getRedTeam, getGreenTeam, getChampions } from './api'

const redTeam = ref([])
onMounted(() => {
  redTeam.value = getRedTeam()
})

const greenTeam = ref([])
onMounted(() => {
  greenTeam.value = getGreenTeam()
})

onMounted(async () => {
  console.log(await getChampions())
})
</script>

<template>
  <div class="text-center">
    <h1>LoL Dashboard</h1>
  </div>
  <div class="flex">
    <Team name="Red" :players="redTeam" />
    <Team name="Green" :players="greenTeam" alignment="right" />
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  justify-content: space-between;
}

.text-center {
  text-align: center;
}
</style>
