import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from './App.vue';

Vue.use(VueRouter);
Vue.use(Vuex);

const root = document.createElement('div');
const Routers = [
  {
    path: '/index',
    meta: {
      title: '首页'
    },
    component: (resolve) => require(['../router/views/index.vue'], resolve)
  },
  {
    path: '/about',
    meta: {
      title: '关于'
    },
    component: (resolve) => require(['../router/views/about.vue'], resolve)
  },
  {
    path: '/login',
    meta: {
      title: '登录'
    },
    component: (resolve) => require(['../router/views/login.vue'], resolve)
  },
  // {
  //   path: '/user/:id',
  //   component: (resolve) => require(['../router/views/user.vue'], resolve)
  // },
  {
    path: '*',
    redirect: '../index'
  }
];

const RouterConfig = {
  mode: 'history',
  routes: Routers
}

const router = new VueRouter(RouterConfig);

// 仓库 store 包含了应用的数据（状态）和操作过程
// Vuex 里的数据都是响应式的，任何组件使用同一 store 的数据时，只要 store 的数据变化，对应的组件也会立即更新
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state, n=1) {
      state.count += n;
    },
    decrease (state) {
      state.count--;
    }
  },
  getters: {

  },
  actions: {

  },
  modules: {
    
  }
});

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  // if(window.localStorage.getItem('token')) {
  //   next();
  // } else {
  //   next('/login');
  // }
  next();
});

router.afterEach((to, from, next) => {
  window.scroll(0, 0);
})

document.body.appendChild(root);

new Vue({
  router: router,
  store: store,
  render: h => h(App)
}).$mount(root);



