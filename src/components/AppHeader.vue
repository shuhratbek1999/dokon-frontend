<template>
    <div class="headers">
        <ul class="header">
            <li><h4 class="text-info">Online Market</h4></li>
            <li class="li_input">
                <input type="search" v-model.lazy="search" class="form-control" placeholder="Search...">
            </li>
            <li>
                <b-icon class="icons" icon="credit-card" aria-hidden="true"></b-icon>
                <p>tolov</p>
            </li>
            <li @click="Trek">
                 <b-icon class="icons" icon="house-door" aria-hidden="true"></b-icon>
                <p>trek</p>
            </li>
            <li>
    <b-icon  v-b-modal.modal-lg @click="savatcha()" class="icons" icon="cart-check" aria-hidden="true"></b-icon>
    <p>savatcha</p>
    <b-modal id="modal-lg" hide-footer size="lg">
    <template #modal-title>
        Savatcha
        </template>
        <div class="model" v-if="savatchalar.length !== 0">
            <table class="jadval">
            <tr>
                <th>№</th>
                <th style="width: 200px">name</th>
                <th colspan="3">price</th>
            </tr>
            <tr v-for="(product, index) in savatchalar" class="tr" :key="index">
                <td>{{index+1}}</td>
                <td>{{product.title}}</td>
                <td>{{product.price}}</td>
                <td><button class="btn btn-danger" @click="trash(index)">x</button></td>
                <td><button id="show-btn" v-b-modal.modal-xl style="padding: 6px 10px" @click="jonatish(product.id)" class="btn btn-success">Jo'natish</button></td>
            </tr>
            </table>
                    <b-modal id="modal-xl" size="xl" ref="my-modal"  hide-footer>
                        <template #modal-title>
                            <p>foydalanuvchi malumotlari</p>
                        </template>
                        <div class="d-block text-center jonatish" style="height: 480px">
                                <b-alert
                                class="alerts"
                                :show="dismissCountDown"
                                variant="danger"
                                @dismissed="dismissCountDown=0"
                                @dismiss-count-down="countDownChanged"
                                >
                                Formalarni to'ldirib keyin Yuborishni bosing {{ dismissCountDown }} seconds...
                                </b-alert>
                                <div class="row">
                                <div class="col-5">
                                    <label for="numbers">Phone number</label>
                                        <input 
                                        v-model="$v.buyurtma.phone_number.$model" 
                                        type="tel" id="numbers" 
                                        value="12" 
                                        class="form-control"
                                        >
                                        <span class="error" v-if="!$v.buyurtma.phone_number.required">telefon nomer kiriting</span>
                                        <span class="error" v-if="!$v.buyurtma.phone_number.minLength">maksimal uzunligi {{$v.buyurtma.phone_number.$params.minLength.min}}</span>
                                </div>
                                <div class="col-5">
                                        <label for="names">F.I.O</label>
                                        <input 
                                        v-model="$v.buyurtma.full_name.$model" 
                                        type="text" id="names" 
                                        placeholder="ismingiz" 
                                        class="form-control">
                                        <span class="error" v-if="!$v.buyurtma.full_name.required">full_name kiritish shart</span>
                                        <span class="error" v-if="!$v.buyurtma.full_name.minLength">maksimal uzunligi {{$v.buyurtma.full_name.$params.minLength.min}} </span>
                                </div>
                                </div>
                                <div class="row my-4">
                                <div class="col-5">
                                    <label for="">Viloyat</label>
                                        <v-select
                                            style="background: #ffff;"
                                            :options="region"
                                            label="name"
                                            :reduce="option => option.id"
                                            v-model="buyurtma.region_id"
                                            placeholder="Viloyatni to'ldiring"
                                            />
                                            
                                    <span class="error" v-if="$v.buyurtma.region_id.required">viloyat kiritish shart</span>
                                </div>
                                <div class="col-5">
                                    <label for="">Tuman</label>
                                    <v-select
                                            style="background: #ffff;"
                                            :options="district"
                                            label="name"
                                            :reduce="option => option.id"
                                            v-model="buyurtma.district_id"
                                            placeholder="Tumanni to'ldiring"
                                        />
                                        <span class="error" v-if="!$v.buyurtma.district_id.required">tuman kiritish shart</span>
                                </div>
                                </div>
                                <div class="row">
                                <div class="col-10">
                                <label for="">Adress</label>
                                    <b-form-textarea
                                        id="textarea"
                                        v-model="buyurtma.adress"
                                        placeholder="Enter something..."
                                        rows="3"
                                        max-rows="6"
                                        ></b-form-textarea>
                                </div>
                                </div>
                                <div class="row mt-4">
                                <div class="col-5">
                                    <input type="radio" name="x">  Naqd
                                </div>
                                <div class="col-5">
                                    <input type="radio" name="x"> Plastik
                                </div>
                                </div>
                                <div class="row mt-3">
                                <div class="col-10">
                                    <button 
                                        class="btn btn-success" 
                                        @click="buyurtmalar" 
                                        style="padding: 8px 30px">Yuborish</button>
                                </div>
                                </div>
                        </div>
                    </b-modal>
        </div>
                        <div class="d-block text-center text-danger" v-else>
                            <p>Malumotlar mavjud emas</p>
                        </div>
                    </b-modal>
                <span class="soni"> {{$store.getters.savatchaLength}} </span>
            </li>
            <li>
                <b-icon v-b-modal.modal-lga @click="sevimli()"  class="icons" icon="heart" aria-hidden="true"></b-icon>
                <p>sevimlilar</p>
                     <b-modal id="modal-lga" size="lg" title="Sevimlilar" hide-footer>
                         <table class="jadvals" style="text-align: center" v-if="sevimlilar.length !== 0">
                            <tr>
                                <th>№</th>
                                <th>name</th>
                                <th>price</th>
                            </tr>
                            <tr v-for="(item, index) in sevimlilar" :key="index">
                                <td>{{index+1}}</td>
                                <td>{{item.title}}</td>
                                <td>{{item.price}}</td>
                                <td><button class="btn btn-danger" @click="sevTrash(index)">x</button></td>
                                <td> <button class="btn btn-success btns" @click="korzinka(item.id,item)">korzinka</button></td>
                            </tr>
                         </table>
                         <div class="d-block text-center text-danger" v-else>
                              <p>Malumotlar mavjud emas</p>
                         </div>
                     </b-modal>
                <span class="soni"> {{$store.getters.sevimliLength}} </span>
            </li>
            <li class="link">
                <b-icon class="icons" icon="person-circle" aria-hidden="true"></b-icon>
                <router-link to="/" class="logn"> Kabinet </router-link>
            </li>
        </ul>
        <MenuHeader class="menus" />
        {{$store.getters}}
    </div>
</template>

<script>
import axios from "axios"
import {mapActions} from "vuex"
import { required, minLength} from 'vuelidate/lib/validators'
import {validationMixin} from "vuelidate"
import MenuHeader from './MenuVue.vue'
export default {
    name: 'VueJsAppHeader',
   components:{ MenuHeader},
   mixins: {validationMixin},
    data() {
        return {
            dismissSecs: 5,
            search: '',
            dismissCountDown: 0,
            showDismissibleAlert: false,
            sevimlilar: [],
            savatchalar: [],
            region: [],
            district: [],
            selected: null,
            valley: ['madyarobod'],
            buyurtma: {
                product_id: "",
                phone_number: "",
                full_name: "",
                region_id: "",
                district_id: "",
                adress: "",
                date_time: new Date().getTime() / 1000
            },
            errors: false
        };
    },
    validations:{
    buyurtma:{
         phone_number:{
            required,
            minLength: minLength(6)
         },
         full_name:{
            required,
            minLength:minLength(4)
         },
         adress:{
            required,
            minLength: minLength(4)
         },
         region_id:{
            required
         },
         district_id:{
            required
        }
         }
    },
    watch:{
       search(){
          console.log('salom');
       }
    },
    mounted() {
        this.regions(),
        this.districts()
    },
    computed:{
         
    },
    methods: {
        Trek(){
          this.$router.push({path: "/yetkizish"})
        },
        savatcha(){
            this.savatchalar = this.$store.state.products;
        },
        ...mapActions(['SavatchaDelete']),
        ...mapActions(['SevimliDelete']),
        trash(product){
         this.SavatchaDelete(product)
        },
        sevimli(){
            this.sevimlilar = this.$store.state.sev;
        },
        sevTrash(sevimli){
            console.log(sevimli);
            this.SevimliDelete(sevimli)
        },
        korzinka(id,product){
         this.savatchalar.push(product);
         this.$store.state.products = this.savatchalar
         let index = this.$store.state.sev.findIndex(x => x.id == id);
         this.$store.state.sev.splice(index, 1);
        },
        buyurtmalar(){
            let self = this;
             if(this.$v.buyurtma.$invalid == false){
                axios({
                    method: 'post',
                    url: '/buyurtma/create',
                    data: self.buyurtma
                }).then(res => {
                        let index = this.$store.state.products.findIndex(x => x.id == res.data.data.product_id)
                        this.$store.state.products.splice(index,1);
                        this.$refs['my-modal'].hide();
                        this.buyurtma = {
                                        product_id: "",
                                        phone_number: "",
                                        full_name: "",
                                        region_id: "",
                                        district_id: "",
                                        adress: "",
                                        date_time: ""
                                    }
                })
             }
             else{
                this.dismissCountDown = this.dismissSecs
             }
        },
        jonatish(product){
                this.buyurtma.product_id = product;
        },
        countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
        regions(){
            let self = this;
            axios({
                method: 'get',
                url: '/region/all'
            }).then(res => {
                self.region = res.data.data
            })
        },
        districts(){
            let self = this;
            axios({
                method: 'get',
                url: '/district/all'
            }).then(res => {
                self.district = res.data.data
            })
        }
    },
};
</script>

<style lang="css" scoped>
.jadvals{
    width: 600px;
    margin: 0 auto;
}
.alerts{
    position: absolute;
    top: -40px;
    left: 350px;
}
.jonatish{
    top: 30px;
    position: relative;
}
.error{
    color: red;
    font-size: 12px;
}
.err{
    color: red;
}
.jonatish .row .col-5, .jonatish .row .col-10{
    text-align: left;
}
.row{
    display: flex;
    justify-content: center;
}
.header{
    position: fixed;
    top: 20px;
    width: 100%;
    z-index: 3;
}
.headers{
    width: 100%;
}
.btns{
    height: 40px;
}
.menus{
    margin-top: 60px;
}
ul a{
    padding: 0px 10px;
    color: white;
    text-decoration: none;
}
ul{
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-around;
}

ul li{
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 0px 10px;
}
ul .li_input{
    width: 550px;
}
ul li a{
    padding: 0px;
    margin: 0px;
}
.link{
    margin-top: 10px !important;
}
.logn{
    color: black;
}
.inputs{
    width: 100%;
}
.search{
    background-color: rgb(25, 90, 230);
    color: white;
    position: relative;
    width: 100px;
    padding: 10px 10px;
}
.icon{
    position: absolute;
    z-index: 2;
    color: white;
    top: 14px;
    right: 12px;
}
.input{
    border: 2px solid rgb(25, 90, 230);
    border-radius: 10px;
    color: aqua;
}
.icons{
    font-size: 25px;
}

ul li p{
    position: absolute;
    top: 32px;
}
.soni{
    width: 18px;
    font-size: 12px;
    position: absolute;
    height: 18px;
    text-align: center;
    line-height: 18px;
    border-radius: 50%;
    background-color: rgb(93, 93, 240);
    color: white;
    top: 5px;
    right: -4px;
}
.model{
    min-height: 300px !important;
    width: 900px !important;
    margin: 0px 150px;
}
.jadval{
    height: 100px;
    width: 600px !important;
}

/* .jadval tr {
    display: flex;
    justify-content: space-around;
} */
/* .dropdown{
    border: none;
} */
</style>