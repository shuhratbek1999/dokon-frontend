<template>
    <div class="hisobot">
        <h1 style="text-align: center; margin: 20px 0px">Mahsulot buyurtma hisoboti</h1>
          <table border="1" class="tables">
            <tr>
                <th>№</th>
                <th>Name</th>
                <th>Maxsulot nomi</th>
                <th>Price</th>
                <th>telefon raqami</th>
                <th>viloyat</th>
                <th>tuman</th>
                <th>manzil</th>
                <th>to'lov turi</th>
            </tr>
            <tr v-for="(item,index) in lists" :key="index">
                <td>{{index+1}}</td>
                <td>{{ item.full_name }}</td>
                <td>{{ item.product != undefined ? item.product.title : "" }}</td>
                <td>{{item.product != undefined ? item.product.price : 0}}</td>
                <td>{{ item.phone_number }}</td>
                <td>{{ item.region.name }}</td>
                <td>{{ item.district.name }}</td>
                <td>{{ item.adress }}</td>
                <td>{{ item.pay_type == 1 ? "Click" : "Naqd" }}</td>
                <td></td>
            </tr>
          </table>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            lists: []
        }
    },
    methods:{
        data(){
            let self = this;
            axios({
                method: 'get',
                url: 'buyurtma/all'
            }).then(res => {
                if(res.data != undefined){
                    self.lists = res.data.data;
                }
            })
        }
    },
    mounted(){
        this.data();
    }
}
</script>
<style scoped>
.tables{
    width: 80%;
    margin: 10px auto;
}
.tables tr{
    text-align: center;
}
.tables tr td{
    padding: 10px;
}
</style>