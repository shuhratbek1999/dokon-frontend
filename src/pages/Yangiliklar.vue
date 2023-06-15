<template>
    <div class="my-3 news-header">
        <Header />
        <div class="news">
            <div class="li_input">
                <span><b-icon icon="search" aria-hidden="true"></b-icon> Искать</span>
                <input type="search" @input="SearchProduct()" v-model="searchs" class="form-control inputs" placeholder="Search...">
          </div>
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
           user: JSON.parse(localStorage.getItem("user")),
           soni: 0
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
            this.soni++;
            this.$store.commit("NewsAbout", product)
            this.$router.push({path: "/news_info"})
        }
      }
};
</script>

<style lang="css" scoped>

</style>