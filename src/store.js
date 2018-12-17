import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      islogin:false
  },
  mutations: {
      signin(){
        this.state.islogin=true
      },
      signout(){
        this.state.islogin=false
      }
  },
  actions: {

  }
})
