<template>
  <div class="inputc">
    <input type="text" @input='data.handleInput' :value='data.value'>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue'
export default ({
  setup(props) {
    const data = reactive({
      value: props.value,
      handelInput: (event) => {
        console.log(event, 'event: ')
        const value = event.target.value
        this.$emit('input', value)
      }
    })

    return data
  }
})
</script>