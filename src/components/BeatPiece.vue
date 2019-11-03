<template>
  <div class="beatPiece">
    <template v-for="(note, i) in this.notes">
      <BeatNode
        class="flex_item"
        :sound="note"
        :is_active="now_beats === i"
      ></BeatNode>
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
computed:{
    index: function () {
        
    }
},
  
  props: ["notes", "beatType", "now_beats","itemsOHihat"]
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
