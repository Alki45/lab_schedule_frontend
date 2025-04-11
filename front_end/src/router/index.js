import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import Header from '../components/Navbar/Header.vue'
import Dashboard from '@/components/Dashboard/Dashboard.vue'
import profile from '@/views/profile.vue'
import Department from '@/components/Dashboard/Department.vue'
import Course from '@/components/Dashboard/Courses.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile,
    },
    {
      path: '/dashboard/department',
      name: 'department',
      component: Department,
    },
    {
      path: '/dashboard/course',
      name: 'course',
      component: Course,
    },

    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
    
  ],
})

export default router
