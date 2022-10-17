<template>
  <div class="Home">
    <Header @searchProduct="ProductSearch" />
  <div class="carusels">
     <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    img-width="1024"
    img-height="300"
    caption="salom"
  >
    <b-carousel-slide
    class="slider"
      caption="Asaxiydan yoshlar uchun maxsus el yurt ishonchi"
      img-src="https://picsum.photos/1024/480/?image=10"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Second Slide"
      img-src="https://picsum.photos/1024/480/?image=12"
    ></b-carousel-slide>
    <b-carousel-slide
      caption="Third Slide"
      img-src="https://picsum.photos/1024/480/?image=22"
    ></b-carousel-slide>
  </b-carousel>
  <img src="../../public/rasm.jpg" alt="" height="440px">
  </div>
   <div class="col-4 mt-4">
   </div>
  <div class="categories">
        <div class="categoriya">
           <div class="books">
          <h4 style="padding-left: 27px">Kitoblar</h4>
              <ul v-for="book in books" :key="book.id">
                <li><img width="100px" height="80px" src="../../public/kitob.jpg" alt=""></li>
                <li><span class="book_title" @click="BookTitle(book)">{{book.title}}</span> <br> <span class="book_desc">{{book.desc}}</span></li>
              </ul>
           </div>
        </div>
        <div class="categorie">
             <ul>
              <li v-for="(product, index) in images" :key="index">
                <p class="check"><b-icon class="icons" @click="cart(product)" icon="cart-check" aria-hidden="true"></b-icon></p>
                <p class="hearts" v-if="hearttt && productId == product.id"><b-icon class="hearts" @click="heart(product)" icon="heart-fill" aria-hidden="true"></b-icon></p>
                <p class="heart" v-else><b-icon class="icons" @click="heart(product)" icon="heart" aria-hidden="true"></b-icon></p>
                
                <div style="margin-top: 20px">
                  <img :src="product.img" alt="" width="200px" height="140px">
                </div>
                <p style="margin-top: 20px" @click="ProductInfo(product)">{{product.title}}</p>
                <span style="margin: 10px 0px; display: inline-block"><b-icon class="star" icon="star"></b-icon><b-icon class="star" icon="star"></b-icon><b-icon class="star" icon="star"></b-icon><b-icon class="star" icon="star"></b-icon><b-icon class="star" icon="star"></b-icon></span>
                <p class="price">{{product.price}}</p>
                <p>{{Math.floor(product.price / 12)}} / 12 oy</p>
                <div class="buttons" style="margin: 20px 0px">
                  <button class="btn" @click="KorzinkaInfo(product)">korzinka</button>
                  <button @click="Haridlar(product)" class="btn btn1">Harid</button>
                </div>
              </li>
             </ul>
        </div>
  </div>
  <div class="asaxiy_info">
    <h1>О компании Asaxiy</h1>
    <p>
      Главное преимущество нашей компании, которая занимается поставками бытовой техники и электроники в Узбекистане – многолетний опыт работы и заслуженное доброе имя. С момента своего развития интернет-магазин Asaxiy и его команда неустанно следит за тенденциями спроса потребительского рынка, что дает нам возможность всегда быть в курсе самых последних технологий и инновационных решений. Специалисты компании внимательно изучают желания наших 
      клиентов, поэтому ресурс постоянно обновляется качественными новинками, имеющими доступную стоимость.
    </p>
      <div class="about">
             <p style="border-bottom: 1px solid grey; padding-bottom: 20px" v-b-toggle.collapse-1>принцип работы компании
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
              </p>
                <p v-b-toggle.collapse-2>Наши преимущества
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
              </p>
      </div>
      <p style="margin-top: 10px"> 
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
// import {mapMutations} from "vuex"
import axios from 'axios'
import Banners from '../components/BannerVue.vue'
import Header from "../components/AppHeader.vue"
  export default {
    components:{
      Header,
      Banners
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
      ProductInfo(product){
          this.$store.state.products = product;
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
        if(this.productId == product.id){
            this.hearttt = !this.hearttt
        }
        else{
           this.hearttt = false
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
      console.log(this.products);
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


<style scoped>

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
}
.buttons .btn{
   background-color: rgb(67, 245, 192);
   color: white;
}
.buttons .btn1{
  background-color: rgb(24, 154, 206);
}
.price{
  font-size: 18px;
  font-weight: bold;
}
.star{
  margin: 0px 5px;
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
 .categorie ul li{
  padding: 0px 20px;
  width: 23%;
  border-radius: 10px;
  background-color: white;
  list-style: none;
  margin: 10px 8px;
  position: relative;
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
}
</style>