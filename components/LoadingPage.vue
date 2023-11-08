<template>
  <div class="h-screen w-full flex items-center justify-center">
    <div class="animate">
      <img src="~/assets/images/Sunny.jpg" alt="Picture of me and my dog">
    </div>
  </div>
</template>

<style scoped>
@keyframes load {
    0% {
        opacity: 0.08;
        filter: blur(5px);
        letter-spacing: 3px;
    }

    100% {
        opacity: 1;
        font-size: 12px;
        font-weight:600;
        filter: blur(0);
    }
}

.animate {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin: auto;
    
    font-family: Helvetica, sans-serif, Arial;
    animation: load 1.2s infinite 0s ease-in-out;
    animation-direction: alternate;
    text-shadow: 0 0 1px white;
}
</style>
