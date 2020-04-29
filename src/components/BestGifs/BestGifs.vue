<template>
    <div class="best-gifs">
        <h2 class="title">Los más buscados 🔥</h2>
        <ul class="best-gifs__list list">
            <li class="item" @click="onClick1()">Gifs de futbol</li>
            <li class="item" @click="onClick2()">Gifs de animales</li>
            <li class="item" @click="onClick3()">Gifs de trump</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "BestGifs",
    methods: {
        onClick1(){
            let queryInput = "futbol"
            this.$emit("retrieveTopGifs1", queryInput)
            this.queryInput = null
        },
        onClick2(){
            let queryInput = "animales"
            this.$emit("retrieveTopGifs2", queryInput)
            this.queryInput = null
        },
        onClick3(){
            let queryInput = "trump"
            this.$emit("retrieveTopGifs3", queryInput)
            this.queryInput = null
        },


    }
    
}
</script>

<style lang="sass">
  @import 'BestGifs.sass'
</style>