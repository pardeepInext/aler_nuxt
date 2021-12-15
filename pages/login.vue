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
        <h5>Sign In</h5>
      </div>
      <div class="p-3 px-4 py-4 border-bottom">
        <form @submit.prevent="login(loginCred)">
          <input
            type="text"
            class="form-control mb-2"
            placeholder="Email"
            v-model="loginCred.email"
          />
          <span class="text-danger" v-if="loginError.email">
            {{ loginError.email[0] }}
          </span>
          <div class="form mb-0">
            <input
              :type="isPasswordShow ? 'text' : 'password'"
              class="form-control"
              placeholder="Password"
              v-model="loginCred.password"
            />
            <a href="javascript:void(0)" @click="passwordHideShow">{{
              isPasswordShow ? "Hide" : "Show"
            }}</a>
          </div>
          <NuxtLink class="forgot-link float-end my-2" to="forgot"
            >ForgotPassword
          </NuxtLink>
          <span class="text-danger" v-if="loginError.password">
            {{ loginError.password[0] }}
          </span>
          <button
            type="submit"
            class="btn btn-danger btn-block continue"
            :disabled="isLogin"
          >
            Continue
            <i class="fa fa-spinner fa-spin" v-if="isLogin"></i>
          </button>
        </form>
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
        <span>Not a member? </span>
        <NuxtLink class="text-decoration-none ml-2" to="/register"
          >SIGNUP
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  middleware: ["guest"],
  head() {
    return {
      title: "Aler | Sign in",
      // link:[
      //   {
      //     rel:'stylesheet',
      //     href:"/css/auth.css"
      //   }
      // ],
    };
  },
  data() {
    return {
      loginCred: {
        email: "",
        password: "",
      },
      isPasswordShow: false,
    };
  },
  computed: {
    ...mapState("authenticate", ["isLogin", "loginError"]),
  },
  methods: {
    ...mapActions("authenticate", ["login"]),
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
