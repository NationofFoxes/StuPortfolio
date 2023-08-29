<script>
</script>

<template>
  <nav class="navbar">

    <ul class="navbar-list">

      <li class="navbar-item">
        <NuxtLink to="/" class="navbar-link">
          <button class="navbar-link  active" data-nav-link="about">About</button>
        </NuxtLink>
      </li>

      <li class="navbar-item">
        <NuxtLink to="/" class="navbar-link" >
          <button class="navbar-link  active" data-nav-link="/resume.vue" >Resume</button>
        </NuxtLink>
      </li>

      <li class="navbar-item">
        <NuxtLink to="/" class="navbar-link">
          <button class="navbar-link active" data-nav-link="/portfolio">Portfolio</button>
        </NuxtLink>
      </li>

      <li class="navbar-item">
        <NuxtLink to="/" class="navbar-link">
          <button class="navbar-link  active" data-nav-link>Blog</button>
        </NuxtLink>
      </li>

      <li class="navbar-item">
        <NuxtLink to="/" class="navbar-link">
          <button class="navbar-link  active" data-nav-link>Contact</button>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
a.router-link-active {
  font-weight: bold;
}
a.router-link-exact-active {
  color: var(--vegas-gold);
}
</style>
