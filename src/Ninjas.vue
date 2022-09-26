<template>
  <div>
    <h1>List of Ninjas</h1>
    <ul>
      <li v-for="ninja in ninjas">{{ ninja }}</li>
    </ul>
  </div>
</template>

<!--Exporting an object-->
<script>
export default {
  data() {
    return {
      ninjas: ["Yoshi", "Mario", "Ryu"],
    };
  },
};
</script>

<style scoped>
  h1{
    color:green;
  }
</style>
