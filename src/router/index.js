import Vue from 'vue'
import Router from 'vue-router'
import Todo from '@/components/Todo'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'Todo'
      }
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Todo
    },
    {
      path: '/about/:name',
      name: 'About',
      component: About
    }
  ]
})
