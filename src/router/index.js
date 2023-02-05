// Import vue router for Multi-Pages
import { createRouter, createWebHistory } from 'vue-router'
// Import the main page
import Homepage from '../pageview/Homepage.vue'
// Import an example other page
import Other from '../pageview/Other.vue'

// Create a router.
const router = createRouter({
  // Add the history.
  history: createWebHistory(import.meta.env.BASE_URL),
  // Make a list of routes.
  routes: [
    // Create the homepage ("main page") route.
    {
      // The path for the main page.
      path: '/',
      // A name of the page.
      name: 'home',
      // The page's .vue file.
      component: Homepage
    },
    // Example other page.
    {
      path: '/other',
      name: 'other',
      component: Other
    }
  ]
})
// Export the router.
export default router