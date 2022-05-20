<template>
    <h1>List of foods</h1>
    <ul>
        <li v-for="food in foods" v-bind:key="food">{{food}}</li>
    </ul>
    
</template>
<script>

export default{

     
  name:'foodComp.vue',
  
  

    data(){
        return{
            foods:['rice','beans','eba']
        }
    }

}
</script>
<style scoped>
h1{
    color:blue;
}
</style>