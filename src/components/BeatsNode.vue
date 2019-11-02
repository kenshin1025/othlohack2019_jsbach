<template>
    <div>
        <div v-if="sound">
            ○
        </div>
        <div v-else>
            X
        </div>
    </div>
</template>

<script>
    export default {
        name: "BeatsNode",
        props:["sound"]
    }
</script>

<style scoped>

</style>