<template>
    <div class="trek">
        <AppHeader />
         <div class="trek-header">
            <h1 style="margin-bottom: 25px">Статус заказа</h1>
         <p style="color: grey; font-weight: 500">
            Чтобы увидеть ваш заказ, пожалуйста, 
            заполните <br> необходимые поля. Номер заказа был отправлен на <br> ваш номер в виде смс-сообщения
         </p>
         <form action="" @submit.prevent>
             <div class="form-group">
                  <label for="nomer" class="form-label" style="color: grey; font-weight: 500">Номер заказа</label>
                 <input :class="{'error': errors != null}" type="number" v-model="deliver.order_id" id="nomer" class="form-control">
                 <span v-if="errors != null">
                    <span style="color: red; font-size: 12px" v-if="!errors.order_id.required">number kiritilishi shart</span>
                    <span style="color: red: font-size: 12px" v-if="!errors.order_id.minLength">number eng kami 1 ta</span>
                 </span>
             </div>
             <div class="form-group">
                  <label for="number" class="form-label" style="color: grey; font-weight: 500">Номер телефона, при заказе </label>
                <input type="tel" :class="{'error': errors != null}" v-model="deliver.phone_number" v-mask="'+999-(99)-999-99-99'" class="form-control">
                <span v-if="errors != null">
                    <span style="color: red; font-size: 12px" v-if="!errors.phone_number.required">phone_number kiritilishi shart</span>
                    <span style="color: red; font-size: 12px" v-if="!errors.phone_number.minLength">number eng kami 12 ta raqam</span>
                 </span>
             </div>
             <button @click="Zakas" class="buttons btn btn-info text-white text-capitalize">просмотрь</button>
         </form>
         </div>
         <Footer />
    </div>
</template>


<script>
import AwesomeMask from 'awesome-mask'
import AppHeader from "../components/AppHeader.vue"
import Footer from "../components/BannerVue.vue"
import { required, minLength} from 'vuelidate/lib/validators'
import axios from "axios"
export default {
    name: 'YetkizishVue',
    directives:{
     'mask': AwesomeMask
   },
   components:{AppHeader, Footer},
    data() {
        return {
           deliver:{
             order_id: '',
             phone_number: ''
           },
           errors: null
        };
    },
    validations:{
        deliver:{
            phone_number:{
                required,
                minLength: minLength(12)
            },
            order_id:{
                required,
                minLength:minLength(1)
            },
        }
    },
    mounted() {
        
    },

    methods: {
        Zakas(){
            let self = this;
            if(this.$v.$invalid == false){
                    axios({
                    method: "post",
                    url: "/deliver/create",
                    data: self.deliver
                }).then(res => {
                    console.log(res.data.data);
                    this.$router.push({path: '/home'})
                }).catch(e => {
                    console.log(e);
                })
            } else{
                this.errors = this.$v.deliver
            }
        }
    },
};
</script>

<style scoped>


</style>