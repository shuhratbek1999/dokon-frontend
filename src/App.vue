<template>
  <nav>
      <router-view> </router-view>
  </nav>
</template>

<script>
export default {
  name: 'VueJsApp',
 components:{
 },
  data() {
    return {
      
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100vh;
}
nav{
  background-color: azure;
}


nav a {
  font-weight: bold;
  color: #2c3e50;
  border: 1px solid black;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
