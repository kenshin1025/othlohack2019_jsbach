<template>
  <div class="chords">
    <div class="index">
      Chord
    </div>
    <template v-for="i in 4">
      <ChordNode
        class="flex_item"
        :cursor_bar="i - 1"
        :is_active="i - 1 == now_bar"
      ></ChordNode>
    </template>
  </div>
</template>

<script>
import ChordNode from "../components/ChordNode";
export default {
  name: "Chords",
  components: {
    ChordNode
  },
  props: ["now_bar"]
};
</script>

<style scoped>
.chords {
  display: flex;
}
.index{
  font-size: x-large;
}
.flex_item {
  flex-grow: 1;
}
</style>
