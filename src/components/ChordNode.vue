<template>
    <div :class="set_bg">
        <div v-on:click="up_chord" class="button">▲</div>
        <p>{{chord_name}}</p>
        <div v-on:click="down_chord" class="button">▼</div>
    </div>
</template>

<script>
    const chord_list = ["C", "Dm", "Em", "F", "G", "Am"];
    export default {
        name: "chordNode",
        data(){
            return {
                chord_name : "C",
                selecting_chord : 0,
                is_bg_warm : true,
                is_bg_cold : false,
            }
        },
        methods: {
            up_chord(){
                if(this.selecting_chord < chord_list.length-1) {
                    this.selecting_chord++;
                    this.chord_name = chord_list[this.selecting_chord];
                }
            },
            down_chord(){
                if(this.selecting_chord > 0){
                    this.selecting_chord--;
                    this.chord_name = chord_list[this.selecting_chord];
                }
            }
        },
        computed: {
            set_bg(){
                return {
                    bg_warm : this.chord_name.length === 1,
                    bg_cold : this.chord_name.length === 2,
                }
            }
        },
        // props:[four_beet_bg]
    }
</script>

<style scoped>
    .bg_warm{
        height: 90PX;
        width: 25%;
        background: #1089ff;/*#d16b16; */
        transition: all 300ms 0s ease;
        border-left: solid 1px #FFFFFF;
        color: #23374d;
    }
    .bg_cold{
        background: #23374d;/*#0168b3;*/
        width: 25%;
        transition: all 300ms 0s ease;
        border-left: solid 1px #FFFFFF;
        color: #e5e5e5;
    }
    .button{
      background-color: rgba(255,0,0,0);
      cursor: pointer;
      user-select: none;
    }
</style>
