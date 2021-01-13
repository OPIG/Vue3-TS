<template>
  <div>
    <ul>
      <li
        v-for="(girl, index) in girls"
        :key='index'
        @click="selectGirlFun(index)"
      >
        {{ index }} : {{ girl }}
      </li>
    </ul>

    <p>您点中了[{{ selectGirl }}]</p>
  </div>
</template>

<script lang='ts'>
import { reactive, toRefs } from 'vue'

// 减少类型推断
interface DataProps {
  girls: string[];
  selectGirl: string;
  selectGirlFun: (index: number) => void;
}

export default {
  name: 'toref',
  setup() {
    const data: DataProps = reactive({
      girls: ['南宫婉', '莫姑娘', '陈姑娘'],
      selectGirl: '',
      selectGirlFun: (index: number) => {
        data.selectGirl = data.girls[index]
      }
    })

    // 这里通过toRefs转化之后 可以通过扩展运算符...暴露出去，template中不用加data.前缀进行调用
    const toRefData = toRefs(data)

    return {
      ...toRefData
    }
  }
}
</script>