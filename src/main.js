import Vue from 'vue'
import App from './App.vue'


export const bus = new Vue(); //first step to add event bus

new Vue({
  el: '#app',
  render: h => h(App) //rendering the app component
})
