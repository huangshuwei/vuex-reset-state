import Vue from "vue";
import VueRouter from "vue-router";

const empty = r => require.ensure([], () => r(require('../components/empty.vue')), 'empty');
const page1 = r => require.ensure([], () => r(require('../components/page1.vue')), 'page1');
const page2 = r => require.ensure([], () => r(require('../components/page2.vue')), 'page2');
const page3 = r => require.ensure([], () => r(require('../components/page3.vue')), 'page3');
const page4 = r => require.ensure([], () => r(require('../components/page4.vue')), 'page4');
const page5 = r => require.ensure([], () => r(require('../components/page5.vue')), 'page5');



Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        return { x: 0, y: 0 }
    },
    linkActiveClass: 'active',
    routes: [
        { path: '/', redirect: '/empty' }, // 默认路由
        { path: '/empty', component: empty },
        { path: '/page1', component: page1 },
        { path: '/page2', component: page2 },
        { path: '/page3', component: page3 },
        { path: '/page4', component: page4 },
        { path: '/page5', component: page5 },
        {
            path: '*',
            redirect: '/empty'
        }
        /*  {
         path: '*', component: {
         template: '<div>抱歉，没有您要的页面。</div>'
         }
         }*/
    ]
})