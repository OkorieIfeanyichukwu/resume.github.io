<template>
    <nav>
        <ul>
            <li v-for="tag in tags" v-bind:key="tag"><a href="#">{{tag}}</a></li>
        </ul>
    </nav>
</template>
<script>
export default{
    name:'navBar',

    data(){
        return {
            tags:['Home','About','Log In','Sign Up']
        }
    }
}
</script>
<style scoped>
body{
    background-color:#333333 ;
}
nav{
    background-color: brown;
    z-index:999;
    margin:-8px -8px 5px -8px;
    text-align: right;
}
nav ul{
    list-style-type:none;
    display: -webkit-inline-flex;
}
nav ul li{
    margin-right:20px;
    padding: 0px 15px 0px 10px;
    
}
nav ul li:hover{
    background: blue;
    border: 2px green solid;
}
nav ul li a{
    text-decoration: none;
    color:black;
}
</style>