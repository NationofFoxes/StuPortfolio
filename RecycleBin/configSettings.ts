import { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {

  router: {
    extendRoutes(routes, resolve) {
      // Define routes for each page
      routes.push(
        {
          name: 'index',
          path: '/',
          component: resolve(__dirname, 'pages/index.vue'),
          chunkName: 'pages/index',
        },
        {
          name: 'resume',
          path: '/resume',
          component: resolve(__dirname, 'pages/resume.vue'),
          chunkName: 'pages/resume',
        },
        {
          name: 'portfolio',
          path: '/portfolio',
          component: resolve(__dirname, 'pages/portfolio.vue'),
          chunkName: 'pages/portfolio',
        },
        {
          name: 'blog',
          path: '/blog',
          component: resolve(__dirname, 'pages/blog.vue'),
          chunkName: 'pages/blog',
        },
        {
          name: 'contact',
          path: '/contact',
          component: resolve(__dirname, 'pages/contact.vue'),
          chunkName: 'pages/contact',
        }
      );

      // Add other routes here if needed...

      // Default route (if no matching route is found)
      routes.push({
        path: '*',
        redirect: '/',
      });
    },
  },
};

export default config;
