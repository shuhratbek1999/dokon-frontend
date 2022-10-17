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
            <li><router-link to="/telefon"> Telefonlar </router-link></li>
            <li><router-link to="/konditsioner"> Konditsionerlar </router-link></li>
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

        };
    },

    mounted() {
    },

    methods: {
        Kategoriya(){
            this.$refs.Sidebar.Sidebars(true)
        }
    },
};
</script>

<style scoped>
.content li{
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
    border-bottom: 1px solid black;
    border-top: 1px solid black;
    width: 100% !important;
}
.menu{
    position: relative;
    background-color: white;
    padding-top: 30px;
}
.menu ul li{
    list-style: none;
}
.menu ul li:hover{
    cursor: pointer;
}
.menu ul li a{
    text-decoration: none;
    color: black;
}
</style>