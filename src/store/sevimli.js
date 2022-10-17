const state = {
    sev:[]
}
const mutations = {
    sevimliOchirish: (state, sevimlilar) => {
        state.sev.splice(sevimlilar, 1)
       },
       SEVIMLI: async(state, product) => {
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
}
const actions = {
    SevimliDelete(context, sevimlilar){
        context.commit('sevimliOchirish', sevimlilar)
      },
      SevimliQoshish({commit}, product){
        commit('SEVIMLI', product)
      },
}
const getters = {
    sevimliLength: state => {
        return state.sev.length
      },
}
export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true
}