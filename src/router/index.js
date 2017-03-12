import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from 'components/Dashboard'
import Create from 'components/Create'
import Login from 'components/Login'
import Team from 'components/team/Team'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
        {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
    path:'/create',
    name: 'Create',
    component: Create
  },
    {
    path:'/team/:id',
    name: 'Team',
    component: Team
  }
  ]
})
