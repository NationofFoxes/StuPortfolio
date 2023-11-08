<script setup>
let isOpen = ref(false)

function toggleMenu() {
  isOpen = !isOpen
}
</script>

<template>
  <aside class="sidebar" data-sidebar>

<div class="sidebar-info">


  
  <img class="avatar-image" src="~/assets/images/pfp_beach.jpg" alt="Stuart William Auld">
  


  <div class="info-content">
    <h1 class="name" title="Stuart William Auld">Stuart William Auld</h1>

    <p class="title">Software Development</p>
    <p class="title">Tech Promotion</p>
    <p class="title">International Sales</p>
  </div>

  <button class="info_more-btn" data-sidebar-btn>
    <span>Show Contacts</span>

    <ion-icon name="chevron-down"></ion-icon>
  </button>

</div>

<div class="sidebar-info_more">

  <div class="separator"></div>

  <ul class="contacts-list">

    <li class="contact-item">

      <div class="icon-box">
        <ion-icon name="mail-outline"></ion-icon>
      </div>

      <div class="contact-info">
        <p class="contact-title">Email</p>

        <a href="mailto:stuart.william.auld@gmail.com" class="contact-link">stuart.william.auld@gmail.com</a>
      </div>

    </li>

    <li class="contact-item">

      <div class="icon-box">
        <ion-icon name="calendar-outline"></ion-icon>
      </div>

      <div class="contact-info">
        <p class="contact-title">Birthday</p>

        <time datetime="1982-06-23">Sept 27, 1992</time>
      </div>

    </li>

    <li class="contact-item">

      <div class="icon-box">
        <ion-icon name="location-outline"></ion-icon>
      </div>

      <div class="contact-info">
        <p class="contact-title">Location</p>

        <address>Tokyo, Japan</address>
      </div>

    </li>

  </ul>

  <div class="separator"></div>

  <ul class="social-list">
    <li class="social-item">
      <a href="https://www.instagram.com/nationoffoxes" class="social-link" target="_blank">
        <ion-icon name="logo-instagram"></ion-icon>
      </a>
    </li>
    <li class="social-item">
      <a href="https://www.linkedin.com/in/stuart-auld-77868178/" class="social-link" target="_blank">
        <ion-icon name="logo-linkedin"></ion-icon>
      </a>
    </li>
    <li class="social-item">
      <a href="https://github.com/NationofFoxes" class="social-link" target="_blank">
        <ion-icon name="logo-github"></ion-icon>
      </a>
    </li>

  </ul>

</div>

</aside>

</template>