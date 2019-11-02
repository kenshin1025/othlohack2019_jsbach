<template>
    <div class="chords">
        <template v-for="i in 4">
            <ChordNode class="flex_item" :cursor_bar="i-1"></ChordNode>
        </template>
    </div>
</template>

<script>
    import ChordNode from '../components/ChordNode'
    export default {
        name: "Chords",
        components: {
            ChordNode,
        }
    }
</script>

<style scoped>
    .chords {
        display: flex;
    }
    .flex_item {
        flex-grow: 1;
    }
</style>