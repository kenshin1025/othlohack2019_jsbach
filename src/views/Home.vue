<template>
  <div class="home">
    <CodeNode class="flex_item"></CodeNode>
    <CodeNode class="flex_item"></CodeNode>
    <CodeNode class="flex_item"></CodeNode>
    <CodeNode class="flex_item"></CodeNode>
  </div>
</template>

<script>
import CodeNode from '../components/CodeNode'

export default {
  name: 'home',
  components: {
      CodeNode,
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
