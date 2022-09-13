import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: { //data
    errors: "",
    errorr: "",
    products: [],
    sev:[],
    korzinkaInfo: [],
    test: ['salom'],
    count: 0,
    newsProduct: [],
    news: 0
  },
  mutations: {  //methods
       savatchaOchirish: (state, product) => {
        state.products.splice(product, 1)
       },
       sevimliOchirish: (state, sevimlilar) => {
        state.sev.splice(sevimlilar, 1)
       },
       NewListt: (state, NewList) => {
         state.test.push(NewList)
       },
       DeletedID: (state, deleteId) => {
        state.test.splice(deleteId, 1)
       },
       SEVIMLI: async(state, product) => {
        console.log(state, product)
        if(state.sev.length > 0){
            let x = state.sev.some(key => key.id == product.id)
            if(x){
              let index = state.sev.findIndex(a => a.id == product.id)
              state.sev.splice(index, 1)
            }
            else{
              state.sev.push(product)
            }
        }
        else{
          state.sev.push(product)
        }
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
                    state.korzinkaInfo[index]['quantity'] -= 1;
                    state.korzinkaInfo[index]['soni'] -= 1;
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
          }
  },
  actions: {
      SavatchaDelete(context, product){
        context.commit('savatchaOchirish', product)
      },
      SevimliDelete(context, sevimlilar){
        context.commit('sevimliOchirish', sevimlilar)
      },
      NewList(context, NewList){
        context.commit('NewListt', NewList)
      },
      DeleteTodo({commit}, deleteId){
        commit('DeletedID', deleteId)
      },
      SevimliQoshish({commit}, product){
        commit('SEVIMLI', product)
      },
      korzinkaInformation({commit}, product){
        commit('KORZINKA_INFO', product)
      },
  },
  getters: { //computed
    savatchaLength: state => {
      return state.products.length
    },
    sevimliLength: state => {
      return state.sev.length
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
