import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Resume from '../views/Resume.vue'
import Work from '../views/Work.vue'
import Contact from '../views/Contact.vue'
import NotFound from '../views/NotFound.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    icon: 'ion-ios-business',
    component: About
  },
  {
    path: '/resume',
    name: 'Resume',
    icon: 'ion-ios-bonfire',
    component: Resume
  },
  {
    path: '/work',
    name: 'Work',
    icon: 'ion-ios-briescase',
    component: Work
  },
  {
    path: '/contact',
    name: 'Contact',
    icon: 'ion-ios-megaphone',
    component: Contact
  },

  // catchall 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
