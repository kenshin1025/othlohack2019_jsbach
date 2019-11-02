import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      selecting_chords: ["C", "C", "C", "C"],
  },
  mutations: {
    update_selecting_chords(state, chord_and_cursor){
        Vue.set(state.selecting_chords, chord_and_cursor.cursor, chord_and_cursor.chord);
    }
  },
  actions: {
  },
  modules: {
  }
})
