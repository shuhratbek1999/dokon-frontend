<template>
    <div class="banners">
      <ul class="banner">
        <li v-for="(item, index) in images" :key="index">
          <img :src="item.url" alt="rasm" width="100px">
        </li>
      </ul>
         <div class="apps">
            <img class="footer_img" src="../../public/footer/rasm.jpg" width="250px" alt="">
             <section>
                 <img class="asaxiy_logo" src="../../public/footer/ass.png" alt="">
                 <p>Ваш интернет магазин</p>
                 <img class="appstore" src="../../public/footer/appp.png" alt="">
             </section>
         </div>
         <div class="footer">
                 <ul class="footer_ul">
                   <li>
                        <img src="../../public/footer/market.svg" alt="">
                        <span>
                          <span class="img_title">Болще не нужно ходитъ на базар</span> <br>
                          У нас выгодные цены и <br>
                          доставка до дома
                        </span>
                    </li>
                    <li>
                        <img src="../../public/footer/fast.svg" alt="">
                        <span>
                          <span class="img_title">Болще не нужно ходитъ на базар</span><br>
                          У нас выгодные цены и <br>
                          доставка до дома
                        </span>
                    </li>
                    <li>
                        <img src="../../public/footer/return.svg" alt="">
                        <span>
                          <span class="img_title">Болще не нужно ходитъ на базар</span> <br>
                          У нас выгодные цены и <br>
                          доставка до дома
                        </span>
                    </li>
                    <li>
                        <img src="../../public/footer/card.svg" alt="">
                        <span>
                          <span class="img_title">Болще не нужно ходитъ на базар</span> <br>
                          У нас выгодные цены и <br>
                          доставка до дома
                        </span>
                    </li>
                 </ul>
            <div class="list">
                <div class="list-1">
                    <h5>Информация</h5>
                    <p>Публичная оферта</p>
                    <p>оферта для покупок в рассрочку</p>
                    <p>Условия рассрочки</p>
                    <p>Оплата и доставка товара</p>
                    <p>Отмена заказа и возврат товара</p>
                    <p>О нас</p>
                </div>
                <div class="list-1">
                      <h5>Для связи</h5>
                      <p>
                       <b-icon class="foter_icon" icon="telephone" aria-hidden="true"></b-icon> <span>+998 99 394 12 26</span>
                      </p>
                      <p>
                        <b-icon class="foter_icon" icon="envelope" aria-hidden="true"></b-icon>  <span>Info@asaxiy.uz</span>
                      </p>
                      <p>
                        <b-icon class="foter_icon" icon="geo-alt" aria-hidden="true"></b-icon>  <span>Чиланзар 3, Ташкент</span>
                      </p>
                </div>
                <div class="list-1">
                    <h5>Наш Facebook</h5>
                      <p>
                        <img src="" alt="">
                      </p>
                </div>

            </div>
             <div class="footer_pay">
                <ul>
                  <li>Виды оплаты:</li>
                  <li><b-icon class="foter_icons" icon="credit-card-fill" aria-hidden="true"></b-icon></li>
                  <li><b-icon class="foter_icons" icon="credit-card2-back" aria-hidden="true"></b-icon></li>
                  <li>Мы в соц.сетях:</li>
                  <li><b-icon class="foter_icons" icon="facebook" aria-hidden="true"></b-icon></li>
                  <li><b-icon class="foter_icons" icon="telegram" aria-hidden="true"></b-icon></li>
                  <li><b-icon class="foter_icons" icon="instagram" aria-hidden="true"></b-icon></li>
                  <li><b-icon class="foter_icons" icon="youtube" aria-hidden="true"></b-icon></li>
                </ul>
             </div>
             <div class="footer_end">
              2015-2022 Интернет-магазин asaxiy.uz: Бытовая техника и др. Доставка товаров осуществляется во все регионы. Все права защищены.
             </div>
         </div>
    </div>
</template>

<script>
// import { Swiper, SwiperSlide } from "vue-awesome-swiper"
export default {
    name: 'PortfoliyaBannerVue',
    // components:{Swiper, SwiperSlide},
    data() {
        return {
            images: [
              {url: require("../../public/footer/artel.png")},
              {url: require("../../public/footer/acer.jpg")},
              {url: require("../../public/footer/apple.png")},
              {url: require("../../public/footer/hiaomi.png")},
              {url: require("../../public/footer/hp.jpg")},
              {url: require("../../public/footer/huawe.png")},
              {url: require("../../public/footer/lenovo.png")},
              {url: require("../../public/footer/nokia.webp")}
            ],
            myOptions:{
              slidesPerView: 4
            }
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>


</style>