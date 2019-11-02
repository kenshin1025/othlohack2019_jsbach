<template>
  <div class="beatPiece">
    <template v-for="i in this.notes">
       <BeatNode class="flex_item" :sound="i"></BeatNode>
       <!--<ChordNode class="flex_item" :cursor_bar="i-1"></ChordNode>-->
    </template>
  </div>
</template>

<script>
import BeatNode from "../components/BeatsNode";

export default {
  name: "BeatPiece",
  components: {
      BeatNode
  },
  props:["notes","beatType"]
};
</script>

<style scoped>
.beatPiece {
  display: flex;
}
.flex_item {
  flex-grow: 1;
}
</style>