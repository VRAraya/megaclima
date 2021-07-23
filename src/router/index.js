import { createRouter, createWebHashHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const routes = [
  {
    path: '',
    component: Dashboard,
    children: [
      {
        path: '/sales',
        component: () => import(/* webpackChunkName: "sales" */ '../views/Sales')
      },
      {
        path: '/orders',
        component: () => import(/* webpackChunkName: "orders" */ '../views/Orders')
      },
      {
        path: '/products',
        component: () => import(/* webpackChunkName: "products" */ '../views/Products')
      },
      {
        path: '/services',
        component: () => import(/* webpackChunkName: "services" */ '../views/Services')
      },
      {
        path: '/clients',
        component: () => import(/* webpackChunkName: "clients" */ '../views/Clients')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
