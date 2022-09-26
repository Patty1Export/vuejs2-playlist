<template>
  <div>

    <!--rendering updated titles-->
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas> <!--add props for the template-->
    <app-footer v-bind:title="title"></app-footer>
  </div>

</template>
<!--Update Both Components in Header and Footer-->
<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Ninjas from './components/Ninjas.vue';

export default{
  components:{
    'app-header':Header,
    'app-footer':Footer,
    'app-ninjas':Ninjas,
  },
  data(){
    return{
      ninjas:[
        {name:'Ryu', specialty:'Vue Components', show:false},
        {name:'Crystal', specialty:'HTML Wizardy', show:false},
        {name:'Histoshi', specialty:'Click Events', show:false},
        {name:'Tango', specialty:'Conditionals', show:false},
        {name:'Kami', specialty:'Webpack', show:false},
        {name:'Yoshi', specialty:'Data Diggin', show:false},
      ],
      title:"Vue Ninjas"
    }
  },

  //reacted events
  methods:{
    updateTitle: function(updatedTitle){
      this.title = updatedTitle;
    }
  }
 }

</script>

<style scoped>

</style>
