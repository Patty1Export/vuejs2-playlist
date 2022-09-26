<template>
  <div>
    <form-helper>
      <div slot="form-header">
        <h3>This is the title of the form</h3>
        <p>Information about the form</p>
      </div>
      <div slot="form-fields">
          <input type="text" placeholder="name" required />
          <input type="text" placeholder="password" required />
      </div>
      <div slot="form-controls">
        <button v-on:click="handleSubmit">Submit</button>
      </div>
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
