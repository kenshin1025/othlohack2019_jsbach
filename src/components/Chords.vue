<template>
    <div class="chords">
        <ChordNode class="flex_item"></ChordNode>
        <ChordNode class="flex_item"></ChordNode>
        <ChordNode class="flex_item"></ChordNode>
        <ChordNode class="flex_item"></ChordNode>
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