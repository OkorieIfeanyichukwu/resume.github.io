<template>
<div id="parent-container">
  <div id="container">
    <article id="shiftLeft">
      <left-side></left-side>
    </article>
    <article id="shiftRight">
      <right-side></right-side>
    </article>
    
  </div>

  <div id="signature">
    <footer-sign></footer-sign>
  </div>
</div>
  
    

</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data() {
    return {
      title:'This is your first vue file',
      output:''
    }
  },
  methods:{
    readRefs:function(){
      console.log(this.$refs.input.value);
      this.output= this.$refs.input.value
    },
    greeting:function(){
      return 'Good evening guys'
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  padding:auto;
}


#parent-container{
  background: yellow;
  top:0px;
  left:0px;
  right:0px;
  bottom:0px;
  width:100%;
  height:100%;
  overflow:scroll;
  padding:auto;

}
#container {
  background: black;
  position: relative;
  display:flex;
  width:60%;
  margin:auto;
  height:auto;
}
#shiftLeft{
  background:#b47878;
  position:relative;
  width:40%;

}
#shiftRight {
  background:#ac9c9c;
  position:relative;
  


}
#signature{
  position:relative;
  text-align:center;
}
</style>
