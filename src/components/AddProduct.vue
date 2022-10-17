<template>
    <div class="product"> 
        {{err}}
        <span v-if="success" class="products"> <b-icon icon="check-lg"></b-icon> product qoshildi</span>
         <form @submit.prevent>
            <div>
               <label for="title">title</label>
               <input :class="{'input': errors != null}" class="form-control" type="text" v-model="product.title" name="title" placeholder="...title">
               <span class="err" v-if="errors != null">
                 <span class="error" v-if="!errors.title.required">title toldirilishi shart</span>
                 <span class="error" v-if="!errors.title.minLength">title minimal uzunligi {{$v.product.title.$params.minLength.min}}</span>
               </span>
            </div>
            <div>
               <label for="description">description</label>
               <input :class="{'input': errors != null}" class="form-control" type="text" v-model="product.desc" name="description" placeholder="...description">
                <span class="err" v-if="errors != null">
                    <span class="error" v-if="!errors.desc.required">desc toldirilishi shart</span>
                    <span class="error" v-if="!errors.desc.minLength">desc minimal uzunligi {{$v.product.desc.$params.minLength.min}}</span>
               </span>
            </div>
            <div>
               <label for="category">category</label>
               <input :class="{'input': errors != null}" class="form-control" type="text" v-model="product.categories" name="category" placeholder="...category">
                <span class="err" v-if="errors != null">
                 <span class="error" v-if="!errors.categories.required">categories toldirilishi shart</span>
                 <span class="error" v-if="!errors.categories.minLength">categories minimal uzunligi {{$v.product.categories.$params.minLength.min}}</span>
               </span>
            </div>
            <div>
               <label for="color">color</label>
               <input :class="{'input': errors != null}" class="form-control" type="text" v-model="product.color" name="color" placeholder="...color">
                <span class="err" v-if="errors != null">
                 <span class="error" v-if="!errors.color.required">color toldirilishi shart</span>
                 <span class="error" v-if="!errors.color.minLength">color minimal uzunligi {{$v.product.color.$params.minLength.min}}</span>
               </span>
            </div>
            <div>
               <label for="price">price</label>
               <input :class="{'input': errors != null}" class="form-control" type="text" v-model="product.price" name="price" placeholder="...price">
                <span class="err" v-if="errors != null">
                 <span class="error" v-if="!errors.price.required">price toldirilishi shart</span>
                 <span class="error" v-if="!errors.price.minLength">price minimal uzunligi {{$v.product.price.$params.minLength.min}}</span>
               </span>
            </div>
            <button class="btn btn-info text-white" @click="Product()">ProductAdd</button>
         </form>
    </div>
</template>
<script>
import { required, minLength } from "vuelidate/lib/validators"
import axios from 'axios';
export default {
    name: 'PortfoliyaAddProduct',

    data() {
        return {
            product:{
                title: "",
                desc: "",
                categories: "",
                color: "",
                price: 0
            },
            items: [],
            ids: 1,
            errors: null,
            err: "",
            success: false
        }
    },
    validations:{
        product:{
            title:{
               required,
               minLength: minLength(4)
            },
            desc:{
               required,
               minLength: minLength(4)
            },
            categories:{
               required,
               minLength: minLength(4)
            },
            color:{
               required,
               minLength: minLength(3)
            },
            price:{
               required,
               minLength: minLength(4)
            },
        }
    },
    mounted() {
        
    },

    methods: {
        Product(){
            let self = this;
             if(this.$v.product.$invalid == false){
                 axios({
                    method: 'post',
                    url: 'product/create',
                    data: self.product
                  }).then(res => {
                    if(res.data != undefined){
                        if(res.data.error_code == 400){
                            self.err = res.data.message
                        }
                        this.product = {
                            title: "",
                            desc: "",
                            color: "",
                            price: 0,
                            categories: ""
                        }
                        this.success = true
                        setInterval(() => {
                            this.success = false
                        }, 1000);
                        this.$router.push({path: '/home'})
                    }
                  })
             } else{
                this.errors = this.$v.product
             }
        }
    },
};
</script>

<style scoped>
.products{
    padding: 10px;
    width: 250px;
    height: 40px;
    text-align: center;
    background-color: rgb(115, 218, 192);
    color: white;
    border-radius: 5px;
    position: absolute;
}
.input{
    outline: 1px solid red;
}
.error{
    color: red;
    font-size: 12px;
}
.err{
    position: absolute;
}
.product form div input{
    position: relative;
}
.jadval ul{
    list-style: none;
    display: flex;
}
.product{
    width: 100%;
    height: 100vh;
    padding-top: 40px;
    display: flex;
    justify-content: center;
    background-color: aliceblue;
}
.product form{
    width: 60%;
    max-height: 550px;
    padding: 20px;
    background-color: azure;
    border-radius: 20px;
}
.product form div{
    margin: 25px 0px;
}
.product form div:first-child{
    margin-top: 5px;
}
.product form div label{
    font-size: 20px;
    font-family: sans-serif;
    font-style: italic;
}

</style>