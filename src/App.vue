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
  color: #2c3e50;
  min-height: 600px;
}

nav {
  padding: 30px 5px;  
  background-color: rgb(238, 243, 245);
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
