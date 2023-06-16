<template>
    <div class="headers">
        <div class="home_header">
            <p v-b-toggle.sidebar-1 @click="hide = true"><b-icon  class="justify" icon="justify" aria-hidden="true"></b-icon></p>
            <h4 class="text-info">Online Market</h4>
            <b-sidebar v-if="hide" id="sidebar-1" title="Menu" shadow bg-variant="white" text-variant="dark" no-header>
                 <div class="header_sidebar">
                    <p class="close" @click="hide = false">x</p>
                    <p class="title">Online Market</p>
                 </div>
              <ul>
                    <li>
                        <b-icon class="icons" icon="credit-card" aria-hidden="true"></b-icon>
                        <p>tolov</p>
                    </li>
                    <li @click="Trek">
                        <b-icon class="icons" icon="house-door" aria-hidden="true"></b-icon>
                        <p>trek</p>
                    </li>
                    <li>
                            <b-icon  v-b-modal.modal-lgs @click="savatcha()" class="icons" icon="cart-check" aria-hidden="true"></b-icon>
                            <p>savatcha</p>
                            <b-modal id="modal-lgs" hide-footer size="lg" :class="{models: showModel}">
                                <template #modal-title>
                                Savatcha
                                </template>
                                <div class="model" v-if="savatchalar.length !== 0">
                                    <table class="jadval">
                                    <tr>
                                        <th>№</th>
                                        <th>name</th>
                                        <th colspan="3">price</th>
                                    </tr>
                                    <tr v-for="(product, index) in savatchalar" class="tr" :key="index">
                                        <td>{{index+1}}</td>
                                        <td>{{product.title}}</td>
                                        <td>{{product.price}}</td>
                                        <td><button class="btn btn-danger" @click="trash(index)">x</button></td>
                                        <td><button style="padding: 6px 10px" @click="jonatish(product)" class="btn btn-success">Jo'natish</button></td>
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
                            <b-icon v-b-modal.modal-lgaa @click="sevimli()"  class="icons" icon="heart" aria-hidden="true"></b-icon>
                            <p>sevimlilar</p>
                                <b-modal id="modal-lgaa" size="lg" title="Sevimlilar" hide-footer>
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
                            <span class="soni"> {{$store.getters['sevimli/sevimliLength']}}</span>
                    </li>
                    <li class="link">
                            <b-icon class="icons" icon="person-circle" aria-hidden="true"></b-icon>
                            <p><router-link to="/" class="logn"> Kabinet </router-link></p>
                    </li>
              </ul>
            </b-sidebar>
        </div>
        <ul class="header">
            <li><h4 class="text-info">Online Market</h4></li>
            <li class="li_input">
                <span><b-icon icon="search" aria-hidden="true"></b-icon> Искать</span>
                <input type="search" @input="SearchProduct" v-model="search" class="form-control inputs" placeholder="Search...">
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
                <b-modal id="modal-lg" class="modal_lg" hide-footer size="lg" :class="{models: showModel}">
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
                            <td></td>
                            <td></td>
                            <td><button class="btn btn-danger" @click="trash(index)">x</button></td>
                            <td><button style="padding: 6px 10px" @click="jonatish(product)" class="btn btn-success">Jo'natish</button></td>
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
                         <table class="jadval" style="text-align: center" v-if="sevimlilar.length !== 0">
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
                <span class="soni"> {{$store.getters['sevimli/sevimliLength']}}</span>
            </li>
            <li class="link">
                <b-icon class="icons" icon="person-circle" aria-hidden="true"></b-icon> <br>
                <router-link to="/" class="logn"> Kabinet </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import axios from "axios"
import {mapActions} from "vuex"
import { required, minLength} from 'vuelidate/lib/validators'
import {validationMixin} from "vuelidate"
export default {
    name: 'VueJsAppHeader',
   mixins: {validationMixin},
    data() {
        return {
            dismissSecs: 5,
            hide: null,
            search: '',
            dismissCountDown: 0,
            showDismissibleAlert: false,
            sevimlilar: [],
            savatchalar: [],
            region: [],
            district: [],
            selected: null,
            valley: ['madyarobod'],
            showModel: false,
            buyurtma: {
                product_id: "",
                phone_number: "",
                full_name: "",
                region_id: "",
                district_id: "",
                adress: "",
                date_time: new Date().getTime() / 1000
            },
            errors: false,
            admin: null
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
    mounted() {
        this.regions(),
        this.districts(),
        this.getUser()
    },
    computed:{
         
    },
    methods: {
        getUser(){
           let user = JSON.parse(localStorage.getItem("usersss"))
           this.admin = user.full_name;
        },
        SearchProduct(){
           this.$emit("searchProduct", this.search)
        },
        Trek(){
          this.$router.push({path: "/yetkizish"})
        },
        savatcha(){
            this.showModel = true
            this.savatchalar = this.$store.state.products;
        },
        ...mapActions(['SavatchaDelete']),
        ...mapActions('sevimli',['SevimliDelete']),
        trash(product){
         this.SavatchaDelete(product)
        },
        sevimli(){
            this.sevimlilar = this.$store.state.sevimli.sev;
        },
        sevTrash(sevimli){
            console.log(sevimli);
            this.SevimliDelete(sevimli)
        },
        korzinka(id,product){
         this.savatchalar.push(product);
         this.$store.state.products = this.savatchalar
         let index = this.$store.state.sevimli.sev.findIndex(x => x.id == id);
         this.$store.state.sevimli.sev.splice(index, 1);
        },
        buyurtmalar(){
            this.$router.push({path: '/tolov_info'})
        },
        jonatish(product){
            this.$store.dispatch('productInfoo', product)
            // this.$store.state.korzinkaInfo.push(product)
            this.$router.push({path: '/tolov_info'})
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
@media(max-width: 360px) {
    /* .header{
        display: none !important;
    }
    .header .li_input{
        display: block;
    }
   .home_header{
    width: 360px !important;
    display: flex !important;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
   }
   .home_header .title{
      color: aqua;
   }
   .home_header p .justify{
      font-size: 20px !important;
      color: blue;
   }
   .home_header ul{
      height: 200px;
      padding: 10px !important;
      display: flex !important;
      flex-direction: column;
      align-items: flex-start !important;
   }
   .home_header ul li{
      width: 250px;
      position: relative !important;
      display: flex !important;
      flex-direction: row !important;
      justify-content: flex-start !important;
      margin: 10px 10px !important;
   }
   .home_header ul li p{
    position: absolute !important;
    left: 35px !important;
    top: 0px !important;
    font-style: italic;
   }
   .home_header ul li .icons{
    font-size: 20px !important;
   }
   .home_header ul li .soni{
    position: absolute;
    top: 0px;
    left: 10px;
    width: 10px !important;
    height: 10px !important;
    font-size: 8px !important;
    background-color: #008DFFFF;
    color: white;
}
   .headers{
    width: 360px !important;
    height: 40px !important;
    position: relative !important;
    padding-top: 5px !important;
   }
   .header_sidebar{
    height: 60px;
     display: flex;
     justify-content: space-around;
     align-items: center;
   }
   .header_sidebar .close{
    font-size: 30px;
    color: #008DFFFF;
   } */
   
}
/* .home_header{
    display: none;
}
.headers{
    width: 1350px;
    height: 100px;
    padding-top: 20px;
    position: fixed;
    top: 0px;
    z-index: 5;
    background-color: white;
}
.headers ul{
    list-style: none;
    display: flex;
    justify-content: space-around;
    padding: 0px;
}
.headers ul li{
    padding: 0px;
    text-align: center;
    position: relative;
}
.headers ul li .icons{
    font-size: 30px;
}
.headers ul li .soni{
    position: absolute;
    top: 0px;
    right: 6px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    background-color: #008DFFFF;
    color: white;
}
.li_input{
    position: relative;
}
.li_input span{
    position: absolute;
    right: 0px;
    border-radius: 5px;
    background-color: #008DFFFF;
    color: white;
    padding: 5px 10px 9px 10px;
}
.li_input input{
    width: 640px;
    border: 2px solid #008DFFFF;
    padding: 6px 0px;
    text-indent: 10px;
    border-radius: 10px;
}
.li_input input:focus{
    outline: none;
} */


</style>