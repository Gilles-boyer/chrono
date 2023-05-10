import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ResultView from '../views/ResultView.vue'
import ResultCatView from '../views/ResultCatView.vue'
import EnduranceResultView from '../views/EnduranceResultView.vue'
import GroupeView from '../views/GroupeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/result',
    name: 'result',
    component: ResultView
  },

  {
    path: '/result-by-cat',
    name: 'category',
    component: ResultCatView
  },

  {
    path: '/endurance',
    name: 'endurance',
    component: EnduranceResultView
  },

  {
    path: '/groupe',
    name: 'groupe',
    component: GroupeView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
