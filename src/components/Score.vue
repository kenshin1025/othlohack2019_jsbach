<template>
<div id="score">
    <button v-on:click="start">start</button>
    bar:{{this.bar}}<br>
    bar:{{this.beat}}
</div>
</template>
<script>


export default {
  
  name: "Score",
  data() {
    return {
        bar:0,//小節
        beat:0,//八分音符,
        bpm:120,//テンポ
        timeCounter:null
    };
  },

  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.initialize(); // 初期化処理
      next();
    });
  },
  methods: {
    p_getData() {},
    count: function() {
        this.beat += 1
        if(this.beat == 16){
            this.beat = 0
            this.bar += 1;
        }
        if(this.bar == 4) this.bar = 0
    },
    start: function() {
      let self = this;
      let interval = (60/this.bpm) / 2
      console.log(interval)
      this.timeCounter = setInterval(function() {self.count()},interval * 1000 )
      this.timerOn = true; //timerがOFFであることを状態として保持
    },


  }
};
</script>>