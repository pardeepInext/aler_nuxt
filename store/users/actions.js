import { Block, Notify } from "notiflix";
export default {
  /**
   *  fetching all users
   */
  async fetchUsers({ commit }, filter) {
    Block.hourglass("#user-list");
    await this.$axios
      .get("/users", { params: filter })
      .then((res) => {
        commit("UsersData", res.data);
        commit("Users", res.data.data);
        Block.remove("#user-list");
      })
      .catch((e) => {
        Block.remove("#user-list");
        Notify.failure("Server error please try again!");
      });
  },
  /**
   * inserting users
   */

  async addUser({ commit }, data) {
    commit("UserInserting", true);

    await this.$axios
      .post("/users", data)
      .then((res) => {
        if (res.data.success) {
          Notify.success("User is added");
          this.$router.push("/admin/users");
          commit("InsertedError", {});
        } else commit("InsertedError", res.data.errors);
        commit("UserInserting", false);
      })
      .catch((e) => {
        commit("UserInserting", false);
        Notify.failure("Server error please try again!");
      });
  },
  /**
   * edit user
   */
  async editUser({ commit }, data) {
    commit("UpdateLoading", true);
    await this.$axios
      .put(`users/${data.id}`, data.user)
      .then((res) => {
        if (res.data.success) {
          Notify.success("User updated successfully!");
          this.$router.push(`/admin/users/${data.id}/show`);
          commit("UpdateError", {});
        } else commit("UpdateError", res.data.errors);
        commit("UpdateLoading", false);
      })
      .catch((e) => {
        commit("UpdateLoading", false);
        Notify.failure("Server error please try again!");
      });
  },

  async deleteUser({ commit, state }, id) {
    Block.hourglass("#user-list");

    await this.$axios
      .delete(`/users/${id}`)
      .then((res) => {
        if (res.data.success) {
          const users = state.users;
          const index = users.indexOf(
            users.find((elm) => elm.id == id),
            0
          );
          commit("DeleteIndex", index);
          Block.remove("#user-list");
        }
      })
      .catch((e) => {
        Block.remove("#user-list");
        Notify.failure("Server error please try again!");
      });
  },
};
