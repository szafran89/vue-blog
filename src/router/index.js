import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Posts from '@/components/Posts';
import Post from '@/components/Post';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/posts',
      name: 'posts',
      component: Posts,
    },
    {
      path: '/:slug',
      name: 'post',
      component: Post,
    },
  ],
});
