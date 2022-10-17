<template>
    <div style="height: 800px">
        <Header />
        <h1>Markdown App</h1>
       <form-vue @add="AddList" />
       <form-list :posts="posts" />
       <section>
          <div class="boxs">
             <h2>Who are add?</h2>
             <form action="" @submit.prevent>
                <input class="inputs" v-model="text" type="text" placeholder="....text">
                <button @click="Add" class="btn btn-success">Add</button> <br>
                <span v-if="errors" style="color: red; font-size: 12px">soz kiritish shart</span>
             </form>
             <div class="lists">
                <ul>
                    <li v-for="(item, index) in lists" :key="index">
                         <input class="editInput" v-if="edit && currentID == index"  type="text" v-model="lists[index]" placeholder="editt...">
                         <div v-else>{{item}}</div>
                    <div class="button">
                         <button @click="Tozalash(index)" class="btn btn-danger text-white">x</button> 
                         <button v-if="edit && currentID == index" @click="edit = false" class="btn btn-info">save</button>
                         <button v-else @click="EditItem(index)" class="btn btn-warning text-white">edit</button>
                         
                    </div>
                    </li>
                </ul>
             </div>
          </div>
         </section>
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
             ],
             lists: ["salom"],
             text: "",
             edit: false,
             currentID: 0,
             errors: false
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
        },
        Add(){
            if(this.text.length != 0){
                this.lists.push(this.text);
                this.text = "";
                this.errors = false
            }else{
                this.errors = true
                setTimeout(() => {
                    this.errors = false
                }, 1000);
            }
        },
        Tozalash(index){
            this.lists.splice(index, 1)
        },
        EditItem(index){
            this.edit = true;
            this.currentID = index
        }
    },
};
</script>

<style lang="css" scoped>
.boxs{
    width: 500px;
    height: 400px;
    background-color: antiquewhite;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
}
.boxs .inputs{
    padding: 5px;
    outline: none;
    border-radius: 10px;
    border: none;
    margin-right: 10px;
    width: 280px;
        text-indent: 20px;
}
section{
    display: flex;
    justify-content: center;
}
.button button{
    margin: 0px 5px;
}
.lists ul{
    margin-top: 20px;
}
.lists{
    width: 70%;
    display: flex;
    border-radius: 10px;
    background-color: aquamarine;
    margin-top: 20px;
    max-height: 250px;
}
.lists ul li{
   list-style: none;
   width: 300px;
   display: flex;
   justify-content: space-around;
   margin-bottom: 10px;
}
.editInput{
    border-radius: 10px;
    outline: none;
    border: none;
    text-indent: 20px;
}
</style>