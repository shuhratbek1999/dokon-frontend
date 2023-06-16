<template>
    <div class="login">
        <!-- <p class="alert alert-danger">{{$store.state.errorr}}</p> -->
        <form @submit.prevent class="form">
               <h3>Login</h3>
                <div class="form-group">
                    <label for="exampleInputEmail1">Phone</label>
                    <b-icon class="person" icon="person" aria-hidden="true"></b-icon>
                    <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Type your number" v-model="form.phone_number">
                    <span v-if="number"> {{$store.state.errors}} boshqatdan kiriting</span>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <b-icon class="lock" icon="lock" aria-hidden="true"></b-icon>
                    <input :type="passwordType" class="form-control" id="exampleInputPassword1" placeholder="Type your password" v-model="form.password">
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
                            <b-button id="show-btn" class="registratsiya" @click="$bvModal.show('bv-modal-example')">Registratsiya</b-button>
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
                <div class="iconlar">
                    <b-icon  class="icons" icon="telegram" aria-hidden="true"></b-icon>
                    <b-icon  class="icons" icon="facebook" aria-hidden="true"></b-icon>
                    <b-icon  class="icons" icon="google" aria-hidden="true"></b-icon>
                </div>
                <div class="signup">
                    <p>or sign up using</p>
                    <h6>sign up</h6>
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
                    localStorage.setItem("token", res.data.data.token)
                    localStorage.setItem("usersss", JSON.stringify(res.data.data))
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
    width: 25%;
    height: 500px;
    margin-top: 50px;
    background-color: white;
    padding: 30px;
    border-radius: 5px;
}
.form .iconlar{
    margin: 40px 0px;
    width: 100%;
    display: flex;
    justify-content: center;
}
.signup{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.signup h6{
    text-transform: uppercase;
}
.form .iconlar .icons{
    font-size: 25px;
    margin: 0px 5px;
}
form h3{
    text-align: center;
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
.btn{
    font-size: 12px;
}
.form-group{
    margin: 10px 0px;
    position: relative;
}
.form-group .lock{
    position: absolute;
    left: 0px;
    top: 42px;
}
.form-group .person{
    position: absolute;
    left: 0px;
    top: 42px;
}
.login{
    background-color: rgb(178, 211, 224);
    width: 100%;
    height: 100vh;
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
input[type="text"], input[type="password"]{
    margin: 10px 0px;
    border: none;
    border-bottom: 1px solid rgb(161, 160, 160);
    border-radius: 0px !important;
    text-indent: 10px;
    font-size: 14px;
}
input[type="text"]:focus, input[type="password"]:focus{
    border: none;
    border-bottom: 1px solid rgb(161, 160, 160);
    outline: none;
    text-indent: 10px;
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
.registratsiya{
    width: 170px;
    margin-left: 5px;
}
@media (max-width: 360px){
    .form .iconlar .icons{
    font-size: 20px;
    margin: 0px 5px;
}
.form .iconlar{
    margin: 20px 0px;
}
.signup p{
    padding: 0px;
    margin: 0px;
}
    .form{
    width: 250px;
    height: 430px;
    margin-top: 50px;
    background-color: white;
    padding: 30px !important;
    border-radius: 5px;
}
.registratsiya{
    width: 100px;
    margin-left: 5px;
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
    padding: 5px 10px !important;
    font-size: 12px;
}
.form-group{
    margin: 10px 0px;
}
.form-group label{
    font-size: 12px;
}
.login{
    width: 100%;
    height: 100vh !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(178, 211, 224);
}
.form-check{
    margin: 20px 0px;
}
.form-group{
    position: relative;
}
input{
    margin: 10px 0px;
    font-size: 12px;
}
span{
color: #ff0000;
font-size: 8px !important;
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
	right: 20px !important;
	display: inline-block;
	width: 20px !important;
	height: 15px !important;
	background: url('../../../public/koz.png') 0 0 no-repeat;
    background-size: 15px;
}
.password_controls {
  position: absolute;
	top: 43px;
	right: 12px;
	display: inline-block;
	width: 20px;
	height: 20px;
	background: url('../../../public/kozz.png') 0 0 no-repeat;
    background-size: 15px;
}
}
</style>