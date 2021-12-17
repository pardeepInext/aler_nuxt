<template>
  <aside class="sidebar-nav-wrapper" :class="menuToggle && 'active'">
    <div class="navbar-logo">
      <NuxtLink to="/">
        <img src="~/assets/img/logo.png" alt="logo" />
      </NuxtLink>
    </div>
    <nav class="sidebar-nav">
      <ul>
        <li
          :class="[
            'nav-item',
            menu.hasOwnProperty('subLinks') && 'nav-item-has-children',
          ]"
          v-for="(menu, index) in menus"
          :key="index"
        >
          <a
            href="#0"
            class="collapsed"
            data-bs-toggle="collapse"
            :data-bs-target="`#ddmenu_${index}`"
            aria-controls="ddmenu_1"
            aria-expanded="false"
            aria-label="Toggle navigation"
            v-if="menu.hasOwnProperty('subLinks')"
          >
            <span class="icon">
              <i :class="['fa', menu.icon]"></i>
            </span>
            <span class="text">{{ menu.name }}</span>
          </a>
          <NuxtLink v-else :to="menu.link">
            <span class="icon">
              <i :class="['fa', menu.icon]"></i>
            </span>
            <span class="text">{{ menu.name }}</span>
          </NuxtLink>
          <ul :id="`ddmenu_${index}`" class="collapse dropdown-nav">
            <li v-for="(subLink, index) in menu.subLinks" :key="index">
              <NuxtLink :to="`/admin${subLink.link}`">{{
                subLink.name
              }}</NuxtLink>
            </li>
          </ul>
        </li>
        <span class="divider"><hr /></span>

        <li class="nav-item">
          <NuxtLink to="/admin/notification">
            <span class="icon">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.16667 19.25H12.8333C12.8333 20.2584 12.0083 21.0834 11 21.0834C9.99167 21.0834 9.16667 20.2584 9.16667 19.25ZM19.25 17.4167V18.3334H2.75V17.4167L4.58333 15.5834V10.0834C4.58333 7.24171 6.41667 4.76671 9.16667 3.94171V3.66671C9.16667 2.65837 9.99167 1.83337 11 1.83337C12.0083 1.83337 12.8333 2.65837 12.8333 3.66671V3.94171C15.5833 4.76671 17.4167 7.24171 17.4167 10.0834V15.5834L19.25 17.4167ZM15.5833 10.0834C15.5833 7.51671 13.5667 5.50004 11 5.50004C8.43333 5.50004 6.41667 7.51671 6.41667 10.0834V16.5H15.5833V10.0834Z"
                />
              </svg>
            </span>
            <span class="text">Notifications</span>
          </NuxtLink>
        </li>
        <li class="nav-item">
          <NuxtLink to="/admin/setting">
            <span class="icon">
              <i class="lni lni-cog"></i>
            </span>
            <span class="text">Setting</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      menus: [
        {
          name: "Dashboard",
          icon: "fa-diamond",
          link: "/admin",
        },
        {
          name: "Users",
          icon: "fa-user",
          subLinks: [
            {
              link: "/users",
              name: "All Users",
            },
            {
              link: "/users/create",
              name: "Add User",
            },
          ],
        },
        {
          name: "Properties",
          icon: "fa-building",
          link: "/admin/properties",
        },
        {
          name: "Messages",
          icon: "fa-comments-o",
          link: "/admin/messages",
        },
      ],
    };
  },
  computed: {
    ...mapState(["menuToggle"]),
  },
};
</script>

<style lang="scss" scoped>
.nuxt-link-active {
  color: #262d3f;
}
</style>
