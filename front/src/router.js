// router.js

import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/Home.vue'
import Courses from './pages/Courses.vue';
import AboutUs from './pages/Aboutus.vue';
import ContactUs from './pages/Contactus.vue';
import MyDashboard from './pages/Mydashboard.vue';
import Newsletter from './pages/Newsletter.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/courses', component: Courses },
  { path: '/about-us', component: AboutUs },
  { path: '/contact-us', component: ContactUs },
  { path: '/my-dashboard', component: MyDashboard },
  { path: '/newsletter', component: Newsletter }
];

const router = new VueRouter({
  routes
});

export default router;
