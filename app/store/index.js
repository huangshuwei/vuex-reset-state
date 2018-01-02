import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
import state from './state'
import createLogger from 'vuex/dist/logger'


import page1 from "./modules/page1.js";
import page2 from "./modules/page2.js";
import page3 from "./modules/page3.js";
import page4 from "./modules/page4.js";
import page5 from "./modules/page5.js";


// 将vuex注入到实例中
Vue.use(Vuex);


export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules: {
        page1,
        page2,
        page3,
        page4,
        page5
    },
    plugins: __DEV__ ? [createLogger()] : [],
    strict: __DEV__ ? true : false
});