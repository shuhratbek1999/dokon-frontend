<template>
        <div class="sidebar" :class="{'sidebar1': hide}">
                    <div class="header">
                        <div class="title"></div>
                        <div @click="hide = false" class="clear">X</div>
                    </div>
                    <div class="content">
                        <li class="phon"><router-link  to="/blog"> Telefonlar </router-link>
                            <div class="phone">
                                <div class="phone-category">
                                    <ul class="phones">
                                        <li style="color: black" @click="$router.push({path: '/telefon'})">все телефоны</li>
                                        <li>Tugmachali telefonlar</li>
                                        <li>Smartfonlar</li>
                                        <li>Radio Telefonlar</li>
                                        <li>Kabelli telefonlar</li>
                                        <li>IP-telefonlar</li>
                                    </ul>
                                    <ul class="faks">
                                        <li style="color: black">Smartfonlar va planshetlar uchun aksesuarlar</li>
                                        <li>barcha mahsulotlar</li>
                                        <li>Smartfonlar uchun himoya vositalari</li>
                                        <li>simsiz zaryadlovchi qurilmalar</li>
                                        <li>telefonlar uchun g'iloflar</li>
                                        <li>o'yin uchun gadchetlar</li>
                                    </ul>
                                    <ul class="audiotecnology">
                                        <li style="color: black">Smart soatlar va brastletlar</li>
                                        <li>barcha mahsulotlar</li>
                                        <li>smart soat va fitnes brastletlar uchun aksesuarlar</li>
                                        <li>Smart soatlar</li>
                                        <li>fitnes blaguzuklar</li>
                                        <li>bolalar uchun smart soatlar</li>
                                    </ul>
                                    <ul>
                                    </ul>
                                </div>
                            </div>              
                        </li>
                        <li class="kitob"><router-link to="/markdown">Kitoblar </router-link>
                            <div class="phone">
                                <div class="phone-category">
                                    <ul class="phones">
                                        <li>page-2</li>
                                        <li>page-2</li>
                                        <li>page-2</li>
                                        <li>page-2</li>
                                        <li>page-2</li>
                                        <li>page-2</li>
                                    </ul>
                                    <ul class="faks">
                                        <li>page-2</li>
                                        <li>page-2</li>
                                        <li>page-2</li>
                                        <li>page-2</li>
                                        <li>page-2</li>
                                        <li>page-2</li>
                                    </ul>
                                    <ul class="audiotecnology">
                                        <li>page-2</li>
                                        <li>page-2</li>
                                        <li>page-2</li>
                                        <li>page-2</li>
                                        <li>page-2</li>
                                        <li>page-2</li>
                                    </ul>
                                    <ul>
                                    </ul>
                                  </div>
                                </div>  
                        </li>
                        <li class="computer"><router-link to="/calendar"> kompyuter </router-link>
                         <div class="phone">
                                <div class="phone-category">
                                    <ul class="phones">
                                        <li>page-3</li>
                                        <li>page-3</li>
                                        <li>page-3</li>
                                        <li>page-3</li>
                                        <li>page-3</li>
                                        <li>page-3</li>
                                    </ul>
                                    <ul class="faks">
                                        <li>page-3</li>
                                        <li>page-3</li>
                                        <li>page-3</li>
                                        <li>page-3</li>
                                        <li>page-3</li>
                                        <li>page-3</li>
                                    </ul>
                                    <ul class="audiotecnology">
                                        <li>page-3</li>
                                        <li>page-3</li>
                                        <li>page-3</li>
                                        <li>page-3</li>
                                        <li>page-3</li>
                                        <li>page-3</li>
                                    </ul>
                                    <ul>
                                    </ul>
                                  </div>
                                </div>
                        </li>
                        <li class="muzlatgich"><router-link to="/tolov"> Muzlatgich </router-link>
                         <div class="phone">
                                <div class="phone-category">
                                    <ul class="phones">
                                        <li>page-4</li>
                                        <li>page-4</li>
                                        <li>page-4</li>
                                        <li>page-4</li>
                                        <li>page-4</li>
                                        <li>page-4</li>
                                    </ul>
                                    <ul class="faks">
                                        <li>page-4</li>
                                        <li>page-4</li>
                                        <li>page-4</li>
                                        <li>page-4</li>
                                        <li>page-4</li>
                                        <li>page-4</li>
                                    </ul>
                                    <ul class="audiotecnology">
                                        <li>page-4</li>
                                        <li>page-4</li>
                                        <li>page-4</li>
                                        <li>page-4</li>
                                        <li>page-4</li>
                                        <li>page-4</li>
                                    </ul>
                                    <ul>
                                    </ul>
                                  </div>
                                </div>
                        </li>
                        <li class="yumshoq"><router-link to="/kitob"> yumshoq Mebel </router-link>
                         <div class="phone">
                                <div class="phone-category">
                                    <ul class="phones">
                                        <li>page-5</li>
                                        <li>page-5</li>
                                        <li>page-5</li>
                                        <li>page-5</li>
                                        <li>page-5</li>
                                        <li>page-5</li>
                                    </ul>
                                    <ul class="faks">
                                        <li>page-5</li>
                                        <li>page-5</li>
                                        <li>page-5</li>
                                        <li>page-5</li>
                                        <li>page-5</li>
                                        <li>page-5</li>
                                    </ul>
                                    <ul class="audiotecnology">
                                        <li>page-5</li>
                                        <li>page-5</li>
                                        <li>page-5</li>
                                        <li>page-5</li>
                                        <li>page-5</li>
                                        <li>page-5</li>
                                    </ul>
                                    <ul>
                                    </ul>
                                  </div>
                                </div>
                        </li>
                        <li class="mebel"><router-link to="/mebel"> Mebellar </router-link>
                         <div class="phone">
                                <div class="phone-category">
                                    <ul class="phones">
                                        <li>page-6</li>
                                        <li>page-6</li>
                                        <li>page-6</li>
                                        <li>page-6</li>
                                        <li>page-6</li>
                                        <li>page-6</li>
                                    </ul>
                                    <ul class="faks">
                                        <li>page-6</li>
                                        <li>page-6</li>
                                        <li>page-6</li>
                                        <li>page-6</li>
                                        <li>page-6</li>
                                        <li>page-6</li>
                                    </ul>
                                    <ul class="audiotecnology">
                                        <li>page-6</li>
                                        <li>page-6</li>
                                        <li>page-6</li>
                                        <li>page-6</li>
                                        <li>page-6</li>
                                        <li>page-6</li>
                                    </ul>
                                    <ul>
                                    </ul>
                                  </div>
                                </div>
                        </li>
                        <li class="gatjet"><router-link to="/telefon"> gatjetlar </router-link>
                         <div class="phone">
                                <div class="phone-category">
                                    <ul class="phones">
                                        <li>page-7</li>
                                        <li>page-7</li>
                                        <li>page-7</li>
                                        <li>page-7</li>
                                        <li>page-7</li>
                                        <li>page-7</li>
                                    </ul>
                                    <ul class="faks">
                                        <li>page-7</li>
                                        <li>page-7</li>
                                        <li>page-7</li>
                                        <li>page-7</li>
                                        <li>page-7</li>
                                        <li>page-7</li>
                                    </ul>
                                    <ul class="audiotecnology">
                                        <li>page-7</li>
                                        <li>page-7</li>
                                        <li>page-7</li>
                                        <li>page-7</li>
                                        <li>page-7</li>
                                        <li>page-7</li>
                                    </ul>
                                    <ul>
                                    </ul>
                                  </div>
                                </div>
                        </li>
                        <li class="conditsioner"><router-link to="/konditsioner"> Konditsionerlar </router-link>
                         <div class="phone">
                                <div class="phone-category">
                                    <ul class="phones">
                                        <li>page-8</li>
                                        <li>page-8</li>
                                        <li>page-8</li>
                                        <li>page-8</li>
                                        <li>page-8</li>
                                        <li>page-8</li>
                                    </ul>
                                    <ul class="faks">
                                        <li>page-8</li>
                                        <li>page-8</li>
                                        <li>page-8</li>
                                        <li>page-8</li>
                                        <li>page-8</li>
                                        <li>page-8</li>
                                    </ul>
                                    <ul class="audiotecnology">
                                        <li>page-8</li>
                                        <li>page-8</li>
                                        <li>page-8</li>
                                        <li>page-8</li>
                                        <li>page-8</li>
                                        <li>page-8</li>
                                    </ul>
                                    <ul>
                                    </ul>
                                  </div>
                                </div>
                        </li>
                        <li><router-link to="/product"> product qoshish </router-link></li>
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
.content .phon:hover .phone, .content .kitob:hover .phone, .content .computer:hover .phone, .content .muzlatgich:hover .phone,
.content .yumshoq:hover .phone, .content .mebel:hover .phone, .content .conditsioner:hover .phone, .content .gatjet:hover .phone
{
    display: block;
}

</style>