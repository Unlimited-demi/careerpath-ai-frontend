import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfileView from '../views/ProfileView.vue'
import LandingPage from '@/views/LandingPage.vue'
import FeedbackList from '@/components/FeedbackList.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
     {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: "/",
      name: "LandingPage",
      component : LandingPage
    },
    {
      path :"/feedbacks",
      "name" : "feedback",
      component : FeedbackList
    }

  ]
})

export default router