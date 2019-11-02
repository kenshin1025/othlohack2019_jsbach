<template>
    <div :class="set_bg">
        <button v-on:click="up_chord">上</button>
        <p>{{chord_name}}</p>
        <button v-on:click="down_chord">下</button>
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
        beforeUpdate(){
            this.$store.commit('update_selecting_chords', {
                chord: this.chord_name,
                cursor: this.cursor_bar
            });
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
                    active : this.is_active,
                }
            }
        },
        props:["cursor_bar", "is_active"]
    }
</script>

<style scoped>
    .bg_warm{
        background-color: #d16b16;
    }
    .bg_cold{
        background-color: #0168b3;
    }
    .active{
        background-color: white;
    }
</style>