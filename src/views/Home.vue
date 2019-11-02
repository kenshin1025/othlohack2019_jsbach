<template>
  <div class="home">
    <!--<img alt="Vue logo" src="../assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <CodeNode class="flex_item"></CodeNode>
    <CodeNode class="flex_item"></CodeNode>
    <CodeNode class="flex_item"></CodeNode>
    <CodeNode class="flex_item"></CodeNode>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import CodeNode from '../components/CodeNode'

export default {
  name: 'home',
  components: {
      CodeNode,
    HelloWorld
  }
}
</script>

<style scoped>
  .home{
    display: flex;
  }

  .flex_item{
    flex-grow: 1;
  }
</style>
