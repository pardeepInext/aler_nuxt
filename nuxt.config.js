export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "aler",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  axios: {
    baseURL: "https://aler-postgres-api.herokuapp.com/api/",
    credentials: true,
  },
  publicRuntimeConfig: {
    axios: {
      baseURL: "https://aler-postgres-api.herokuapp.com/api/",
    },
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/assets/js/bootstrap.bundle.min.js", mode: "client" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios",'cookie-universal-nuxt'],
  // next-auth configration
  // auth: {
  //   strategies: {
  //     local: {
  //       endpoints: {
  //         login: { url: "login", method: "post" },
  //         // user: { url: "me", method: "get", propertyName: "data" },
  //         logout: false,
  //       },
  //       token: {
  //         property: "token",
  //         global: true,
  //         // required: true,
  //         // type: 'Bearer'
  //       },
  //       user: {
  //         property: "user",
  //         // autoFetch: true
  //       },
  //     },
  //   },
  //   plugins: ["~/plugins/axios"],
  // },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  loading: {
    color: '#00c89e',
  },
  router: {
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      }

      return { x: 0, y: 0 };
    },
  },
};
