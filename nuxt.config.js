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
    baseURL: "http://127.0.0.1:8000/api/",
    credentials: true,
  },
  publicRuntimeConfig: {
    axios: {
      baseURL: "http://127.0.0.1:8000/api/",
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
  modules: ["@nuxtjs/axios", "@nuxtjs/auth-next"],
  // next-auth configration
  auth: {
    strategies: {
      cookie: {
        endpoints: {
          csrf: {
            url: "/sanctum/csrf-cookie",
          },
          login: {
            url: "/login",
          },
          logout: {
            url: "/logout",
          },
          user: {
            url: "/user",
          },
        },
        user:{
          property:'data'
        }
      },
    },
    redirect:{
      login:'/login',
      logout:'/logout',
      home:'/'
    },
    plugins:['~/plugins/axios']
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // loading: {
  //   color: '#00c89e',
  //   height: '3px'
  // }
  router: {
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      }

      return { x: 0, y: 0 };
    },
  },
};
