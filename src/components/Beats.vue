<template>
  <div>
    <div>
      <h3>Kick</h3>
      <draggable
        v-if="edit"
        class="flex"
        v-model="itemsKick"
        group="myGroup"
        @start="drag = true"
        :move="checkMove"
        @end="drag = false"
        :options="options"
      >
        <div class="item" v-for="(item, i) in itemsKick" :key="item.id">
          <BeatPieces
            class="beatPiece"
            :notes="item.notes"
            :beatType="item.type"
            :now_beats="now_beats"
            cursor_beats=""
          ></BeatPieces>
        </div>
      </draggable>

      <div class="flex" v-if="!edit">
        <div class="item" v-for="(note, i) in kickArray" :key="note.id">
          <BeatsNode :sound="note" :is_active="i === now_beats"></BeatsNode>
        </div>
      </div>
    </div>
    <div>
      <h3>グループB</h3>
      <draggable
        v-model="itemsB"
        :group="{ name: 'myGroup', pull: 'clone', put: false }"
        :move="checkMove"
        @start="drag = true"
        @end="drag = false"
        :options="options"
      >
        <div class="item" v-for="item in itemsB" :key="item.id">
          <BeatPieces
            class="beatPiece"
            :notes="item.notes"
            :beatType="item.type"
            :now_beats="now_beats"
          ></BeatPieces>
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import BeatPieces from "./BeatPiece";
import BeatsNode from "./BeatsNode";

export default {
  name: "Beats",

  components: {
    draggable,
    BeatPieces,
    BeatsNode
  },
  beforeUpdate() {
    this.makeKickArray();
  },

  data() {
    return {
      options: {
        group: "myGroup",
        animation: 200
      },
      itemsKick: [],
      itemsSnare: [],
      itemsCHihat: [],
      itemsOHihat: [],
      kickArray: [],
      itemsB: [{ id: "0", type: "kick", notes: [0, 1] }],
      kickNotes: [0, 0, 0, 0, 0, 0, 0, 0],
      snareNotes: [0, 0, 0, 0, 0, 0, 0, 0],
      cHihatNotes: [0, 0, 0, 0, 0]
    };
  },
  methods: {
    checkMove: function(evt) {
      let length = 0;
      if (evt.to.children.length == 0) return true;

      for (let i = 0; i < evt.to.children.length; i++) {
        length += parseInt(evt.to.children[i].style.width.slice(0, 3));
      }
      if (evt.to == evt.from) return true;
      length += parseInt(evt.dragged.style.width.slice(0, 3));
      if (length == 800) return true;
      if (length > 800) return false;
      return true;
    },
    makeKickArray() {
      this.kickArray = [];
      this.itemsKick.forEach(item => {
        item.notes.forEach(note => {
          this.kickArray.push(note);
        });
      });
      this.$store.commit("set_selecting_kick", this.kickArray);
    }
  },
  props: ["now_beats", "edit"]
};
</script>

<style scoped>
.flex {
  display: flex;
}

.item {
  flex-basis: 12.5%;
  /*display: inline-block;*/
  /*margin: 10px;*/
  /*padding: 10px;*/
  /*border: 1px solid #7f7f7f;*/
  /*border-radius: 10px;*/
  /*background-color: #ffffff;*/
}

.item:hover {
  cursor: grab;
}

.item:active {
  cursor: grabbing;
}
</style>
