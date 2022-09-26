<template>
  <div>
    <h1>{{title}}</h1>
    <h1>{{greeting()}}</h1>
  </div>
</template>

<!--Exporting an object-->
<script>
export default {
  data () {
    return {
      title:"Your first vue file",
    }
  },
  methods: {
    greeting:function(){
      return "Heyy cowboy";
    }
  }
}
</script>

<style>

</style>
