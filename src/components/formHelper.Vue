<template>
  <div>
    <slot name="title"></slot>
    <h1>I am the form helper</h1>
    <slot name="text"></slot>
    <!--Add slot to render the data in the root component with the h1 tag-->
  </div>
</template>

<script>
  export default {
    components:{

    },
    data(){
      return{
        'title':'I am a dynamic slot title'
      }
    },
    methods: {

    }

  }
</script>

<style scoped>
h1{
  color:red;
}
</style>
