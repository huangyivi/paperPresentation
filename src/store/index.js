import Vue from 'vue';
import Vuex from 'vuex';
// 挂载Vuex
Vue.use(Vuex);

// 创建VueX对象
const store = new Vuex.Store({
    state:{
        // 键值对即为管理的状态
        displayService : false,
        // showLogin : true,
        // user : null
    },
    mutations:{
        setService(state,val){
            state.displayService = val;
        },
        // setUser(state,val){
        //     state.user = val;
        // },
        // setLogin(state,val){
        //     state.showLogin = val;
        // }
    }
});

export default store;
