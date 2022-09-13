<template>
    <div class="login">
        <p class="alert alert-danger">{{$store.state.errorr}}</p>
        <form @submit.prevent class="form">
                <div class="form-group">
                    <label for="exampleInputEmail1">Phone Number</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Phone number" v-model="form.phone_number">
                    <span v-if="number"> {{$store.state.errors}} boshqatdan kiriting</span>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input :type="passwordType" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="form.password">
                     <a href="#" class="password_control"  :class="{password_controls: passwordType == 'text'}" @click="korish"></a>
                    <span v-if="pass">{{$store.state.errors}} boshqatdan kiriting  </span>
                </div>
                <div class="form-check">
                    <input type="checkbox" v-model="checked" class="form-check-input my-2" id="checkbox">
                    <label v-if="checked == true" class="form-check-label mt-1" for="checkbox">Check me out </label>
                </div>
                <div class="footer">
                    <button type="submit" class="btn btn-primary" @click="Login()">Kirish</button>
                     <div>
                            <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">Registratsiya</b-button>
                               <b-modal id="bv-modal-example" hide-footer>
                                  <template #modal-title>
                                     <p>Registratsiya</p>
                                  </template>
                                  <form action="" class="forma" @submit.prevent>
                                        <div class="d-block forms">
                                           <div class="form-group">
                                                <label for="exampleInputEmail1">full_name</label>
                                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="ismingizni kiriting" v-model="user.full_name">
                                            </div>
                                        <div class="form-group">
                                                <label for="exampleInputEmail1">Phone Number</label>
                                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="shahsiy nomeringizni kiriting" v-model="user.phone_number">
                                            </div>
                                            <div class="form-group">
                                                <label for="exampleInputPassword1">Password</label>
                                                <input :type="passwordType" class="form-control" id="exampleInputPassword1" placeholder="parol tanleng" v-model="user.password">
                                                <a href="#" class="password_control"  :class="{password_controls: passwordType == 'text'}" @click="korish"></a>
                                            </div>
                                    </div>
                                  </form>
                                <b-button class="mt-3 btns" block @click="Create(), $bvModal.hide('bv-modal-example')">Saqlash</b-button>
                            </b-modal>
                     </div>
                </div>
       </form>
    </div>
</template>

<script>
import axios from 'axios';
import { required, minLength } from "vuelidate/lib/validators";
export default {
    name: 'PortfoliyaIndex',
    data() {
        return {
            form:{
                phone_number: "",
                password: ""
            }, 
            passwordType: "password",
            checked: null,
            pass: false,
            number: false,
            err: null,
            user:{
                full_name: "",
                phone_number: "",
                password: ""
            },
             validations: {
                users: {
                    full_name: {
                        required,
                        minLength: minLength(4)
                    },
                    phone_number: {
                        required,
                        minLength: minLength(12)
                    },
                    password: {
                        required,
                        minLength: minLength(6)
                    }
               }
            },
        };
    },

    mounted() {
    },

    methods: {
        Login(){
            let self = this;
            axios({
                method: 'post',
                url: 'user/login',
                data: self.form
            }).then(res => {
                if(res.data.error == false){
                    self.$router.push({ path: '/home' });
                }
                else{
                    this.$store.state.errors = res.data.message;
                    this.pass = true;
                }
            }).catch(e => {
                console.log(e, "error");
            })
        },
        Create(){
            let self = this;
            axios({
                method: "post",
                url: 'user/create',
                data: self.user
            }).then(res => {
                console.log(res.data.data);
                this.user ={
                    full_name: "",
                    phone_number: "",
                    password: ""
                }
            })
        },
        korish(){
        this.passwordType = this.passwordType === 'password' ? "text" : 'password'
    },
    },
};
</script>

<style scoped>
.form{
    width: 30%;
    margin-top: 50px;
    background-color: rgb(213, 218, 218);
    padding: 30px;
    border-radius: 5px;
}
.forma{
    width: 80%;
    margin: 0 auto;
}
.forma label{
    text-transform: capitalize;
    color: black;
    font-weight: 700;
}
.btns{
    margin-left: 180px;
    background-color: darkturquoise;
    color: white;
    border: none;
    padding: 10px 40px;
}
.form-group{
    margin: 10px 0px;
}
.login{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.form-check{
    margin: 20px 0px;
}
.form-group{
    position: relative;
}
input{
    margin: 10px 0px;
}
span{
color: #ff0000;
font-size: 11px;
position: absolute;
top: 73px;
}
.footer{
    display: flex;
    justify-content: space-between;
}
.password_control {
	position: absolute;
	top: 43px;
	right: 12px;
	display: inline-block;
	width: 20px;
	height: 20px;
	background: url('../../../public/koz.png') 0 0 no-repeat;
}
.password_controls {
  position: absolute;
	top: 43px;
	right: 12px;
	display: inline-block;
	width: 20px;
	height: 20px;
	background: url('../../../public/kozz.png') 0 0 no-repeat;
}
</style>