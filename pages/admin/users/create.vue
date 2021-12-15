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
          <span
            class="text-danger"
            v-if="insertedError.hasOwnProperty('email')"
          >
            {{ insertedError.name[0] }}
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
          <span
            class="text-danger"
            v-if="insertedError.hasOwnProperty('email')"
          >
            {{ insertedError.email[0] }}
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
            v-if="insertedError.hasOwnProperty('role_id')"
          >
            {{ insertedError.role_id[0] }}
          </span>
        </div>
        <button
          class="main-btn primary-btn-outline btn-hover"
          @click="addUser(userData)"
          :disabled="insertingLoading"
        >
          Add User
          <i v-if="insertingLoading" class="fa fa-spin fa-spinner"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  layout: "admin",
  head() {
    return {
      title: "Users",
    };
  },
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
    ...mapState("users", ["insertingLoading", "insertedError"]),
  },
  async asyncData({ $axios }) {
    const response = await $axios.get("/roles");
    const roles = response.data;
    return { roles };
  },
  methods: {
    ...mapActions("users", ["addUser"]),
  },
};
</script>

<style></style>
