<template>
    <div>
      <AppHeader />
         <div class="news-header">
              <div v-for="item in News" :key="item.id" class="news">
                   <p style="font-size: 26px; font-weight: bolder">{{item.title}}</p>
                   <div>
                    <b-icon icon="calendar2-week-fill" style="color: rgb(26, 154, 240); font-size: 10px"></b-icon> 
                   <span style="margin: 0px 10px; font-weight: bold">{{day}}</span> 
                   <b-icon style="color: rgb(26, 154, 240); margin-right: 8px" icon="eye-fill"> </b-icon> <span style="font-weight: bold">{{$store.state.news}} </span>
                   </div>
                  <div class="imgs">
                    <img :src="item.img" alt="">
                  </div>
              </div>
              <p>Покупка чего-то нового для дома – это всегда праздник. Будь то мебель, холодильник или телевизор. Выбирая новую бытовую технику ознакомтесь с характеристиками.</p>
              <p>В этой статье расскажем, на что обратить внимание при выборе телевизора.</p>
              <p>Смарт-телевизоры в настоящее время пользуются большим спросом. Smart TV включает расширенные возможности онлайн-кинотеатра. Можно смотреть любимые фильмы в одиночку или с семьей, или с друзьями в любое удобное время.</p>
              <p>При выборе модели Смарт ТВ важно обратить внимание на установленные приложения и возможность установки популярных сервисов, доступ к магазину приложений. Например, телевизоры, работающие на платформе Android, позволяют загружать любые программы.</p>
           Что нужно знать:<ul>
                <li>По слухам, смартфон Apple iPhone 14 Pro будет иметь 8 ГБ оперативной памяти</li>
                <li>Текущий iPhone 13 Pro имеет 6 ГБ оперативной памяти</li>
                <li>Новый слух исходит от человека, который правильно предсказал новости об iPad mini в прошлом году.</li>
              </ul>
              <p>Согласно новому отчету, флагманские iPhone 2022 года могут иметь 8 ГБ оперативной памяти.</p>
              <div style="display: flex; justify-content: center"><img width="500px" src="../../public/product/note10.jpg" alt=""></div>
         </div>
      <Footer /> 
    </div>
</template>
<script>
import AppHeader from "../components/AppHeader.vue"
import Footer from "../components/BannerVue.vue"
export default {
    name: 'PortfoliyaYangiliklarInfo',
    components:{AppHeader, Footer},
    data() {
        return {
            day: new Date().toLocaleDateString(),
            user: JSON.parse(localStorage.getItem("user")),
        }
    },

    mounted() {
        
    },

    methods: {
        
    },
    computed:{
        News(){
            return this.$store.state.newsProduct
        }
    }
};
</script>
<style scoped>
.news-header{
    width: 98%;
    height: 1080px;
    border-radius: 15px;
    background-color: white;
    margin: 0 auto;
    padding-left: 20px;
}
.news-header ul li{
    list-style: none;
    font-weight: bold;
}
.news-header p{
    font-weight: bold;
}
.news-header .news{
    padding: 20px;
}
 .imgs{
    display: flex;
    justify-content: center;
 }
 .imgs img{
    border-radius: 20px;
    width: 400px;
    height: 250px;
 }
</style>