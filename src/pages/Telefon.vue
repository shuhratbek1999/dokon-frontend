<template>
    <div class="phoness">
         <app-header />
<div class="phone_category">
        <div class="phones">
           <div class="telefon">
          <h4 style="padding-left: 27px; padding-top: 10px; font-weight: 500; font-size: 18px">Kategoriyalar</h4>
              <ul>
                <li>knopkali telefon</li>
                <li>smartfonlar</li>
                <li>radiotelefonlar</li>
                <li>simli telefon</li>
                <li>IP telefon</li>
              </ul>
           </div>
           <div class="company">
            <h4>ishlab chiqaruvchilar</h4>
               <ul>
                <li><input @input="Telefoon(2)" v-model="check" type="checkbox"> Apple {{check}}</li>
                <li><input type="checkbox"> BQ-mobile</li>
                <li><input type="checkbox"> Blackview</li>
                <li><input type="checkbox"> Gigaset</li>
                <li><input type="checkbox"> Google</li>
                <li><input type="checkbox"> Honor</li>
                <li><input type="checkbox"> Samsung</li>
               </ul>
           </div>
        </div>
        <div class="phone_list">
             <ul>
              <li v-for="(product, index) in this.$store.state.telefon" :key="index">
                <p class="check"><b-icon class="icons" @click="cart(product)" icon="cart-check" aria-hidden="true"></b-icon></p>
                <p class="hearts" v-if="hearttt && productId == product.id"><b-icon class="hearts" @click="heart(product)" icon="heart-fill" aria-hidden="true"></b-icon></p>
                <p class="heart" v-else><b-icon class="icons" @click="heart(product)" icon="heart" aria-hidden="true"></b-icon></p>
                <div style="margin-top: 20px; padding-right: 10px">
                  <img :src="product.img" alt="" width="200px" height="140px">
                </div>
                <p style="margin-top: 20px" @click="ProductInfo(product)">{{product.title}}</p>
                <span style="margin: 10px 0px; display: inline-block"><b-icon class="star" icon="star"></b-icon><b-icon class="star" icon="star"></b-icon><b-icon class="star" icon="star"></b-icon><b-icon class="star" icon="star"></b-icon><b-icon class="star" icon="star"></b-icon></span>
                <p class="price">{{product.price}}</p>
                <p>{{Math.floor(product.price / 12)}} / 12 oy</p>
                <div class="buttonss" style="margin: 20px 0px">
                  <button class="btn" @click="KorzinkaInfo(product)">korzinka</button>
                  <button @click="Haridlar(product)" class="btn btn1">Harid</button>
                </div>
              </li>
             </ul>
             <div class="overflow-auto overfloow">
                <b-pagination
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                aria-controls="my-table"
                first-number
                pills
                align="right"
              ></b-pagination>
             </div>

             <div class="about_phones">
                  <h3>Самый лучший на планете телефон – у нас есть.</h3>
                  <p>
                    Вы можете доверять каталогу мобильной цифровой техники, представленной на наших страницах. Интернет-магазин <br>
                   «Asaxiy» гарантирует быструю доставку и качество товаров. Доставим любой телефон в следующие города:
                  </p>
                  <p>
                     Ташкент, Андижан, Бухару, Фергану, Джизак, Хорезм, Наманган, Навои, Кашкадарью,  Республику <br>
                      Каракалпакстан, Самарканд,  Сырдарью, Сурхандарью, Ташкентскую область.
                  </p>
                  <p>
                    Покупка телефона – всегда волнительное и затратное событие. А заказ по интернету добавляет беспокойства по <br>
                    поводу качества продукции, которую нельзя рассмотреть, проверить, подержать в руках. Наши менеджеры работают  <br>
                    над тем, чтобы развеять ваши страхи. Оформите заявку на сайте Asaxiy Books – и вы сэкономите деньги, время и нервы.
                  </p>
                  <p>
                    Коллекция телефонов в нашем интернет-магазине представлена самыми разными марками, обладающими популярностью и <br> хорошей 
                     репутацией на мировом цифровом рынке. Здесь вы можете выбрать подходящую вам модель средства связи: от кнопочного  телефона до 
                     суперсовременного смартфона самого известного мирового  <br>
                     флагмана цифровой техники.
                  </p>
                  <p>
                    <b>«Apple»</b> — любимец интернет-пользователей, блогеров и тиктокеров.
                  </p>
                  <p><b>«BQ-Mobile»</b> — оптимальное соотношение «цена-качество».</p>
                  <p>
                    <b>«Honor» и «Huawei»</b> — давно обрели популярность как качественные высокотехнологичные телефоны средней ценовой категории, 
                     отличные фотографии и высокое качество связи будут гарантированы.
                  </p>
                  <p>
                    <b>«Infinix» </b>— модели данной марки завоевали любовь пользователей необычным дизайном, большой памятью и удобством пользования. <br>
                   Все эти качества в сочетании с хорошей ценой – то, что, возможно, нужно именно вам.
                  </p>
                  <p>
                    <b>«Nokia»</b> — ветеран цифрового рынка не сдает свои позиции и предлагает надежные лаконичные средства связи, <br>
                     способные удовлетворить все потребности современного пользователя.
                  </p>
                  <p>
                    <b>«Novey»</b> — поклонники кнопок и брутального дизайна порадуются современной версии классического телефона.
                  </p>
                  <p>
                    <b>«OPPO» </b>— хорошая марка порадует любителей медийных развлечений – звук, скорость игр, большой экран, качество видео.
                  </p>
                  <p>
                    <b>«Realme»</b> — относительно новый участник рынка мобильных телефонов. Свежий дизайн, небольшой <br> вес, хорошая камера – все эти качества помогают завоевать доверие пользователей.
                  </p>
                  <p>
                    <b>«Samsung»</b> — этот флагман в представлении не нуждается.
                  </p>
                  <p>
                    <b>«Vivo»</b> – пользователи отмечают хороший аккумулятор, удобный дизайн, высокое качество фото и видеосъемки.
                  </p>
                  <p>
                    <b>«Xiaomi»</b> — эта марка давно заняла свою уверенную нишу на данном рынке.
                  </p>
                  <p>
                    Мы предлагаем вам выбрать подходящую модель на все случаи жизни. Сориентироваться в множестве <br>
                     товаров помогут правдивые отзывы покупателей. Оформите заказ на сайте, мы быстро доставим его по <br>
                      вашему адресу. Гарантия предоставляется.
                  </p>
                  <p>
                    Добро пожаловать в мир качественной техники!
                  </p>
             </div>
        </div>
  </div>
         <Banners />
    </div>
</template>
<script>
import axios from "axios"
import AppHeader from "../components/AppHeader.vue"
import Banners from "../components/BannerVue.vue"
export default {
    name: 'PortfoliyaTelefon',
    components: {AppHeader, Banners},
    data() {
        return {
            books: [],
            searchList: [],
            Telefon: [],
            hearttt: false,
            currentPage: 2,
            perPage: 8,
            check: "",
        };
    },

    mounted() {
      this.Telefons();
    },
  computed:{
      telefons(){
        return this.$store.state.telefon
      },
      productPagination(){
        let from = (this.currentPage - 1) +this.perPage;
        let to = from + this.perPage;
       return this.telefons.slice(from, to)
      },
      rows(){
        return this.telefons.length
      }
  },
    methods: {
      // Telefoon(num){
      //    setTimeout(() => {
      //     if(this.check == true){
      //       axios({
      //       method: 'get',
      //       url: `telefon/sort?filter_id=${num}`
      //     }).then(res => {
      //       console.log(res.data.data);
      //       this.$store.commit('TELEFON', res.data.data)
      //     })
      //     }
      //    }, 800);
      // },
       Telefons(){
        if(this.check == false){
           axios({
            method: 'get',
            url: 'telefon/alls'
        }).then(res => {
          console.log(res.data.data, "if");
            this.$store.commit('TELEFON', res.data.data)
        })
        }
        else{
          console.log("else");
        }
       },
       cart(payload){
          this.$store.commit("PRODUCT_CART", payload)
       },
       heart(payload){
        this.$store.commit('sevimli/SEVIMLI', payload)
       },
       ProductInfo(payload){
        this.$store.commit('PRODUCT_INFO', payload)
        this.$router.push({path: '/info'})
       },
       KorzinkaInfo(product){
         this.$store.dispatch('korzinkaInformation', product)
         this.$router.push({path: '/korzinka_info'})
      },
      Haridlar(mahsulot){
        this.$store.commit("Mahsulot_harid", mahsulot)
        this.$router.push({path: '/tolov_info'})
      }
    },
};
</script>

<style scoped>

</style>