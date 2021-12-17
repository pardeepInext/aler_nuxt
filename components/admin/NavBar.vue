<template>
  <header class="header">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-5 col-md-5 col-6">
          <div class="header-left d-flex align-items-center">
            <div class="menu-toggle-btn mr-20">
              <button
                id="menu-toggle"
                class="main-btn primary-btn btn-hover"
                @click="menuToggleAction"
              >
                <i
                  class="lni me-2"
                  :class="menuToggle ? 'lni-chevron-left' : 'lni-menu'"
                ></i>
                Menu
              </button>
            </div>
          </div>
        </div>
        <div class="col-lg-7 col-md-7 col-6">
          <div class="header-right">
            <div class="notification-box ml-15 d-none d-md-flex">
              <button
                class="dropdown-toggle"
                type="button"
                id="notification"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="lni lni-alarm"></i>
                <span>2</span>
              </button>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="notification"
                style=""
              >
                <li>
                  <a href="#0">
                    <div class="image">
                      <img src="/admin/images/lead/lead-6.png" alt="" />
                    </div>
                    <div class="content">
                      <h6>
                        John Doe
                        <span class="text-regular">
                          comment on a product.
                        </span>
                      </h6>
                      <p>
                        Lorem ipsum dolor sit amet, consect etur adipiscing elit
                        Vivamus tortor.
                      </p>
                      <span>10 mins ago</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div class="profile-box ml-15">
              <button
                class="dropdown-toggle bg-transparent border-0"
                type="button"
                id="profile"
                data-bs-toggle="dropdown"
                aria-expanded="true"
              >
                <div class="profile-info">
                  <div class="info">
                    <h6 class="text-capitalize">{{ currentUser.name }}</h6>
                    <div class="image">
                      <img :src="currentUser.image" alt="" />
                    </div>
                  </div>
                </div>
                <i class="lni lni-chevron-down"></i>
              </button>
              <ul
                class="dropdown-menu dropdown-menu-end"
                aria-labelledby="profile"
                data-popper-placement="bottom-end"
                style="
                  position: absolute;
                  inset: 0px 0px auto auto;
                  margin: 0px;
                  transform: translate(0px, 48px);
                "
              >
                <li>
                  <NuxtLink to="/admin/setting">
                    <i class="lni lni-cog"></i> Settings
                  </NuxtLink>
                </li>

                <li>
                  <a style="cursor: pointer" @click="logout">
                    <i class="lni lni-exit"></i> Sign Out
                  </a>
                </li>
              </ul>
            </div>
            <!-- profile end -->
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("authenticate", ["isLogout"]),
    ...mapState(["menuToggle"]),
    ...mapState("authenticate", ["currentUser"]),
  },
  methods: {
    ...mapActions("authenticate", ["logout"]),
    ...mapActions(["menuToggleAction"]),
  },
};
</script>

<style></style>
