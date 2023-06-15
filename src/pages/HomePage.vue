<template>
  <div class="Home">
    <Header @searchProduct="ProductSearch" />
    <menu-vue />
  <div class="carusels">
    <div class="li_input">
                <span><b-icon icon="search" aria-hidden="true"></b-icon> Искать</span>
                <input type="search" @input="SearchProduct()" v-model="searchs" class="form-control inputs" placeholder="Search...">
      </div>
    <div class="carousel">
        <div class="image-container" id="imgs">
            <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" alt="first-image">
            <img src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" alt="second-image">
            <img src="https://images.unsplash.com/photo-1664295776783-6e72b6ab1387?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" alt="third-image">
            <img src="https://images.unsplash.com/photo-1663875919989-62c9fa1d2da7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80" alt="fourth-image">
        </div>
        <div class="buttons-container">
            <button id="left" class="btn">Previous</button>
            <button id="right" class="btn">Next</button>
        </div>
    </div>
  <img class="images" src="../../public/rasm.jpg" alt="" height="440px">
  </div>
  <div class="categories">
        <div class="categoriya">
          <h4 style="padding-left: 27px">Kitoblar</h4>
          <ul>
            <li v-for="book in books" :key="book.id">
              <img src="../../public/kitob.jpg" alt="" width="80px" height="60px">
              <p>
                <span class="book_title" @click="BookTitle(book)">{{book.title}}</span> <br> 
                <span class="book_desc">{{book.desc}}</span>
              </p>
            </li>
          </ul>
        </div>
          <ul class="categorie">
              <li v-for="(product, index) in searchList" :key="index">
                <p class="check"><b-icon class="icons" @click="cart(product)" icon="cart-check" aria-hidden="true"></b-icon></p>
                <p class="heart" @click="heart(product)" :class="{hearts: productId == product.id && hearttt}"></p>
                
                <div class="product_img">
                  <img :src="product.img" alt="" width="200px" height="140px">
                </div>
                <div class="title" @click="ProductInfo(product, index)">{{product.title}}</div>
                <span class="start"><b-icon class="star" icon="star-fill"></b-icon><b-icon class="star" icon="star-fill"></b-icon><b-icon class="star" icon="star-fill"></b-icon><b-icon class="star" icon="star-fill"></b-icon><b-icon class="star" icon="star-fill"></b-icon></span>
                <p class="price">
                  {{product.price}} cум <br>
                    <span>
                      {{Math.floor(product.price / 12)}} cум / 12 мес
                    </span>
                </p>
                <div class="buttons">
                  <button class="btn2" @click="KorzinkaInfo(product)">Рассрочка</button>
                  <button @click="Haridlar(product)" class="btn1">Купитъ клик</button>
                </div>
              </li>
          </ul>
  </div>
  <div class="asaxiy_info">
    <h1>О компании Asaxiy</h1>
    <p>
      Главное преимущество нашей компании, которая занимается поставками бытовой техники и электроники в Узбекистане – многолетний опыт работы и заслуженное доброе имя. С момента своего развития интернет-магазин Asaxiy и его команда неустанно следит за тенденциями спроса потребительского рынка, что дает нам возможность всегда быть в курсе самых последних технологий и инновационных решений. Специалисты компании внимательно изучают желания наших 
      клиентов, поэтому ресурс постоянно обновляется качественными новинками, имеющими доступную стоимость.
    </p>
      <div class="about">
             <div style="border-bottom: 1px solid grey" class="about_title" v-b-toggle.collapse-1>принцип работы компании
                 <b-collapse id="collapse-1" class="mt-2">
                <b-card>
                  <p class="card-text">Collapse contents Here</p>
                  <p>
                              Каждый покупатель должен в комфортных условиях выбрать телефоны и гаджеты максимально быстро, поэтому мы создали интуитивно понятное меню, которое легко освоить новым пользователям сети. Для большего удобства мы раздели меню на соответствующие разделы, в которых вы найдете более 15 тысяч разновидностей оргтехники и сопутствующих товаров. Выглядят они следующим образом:
                      • посуда – здесь вы найдете самые необходимые атрибуты домашнего обихода, без которого не обходится наша повседневная жизни. Товары, представленные на сайте нашего магазина, обладают высоким качеством и прочностью;
                      • кондиционеры и климатическая техника – раздел позволяет сделать полезные покупки в соответствии с вашими потребностями. К каждому товару имеется описание, которое позволит сделать правильный выбор;
                      • телевизоры, видео и аудио находятся в следующем разделе, который достойно позиционируется как бытовая техника. Здесь представлены самые последние новинки и разработки, имеющие полномасштабный перечень функций, идущий в ногу со временем;
                      • Техника для красоты и здоровья – один из любимых отделов наших постоянных покупательниц, которые знают цену здоровья и стремятся к естественной красоте путем правильного питания;
                      • Компьютеры и оргтехника являются самым большим разделом, так как здесь включены всевозможные аксессуары и вспомогательные комплектующие, призванные облегчить процесс компьютеризации и уменьшить трату рабочего времени.

                      Также наша компания Asaxiy.uz позаботилась про любителей игровых сервисов, о чем может сказать раздел для геймеров. Здесь предоставлено мощное компьютерное обеспечение, игровые мыши и клавиатуры, которые позволят осуществлять игровой процесс с максимальной точностью и меткостью. А для любителей чтения мы предоставили усовершенствованную литературу в виде аудио книг, тематика жанра которых достаточно широка.
                  </p>
                </b-card>
                  </b-collapse>
              </div>
                <div v-b-toggle.collapse-2>Наши преимущества
                   <b-collapse id="collapse-2" class="mt-2">
                <b-card>
                  <p class="card-text">Collapse contents Here</p>
                <p>
                    Компания Asaxiy.uz стремительно прорабатывает все свои возможности, и сегодня мы предлагаем своим клиентам значительные скидки и быструю доставку в ряды городов. В зону нашего обслуживания входят такие города как Андижане, Бухаре, Фергане, Джизак, Хорезм, Наманган, Навои, Кашкадарью, Самарканде, Сырдарье, Сурхандарье и всей Ташкентской области, а также Республика Каракалпакстан. И это неполная карта поставок. Уточнить все наши зоны обслуживания вы можете, позвонив 
                    специалисту интернет-магазина, который предоставит всю интересующую вас информацию.
                    Каждый покупатель нашего магазина – достойный гость, которому мы предложим приятные скидки и бонусные программы. Мы полностью сопроводим весь процесс подбора товаров согласно требованиям клиентам и произведем доставку любым удобным способом.
                </p>
                </b-card>
                   </b-collapse>
              </div>
      </div>
      <p class="about_footer"> 
          "Asaxiy Books" ООО <br>
          Регистрация: 646439 <br>
          ИНН: 305829008 <br>
          Директор: Allayev Firuz Abdunasimovich <br>
      </p>
  </div>
  <banners />
  </div>
</template>
<script>
const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')

let idx = 0
let interval = setInterval(run, 2000);

function run() {
    idx++

    changeImage()
}

function changeImage() {
    if(idx > img.length -1) {
        idx = 0
    }else if(idx < 0) {
        idx = img.length -1
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

rightBtn.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()
})

leftBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})
</script>
<script>
// import { Carousel, Slide } from 'vue-carousel'
import axios from 'axios'
import Banners from '../components/BannerVue.vue'
import Header from "../components/AppHeader.vue"
import MenuVue from "../components/MenuVue.vue"
  export default {
    components:{
      Header,
      Banners,
      MenuVue
    },
    data() {
      return {
        searchList: [],
        slide: 0,
        sliding: null,
        products: [],
        production: [],
        productions: [],
        books: [],
        search: '',
        searchs: '',
        productId: null,
        hearttt: false,
        fullproduct: [
          {id: 1, title: "asaxiy badiiy kitoblari", price: 10000, img: require('../../public/product/kitob.jpg')},
          {id: 1, title: "asaxiy badiiy kitoblari", price: 120000, img: require('../../public/product/muz.jpg')},
          {id: 1, title: "asaxiy badiiy kitoblari", price: 10000, img: require('../../public/product/note10.jpg')},
          {id: 1, title: "asaxiy badiiy kitoblari", price: 10000, img: require('../../public/product/play.jpg')},
          {id: 1, title: "asaxiy badiiy kitoblari", price: 10000, img: require('../../public/product/sich.jpg')},
          {id: 1, title: "asaxiy badiiy kitoblari", price: 10000, img: require('../../public/product/telefon.jpg')},
        ]
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      },
      ProductInfo(product, index){
          this.$store.commit('PRODUCT_INFO', product, index)
          this.$router.push({path: '/info'})
      },
      Data(){
        let self  = this;
        axios({
          method: "get",
          url: 'product/all'
        }).then(res => {
          self.products = res.data.data;
          this.$store.commit("PRODUCT_ALL", res.data.data)
  })
      },
       ProductSearch(item){
        this.searchList = this.products.filter(el=>{
            return el.title.toLowerCase().match(item.toLowerCase())
          })
      },
      cart(product){
         this.production.push(product);
         this.$store.state.lenghts = (this.production.length);
         this.$store.state.products = this.production;
         
      },
      heart(product){
        // this.hearttt = !this.hearttt
        if(this.productId != product.id){
            this.hearttt = true
        }
        else{
           this.hearttt = !this.hearttt
        }
        this.productId = product.id;
        this.$store.dispatch('sevimli/SevimliQoshish', product)
      },
      KorzinkaInfo(product){
         this.$store.dispatch('korzinkaInformation', product)
         this.$router.push({path: '/korzinka_info'})
      },
      book(){
        let self = this;
        axios({
          method: 'get',
          url: '/kitob/all'
        }).then(res => {
          self.books = res.data.data
        })
      },
      BookTitle(book){
        console.log(book);
      },
      Haridlar(mahsulot){
        this.$store.commit("Mahsulot_harid", mahsulot)
        this.$router.push({path: '/tolov_info'})
      }
    },
    mounted(){
      this.Data();
      this.book();
      setTimeout(() => {
         this.searchList = [...this.products]
      }, 1000);
    },
    computed:{
       images(){
        return this.$store.state.all_product
       }
    }
  }
</script>


<style>
  ::-webkit-scrollbar{
  width: 10px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
::-webkit-scrollbar-thumb {
  background: #008DFFFF; 
}
::-webkit-scrollbar-thumb:hover {
  background: green; 
}
</style>
<style scoped>
@media (max-width: 360px){
  


}
/* .Home{
  width: 1360px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.search_input{
  display: none;
}
.carusels{
  width: 1000px;
  /* display: none;
}
.imgs{
  margin: 0px;
  width: 1000px;
  height: 300px;
}
.images{
  margin-left: 30px;
  border-radius: 20px;
}
.categories{
  width: 1300px;
  display: flex;
  background-color: rgb(224, 221, 221);
}
.categoriya{
  width: 280px;
  height: 650px;
  background-color: white;
  border-radius: 20px;
  padding-top: 10px;
}
.categoriya ul{
  list-style: none;
  padding: 0px;
}
.categoriya ul li{
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgb(230, 228, 228);
  padding: 20px 20px;
}
.categoriya ul li:nth-child(6){
  border-bottom: none;
}
.categoriya ul li p{
  padding: 0px 10px;
  font-size: 15px;
}
.categorie{
  width: 1020px;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  box-sizing: border-box;
}
.categorie li{
  margin: 10px;
  border-radius: 20px;
  background-color: white;
  padding: 11px;
  position: relative;
}
.check{
  position: absolute;
  top: 15px;
  right: 15px;
  border-radius: 30%;
  width: 30px;
  height: 30px;
  background-color: #008DFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.heart{
  position: absolute;
  top: 50px;
  right: 15px;
  border-radius: 30%;
  width: 30px;
  height: 30px;
  background-color: #008DFFFF;
  background: url("../../public/product/heart.png") 0 0 no-repeat;
  background-size: 30px;
  background-position: center;
}
.hearts{
  position: absolute;
  top: 50px;
  right: 15px;
  border-radius: 30%;
  width: 30px;
  height: 30px;
  background-color: #008DFFFF;
   background: url("../../public/product/hearts.jpg") 0 0 no-repeat;
   background-size: 30px;
  background-position: center;
}
.buttons{
  display: flex;
  justify-content: space-around;
}
.buttons .btn1{
  background-color: #008DFFFF;
  color: white;
  font-size: 12px;
}
.buttons .btn2{
  background-color: #00CD98FF;
  color: white;
  font-size: 12px;
}
.star{
  color: #008DFFFF;
}
.price, .title{
  font-weight: 600;
}
.price span{
  font-weight: 400;
}
.asaxiy_info{
  width: 1300px;
  padding: 30px;
  border-radius: 20px;
  background-color: white;
}
.asaxiy_info p, .asaxiy_info h1{
  font-size: 12px !important;
}
.about{
  border: 1px solid grey;
  border-radius: 20px;
}
.about div{
  padding: 10px;
} */

/* .Home{
  width: 1320px;
}
.math_price{
  font-weight: 400;
  font-family: 'Times New Roman', Times, serif;
}
.start{
  margin: 10px 0px; 
  display: inline-block;
}
.product_img{
margin-top: 20px; 
padding-right: 10px;
}
.title{
  margin-top: 20px;
  font-weight: 500;
  font-style: italic;
}
.categorie ul li .title:hover{
  color: green;
  cursor: pointer;
  animation: title 3s linear;
}
@keyframes title {
  0% {color: black;}
  25%{color: green; transform: rotate(5deg);}
  50%{color: red; transform: rotate(10deg);}
  100%{color: black;}
}
.asaxiy_info{
    margin: 40px auto;
    padding: 20px 40px;
    width: 98%;
    border-radius: 15px;
    background-color: white;
}
.about{
   border: 1px solid grey;
   margin: 0 auto;
   width: 95%;
   border-radius: 15px;
   padding: 15px;
}
.book_title{
  font-weight: bold;
  font-size: 14px;
}
.book_desc{
  color: grey;
  font-size: 12px;
}
.books{
  border-radius: 15px;
  background-color: white;
}
.books ul{
  display: flex;
  justify-content: space-around;
  height: 110px;
  align-items: center;
  border-bottom: 1px solid grey;
  padding: 0px 10px;
  background-color: white;
}
.books ul li{
  list-style: none;
  margin: 0px 5px;
}
.buttons{
  display: flex;
  justify-content: space-between;
  padding: 0px 10px;
  margin: 20px 0px;
}
.buttons .btn{
   background-color: #00CD98FF;
   color: white;
}
.buttons .btn1{
  background-color: #008DFFFF;
}
.price{
  font-size: 18px;
  font-weight: bold;
}
.star{
  margin: 0px 5px;
  color: #008DFFFF;
}
.carusel{
  margin-top: 30px;
  position: relative;
  z-index: -1;
  border-radius: 20px;
}
.carusels{
  display: flex;
  justify-content: space-between;
  background-color: rgb(238, 243, 245);
}
.carusels img{
  border-radius: 15px;
}
.img{
  border-radius: 20px;
}
.slide{
  width: 950px !important;
  height: 250px !important;
}
.img-fluid{
  border-radius: 20px;
  height: 250px;
}

.categories{
  display: flex;
  box-sizing: border-box;
  width: 100% !important;
  min-height: 1200px;
}
.categoriya{
  width: 24%;
  height: 100vh;
  margin-top: 40px;
  margin-left: 10px;
}
.categorie{
  margin: 80px 0px 0px 15px;
  width: 78%;
  min-height: 100vh;
} 
.categorie ul li:hover{
  box-shadow: 0px 0px 5px black;
}
 .categorie ul li{
  padding: 0px 20px 0px 20px;
  width: 23%;
  border-radius: 10px;
  background-color: white;
  list-style: none;
  margin: 10px 8px;
  position: relative;
  transition: all 0.7s ease-out;
}
.categorie ul{
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.heart{
  width: 40px;
  height: 40px;
  position: absolute;
  right: -5px;
  top: 40px;
  font-size: 20px;
}
.hearts{
  width: 20px;
  height: 20px;
  position: absolute;
  right: 7.5px;
  top: 23px;
  font-size: 16px;
}
.check{
  position: absolute;
  text-align: center;
  line-height: 30px;
  width: 30px;
  height: 30px;
  border-radius: 20px;
  right: 10px;
  top: 10px;
  background-color: blue;
  color: white;
} */
</style>