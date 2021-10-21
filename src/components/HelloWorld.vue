<!--
<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>
-->

<!--
<script>
import { ref } from 'vue'
export default {
  props: {
    msg: String
  },
  setup() {
    const count = ref(0)
    const textInput = ref('')

    return {
      count,
      textInput,
    }
  },
}
</script>
-->

<script setup>
import { ref, defineProps } from 'vue'
const props = defineProps({
  msg: String
})

const count = ref(0)
const textInput = ref('')
</script>

<template>
  <h1>{{ msg }}</h1>

  <button type="button" @click="count++">count is: {{ count }}</button>

  <form style="margin: 10px 0">
    <div>
      <input v-model="textInput" type="text" placeholder="Enter something" />
    </div>
    <div>
      {{ textInput }}
    </div>
  </form>

  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
