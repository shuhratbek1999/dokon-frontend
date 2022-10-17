<template>
    <div>
        
    </div>
</template>
<script>
export default {
    name: 'PortfoliyaTelefon',

    data() {
        return {
            
        };
    },

    mounted() {
        this.online();
        console.log(this.$store.state.onlinetv);
    },

    methods: {
        online(){
            this.$store.dispatch('online_tv')
        }
    },
};
</script>