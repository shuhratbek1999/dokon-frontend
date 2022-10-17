<template>
   <div>
<Header />
<iframe width="560" height="315" src="https://www.youtube.com/embed/6XmEcU2luAg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     <div v-for="item in items" :key=item.id>
        <div v-for="kanal in item" :key="kanal.id" class="canals">
             <div v-for="can in kanal" :key="can.id" class="canal">
                <img :src="can.icon.url_100x100" alt="">
                <p>{{can.name}}</p>
             </div>
        </div>
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
            items: [],
            
        };
    },

    mounted() {
        this.getChannels();
        this.$store.dispatch('channels')
    },

    methods: {
        getChannels(){
            this.items.push(this.$store.state.channels)
        }
    }
};
</script>

<style lang="css" scoped>
.canals .canal{
    border: 1px solid red;
    padding: 10px;
    border-radius: 5px;
    width: 200px;
    min-height: 280px;
    text-align: center;
    margin: 10px;
}
.canals{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>