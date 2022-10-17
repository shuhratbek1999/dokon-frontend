<template>
    <div class="my-3 news-header">
        <Header />
        <div class="news">
             <ul>
                <li v-for="product in Filtereds" :key="product.id" @click="News_About(product)">
                    <img :src="product.img" alt="telefon" width="200px" height="180px">
                    <p class="title">{{product.title}}</p>
                    <p class="calendar mb-2">
                        <b-icon icon="calendar2-week-fill" style="color: rgb(26, 154, 240); font-size: 10px"></b-icon> 
                        <span>{{day}}</span> <b-icon style="color: rgb(26, 154, 240); margin-right: 8px" icon="eye-fill"> </b-icon> {{product.son}} </p>
                    <p class="desc">{{product.desc}}</p>
                </li>
             </ul>
          <div class="news-right">
                <input type="search" v-model="search" class="form-control" placeholder="Search...">
                <b-icon icon="search" class="search"> </b-icon>
          </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import Header from "../components/AppHeader.vue"
import Footer from "../components/BannerVue.vue"
export default {
    name: 'VueJsBlog',
    components:{
        Header, Footer
    },
    data() {
        return {
           products: [
            {id:1, title: "Какой Смарт ТВ выбратъ?", img: require('../../public/product/telefon.jpg'), desc: "Спойлер: Apple iPhone 14 Pro может иметь больше оперативной памяти, чем когда-либо прежде", son: 0},
            {id:2, title: "Презентация Apple Events 2022", img: require('../../public/product/duh.jpg'), desc: "Спойлер: Apple iPhone 14 Pro может иметь больше оперативной памяти, чем когда-либо прежде", son: 0},
            {id:3, title: "Samsung провела презентацию Unpacked 2022", img: require('../../public/product/kitob.jpg'), desc: "Компания представила две новые модели телефонов с гибким экраном и более прочные Galaxy Watch с датчиком температуры тела", son: 0},
            {id:4, title: "Умные часы Realme Watch 3 представлены официально", img: require('../../public/product/muz.jpg'), desc: "Спойлер: Apple iPhone 14 Pro может иметь больше оперативной памяти, чем когда-либо прежде", son: 0},
            {id:5, title: "Какой Смарт ТВ выбратъ?", img: require('../../public/product/play.jpg'), desc: "Спойлер: Apple iPhone 14 Pro может иметь больше оперативной памяти, чем когда-либо прежде", son: 0},
            {id:6, title: "Какой Смарт ТВ выбратъ?", img: require('../../public/product/sich.jpg'), desc: "Спойлер: Apple iPhone 14 Pro может иметь больше оперативной памяти, чем когда-либо прежде", son: 0},
           ],
           day: new Date().toLocaleDateString(),
           search: '',
           user: JSON.parse(localStorage.getItem("user"))
        };
    },
    

    mounted() {
        
    },
    computed:{
        todos(){
            return this.$store.state.test
        },
        Filtereds(){
            return this.products.filter(title => {
                return title.title.match(this.search)
            })
        }
    },

    methods: {
         News_About(product){
            this.$store.commit("NewsAbout", product)
            localStorage.setItem("user", JSON.stringify(product))
            this.$router.push({path: "/news_info"})
        }
      }
};
</script>

<style lang="css" scoped>
.error{
    color: red;
}
.news{
    width: 100%;
    display: flex;
}
.news ul{
    width: 75%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.news ul li{
    width: 31%;
    list-style: none;
    text-align: center;
    padding: 10px;
    margin: 8px;
    box-sizing: border-box;
    border-radius: 20px;
    background-color: aliceblue;
}
.news-right{
    width: 25%;
    height: 400px;    
    position: relative;
}
.news-right input{
    width: 90%;
    border-radius: 20px;
    height: 50px;
    border: 2px solid grey;
    margin-left: 20px;
}

.news-right .search{
    position: absolute;
    right: 50px;
    top: 16px;
    font-weight: bolder;
}
.desc{
    text-align: left;
    font-size: 16px;
    color: grey;
    font-weight: bold;
}
.title{
    font-size: 14px;
    padding-top: 10px;
    font-weight: bolder;
}
.calendar{
    padding: 0px;
    margin: 0px;
    display: flex;
    align-items: center;
}
.calendar span{
    margin: 0px 10px;
    font-size: 12px;
    font-weight: bold;
}
</style>