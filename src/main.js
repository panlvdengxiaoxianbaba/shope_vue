import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import axios from 'axios'//1

axios.defaults.withCredentials=true;//2
Vue.prototype.axios=axios;//3
Vue.config.productionTip = false
// import VueResource from 'vue-resource'
// Vue.use(VueResource)
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root='http://127.0.0.1:3000';
//post转换时候转码操作
Vue.http.options.emulateJSON=true;
Vue.http.options.withCredentials=true;//4
Vue.filter('datetimeFilter',function(val){
    var data=new Date(val),y=data.getFullYear(),
    m=data.getMonth()+1,d=data.getDate(),h = data.getHours(),
    mi = data.getMinutes(),s = data.getSeconds();
    m<10&&(m="0"+m);
    d<10&&(d="0"+d);
    return `${y}-${m}-${d} ${h}:${mi}:${s}`;
})
import Vuex from "vuex"
Vue.use(Vuex)
var store=new Vuex.Store({
  state:{
    cartCount:0,  //购物车商品的数量
    islogin:false,
    uname:'',
    hasLap:0
  },
  mutations:{   //修改共享数据的方法
    increment(state,count){state.cartCount+=count},
    substract(state){state.cartCount--},
    clear(state){state.cartCount=0},
    signin(state,uname){
      this.state.islogin=true;
      this.state.uname=uname
    },
    signout(){
      this.state.islogin=false
      this.state.uname=''
    },
    shopcount(state,lapCount){
      this.state.hasLap=lapCount
    }
  },
  getters:{  //获取
    optCartCount:function(state){
      return state.cartCount;
    }
  }
})

new Vue({
  router,
  render: h => h(App),
  store
}).$mount('#app')
