<template>
    <div>
         <form action="" @submit.prevent>
             <input type="text" class="form-control" placeholder="name" v-model="post.name">
             <input type="text" class="form-control" placeholder="region" v-model="post.region">
             <button class="btn btn-success" @click="Addlists">AddList</button>
         </form>
    </div>
</template>
<script>
export default {
    name: 'PortfoliyaFormVue',

    data() {
        return {
            post:{
                name: "",
                region: ""
            }
        };
    },

    mounted() {
        
    },

    methods: {
        Addlists(){
            this.$emit("add", this.post)
        }
    },
};
</script>
<style scoped>
 form input{
    width: 300px;
    margin: 0px 10px;
 }
 form{
    display: flex;
    justify-content: center;
 }
</style>