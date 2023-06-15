<template>
  <div class="containers">
      <router-view> </router-view>
  </div>
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
<style>
@media (max-width: 360px){
  #app{
    width: 350px !important;
  }
  .containers{
    width: 360px !important;
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.containers{
  width: 1355px;
}

</style>
