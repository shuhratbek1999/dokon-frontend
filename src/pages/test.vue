<template>
  <div class="hello">
    <Header />
    <p v-if="error">Xato name kiritdingiz</p>
    <h1 >New array {{counts}}</h1>
    <!-- <p>{{random}}</p> -->
    <p> {{fullname}} </p>
    <ul>
      <li v-for="(item) in array" :key="item.name">
        <div class="card">
          <p>{{item.name}} </p>

        <div>
          <button @click="remove(item.id)" class="btn btn-success mr-2">x</button> 
          <button @click="edit(item.id)" class="btn btn-info">-</button> 
        </div>
         <!-- <input type="text"> -->
        </div>
      </li>
    </ul>
    <form action="" @submit.prevent>
      <input type="text" class="form-control mb-2" v-model="names">
    <button type="submit" class="btn btn-info" @click="AddUser" >add text</button>
    </form>
  </div>
</template>

<script>
import Header from "../components/AppHeader.vue"
export default {
  name: 'HelloWorld',
  components:{
    Header
  },
  data() {
    return {
      title: 'salom',
      names: '',
      isDisabled: false,
      fname: "shuhratbek",
      lname: "zokirjonov",
      HandId: null,
      count: 0,
      error: false,
      array: [
        {name: "shuhrat", age: 23, id: 1},
        {name: "behruz", age: 23, id: 2},
        {name: "Bobur", age: 23, id: 3},
        {name: "Abbos", age: 23, id: 4},
        {name: "Sunnat", age: 23, id: 5},
      ]
    };
  },
  mounted(){
    setInterval(() => {
       this.count++
    }, 1000);
  },
  methods:{
    AddUser(){
      if(this.HandId != null){
        let user = this.array.find(x => x.id == this.HandId);
        user.name = this.names
        this.names = '';
      }
      else if(this.names){
        let users = {
          name: this.names
        }
        this.array.push(users);
        this.error = false;
        this.names = ''
      }
      else{
        this.error = true
      }
    },
    remove(id){
      console.log(id);
      this.array = this.array.filter(x => x.id !== id);
    },
    edit(id){
      let newName;
     newName = this.array.find(news => news.id == id);
     this.names = newName.name;
     this.HandId = id;
    }
  },
  computed:{
    counts(){
      return this.array.length;
    },
    fullname: {
      get(){
        return `${this.fname} ${this.lname}`;
      },
      set(){
        return alert('salom')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul li{
  list-style: none;
  /* border: 1px solid black; */
}
ul li .card{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background: #42b983;
  /* border: 1px solid black; */
}
ul{
  width: 400px;
  min-height: 300px;
  /* border: 1px solid black; */
}

.hello{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

a {
  color: #42b983;
}
</style>
