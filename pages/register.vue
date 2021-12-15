<template>
  <div class="container d-flex justify-content-center align-items-center">
    <div class="card">
      <div
        class="
          p-3
          border-bottom
          d-flex
          align-items-center
          justify-content-center
        "
      >
        <h5>Sign Up</h5>
      </div>
      <div class="p-3 px-4 py-4 border-bottom">
        <form @submit.prevent="register(registerCred)">
          <input
            type="text"
            class="form-control mb-2"
            placeholder="Email"
            v-model="registerCred.email"
          />
          <!-- <span class="text-danger fw-bold" v-if="registerError.email">{{
            registerError.email[0]
          }}</span> -->
          <input
            type="text"
            class="form-control mb-2"
            placeholder="name"
            v-model="registerCred.name"
          />
          <!-- <span class="text-danger fw-bold" v-if="registerError.name">{{
            registerError.name[0]
          }}</span> -->
          <div class="form">
            <input
              :type="isPasswordShow ? 'text' : 'password'"
              class="form-control"
              placeholder="Password"
              v-model="registerCred.password"
            />
            <a href="javascript:void(0)" @click="passwordHideShow">{{
              isPasswordShow ? "Hide" : "Show"
            }}</a>
          </div>
          <!-- <span class="text-danger fw-bold" v-if="registerError.password">{{
            registerError.password[0]
          }}</span> -->
          <button
            type="submit"
            class="btn btn-danger btn-block continue"
            :disabled="isRegister"
          >
            Continue
            <i class="fas fa-circle-notch fa-spin" v-if="isRegister"></i>
          </button>
        </form>
        <!-- <div class="d-flex justify-content-center align-items-center mt-3 mb-3">
          <span class="line"></span> <small class="px-2 line-text">OR</small>
          <span class="line"></span>
        </div> -->
      </div>
      <div
        class="
          p-3
          d-flex
          flex-row
          justify-content-center
          align-items-center
          member
        "
      >
        <span>Already member? </span>
        <NuxtLink class="text-decoration-none ml-2" to="/login">
          SIGNIN
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  head() {
    return {
      title: "Aler| Sing up",
    };
  },
  data() {
    return {
      registerCred: {
        name: "",
        email: "",
        password: "",
      },
      isPasswordShow: false,
    };
  },
  components: {},
  computed: {},
  methods: {
    passwordHideShow() {
      this.isPasswordShow = !this.isPasswordShow;
    },
  },
  mounted() {},
};
</script>
<style scoped>
@import url("~/assets/css/auth.css");
</style>
