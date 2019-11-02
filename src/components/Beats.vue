<template>
  <div>
    <div>
      <h3>Kick</h3>
      <draggable
        v-model="itemsKick"
        group="myGroup"
        @start="drag=true"
        :move="checkMove"
        @end="drag=false"
        :options="options"
      >
        <div
          class="item"
          v-for="item in itemsKick"
          :key="item.id "
          v-bind:style="{width: item.w + 'px' }"
        >{{item.name}}</div>
      </draggable>
      <h3>Snare</h3>
      <draggable
        v-model="itemsSnare"
        group="myGroup"
        @start="drag=true"
        :move="checkMove"
        @end="drag=false"
        :options="options"
      >
        <div
          class="item"
          v-for="item in itemsSnare"
          :key="item.id "
          v-bind:style="{width: item.w + 'px' }"
        >{{item.name}}</div>
      </draggable>
      <h3>CloseHihat</h3>
      <draggable
        v-model="itemsCHihat"
        group="myGroup"
        @start="drag=true"
        :move="checkMove"
        @end="drag=false"
        :options="options"
      >
        <div
          class="item"
          v-for="item in itemsCHihat"
          :key="item.id "
          v-bind:style="{width: item.w + 'px' }"
        >{{item.name}}</div>
      </draggable>
      <h3>OpenHihat</h3>
      <draggable
        v-model="itemsO"
        group="myGroup"
        @start="drag=true"
        :move="checkMove"
        @end="drag=false"
        :options="options"
      >
        <div
          class="item"
          v-for="item in itemsOHihat"
          :key="item.id "
          v-bind:style="{width: item.w + 'px' }"
        >{{item.name}}</div>
      </draggable>
    </div>
    <div>
      <h3>グループB</h3>
      <draggable
        v-model="itemsB"
        :group="{ name: 'myGroup', pull: 'clone', put: false }"
        :move="checkMove"
        @start="drag=true"
        @end="drag=false"
        :options="options"
      >
        <div
          class="item"
          v-for="item in itemsB"
          :key="item.id"
          v-bind:style="{width: item.w + 'px' }"
        >{{item.name}}</div>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";

const fourPieces = [1, 0];
const fourBeatPieces = [1, 0, 1, 0, 1, 1, 0, 0];
const harfFourPieces = [1, 0, 1, 0];

const piecesTable = {
  four: fourPieces,
  fourBeat: fourBeatPieces,
  harfFourPieces: harfFourPieces
};

export default {
  name: "dnd",

  components: { draggable },

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
      itemsB: [
        { id: "four", name: "*  o  *", w: 100 * fourPieces.length },
        { id: "four2", name: "name01", w: 100 * fourPieces.length },
        { id: "fourBeat", name: "name02", w: 100 * fourBeatPieces.length },
        { id: "harfFourBeat", name: "name03", w: 100 * harfFourPieces.length }
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
    }
  }
};
</script>

<style scoped>
.item {
  display: inline-block;
  margin: 10px;
  padding: 10px;
  border: 1px solid #7f7f7f;
  border-radius: 10px;
  background-color: #ffffff;
}
.item:hover {
  cursor: grab;
}
.item:active {
  cursor: grabbing;
}
</style>
