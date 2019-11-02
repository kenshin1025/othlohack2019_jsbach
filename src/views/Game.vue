<template>
    <div class="game">
        <div class="codes">
            <CodeNode class="flex_item"></CodeNode>
            <CodeNode class="flex_item"></CodeNode>
            <CodeNode class="flex_item"></CodeNode>
            <CodeNode class="flex_item"></CodeNode>
        </div>
    </div>
</template>

<script>
    import CodeNode from '../components/CodeNode'

    export default {
        name: "Game",
        components: {
            CodeNode,
        }
    }
</script>

<style scoped>
    .codes {
        display: flex;
    }

    .flex_item {
        flex-grow: 1;
    }
</style>