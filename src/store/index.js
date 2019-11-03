import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    selecting_chords: ["C", "C", "C", "C"],
    selecting_beating_chord: [0, 0, 0, 0, 0, 0, 0, 0],
    selecting_kick: [0, 0, 0, 0, 0, 0, 0, 0],
    selecting_ohihat: [0, 0, 0, 0, 0, 0, 0, 0],
    selecting_chihat: [0, 0, 0, 0, 0, 0, 0, 0],
    selecting_snare: [0, 0, 0, 0, 0, 0, 0, 0]
  },
  mutations: {
    update_selecting_chords(state, chord_and_cursor) {
      Vue.set(
        state.selecting_chords,
        chord_and_cursor.cursor,
        chord_and_cursor.chord
      );
    },
    set_selecting_kick(state, kickArray) {
      Vue.set(state, "selecting_kick", kickArray);
    },
    set_selecting_ohihat(state, ohihatArray) {
      Vue.set(state, "selecting_ohihat", ohihatArray);
    },
    set_selecting_chihat(state, chihatArray) {
      Vue.set(state, "selecting_chihat", chihatArray);
    },
    set_selecting_snare(state, snareArray) {
      Vue.set(state, "selecting_snare", snareArray);
    },
    set_selecting_beating_chord(state, chordArray) {
      Vue.set(state, "selecting_beating_chord", chordArray);
    }
  },
  actions: {},
  modules: {}
});
