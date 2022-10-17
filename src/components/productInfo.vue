<template>
    <div class="info">
        <AppHeader />
         <div class="product_info">
            <div class="row">
            <div class="col-5 rasm">
                 <img src="" alt="" width="400px" height="250px">
                 <p class="heart" v-for="product in Informations" :key="product.id"><b-icon class="icons" @click="heart(product)" icon="heart" aria-hidden="true"></b-icon></p>
            </div>
            <div class="col-5">
                 <ul class="list">
                    <li style="list-style: none" v-for="(info, index) in Informations" :key="index">
                         <p><span>Nomi:</span> {{info.title}} </p>
                         <p><span>Narhi:</span> <b>{{info.price}}</b> </p>
                         <p> {{Math.floor(info.price / 12)}} / 12 oy </p>
                         <span><b-icon class="star" icon="star"></b-icon><b-icon class="star" icon="star"></b-icon><b-icon class="star" icon="star"></b-icon><b-icon class="star" icon="star"></b-icon><b-icon class="star" icon="star"></b-icon></span>
                         <p><span>Model yoki Brend:</span> {{info.categories}}</p>
                         <p><span>Mavjudligi:</span> ha bor</p>
                         <p><span style="margin-right: 10px">Boshqalarga ulashish:</span> <b-icon class="twitter" icon="twitter"></b-icon> <b-icon class="star" icon="telegram"></b-icon> <b-icon class="star" icon="instagram"></b-icon><b-icon class="star" icon="facebook"></b-icon></p>
                    </li>
                 </ul>
            </div>
         </div>
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
        this.Data();
    },

    methods: {
        Data(){
            this.Informations.push(this.$store.state.products)
        },
        heart(product){
            this.$store.dispatch('sevimli/SevimliQoshish', product)
        }
    },
};
</script>

<style lang="css" scoped>
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
        background-color: gainsboro;
        min-height: 400px;
    }
    .row{
        margin-left: 50px;
    }
    .row .rasm{
        margin-top: 55px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 300px;
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
    }
</style>