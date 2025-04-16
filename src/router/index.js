import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projects',
      name: 'projects',
      // page is lazy-loaded when the route is visited.
      component: () => import('../views/ProjectsView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/about-me',
      name: 'about-me',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutMeView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ContactView.vue'),
    },
  ],
  scrollBehavior(to, from) {
    // NOTE: if we add the savedPosition feature in the future,
    // we need to add 'savedPosition' as the 3rd parameter of scrollBehavior().
    // if (savedPosition) {
    //   // return to saved position on page reload.
    //   return savedPosition;
    // }
    if ((to.path === from.path) && to.hash) {
      // smooth scroll to an anchor link if within the same page.
      return {
        el: to.hash,
        behavior: 'smooth',
        top: to.hash === '#about-me' ? 50 : 70,
      };
    }
    else if (to.hash) {
      // instant scroll to an anchor link if on a different page.
      return {
        el: to.hash,
        behavior: 'instant',
        top: 70,
      };
    }
    else if (to.path === from.path) {
      // if a link to the current page is clicked,
      // smooth scroll back to top of page.
      return {
        top: 0,
        behavior: 'smooth',
      };
    }
    else {
      // for a regular route change, start at the top of the page.
      return {
        top: 0,
        behaviour: 'instant',
      };
    }
  },
});

export default router;
