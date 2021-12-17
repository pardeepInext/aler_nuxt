<template>
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <div class="card-style settings-card-1 mb-30">
        <div
          class="title mb-30 d-flex justify-content-between align-items-center"
        >
          <h6>My Profile</h6>
        </div>
        <form
          @submit.prevent="updateProfile($refs.update_form)"
          ref="update_form"
        >
          <div class="profile-info">
            <div class="d-flex align-items-center mb-30">
              <div class="profile-image">
                <img
                  :src="data.image"
                  alt=""
                  width="75"
                  height="75"
                  style="object-fit: cover"
                />
                <div class="update-image">
                  <input
                    type="file"
                    id="image"
                    name="image"
                    @change="imagePreview"
                    accept="images/*"
                  />
                  <label for="image"
                    ><i class="lni lni-cloud-upload"></i
                  ></label>
                </div>
              </div>
              <div class="profile-meta">
                <h5 class="text-bold text-dark mb-10">{{ nameRole.name }}</h5>
                <p class="text-sm text-gray text-capitalize">
                  {{ nameRole.role }}
                </p>
              </div>
            </div>
            <div class="input-style-1">
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter name.."
                name="name"
                v-model="data.name"
              />
              <span v-if="updatingError.name" class="text-danger">
                {{ updatingError.name[0] }}
              </span>
            </div>
            <p class="text-muted">
              For updating email or password please verify your password
              <span class="badge bg-primary" @click="openModal">Verify</span>
            </p>
            <div class="input-style-1">
              <label>Email</label>
              <input
                type="text"
                placeholder="leave blank for exiting email"
                name="email"
                v-model="data.email"
                :disabled="!verify"
              />
              <span v-if="updatingError.email" class="text-danger">
                {{ updatingError.email[0] }}
              </span>
            </div>
            <div class="input-style-1">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="leave blank for exiting password"
                v-model="data.password"
                :disabled="!verify"
              />
            </div>
          </div>
          <div class="col-12">
            <button
              class="main-btn primary-btn btn-hover"
              type="submit"
              :disabled="isUpdating"
            >
              Update Profile
              <i class="fa fa-spin fa-spinner" v-if="isUpdating"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
    <div
      class="modal fade"
      id="password-verify-modal"
      ref="password_verify"
      tabindex="-1"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Verify Password</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="input-style-2">
              <label>Password</label>
              <input
                :type="isPasswordShow ? 'text' : 'password'"
                name="password"
                placeholder="Enter password"
                v-model="password"
              />
              <span
                class="icon"
                style="cursor: pointer"
                @click="(e) => (isPasswordShow = !isPasswordShow)"
              >
                <i class="lni lni-user"></i>
              </span>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="main-btn primary-btn btn-sm"
              @click="veifyPassword"
            >
              Verify
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { Notify, Loading } from "notiflix";
export default {
  head() {
    return {
      title: "Setting",
      script: [
        {
          src: "/js/bootstrap.js",
        },
      ],
    };
  },
  data() {
    return {
      data: {
        name: "",
        email: "",
        password: "",
      },
      password: "",
      verify: false,
      isPasswordShow: false,
      modal: null,
    };
  },
  async asyncData({ app, $axios }) {
    const { data } = await $axios.get(`/users/${app.$cookies.get("user").id}`);
    const nameRole = { name: data.name, role: data.role.name };
    return { data, nameRole };
  },
  computed: {
    ...mapState("authenticate", ["isUpdating", "updatingError"]),
  },
  methods: {
    ...mapActions("authenticate", ["updateProfile"]),
    imagePreview(e) {
      const image = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => (this.data.image = reader.result);
      reader.readAsDataURL(image);
    },
    openModal() {
      this.modal = new bootstrap.Modal(this.$refs.password_verify, {
        keyboard: false,
        backdrop: "static",
      });
      this.modal.show();
    },
    async veifyPassword() {
      Loading.hourglass("verifying your password...");
      await this.$axios
        .put(`verifypassword/${this.data.id}`, { password: this.password })
        .then((res) => {
          if (res.data.status) {
            this.modal.hide();
            this.verify = true;
            Notify.success("Password verify succesfully!");
          } else Notify.warning("Incorrect or Blank Password");
          Loading.remove("verifying your password...");
        })
        .catch((e) => Notify.failure("Server Error Please try again"));
    },
  },
  layout: "admin",
  mounted() {
    this.$refs.password_verify.addEventListener(
      "hide.bs.modal",
      (e) => (this.password = "")
    );
  },
  unmounted() {
    this.$refs.password_verify.removeEventListener(
      "hide.bs.modal",
      (e) => (this.password = "")
    );
  },
};
</script>

<style scoped>
.bg-primary {
  background: #00c89e !important;
  cursor: pointer;
}
</style>
