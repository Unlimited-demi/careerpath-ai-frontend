import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfileView from '../views/ProfileView.vue'
import LandingPage from '@/views/LandingPage.vue'
import FeedbackList from '@/components/FeedbackList.vue'
import RegistrationsList from '@/views/RegistrationsList.vue'
import App from '@/App.vue' // <--  Unusual import - App.vue in router?

const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    
    {
      path: "/",
      name: "LandingPage",
      component : LandingPage
    },
    
    {
      path : "/admin/registrations",
      name : "registrations",
      component : RegistrationsList
     }

  ]
})

export default router