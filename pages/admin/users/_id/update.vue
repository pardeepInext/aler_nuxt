<template>
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <div class="card-style mb-30">
        <div class="input-style-1">
          <label for="name">Name</label>
          <input
            type="text"
            placeholder="Enter Name..."
            id="name"
            v-model="userData.name"
          />
          <span class="text-danger" v-if="updateError.hasOwnProperty('name')">
            {{ updateError.name[0] }}
          </span>
        </div>
        <div class="input-style-2">
          <label for="email">Email</label>
          <input
            type="text"
            placeholder="Enter Email.."
            id="email"
            v-model="userData.email"
          />
          <span class="text-danger" v-if="updateError.hasOwnProperty('email')">
            {{ updateError.email[0] }}
          </span>
        </div>
        <div class="select-style-1">
          <label>Role</label>
          <div class="select-position">
            <select v-model="userData.role_id" class="text-capitalize">
              <option value="">--Select category--</option>
              <option v-for="role in roles" :key="role.id" :value="role.id">
                {{ role.name }}
              </option>
            </select>
          </div>
          <span
            class="text-danger"
            v-if="updateError.hasOwnProperty('role_id')"
          >
            {{ updateError.role_id[0] }}
          </span>
        </div>
        <button
          class="main-btn primary-btn-outline btn-hover"
          @click="editUser({ id: $route.params.id, user: userData })"
          :disabled="updateLoading"
        >
          Update User
          <i v-if="updateLoading" class="fa fa-spin fa-spinner"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  head() {
    return {
      title: "User | Update",
    };
  },
  layout: "admin",

  data() {
    return {
      userData: {
        name: "",
        email: "",
        role_id: "",
      },
    };
  },
  computed: {
    ...mapState("users", ["updateLoading", "updateError"]),
  },
  methods: {
    ...mapActions("users", ["editUser"]),
  },
  async asyncData({ $axios, params, app }) {
    const response = await $axios.get("/roles");
    const roles = response.data;
    return { roles };
  },
  async created() {
    const { data } = await this.$axios.get(`users/${this.$route.params.id}`);
    const user = { name: data.name, email: data.email, role_id: data.role_id };
    this.userData = user;
  },
};
</script>

<style></style>
