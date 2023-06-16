<template>
    <div class="menu">
         <ul>
            <li>
                <span @click="Kategoriya()">Все категории</span>
                <app-sidebar ref="Sidebar"></app-sidebar>
            </li>
            <li><router-link to="/blog"> Yangiliklar </router-link></li>
            <li><router-link to="/markdown">Yangi kelganlar </router-link></li>
            <li><router-link to="/calendar"> chegirmalar </router-link></li>
            <li><router-link to="/tolov"> Bo'lib to'lash </router-link></li>
            <li><router-link to="/kitob"> Kitoblar </router-link></li>
            <li><router-link to="/mebel"> Mebellar </router-link></li>
            <li><router-link to="/telefonlar"> Telefonlar </router-link></li>
            <li v-if="admin == 'Shuhratbek'"><router-link to="/hisobot"> Admin xonasi </router-link></li>
         </ul>
    </div>
</template>

<script>
import AppSidebar from './AppSidebar.vue'
export default {
    name: 'PortfoliyaMenuVue',
   components:{AppSidebar},
    data() {
        return {
            admin: null
        };
    },

    mounted() {
        this.getUser()
    },

    methods: {
        Kategoriya(){
            this.$refs.Sidebar.Sidebars(true)
        },
        getUser(){
           let user = JSON.parse(localStorage.getItem("usersss"))
           this.admin = user.full_name;
        },
    },
};
</script>

<style scoped>
/* .content li{
    padding: 7px 0px 7px 20px;
}
.content li:hover{
    background-color: white;
    color: blue;
}
.content li a{
    font-weight: 500;
}
.content li:hover a{
    color: blue;
}

.menu ul{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 60px;
    border-top: 1px solid rgb(230, 226, 226);
    width: 1350px;
}
.menu{ 
    width: 1350px;
    position: relative;
    background-color: white;
    margin-top: 100px;
}
.menu ul li{ 
    list-style: none;
    font-weight: 500;
}
.menu ul li:hover{
    cursor: pointer;
    color: green;
}
.menu ul li a{
    text-decoration: none;
    color: black;
}
.menu ul li a:hover{
    color: gold;
    transition: all 1s;
} */
@media(max-width: 360px){
    .menu{
        display: none !important;
        width: 360px !important;
    }
}
</style>