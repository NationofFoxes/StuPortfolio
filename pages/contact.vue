<template>
    <article class="contact active" data-page="contact">

<header>
  <h2 class="h2 article-title">Contact</h2>
</header>

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
      <ion-icon name="logo-instagram"></ion-icon>
    </div>

    <div class="contact-info">
      <p class="contact-title">Instagram</p>
      <a href="https://www.instagram.com/nationoffoxes/" class="contact-link" target="blank">NationofFoxes</a>
    </div>

  </li>

  <li class="contact-item">

    <div class="icon-box">
      <ion-icon name="logo-linkedin"></ion-icon>
    </div>

    <div class="contact-info">
      <p class="contact-title">LinkedIn</p>
      <a href="https://www.linkedin.com/in/stuartwilliamauld/" class="contact-link" target="blank">Stuart William Auld</a>
    </div>

  </li>

</ul>

  <!-- <section class="contact-form">
    <h3 class="h3 form-title">Contact Form</h3>
      <form @submit.prevent="submitForm" class="form" data-form>
        <div class="input-wrapper">
          <input v-model="formData.fullname" type="text" name="fullname" class="form-input" placeholder="Full name" required data-form-input>
          <input v-model="formData.email" type="email" name="email" class="form-input" placeholder="Email address" required data-form-input>
        </div>
        <textarea v-model="formData.message" name="message" class="form-input" placeholder="Your Message" required data-form-input></textarea>
          <button class="form-btn" type="submit" :disabled="formSubmitted" data-form-btn>
            <ion-icon name="paper-plane"></ion-icon>
            <span>Send Message</span>
          </button>

      </form>

  </section> -->



</article>
</template>

<!-- <script>
export default {
  data() {
    return {
      formData: {
        fullname: "",
        email: "",
        message: "",
      },
      formSubmitted: false,
    };
  },
  methods: {
    submitForm() {
      // Here you can add code to handle form submission.
      // You can send the form data to a server or perform any other necessary actions.
      // For this example, we'll just display a success message.
      this.formSubmitted = true;
    },
  },
};
</script> -->
