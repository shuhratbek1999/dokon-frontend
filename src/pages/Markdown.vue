<template>
    <div>
        <Header />
        <h1>Markdown App</h1>
       <form-vue @add="AddList" />
       <form-list :posts="posts" />
    </div>
</template>

<script>
import FormVue from "../components/FormVue.vue"
import FormList from "../components/FormList.vue"
import Header from "../components/AppHeader.vue"
export default {
    name: 'VueJsMarkdown',
   components:{
    Header, FormVue, FormList
   },
    data() {
        return {
             posts:[
                {name: "shuhrat", region: "andijon"}
             ]
        };
    },

    mounted() {
        
    },
    computed:{
        
    },

    methods: {
        AddList(post){
            let news = {
                name: post.name,
                region: post.region
            }
            this.posts.push(news);
            post.name ="";
            post.region = ""
        }
    },
};
</script>

<style lang="css" scoped>

</style>