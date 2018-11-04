import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Resume from './views/Resume.vue';
import Work from './views/Work.vue';
import Contact from './views/Contact.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/who-am-i',
      name: 'who-am-i',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About,
    },
    // {
    //   path: '/resume',
    //   name: 'resume',
    //   component: Resume,
    // },
    // {
    //   path: '/work',
    //   name: 'work',
    //   component: Work,
    // },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
  ],
});
