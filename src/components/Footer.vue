<template>
  <footer>
   <p>{{copyright}}</p>
  </footer>
</template>

<script>
 export default{
  data(){
    return{
    copyright:"Copy Right 2022 Vue Ninjas"
    }
  }
 }

</script>

<style scoped>
footer{
  background: darkgrey;
  padding: 6px;
}
p{
  color:lightgreen;
  text-align: center;
}
</style>
