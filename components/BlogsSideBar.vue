<template>
  <div class="blog-sidebar">
    <div class="follow-us">
      <div class="section-title sidebar-title-b">
        <h6>Follow us</h6>
      </div>
      <div class="fu-links">
        <a
          v-for="social in footerMenus"
          :key="social"
          :class="[social.split('-')[1]]"
        >
          <i :class="['fa', social]"></i>
        </a>
      </div>
    </div>
    <div class="subscribe-form">
      <div class="section-title sidebar-title-b">
        <h6>Subscribe</h6>
      </div>
      <p>Consectetur adipiscing elit, sed do eiusmod ut labore.</p>
      <form>
        <input type="text" placeholder="Email" v-model="newslatterEmail" />
        <button type="button" class="site-btn">
          <!-- <i
                      class="fas fa-sync fa-spin"
                      v-if="isNewslatteloading"
                    ></i> -->
          Subscribe
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      newslatterEmail: "",
    };
  },
  computed: {
    ...mapState(["footerMenus"]),
  },
};
</script>

<style></style>
