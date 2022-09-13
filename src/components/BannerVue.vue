<template>
    <div>
        <div class="banner"> 
      <ul>
        <li><img src="../../public/footer/artel.png" width="100px" alt="artel"></li>
        <li><img src="../../public/footer/acer.jpg" width="100px" alt="acer"></li>
        <li><img src="../../public/footer/apple.png" width="100px" alt="apple"></li>
        <li><img src="../../public/footer/hiaomi.png" width="100px" alt="hiaomi"></li>
        <li><img src="../../public/footer/hp.jpg" width="80px" alt="hp"></li>
        <li><img src="../../public/footer/huawe.png" width="100px" alt="huawe"></li>
        <li><img src="../../public/footer/lenovo.png" width="100px" alt="lenovo"></li>
        <li><img src="../../public/footer/midea.png" width="100px" alt="midea"></li>
        <li><img src="../../public/footer/nokia.webp" width="100px" alt="nokia"></li>
      </ul>
         </div>
         <div class="apps">
            <img style="background-color: red" src="../../public/footer/rasm.jpg" width="250px" alt="">
             <section>
                 <img src="" alt="">
                 <p>Ваш интернет магазин</p>
                 <ul>
                    <li><img src="../../public/footer/apple.png" width="50px" alt=""> <span>App Store</span></li>
                    <li><img src="../../public/footer/apple.png" width="50px" alt=""> <span>Google Play</span></li>
                 </ul>
             </section>
         </div>
         <div class="footer">
                 <ul class="footer_ul">
                   <li>
                        <img src="../../public/footer/market.svg" alt="">
                        <p>
                          <span>Болще не нужно ходитъ на базар</span> <br>
                          У нас выгодные цены и <br>
                          доставка до дома
                        </p>
                    </li>
                    <li>
                        <img src="../../public/footer/fast.svg" alt="">
                        <p>
                          <span>Болще не нужно ходитъ на базар</span><br>
                          У нас выгодные цены и <br>
                          доставка до дома
                        </p>
                    </li>
                    <li>
                        <img src="../../public/footer/return.svg" alt="">
                        <p>
                          <span>Болще не нужно ходитъ на базар</span> <br>
                          У нас выгодные цены и <br>
                          доставка до дома
                        </p>
                    </li>
                    <li>
                        <img src="../../public/footer/card.svg" alt="">
                        <p>
                          <span>Болще не нужно ходитъ на базар</span> <br>
                          У нас выгодные цены и <br>
                          доставка до дома
                        </p>
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
                  <li><img src="" alt=""></li>
                  <li><img src="" alt=""></li>
                  <li><img src="" alt=""></li>
                  <li><img src="" alt=""></li>
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
export default {
    name: 'PortfoliyaBannerVue',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>
.footer_end{
  width: 100%;
  color: white;
  display: flex;
  justify-content: center;
  margin-top: 40px;
}
.footer{
  background-color: rgb(18, 137, 216);
  height: 700px;
  width: 100%;
}

.footer .footer_ul{
  transform: translate(15px, 40px);
  width: 98%;
  height: 140px;
  display: flex;
  background-color: white;
  border-radius: 15px;
  justify-content: space-around;
  align-items: center;
}
.footer .footer_ul li{
  width: 24%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.footer .footer_ul li p{
  font-size: 15px;
}
.footer .footer_ul li p span{
  font-weight: bold;
}
.footer .list{
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-top: 50px;
  padding: 50px 50px 20px 20px;
}
.footer .list .list-1{
  width: 33%;
  color: white;
  font-weight: 600;
}
.footer .list .list-1 h5{
   margin-bottom: 30px;
}
.footer .list .list-1 p span{
  margin-left: 10px;
}
.footer .footer_pay{
    height: 60px;
    width: 100%;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    line-height: 60px;
}
.footer .footer_pay>ul{
    display: flex;
    justify-content: center;
    align-items: center;
}
.footer .footer_pay>ul>li{
   padding: 5px 15px;
   list-style: none;
   font-size: 13px;
   color: white;
   font-weight: 500;
}
.foter_icon{
  font-size: 20px;
}
.foter_icons{
  font-size: 16px;
  color: white;
}
.apps{
  width: 98%;
  height: 250px;
  border-radius: 20px;
  background-color: rgba(9, 152, 248, 1.2);
  margin: 30px auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.apps>img{
  transform: rotate(-30deg);
}
.apps section ul li{
  list-style: none;
  border: 1px solid white;
  border-radius: 10px;
  padding: 7px 10px;
  color: white;
  margin: 0px 10px;
}
.apps section ul{
  display: flex;
}
.apps section{
  text-align: center;
  color: white;
}
.banner{
  width: 98%;
  height: 130px;
  line-height: 130px;
  margin: 30px auto;
  background-color: white;
  border-radius: 20px;
}
.banner ul{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.banner ul li{
  list-style: none;
}
</style>