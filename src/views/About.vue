<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div 
      v-for="(girl, index) in girls" 
      :key='index'
      @click="selectGirlFun(index)"
    >
      {{ index }} : {{ girl }}
    </div>
    <div>您点中了[{{ sellectGirl }}]</div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'about',
  setup() {
    const girls = ref(['南宫婉', '莫姑娘', '曲音'])
    const sellectGirl = ref('')
    const selectGirlFun = (index: number) => {
      console.log(index)
      sellectGirl.value = girls.value[index]
    }

    return {
      girls,
      sellectGirl,
      selectGirlFun
    }
  }
})
</script>