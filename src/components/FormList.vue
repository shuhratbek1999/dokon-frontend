<template>
    <div>
        <div class="lists" v-for="(post, index) in posts" :key="index">
            <div><strong>Names: </strong> {{post.name}}</div>
            <div><strong>Region: </strong> {{post.region}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PortfoliyaFormList',
    data() {
        return {
            
        }
    },
     props:{
        posts:{
            type: Array,
            required: true
        }
     },
    mounted() {
        
    },

    methods: {
        
    },
};
</script>
<style lang="css" scoped>
  div .lists{
     width: 700px;
     height: 100px;
     border: 1px solid black;
     margin: 15px auto;
     padding: 20px;
  }
</style>