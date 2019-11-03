<template>
  <div>
    <h3>OHihat</h3>
    <draggable
      class="flex"
      v-model="itemsOHihat"
      group="myGroup"
      @start="drag = true"
      :move="checkMove"
      @end="drag = false"
      :options="options"
    >
      <div class="item" v-for="(item, i) in itemsOHihat" :key="i">
        <BeatPieces
          class="beatPiece"
          :notes="item.notes"
          :beatType="item.type"
          :items = itemsOHihat
          :now_beats="now_beats"
          :index="i"
        ></BeatPieces>
      </div>
    </draggable>

    <h3>CHihat</h3>
    <draggable
      class="flex"
      v-model="itemsCHihat"
      group="myGroup"
      @start="drag = true"
      :move="checkMove"
      @end="drag = false"
      :options="options"
    >
      <div class="item" v-for="(item, i) in itemsCHihat" :key="i">
        <BeatPieces
          class="beatPiece"
          :notes="item.notes"
          :beatType="item.type"
          :items = itemsCHihat
          :now_beats="now_beats"
          :index="i"
        ></BeatPieces>
      </div>
    </draggable>

    <h3>Snare</h3>
    <draggable
      class="flex"
      v-model="itemsSnare"
      group="myGroup"
      @start="drag = true"
      :move="checkMove"
      @end="drag = false"
      :options="options"
    >
      <div class="item" v-for="(item, i) in itemsSnare" :key="i">
        <BeatPieces
          class="beatPiece"
          :notes="item.notes"
          :beatType="item.type"
          :items = itemsSnare
          :now_beats="now_beats"
          :index="i"
        ></BeatPieces>
      </div>
    </draggable>

    <h3>Kick</h3>
    <draggable
      class="flex"
      v-model="itemsKick"
      group="myGroup"
      @start="drag = true"
      :move="checkMove"
      @end="drag = false"
      :options="options"
    >
      <div class="item" v-for="(item, i) in itemsKick" :key="i">
        <BeatPieces
          class="beatPiece"
          :notes="item.notes"
          :beatType="item.type"
          :items = itemsKick
          :now_beats="now_beats"
          :index="i"
        ></BeatPieces>
      </div>
    </draggable>

    <h3>ぴーす</h3>
    <draggable
      class="flex"
      v-model="itemsB"
      :group="{ name: 'myGroup', pull: 'clone', put: false }"
      :move="checkMove"
      @start="drag = true"
      @end="drag = false"
      :options="options"
    >
      <div class="item" v-for="(item,i) in itemsB" :key="item.id">
        <BeatPieces
          class="beatPiece"
          :notes="item.notes"
          :beatType="item.type"
          :items = "null"
          :now_beats="now_beats"
          :index="i"
        ></BeatPieces>
      </div>
    </draggable>
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
    this.makeSnareArray();
    this.makeChihatArray();
    this.makeOhihatArray();
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
      snareArray: [],
      chihatArray: [],
      ohihatArray: [],
      itemsB: [
        { id: "0", type: "kick", notes: [0, 1] },
        { id: "1", type: "kick", notes: [1, 0, 1, 0, 1, 0, 1, 0] },
        { id: "2", type: "kick", notes: [0, 1, 0, 1] },
        { id: "3", type: "kick", notes: [1, 0, 1, 0] }
      ],
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
    },
    makeSnareArray() {
      this.snareArray = [];
      this.itemsSnare.forEach(item => {
        item.notes.forEach(note => {
          this.snareArray.push(note);
        });
      });
      this.$store.commit("set_selecting_snare", this.snareArray);
    },
    makeChihatArray() {
      this.chihatArray = [];
      this.itemsCHihat.forEach(item => {
        item.notes.forEach(note => {
          this.chihatArray.push(note);
        });
      });
      this.$store.commit("set_selecting_chihat", this.chihatArray);
    },
    makeOhihatArray() {
      this.ohihatArray = [];
      this.itemsOHihat.forEach(item => {
        item.notes.forEach(note => {
          this.ohihatArray.push(note);
        });
      });
      this.$store.commit("set_selecting_ohihat", this.ohihatArray);
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

.beatPiece {
}
</style>
