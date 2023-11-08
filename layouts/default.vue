<script setup>

useHead({
  titleTemplate: (pageTitle) => {
    return pageTitle ? `${pageTitle} - SWA ` : 'SWA'
  },
  meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'Stuart William Auld - Portfolio Site' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'og:image', href: 'assets/images/pfp.jpg' }
    ],
  link: [
    {
      rel: 'icon', type: 'image/jpg', href: '~/assets/images/Sunny.jpg',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap',
      crossorigin: '',
    },
  ],
  script: [
    {
      src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js',
      body: false,
      type: 'module',
    },
    {
      src: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js',
      body: false,
      nomodule: true,
    },
  ],
})
</script>

<template>
  <main class="relative">
    <Sidebar />
    <div class="main-content">
      <Navbar />
      <slot />
    </div>
  </main>
</template>


<style>
@import 'assets/css/style.css';
</style>
