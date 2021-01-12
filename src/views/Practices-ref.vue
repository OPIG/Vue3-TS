<template>
  <div class="practice">
    <h1>Welcome to practice</h1>
  <ul>
    <li 
      v-for="(girl, index) in girls"
      :key="index"
      @click="selectGirlFun(index)"
    >
    {{ index }} : {{ girl }}
    </li>
  </ul>
  <div>你已经选中了[{{ selectGirl }}]</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const girls = ref(['南宫婉', '莫姑娘', '陈姑娘'])
    const selectGirl = ref('小妹')
    const selectGirlFun = (index: number) => {
      console.log(girls, 'girls:')
      console.log(selectGirl, 'selectGirl')
      // be careful that we need to use *.value to get and set value
      selectGirl.value = girls.value[index]
    }

    return {
      girls,
      selectGirl,
      selectGirlFun
    }

  }
})
</script>