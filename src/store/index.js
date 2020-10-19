import Vue from 'vue';
import Vuex from 'vuex';
// 挂载Vuex
Vue.use(Vuex);

// 创建VueX对象
const store = new Vuex.Store({
    state:{
        // 键值对即为管理的状态
        displayService : false
    },
    mutations:{
        setService(state,val){
            state.displayService = val;
        }
    }
});

export default store;
