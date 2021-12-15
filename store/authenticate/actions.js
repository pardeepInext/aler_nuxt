import { Block, Notify } from "notiflix";
export default {
  /**
   * login user
   */
  async login({ commit }, data) {
    commit("Is_Login", true);
    await this.$axios
      .post("/login", data)
      .then((res) => {
        commit("Is_Login", false);
        if (res.data.success) {
          this.$cookies.set("user", {
            token: res.data.user.token,
            id: res.data.user.id,
            role_id: res.data.user.role_id,
          });

          if (res.data.user.role_id == 1) this.$router.push("/admin");
          else this.$router.push("/");
          commit("Login_Error", {});
          commit("Is_LogedIn", true);
        } else {
          commit("Login_Error", res.data.errors);
        }
      })
      .catch((e) => {
        commit("Is_Login", false);
        commit("Login_Error", {});
        Notify.failure("server error please try again!");
      });
  },
  /**
   * logout user
   */
  async logout({ commit }) {
    commit("Is_Logout", true);
    const id = this.$cookies.get("user").id;

    await this.$axios
      .delete(`logout/${id}`)
      .then((res) => {
        if (res.data.success) {
          this.$cookies.remove("user");
          commit("Is_LogedIn", false);
          this.$router.push("/login");
          commit("Is_Logout", false);
        }
      })
      .catch((err) => {
        commit("Is_Logout", false);
        Notify.failure("server error please try again!");
      });
  },
  /**
   * fetch current login user
   */
  async fetchCurrentUser({ commit }) {
    let id = this.$cookies.get("user").id;
    await this.$axios
      .get(`/users/${id}`)
      .then((res) => {
        commit("Current_User", res.data);
        console.log(res.data);
      })
      .catch((e) => {
        Notify.failure("server error please try again!");
      });
  },
};
