<template>
 <ul>
  <li v-for="ninja in ninjas">{{ninja}}</li>
 </ul>
</template>

<!--Exporting an object-->
<script>
export default {
  data () {
    return {
      ninjas:['Yoshi','Mario','Ryu'],
    }
  },

}
</script>

<style>

</style>
