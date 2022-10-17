<template>
    <div>
        <div class="sidebar" :class="{'sidebar1': hide}">
                    <div class="header">
                        <div class="title"></div>
                        <div @click="hide = false" class="clear">X</div>
                    </div>
                    <div class="content">
                        <li><router-link to="/blog"> Telefonlar </router-link></li>
                        <li><router-link to="/markdown">Kitoblar </router-link></li>
                        <li><router-link to="/calendar"> kompyuter </router-link></li>
                        <li><router-link to="/tolov"> Muzlatgich </router-link></li>
                        <li><router-link to="/kitob"> yumshoq Mebel </router-link></li>
                        <li><router-link to="/mebel"> Mebellar </router-link></li>
                        <li><router-link to="/telefon"> gatjetlar </router-link></li>
                        <li><router-link to="/konditsioner"> Konditsionerlar </router-link></li>
                        <li><router-link to="/product"> product qoshish </router-link></li>
                    </div>
                 </div>
    </div>
</template>
<script>
export default {
    name: 'PortfoliyaAppSidebar',

    data() {
        return {
            hide: false
        };
    },

    mounted() {
        this.Sidebars()
    },

    methods: {
        Sidebars(val){
            this.hide = val;
        }
    },
};
</script>
<style scoped>
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
.content li{
    list-style: none;
    padding: 5px;
}
.content li:hover{
    cursor: pointer;
}
.content li a{
    text-decoration: none;
    color: black;
}
.sidebar{
   width: 300px;
   border: 1px solid black;
   position: fixed;
   top: 150px;
   left: -300px;
   bottom: 0px;
   background-color: aliceblue;
   transition: all 0.6s;
}
.sidebar1{
   width: 300px;
   border: 1px solid black;
   position: fixed;
   top: 150px;
   left: 0px;
   bottom: 0px;
   background-color: aqua;
   z-index: 100;
}
.sidebar .header{
    display: flex;
    padding: 10px 15px 0px 15px;
    justify-content: space-between;
}
.clear{
    border: 1px solid black;
    padding: 5px 6px;
    cursor: pointer;
}
.sidebar .content{
    padding: 30px 15px;
}
</style>