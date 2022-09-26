<template>
  <div>
    <h1>{{title}}</h1>
    <ninjas></ninjas> <!--nested component of ninjas in the root component-->
  </div>
</template>

<!--Exporting an object-->
<script>
import Ninjas from './Ninjas.vue' // add this import for registering locally

export default {
  //add components as next step to register component locally
  components:{
    'ninjas':Ninjas
  },
  data () {
    return {
      title:"Ninja App",
    }
  },

}
</script>

<style>

</style>
