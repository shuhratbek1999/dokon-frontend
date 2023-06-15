<template>
    <div class="info">
        <AppHeader />
         <div class="product_info">
            <div class="row" v-for="info in Informations" :key="info.id">
            <div class="col-5 rasm">
                 <img :src="info.img" alt="" width="400px" height="250px">
                 <p class="heart" ><b-icon class="icons" @click="heart(info)" icon="heart" aria-hidden="true"></b-icon></p>
            </div>
            <div class="col-5">
                 <ul class="list">
                    <li style="list-style: none">
                         <p> <span style="font-weight: 500; font-size: 20px">{{info.title}} </span></p>
                         <p> <b style="font-size: 20px">{{info.price}} сум</b> </p>
                         <p style="font-weight: 600"> {{Math.floor(info.price / 12)}} / 12 oy </p>
                         <span><b-icon class="star" icon="star"></b-icon><b-icon class="star" icon="star"></b-icon><b-icon class="star" icon="star"></b-icon><b-icon class="star" icon="star"></b-icon><b-icon class="star" icon="star"></b-icon></span>
                         <p><span>Model yoki Brend:</span> <b>{{info.categories}}</b></p>
                         <p><span>Mavjudligi:</span> <b style="color: green">ha bor</b></p>
                         <p><span style="margin-right: 10px">Boshqalarga ulashish:</span> 
                                 <span class="twitter"><b-icon icon="twitter"></b-icon> </span>
                                 <span class="telegram"><b-icon icon="telegram"></b-icon></span> 
                                 <span class="instagram"><b-icon icon="instagram"></b-icon></span>
                                 <span class="facebook"><b-icon class="face" icon="facebook"></b-icon></span>
                          </p>
                         <div class="btns">
                            <button class="btn btn1">добавить в корзину</button>
                            <button class="btn btn2">Купить в 1 клик</button>
                         </div>
                    </li>
                 </ul>
            </div>
         </div>
         </div>
         <div class="product_about" v-for="item in Informations" :key="item.id">
              <h1>Описание товара</h1>
              <p>диагональ экрана: 6.60", количество основных камер: 3, память: 128 ГБ, оперативная память: 8 ГБ, 
                емкость аккумулятора: 4500 мА⋅ч, разрешение экрана: 2340×1080, частота обновления экрана: 120 Гц</p>
                <h2>Общие характеристики</h2>
                <p>Тип корпуса <br>
                  <span>классический</span>
                  </p>
                  <p>
                    Степень защиты <br>
                    <span>IP68</span>
                  </p>
                  <p>
                    Количество SIM-карт <br>
                    {{item.simkarta}}
                  </p>
                  <p>
                    Вес <br>
                    {{item.ogirligi}} г
                  </p>
                  <p>
                    Размеры (ШxВxТ) <br>
                    {{item.razmer}}
                  </p>
                  <h1>Экран</h1>
                  <p>
                    Дисплей <br>
                    {{item.razmer}}
                  </p>
                  <h1>Память и процессор</h1>
                  <p>
                    Процессор <br>
                    {{item.protsessor}}
                  </p>
                  <p>
                    Встроенная память <br>
                    {{item.tashqi_xotira}}
                  </p>
                  <p>
                    Оперативная память <br>
                    {{item.ichki_xotira}}
                  </p>
                  <h1>Питание</h1>
                  <p>
                    Емкость аккумулятора <br>
                    {{item.batareka}}
                  </p>
         </div>
         <Footer />
    </div>
</template>
<script>
import AppHeader from "../components/AppHeader.vue"
import Footer from "./BannerVue.vue"
export default {
    name: 'PortfoliyaProductInfo',
    components:{AppHeader,Footer},
    data() {
        return {
            Informations: [],
            productions: []
        };
    },

    mounted() {
        this.Informations = this.$store.state.product_info
    },

    methods: {
        heart(product){
            this.$store.dispatch('sevimli/SevimliQoshish', product)
        }
    },
};
</script>

<style lang="css" scoped>
/* .product_about{
    width: 98%;
    min-height: 550px;
    border-radius: 20px;
    background-color: white;
    margin: 40px auto;
    padding: 20px 0px 20px 20px;
}
.facebook, .telegram, .instagram,.twitter{
    width: 35px;
    height: 35px;
    border-radius: 50%;
    text-align: center;
    line-height: 34px;
    display: inline-block;
    margin: 0px 5px;
}
.instagram{
    background-color: #25D366FF;
}
.facebook{
    background-color: #3B5998FF;
}
.telegram{
    background-color: #0088CCFF;
}
.twitter{
    background-color: #36D8FFFF;
}
.facebook .face, .b-icon{
    color: white;
}
.btns .btn1{
    background-color: #FE7300FF;
    color: white;
    margin-right: 20px;
    padding: 10px 30px;
}
.btns .btn2{
    color: #FE7300FF;
    border-color: #FE7300FF;
    padding: 10px 30px;
    transition: all 0.4s ease-out;
}
.btns .btn2:hover{
    background-color: #FE7300FF;
    color: white;
}

    .star{
        margin: 0px 4px;
    }
     ul li p span{
        font-weight: bold;
     }
     ul li p b{
        color: brown;
     }
     .list{
        display: flex;
        align-items: center;
        height: 400px;
     }
    .product_info{
        width: 99%;
        background-color: #F4F7FDFF;
        min-height: 400px;
    }
    .row{
        margin-left: 50px;
    }
    .row .rasm{
        margin-top: 20px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 400px;
        border-radius: 15px;
        background-color: white;
    }
    .icons{
        font-size: 20px;
    }
    .heart{
        width: 35px;
        height: 35px;
        border-radius: 10px;
        background-color: blue;
        line-height: 35px;
        text-align: center;
        color: white;
        position: absolute;
        top: 10px;
        right: 10px;
    } */
</style>