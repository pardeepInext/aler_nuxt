<template>
  <div>
    <side-bar />
    <div
      class="overlay"
      :class="menuToggle && 'active'"
      @click="menuToggleAction"
    ></div>
    <main class="main-wrapper" :class="menuToggle && 'active'">
      <nav-bar />
      <section class="section">
        <div class="container-fluid">
          <div class="title-wrapper pt-30">
            <div class="row align-items-center">
              <div class="col-md-6">
                <div class="titlemb-30 text-capitalize">
                  <h2>
                    {{
                      $nuxt.$route.name.split("-")[
                        $nuxt.$route.name.split("-").length - 1
                      ]
                    }}
                  </h2>
                </div>
              </div>
              <div class="col-md-6">
                <div class="breadcrumb-wrapper mb-30">
                  <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item text-capitalize">
                        <a href="#0">{{ $nuxt.$route.name.split("-")[1] }}</a>
                      </li>
                      <li
                        class="breadcrumb-item active text-capitalize"
                        aria-current="page"
                      >
                        {{
                          $nuxt.$route.name.split("-")[
                            $nuxt.$route.name.split("-").length - 1
                          ]
                        }}
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <Nuxt />
        </div>
      </section>
      <Footer />
    </main>
  </div>
</template>

<script>
import SideBar from "../components/admin/SideBar";
import NavBar from "../components/admin/NavBar";
import Footer from "../components/admin/Footer";
import { mapState, mapActions } from "vuex";
export default {
  components: { SideBar, NavBar, Footer },
  middleware: ["authenticated", "roles"],
  async asynData({ app }) {
    console.log(app);
  },
  head() {
    return {
      title: "Aler|Dashboard",
      link: [
        {
          rel: "stylesheet",
          href: "/admin/css/bootstrap.min.css",
        },
        {
          rel: "stylesheet",
          href: "/admin/css/lineicons.css",
        },
        {
          rel: "stylesheet",
          href: "/admin/css/materialdesignicons.min.css",
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "/css/font-awesome-4.css",
        },
        {
          rel: "stylesheet",
          href: "/admin/css/main.css",
        },
      ],
    };
  },
  computed: {
    ...mapState(["menuToggle"]),
  },
  loading: {
    color: "#4a6cf7",
  },
  methods: {
    ...mapActions(["menuToggleAction"]),
    ...mapActions("authenticate", ["fetchCurrentUser"]),
  },
  mounted() {
    this.fetchCurrentUser();
  },
  pageTransition: "fade",
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
