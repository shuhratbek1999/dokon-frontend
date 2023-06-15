<template>
    <div class="korzinka">
        <app-header />
        <div class="header">
            <div class="tovar">
                <span class="btn btn-info text-white" style="padding: 6px 30px">Standart Harid</span> <b>{{$store.getters.KorzinkaLength}}</b>
                <span class="tovar_btn" style="padding: 6px 30px">Sotiladigon tavarlar</span> <b class="b">{{$store.getters.KorzinkaLength}}</b>
            </div>
           <div class="information">
             <div class="korzinka_info">
                <ul v-for="(item, index) in korzinkaINFO" :key="item.id">
                    <li :for="'lns_' + index" @click="Images(item.img)" class="korzinka_img"><img :src="item.img" width="100px" height="100px" alt="">
                       <b-modal v-model="modalShow" size="lg" centered :id="'lns_' + index" title="Product image" hide-footer>
                           <img style="margin-left: 250px" :src="img" alt="" width="300px" height="200px">
                        </b-modal>
                    </li>
                    <li><span>{{item.title}}</span></li>
                    <li>
                         <div class="ProductAdd">
                          <button class="btn" @click="ProductDecrement(item)">-</button> 
                          <span v-if="soni >= 1" style="margin-top: 4px">{{item.soni}}</span> 
                          <button @click="ProductIncrement(item)" class="btn">+</button>
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
                 <p class="amount">Umumiy summa:</p>
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
            soni: 1,
            img: "",
            modalShow: false
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
        Images(rasm){
            this.img = rasm;
            this.modalShow = true
        },
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

</style>