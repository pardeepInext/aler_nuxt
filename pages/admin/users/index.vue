<template>
  <div class="tables-wrapper">
    <div class="row">
      <div class="col-lg-12">
        <div class="card-style mb-30">
          <div class="row">
            <div class="col-3">
              <div class="select-style-1">
                <label>Role</label>
                <div class="select-position">
                  <select
                    v-model="filter.roleId"
                    class="text-capitalize"
                    @change="changeRole"
                  >
                    <option value="">--Select Role--</option>
                    <option
                      v-for="role in roles"
                      :key="role.id"
                      :value="role.id"
                    >
                      {{ role.name }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="table-wrapper table-responsive" id="user-list">
            <table class="table">
              <thead>
                <tr>
                  <th><h6>#</h6></th>
                  <th><h6>Name</h6></th>
                  <th><h6>Email</h6></th>
                  <th><h6>Role</h6></th>
                  <th><h6>Action</h6></th>
                </tr>
                <!-- end table row-->
              </thead>
              <tbody>
                <tr v-for="user in users" :key="user.id">
                  <td>
                    <div class="employee-image">
                      <img :src="user.image" alt="" />
                    </div>
                  </td>
                  <td class="min-width">
                    <p>{{ user.name }}</p>
                  </td>
                  <td class="min-width">
                    <p>
                      <a href="#0">{{ user.email }}</a>
                    </p>
                  </td>
                  <td class="min-width">
                    <span
                      :class="[
                        'status-btn',
                        'text-capitalize',
                        `${roleBtn(user.role_id)}-btn`,
                      ]"
                    >
                      {{ user.role.name }}
                    </span>
                  </td>
                  <td>
                    <div class="action">
                      <NuxtLink
                        class="text-warning action-link"
                        :to="`/admin/users/${user.id}/show`"
                      >
                        <i class="lni lni-eye"></i>
                      </NuxtLink>
                      <NuxtLink
                        class="text-primary action-link"
                        v-if="user.role_id != 1"
                        :to="`/admin/users/${user.id}/update`"
                      >
                        <i class="lni lni-pencil-alt"></i>
                      </NuxtLink>
                      <button
                        class="text-danger"
                        @click="deleteUser(user.id)"
                        v-if="user.role_id != 1"
                      >
                        <i class="lni lni-trash-can"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <nav
            aria-label="Page navigation example"
            v-if="usersData.last_page > 1"
          >
            <ul class="pagination justify-content-center">
              <li
                class="page-item"
                :class="usersData.current_page == 1 && 'disabled'"
              >
                <a
                  class="page-link"
                  tabindex="-1"
                  @click="paginate(usersData.current_page - 1)"
                  >Previous</a
                >
              </li>
              <li
                class="page-item"
                v-for="page in usersData.last_page"
                :class="(page == usersData.current_page) == 1 && 'active'"
                :key="page"
              >
                <a class="page-link" @click="paginate(page)">{{ page }}</a>
              </li>
              <li
                class="page-item"
                :class="
                  usersData.current_page == usersData.last_page && 'disabled'
                "
              >
                <a
                  class="page-link"
                  @click="paginate(usersData.current_page + 1)"
                  >Next</a
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { Notify } from "notiflix";
export default {
  layout: "admin",
  head() {
    return {
      title: "User-Create",
    };
  },
  data() {
    return {
      filter: {
        roleId: "",
        page: 1,
      },
    };
  },
  async asyncData({ store, $axios }) {
    const { data } = await $axios.get("/users");
    store.commit("users/UsersData", data);
    store.commit("users/Users", data.data);
    const response = await $axios.get("/roles");
    const roles = response.data;
    return { roles };
  },
  computed: {
    ...mapState("users", ["users", "usersData"]),
  },
  methods: {
    ...mapActions("users", ["fetchUsers", "deleteUser"]),
    roleBtn(role_id) {
      if (role_id == 1) return "success";
      else if (role_id == 3) return "active";
      else return "close";
    },
    paginate(page) {
      this.filter.page = page;
      this.fetchUsers(this.filter);
    },
    changeRole() {
      this.filter.page = 1;
      this.fetchUsers(this.filter);
    },
    async deleteUser(id) {
      await this.$axios
        .delete(`/users/${id}`)
        .then((res) => {
          if (res.data.success) {
            Notify.success("user is deleted!");
            this.fetchUsers(filter);
          }
        })
        .catch((e) => {
          Notify.failure("Server error please try again!");
        });
    },
  },
};
</script>

<style scoped>
.pagination li a {
  cursor: pointer;
}

.action-link {
  padding: 0 6px;
}
</style>
