<template>
  <div class="beatPiece">
    <template v-for="(note, i) in this.notes">
      <BeatNode
        class="flex_item"
        :sound="note"
        :is_active="now_beats == beatsIndex + i "
        :key="i"
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
data: {
    beatsIndex:0
  },
computed:{
    beatsIndex: function () {
        if(this.index == 0) return 0
        if(this.items == null)return 0
        
        let array = this.items.slice(0,this.index) 
        let sum = 0
        array.forEach(element => {
            sum += element.notes.length
        });
        return sum
    }
},
  
  props: ["notes", "beatType", "now_beats","items","index"]
};
</script>

<style scoped>
/*.beatPiece {*/
  /*display: flex;*/
/*}*/

/*.flex_item {*/
  /*flex-grow: 1;*/
  /*border-left: solid 1px #fff;*/
/*}*/
</style>
