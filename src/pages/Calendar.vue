<template>
   <div>
<Header />
     <div style="margin: 30px auto; border: 1px solid black; padding: 20px; text-align: center; width: 500px">
        <h1>Vue Calendar</h1>
        <section class="d-flex justify-content-center headr">
            <h3>{{daysInMonth(currentYear, currentMonth)}} - </h3>
            <h3> {{currentMonthName}} </h3>
        <h3> - {{currentYear}} </h3>
        </section>
   <section class="d-flex day">
       <p style="width: 14.28%; font-weight: bolder" v-for="day in days" :key="day">{{day}}</p>
   </section>
<section class="d-flex mt-2 calendar" style="flex-wrap: wrap">
       <p  style="width: 14.28%" v-for="num in startDay()" :key="num"></p>
       <p  style="width: 14.28%" v-for="num in daysInMonth(currentYear, currentMonth)" :key="num">{{num}}</p>
</section>
<section class="d-flex justify-content-between">
    <button class="btn btn-info" @click="prev">prev</button>
    <button class="btn btn-danger" @click="next">next</button>
</section>
    </div>
   </div>
</template>

<script>
import Header from "../components/AppHeader.vue"
export default {
    name: 'VueJsCalendar',
    components:{
        Header
    },
    data() {
        return {
            days: ['Mun', "thu", "whed", "Thu", "Fri", "Sat", "Sun"],
            
            currentYear: new Date().getFullYear(),
            currentMonth: new Date().getMonth()
        };
    },

    mounted() {
        
    },

    methods: {
        daysInMonth(year, month){
             return new Date(year, month, 0).getDate();
        },
        startDay(){
            return new Date(this.currentYear, this.currentMonth, 0).getDay();
        },
        prev(){
            if(this.currentMonth === 0){
                this.currentMonth = 11;
                this.currentYear--
            }
            else{
                this.currentMonth--;
            }
        },
        next(){
            if(this.currentMonth === 11){
                this.currentMonth =0;
                this.currentYear++;
            }
            else{
                this.currentMonth++;
            }
        }
    },
    computed:{
        currentMonthName(){
            return new Date(this.currentYear, this.currentMonth).toLocaleString('default', {month: 'long'})
        }
    }
};
</script>

<style lang="css" scoped>

</style>