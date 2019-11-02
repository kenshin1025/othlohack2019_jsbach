<template>
    <div :class="set_bg">
        <button v-on:click="up_code" >上</button>
        <p>{{code_name}}</p>
        <button v-on:click="down_code">下</button>
    </div>
</template>

<script>
    const code_list = ["C", "Dm", "Em", "F", "G", "Am"];
    export default {
        name: "CodeNode",
        data(){
            return {
                code_name : "C",
                selecting_code : 0,
                is_bg_warm : true,
                is_bg_cold : false,
            }
        },
        beforeUpdate(){
            // this.code_name = code_list[this.selecting_code];
        },
        methods: {
            up_code(){
                if(this.selecting_code < code_list.length-1) {
                    this.selecting_code++;
                    this.code_name = code_list[this.selecting_code];
                }
            },
            down_code(){
                if(this.selecting_code > 0){
                    this.selecting_code--;
                    this.code_name = code_list[this.selecting_code];
                }
            }
        },
        computed: {
            set_bg(){
                return {
                    bg_warm : this.code_name.length === 1,
                    bg_cold : this.code_name.length === 2,
                }
            }
        },
        // props:[four_beet_bg]
    }
</script>

<style scoped>
    .bg_warm{
        background-color: #d16b16;
    }
    .bg_cold{
        background-color: #0168b3
    }
</style>