<template>
    <div class="menu">
         <ul>
            <li>
                <span v-b-toggle.sidebar-1>Barcha bo'limlar</span>
                 <b-sidebar width="500px" id="sidebar-1" class="sidebar" title="Sidebar" shadow>
                        <div class="px-3 py-2">

                        </div>
                 </b-sidebar>
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
export default {
    name: 'PortfoliyaMenuVue',

    data() {
        return {
            
        };
    },

    mounted() {
    },

    methods: {
        
    },
};
</script>

<style scoped>
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
}
.menu ul li{
    list-style: none;
}
.menu ul li a{
    text-decoration: none;
    color: black;
}
.sidebar{
    position: absolute;
    top: 40px;
}
</style>