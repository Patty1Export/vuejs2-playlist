<template>
  <div>
    <form-helper>
      <h2 slot="title">{{title}}</h2>
      <p slot="text">I am the the paragraph text of the slot</p> <!--Add slot attribute with a "text" name-->
    </form-helper>
  </div>

</template>
<!--Update Both Components in Header and Footer-->
<script>
import formHelper from './components/formHelper.vue';

export default{
  components:{
    'form-helper':formHelper,
  },
  data(){
    return{
      'title':'I am a dynamic slot title'
    }
  },

  //reacted events
  methods:{

  }
 }

</script>

<style scoped>

</style>
