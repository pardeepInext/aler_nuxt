<template>
  <div>
    <Header />
    <transition name="fade">
      <Nuxt />
    </transition>
    <Footer />
  </div>
</template>

<script>
export default {
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800,900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Lato:400,700,900&display=swap",
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "/css/bootstrap.min.css",
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "/css/elegant-icons.css",
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "/css/font-awesome-4.css",
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "/css/style.css",
        },
      ],
    };
  },
  pageTransition: "fade",
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
