<template>
  <div>
    <!--Dynamic Component-->
    <keep-alive>
      <component v-bind:is="component"></component> <!--add data binding-->
    </keep-alive>
    <button v-on:click="component = 'form-one'">Show Form One</button>
    <button v-on:click="component = 'form-two'">Show Form Two</button>
  </div>
</template>
<!--Update Both Components in Header and Footer-->
<script>
import formOne from './components/formOne.vue';
import formTwo from './components/formTwo.vue';

export default{
  components:{
    'form-one':formOne,
    'form-two':formTwo,
  },
  data(){
    return{
      component: 'form-one',
    }
  },

  methods:{
    handleSubmit: function(){
            alert('thanks for submitting');
    }
  }
 }

</script>

<style scoped>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}

</style>
