<template>
    <div class="tolov">
        <AppHeader />
        <div class="model">
            <div class="jonatish" v-if="!tayyor" style="height: 480px">
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
                      <input type="tel" v-model="buyurtma.phone_number" v-mask="'+999-(99)-999-99-99'" class="form-control" placeholder="telefon nomer">
                       <span v-if="errors != null">
                            <span class="error" v-if="!errors.phone_number.required">telefon nomer kiritish shart</span>
                            <span class="error" v-if="!errors.phone_number.minLength">maksimal uzunligi {{$v.buyurtma.phone_number.$params.minLength.min}}</span>
                       </span>
                    </div>
                    <div class="col-5">
                            <label for="names">F.I.O</label>
                            <input 
                            v-model="$v.buyurtma.full_name.$model" 
                            type="text" id="names" 
                            placeholder="ismingiz" 
                            class="form-control">
                          <span v-if="errors != null">
                                <span class="error" v-if="!errors.full_name.required">full_name kiritish shart</span>
                                <span class="error" v-if="!errors.full_name.minLength">maksimal uzunligi {{$v.buyurtma.full_name.$params.minLength.min}} </span>
                          </span>
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
                            <span v-if="errors != null">
                                <span class="error" v-if="!errors.region_id.required">viloyat kiritish shart</span>
                            </span>
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
                            <span v-if="errors != null">
                              <span class="error" v-if="!errors.district_id.required">tuman kiritish shart</span>
                            </span>
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
                            <input type="radio" v-model="buyurtma.pay_type" value="0" name="x">  Naqd
                        </div>
                        <div class="col-5">
                             <input type="radio" v-model="buyurtma.pay_type" value="1" name="x"> Plastik
                        </div>
                    </div>
                    <div class="row mt-5">
                    <div class="col-12 buttons">
                         <button 
                            class="btn btn-success text-white" 
                            @click="buyurtmalar" 
                            style="padding: 10px 30px">Yuborish
                         </button>
                         <!-- {{$v.buyurtma}} -->
                    </div>
                </div>
            </div>
            <!-- {{$v.buyurtma}} -->
             <div v-else>
                <b-alert
                class="alerts"
                :show="dismissCount"
                variant="info"
                @dismissed="dismissCount=0"
                @dismiss-count-down="countDownChanged1"
                >
                Buyurtmangiz qabul qilindi {{ dismissCount }} seconds...
        </b-alert>
             </div>
        </div>
    </div>
</template>

<script>
import AwesomeMask from 'awesome-mask'
import axios from 'axios'
import AppHeader from '../components/AppHeader.vue'
import { required, minLength} from 'vuelidate/lib/validators'
export default {
    name: 'PortfoliyaTolovMalumotlari',
    components:{AppHeader},
   directives:{
     'mask': AwesomeMask
   },
    data() {
        return {
            tayyor: false,
            dismissSecs: 5,
            dismissCountDown: 0,
            dismiss: 5,
            dismissCount: 0,
            showDismissibleAlert: false,
            region: [],
            district: [],
             buyurtma: {
                product_id: 0,
                phone_number: "",
                full_name: "",
                region_id: "",
                district_id: "",
                adress: "",
                date_time: Math.floor(new Date()),
                pay_type: ""
            },
            errors: null
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
    computed:{
        ProductID(){
             return this.$store.state.korzinkaInfo
          }
    },
    mounted() {
        this.regions(),
        this.districts();
    },
    methods: {
       buyurtmalar(){
            let self = this;
             if(this.$v.buyurtma.$invalid == false){
                axios({
                    method: 'post',
                    url: '/buyurtma/create',
                    data: self.buyurtma
                }).then(res => {
                    console.log(res);
                            this.$store.state.korzinkaInfo.splice(0, 1);
                            this.buyurtma = {
                                        product_id: "",
                                        phone_number: "",
                                        full_name: "",
                                        region_id: "",
                                        district_id: "",
                                        adress: "",
                                        date_time: "",
                                        pay_type: ""
                                    }
                   this.dismissCount= this.dismiss
                   this.tayyor = true;
                   setTimeout(() => {
                    this.$router.push({path: '/home'})
                   }, 2000);
                    
                })
             }
             else{
                this.dismissCountDown = this.dismissSecs;
                this.errors = this.$v.buyurtma;
                console.log('salom');
             }
        },
      countDownChanged(dismissCountDown) {
         this.dismissCountDown = dismissCountDown
      },
      countDownChanged1(dismissCount) {
         this.dismissCount = dismissCount
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
<style scoped>
.model{
    width: 80%;
    /* border: 1px solid red; */
    margin: 0 auto;
    background-color: white;
    border-radius: 15px;
    padding: 20px 0px;
}

.jonatish .row{
    margin-left: 170px;
}
.jonatish .row .col-5 label{
    font-weight: bold;
    padding-bottom: 5px;
}
.error{
    color: red;
    font-size: 11px;
}
.alerts{
    width: 700px;
    left: 400px;
    position: absolute;
}


</style>