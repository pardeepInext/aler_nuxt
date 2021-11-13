<template>
  <div>
    <div
      :class="[
        'offcanvas-menu-wrapper',
        isToggle && 'show-offcanvas-menu-wrapper',
      ]"
    >
      <div class="canvas-close" @click="() => (isToggle = false)">
        <span class="icon_close"></span>
      </div>
      <div class="logo">
        <NuxtLink to="/">
          <img src="~/assets/img/logo.png" alt="" />
        </NuxtLink>
      </div>
      <div class="om-widget">
        <ul>
          <li><i class="icon_mail_alt"></i> Aler.support@gmail.com</li>
          <li>
            <i class="fa fa-mobile-phone"></i> 125-711-811
            <span>125-668-886</span>
          </li>
        </ul>
        <a href="#" class="hw-btn">Submit property</a>
      </div>
      <div class="om-social">
        <a href="#" v-for="(menu, index) in footerMenus" :key="index">
          <i :class="['fa', menu]"></i>
        </a>
      </div>
    </div>
    <header class="header-section">
      <div class="hs-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-2">
              <div class="logo">
                <NuxtLink to="/">
                  <img src="~/assets/img/logo.png" alt="" />
                </NuxtLink>
              </div>
            </div>
            <div class="col-lg-10">
              <div class="ht-widget">
                <ul>
                  <li><i class="icon_mail_alt"></i> Aler.support@gmail.com</li>
                  <li>
                    <i class="fa fa-mobile-phone"></i> 125-711-811
                    <span>125-668-886</span>
                  </li>
                </ul>
                <a href="#" class="hw-btn">Submit property</a>
              </div>
            </div>
          </div>
          <div class="canvas-open me-2" @click="menuToggle">
            <span class="icon_menu"></span>
          </div>
        </div>
      </div>
      <div class="hs-nav">
        <div class="container">
          <div class="row">
            <div class="col-lg-9">
              <nav class="nav-menu">
                <ul>
                  <li v-for="(menu, index) in menus" :key="index">
                    <NuxtLink
                      :to="
                        menu.hasOwnProperty('subMenus')
                          ? 'javascript:void(0);'
                          : menu.link
                      "
                      >{{ menu.name }}</NuxtLink
                    >
                    <ul class="dropdown" v-if="menu.hasOwnProperty('subMenus')">
                      <li v-for="(menu, index) in menu.subMenus" :key="index">
                        <NuxtLink :to="menu.link">{{ menu.name }}</NuxtLink>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="col-lg-3">
              <div class="hn-social">
                <a href="#" v-for="(menu, index) in footerMenus" :key="index">
                  <i :class="['fa', menu]"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      isToggle: false,
      menus: [
        {
          name: "Home",
          link: "/",
        },
        {
          name: "Properties",
          link: "/",
          subMenus: [
            {
              name: "Properites Submit",
              link: "/propertysubmit",
            },
            {
              name: "Properites",
              link: "/properties",
            },
          ],
        },
        {
          name: "Agents",
          link: "/agents",
        },
        {
          name: "About",
          link: "/about",
        },
        {
          name: "Blogs",
          link: "/blogs",
        },
        {
          name: "Contact",
          link: "/contact",
        },
      ],
    };
  },
  computed: {
    ...mapState(["footerMenus"]),
  },
  methods: {
    menuToggle() {
      this.isToggle = !this.isToggle;
      console.log(this.isToggle);
    },
    resize() {
      this.isToggle = false;
    },
  },
  mounted() {
    window.addEventListener("resize", this.resize);
  },
  unmounted() {
    window.removeEventListener("resize", this.resize);
  },
};
</script>

<style scoped>
.offcanvas-menu-wrapper {
  border-right: 1px solid #ebebeb;
}
.nuxt-link-exact-active {
  color: #00c89e !important;
}
</style>
