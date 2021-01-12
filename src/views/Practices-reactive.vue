<template>
  <div class="reactive">
    <h1>Welcome to reactive</h1>
    <ul>
      <li
        v-for='(girl, index) in data.girls'
        :key='index'
        @click='data.selectGirlFun(index)'
      >
        {{ index }}:{{ girl }}
      </li>
    </ul>
    <div>点中了[{{ data.selectGirl }}]</div>
    <Input v-model="data.inputValueP"/>
    <p>{{ data.inputValueP}}</p>
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue'
import Input from '@/components/Input.vue'
export default {
  name: 'reactive',
  setup() {
    const data = reactive({
      girls: ['南宫婉', '莫姑娘', '陈姑娘'],
      selectGirl: '',
      inputValueP: 'test',
      selectGirlFun: (index: number) => {
        data.selectGirl = data.girls[index]
      }
    })

    return {
      data
    }
  }
}
</script>