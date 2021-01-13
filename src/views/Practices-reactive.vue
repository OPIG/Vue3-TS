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
  </div>
</template>

<script lang="ts">
import { reactive } from 'vue'

// 减少类型推断
interface DataProps {
  girls: string[];
  selectGirl: string;
  selectGirlFun: (index: number) => void;
}

export default {
  name: 'reactive',
  setup() {
    const data: DataProps= reactive({
      girls: ['南宫婉', '莫姑娘', '陈姑娘'],
      selectGirl: '',
      selectGirlFun: (index: number) => {
        data.selectGirl = data.girls[index]
      }
    })

    return {
      data
      // template中代码中引用还是需要data.作为前缀，如data.girls
      // 此处data改写为扩展运算符...data template中代码去掉data. 不好使
    }
  }
}
</script>