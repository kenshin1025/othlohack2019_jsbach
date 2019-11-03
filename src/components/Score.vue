<template>
  <div class="game_container">
    <div class="side">
      <div class="index_chord">Chord</div>
      <div class="index_beat">Kick</div>
    </div>
    <div class="score">
      <chords :now_bar="this.bar"></chords>
      <Beats :now_beats="this.beat" :edit="this.edit"></Beats>
      <button v-on:click="start">start</button>
      bar:{{ this.bar }}<br />
      beet:{{ this.beat }}
    </div>
  </div>
</template>
<script>
import Chords from "../components/Chords";
import Beats from "../components/Beats";

import A3 from "./../assets/A3.mp3";
import B3 from "./../assets/B3.mp3";
import C3 from "./../assets/C3.mp3";
import C4 from "./../assets/C4.mp3";
import D3 from "./../assets/D3.mp3";
import D4 from "./../assets/D4.mp3";
import E3 from "./../assets/E3.mp3";
import E4 from "./../assets/E4.mp3";
import F3 from "./../assets/F3.mp3";
import G3 from "./../assets/G3.mp3";

import kick from "./../assets/Kick.mp3";
import ohihat from "./../assets/OHihat.mp3";
import chihat from "./../assets/Chihat.mp3";
import snare from "./../assets/Snare.mp3";

let C3_audio = new Audio(C3);
let C4_audio = new Audio(C4);
let B3_audio = new Audio(B3);
let A3_audio = new Audio(A3);
let D3_audio = new Audio(D3);
let D4_audio = new Audio(D4);
let E3_audio = new Audio(E3);
let E4_audio = new Audio(E4);
let F3_audio = new Audio(F3);
let G3_audio = new Audio(G3);

let kick_audio = new Audio(kick);
let ohihat_audio = new Audio(ohihat);
let chihat_audio = new Audio(chihat);
let snare_audio = new Audio(snare);

const SOUNDS = {
  C: [C3_audio, E3_audio, G3_audio],
  Dm: [D3_audio, F3_audio, A3_audio],
  Em: [E3_audio, G3_audio, B3_audio],
  F: [F3_audio, A3_audio, C4_audio],
  G: [G3_audio, B3_audio, D4_audio],
  Am: [A3_audio, C4_audio, E4_audio]
};

export default {
  name: "Score",
  components: {
    Chords,
    Beats
  },
  data() {
    return {
      edit: true,
      bar: 0, //小節
      beat: 0, //八分音符,
      bpm: 180, //テンポ
      timeCounter: null
    };
  },

  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.initialize(); // 初期化処理
      next();
    });
  },

  methods: {
    count: function() {
      if (this.$store.state.selecting_kick[this.beat]) {
        this.playBeats(kick_audio);
      }
      if (this.$store.state.selecting_snare[this.beat]) {
        this.playBeats(snare_audio);
      }
      if (this.$store.state.selecting_chihat[this.beat]) {
        this.playBeats(chihat_audio);
      }
      if (this.$store.state.selecting_ohihat[this.beat]) {
        this.playBeats(ohihat_audio);
      }
      if (this.$store.state.selecting_beating_chord[this.beat]) {
        this.playChord(this.$store.state.selecting_chords[this.bar]);
      }
      this.beat += 1;
      if (this.beat == 8) {
        this.beat = 0;
        this.bar += 1;
        if (this.bar == 4) {
          this.bar = 0;
        }
        this.playChord(this.$store.state.selecting_chords[this.bar]);
      }
    },
    start: function() {
      this.edit = !this.edit;
      let self = this;
      let interval = 60 / this.bpm / 2;
      console.log(interval);
      this.timeCounter = setInterval(function() {
        self.count();
      }, interval * 1000);
      this.timerOn = true; //timerがOFFであることを状態として保持
    },
    playChord(chord) {
      Object.keys(SOUNDS).forEach(function(key) {
        SOUNDS[key].forEach(function(audio) {
          audio.pause();
          audio.currentTime = 0;
        });
      });
      for (let i = 0; i < 3; i++) {
        SOUNDS[chord][i].play();
      }
    },
    playBeats(beat) {
      beat.pause();
      beat.currentTime = 0;
      beat.play();
    }
  }
};
</script>

<style scoped>
.brank {
  /* margin: 100px; */
}
.side {
  display: flex;
    flex-grow: 1;
  flex-direction: column;
}
.score{
    flex-grow: 4;
}
.game_container {
  display: flex;
}
.index_chord {
  /*height: 90px;*/
}
.index_beat {
}
</style>
