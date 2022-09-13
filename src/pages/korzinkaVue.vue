<template>
    <div class="korzinka">
        <app-header />
        <div class="header">
            <div class="tovar">
                <span class="btn btn-info text-white" style="padding: 6px 30px">Standart Harid</span> <b>{{$store.getters.KorzinkaLength}}</b>
                <span  style="padding: 6px 30px">Sotiladigon tavarlar</span> <b class="b">{{$store.getters.KorzinkaLength}}</b>
            </div>
           <div class="information">
             <div class="korzinka_info">
                <ul v-for="item in korzinkaINFO" :key="item.id">
                    <li class="korzinka_img"><img :src="item.img" width="100px" height="100px" alt=""></li>
                    <li><span>{{item.title}} {{item.quantity}}</span></li>
                    <li>
                         <div class="ProductAdd">
                          <button class="btn" @click="ProductDecrement(item)">-</button> <span v-if="soni >= 1">{{item.soni}}</span> <button @click="ProductIncrement(item)" class="btn">+</button>
                         </div>
                    </li>
                    <li class="deleted" @click="DeleteProduct(item.id)">
                        <span class="price">{{item.price}}</span><br>
                       <b-icon class="icons" icon="trash" aria-hidden="true"></b-icon> <span class="del">deleted</span>
                     </li>
                </ul>
            </div>
            <div v-if="$store.state.korzinkaInfo.length === 0" :class="{korzinka_information: $store.state.korzinkaInfo.length === 0}">
                <p class="text-warning text-center">Korzinkada hech narsa mavjud emas</p>
            </div>
            <div class="korzinka_price">
                 <div>
                    <p class="korzinka_title">Korzinada {{$store.getters.KorzinkaLength}} mahsulot</p>
                 <p>Umumiy summa:</p>
                 <p class="price" style="font-size: 20px">{{totalPrice}} Sum</p>
                 <hr>
                 <button class="btn btn-warning mt-4 text-white" @click="buyurtma(korzinkaINFO)">Buyurtma</button>
                 </div>
            </div>
           </div>
        </div>
     <Footer />
    </div>
</template>

<script>
import Footer from "../components/BannerVue.vue"
import AppHeader from "../components/AppHeader.vue"
export default {
    name: 'PortfoliyaKorzinkaVue',
   components: {AppHeader, Footer},
    data() {
        return {
            soni: 1
        }
    },

    mounted() {
        
    },
    computed:{
       korzinkaINFO(){
        return this.$store.state.korzinkaInfo
       },
       totalPrice(){
        let price = 0;
         this.$store.state.korzinkaInfo.map(key => {
            price += key['quantity'] * key['price']
         })
         return price;
       }
    },

    methods: {
        ProductDecrement(item){
            this.$store.commit('ProductDecrement', item)
        },
        ProductIncrement(item){
            this.$store.commit('ProductIncrement', item)
        },
        DeleteProduct(id){
            this.$store.commit('DeletedProduct', id)
        },
        buyurtma(item){
           this.$store.state.korzinkaInfo = item;
           this.$router.push({path: '/tolov_info'})
        }
    },
};
</script>

<style scoped>
.tovar{
    top: 20px;
    left: 20px;
    position: relative;
}
.tovar span{
    font-weight: bolder;
}
.tovar b{
    position: absolute;
    left: 150px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: white;
    line-height: 20px;
    text-align: center;
    color: green;
}
.tovar .b{
    position: absolute;
    left: 350px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: rgb(40, 153, 245);
    line-height: 20px;
    text-align: center;
    color: white;
}
.header{
    width: 100%;
    min-height: 400px;
    background-color: rgb(239, 241, 241);
}
.korzinka_title{
    color: rgb(41, 129, 245);
    font-weight: 800;
}
.price{
    font-weight: bold;
}
.ProductAdd{
    width: 150px;
    height: 30px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    background-color: whitesmoke;
}
.ProductAdd button{
    padding: 0px 10px;
    color: white;
    font-weight: bolder;
    background-color: rgb(70, 117, 248);
}
.korzinka_img{
    width: 130px;
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    box-shadow: 0px 0px 15px rgb(138, 137, 137);
}
.deleted .del{
    color: #f78e04;
    font-weight: bold;
}
.icons{
    color: #f78e04;
    font-weight: bold;
}
.icons:hover, .del:hover{
    cursor: pointer;
}
.information{
    width: 100%;
    min-height: 400px;
    background-color: rgb(239, 241, 241);
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.korzinka_info{
    display: flex;
    justify-content: center;
    flex-direction: column;
    min-height: 600px;
}

.korzinka_information{
    width: 800px;
    height: 200px;
    line-height: 200px;
    font-size: 24px;
    border-radius: 15px;
    background-color: whitesmoke;
}

.korzinka_info ul{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 800px;
    height: 200px;
    border-radius: 15px;
    background-color: white;
}
.korzinka_info ul li{
    list-style: none;
}
.korzinka_price{
    width: 300px;
    padding: 20px;
    text-align: center;
    height: 250px;
    border-radius: 15px;
    background-color: white;
}
.btn{
    padding: 10px 70px;
}
</style>