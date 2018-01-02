import Vue from 'vue'
import APP from './components/app.vue'
import router from './router'
import store from './store'

import './css/index.css'


Vue.config.devtools = __DEV__;


new Vue({
        el: '#app',
        store,
        router,
        render: h => h(APP)
})