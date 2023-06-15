import Vue from "vue";
import Vuex from "vuex";
import sevimli from './sevimli'
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: { //data
    errors: "",
    errorr: "",
    products: [],
    product_info: [],
    korzinkaInfo: [],
    test: ['salom'],
    telefon: [],
    count: 0,
    newsProduct: [],
    news: 0,
    channels: [],
    onlinetv: [],
    all_product: [],
    images: [
      {url: require("../../public/product/note10.jpg")},
      {url: require("../../public/product/kitob.jpg")},
      {url: require("../../public/product/muz.jpg")},
      {url: require("../../public/product/duh.jpg")},
      {url: require("../../public/product/play.jpg")},
      {url: require("../../public/product/sich.jpg")},
      {url: require("../../public/product/sumka.jpg")},
      {url: require("../../public/product/telefon.jpg")},
      {url: require("../../public/product/ver.jpg")},
      {url: require("../../public/product/notebok.jpg")},
      {url: require("../../public/product/not.jpg")},
      {url: require("../../public/product/a21.jpg")},
      {url: require("../../public/product/a71.jpg")},
      {url: require("../../public/product/mebel.png")},
    ]
  },
  mutations: {
      //methods
      TELEFON(state, payload){
          for(let i = 0; i <= state.images.length; i++){
            payload[i].img = state.images[i].url
            state.telefon = payload
       }
      },
    PRODUCT_CART(state, payload){
        state.products.push(payload)
    },
    PRODUCT_INFO(state, payload, index){
        if(state.product_info.length > 0){
           state.product_info.splice(index, 1);
           state.product_info.push(payload)
        }
        else{
          state.product_info.push(payload)
        }

    },
    PRODUCT_ALL(state, payload){
      for(let i = 0; i <= state.images.length; i++){
           payload[i].img = state.images[i].url
           state.all_product = payload
      }
    },
       savatchaOchirish: (state, product) => {
        state.products.splice(product, 1)
       },

       NewListt: (state, NewList) => {
         state.test.push(NewList)
       },
       DeletedID: (state, deleteId) => {
        state.test.splice(deleteId, 1)
       },
     
       KORZINKA_INFO: (state, product) => {
        let item = product;
        item = {...item, quantity: 1, soni: 1}
        if(state.korzinkaInfo.length > 0){
            let x = state.korzinkaInfo.some(e => e.id == item.id)
             if(x){
                 let index = state.korzinkaInfo.findIndex(x => x.id == item.id)
                 state.korzinkaInfo.splice(index, 1)
             } else{
              state.korzinkaInfo.push(item)
             }
        } else{
          state.korzinkaInfo.push(item)
        }
       },
       ProductIncrement(state, payload){
          if(state.korzinkaInfo.length > 0){
             let bool = state.korzinkaInfo.some(e => e.id == payload.id)
               if(bool){
                  let index = state.korzinkaInfo.findIndex(el => el.id == payload.id)
                  state.korzinkaInfo[index]['quantity'] += 1;
                  state.korzinkaInfo[index]['soni'] += 1;
               }else{
                state.korzinkaInfo.push(payload)
               }
          } else {
            state.korzinkaInfo.push(payload)
          }
       },
       ProductDecrement(state, payload){
          if(state.korzinkaInfo.length > 0){
              let bool = state.korzinkaInfo.some(e => e.id == payload.id)
                if(bool){
                    let index = state.korzinkaInfo.findIndex(el => el.id == payload.id)
                    if(state.korzinkaInfo[index]['soni'] > 0){
                      state.korzinkaInfo[index]['quantity'] -= 1;
                      state.korzinkaInfo[index]['soni'] -= 1;
                    }else{
                      state.korzinkaInfo[index]['quantity'] = 0;
                      state.korzinkaInfo[index]['soni'] = 0;       
                    }
                } else{
                  state.korzinkaInfo.push(payload)
                }
          } else{
            state.korzinkaInfo.push(payload)
          }
       },
       DeletedProduct(state, id){
          if(state.korzinkaInfo.length > 0){
             let index = state.korzinkaInfo.findIndex(e => e.id == id)
             state.korzinkaInfo.splice(index, 1)
          }
          else{
            state.errors = "bunday id nomli mahsulot yo'q"
          }
       },
       Mahsulot_harid(state, mahsulot){
          state.korzinkaInfo.push(mahsulot)
       },
       NewsAbout(state, product){
           if(state.newsProduct.length > 0){
              let index = state.newsProduct.findIndex(x => x.id == product.id);
              state.newsProduct.forEach(val => {
                state.news += val.son
              })
              state.newsProduct.splice(index, 1);
              state.newsProduct.push(product)

            }
            else{
                state.newsProduct.push(product)
            }
          },
          SET_CHANNELS(state, payload){
            state.channels.push(payload)
          },
          ONLINE_TV(state, payload) {
              state.onlinetv.push(payload)
          }
  },
  actions: {
      SavatchaDelete(context, product){
        context.commit('savatchaOchirish', product)
      },

      NewList(context, NewList){
        context.commit('NewListt', NewList)
      },
      DeleteTodo({commit}, deleteId){
        commit('DeletedID', deleteId)
      },

      korzinkaInformation({commit}, product){
        commit('KORZINKA_INFO', product)
      },
     async channels({commit}){
          let res = await fetch("https://api.allplay.uz/api/v1/iptv/channels");
          let resJson = await res.json();
          commit("SET_CHANNELS", resJson.data)
      },
     async online_tv({commit}){
        let res = await fetch("https://api.themoviedb.org/3/movie/550?api_key=7e8a521b909409145362608f6e961629")
        let resJ = await res.json();
        commit("ONLINE_TV", resJ.data)
      }
  },
  modules:{
     sevimli
  },
  getters: { //computed
    savatchaLength: state => {
      return state.products.length
    },

    KorzinkaLength: state => {
      return state.korzinkaInfo.length
    },
    news_soni: state => {
      return state.newsProduct.forEach(val => 
        val.son++)
    },
    count: state => {
      let counts = 0;
         state.newsProduct.map(key => {
         counts += key['son']
      })
      return counts
  }
    // soni: (state) => {
    //    return state.count
    // }
  }
})
