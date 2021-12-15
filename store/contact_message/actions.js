import { Block, Notify } from "notiflix";
export default {
  /**
   * login user
   */
  async sendMessage({ commit }, data) {
    if (data.message != "") {
      
      commit("IsMessageSend", true);

      await this.$axios
        .put(`/sendmessage/${data.id}`, { message: data.message })
        .then((res) => {
          commit("IsMessageSend", false);
          this.$router.push("/admin/messages/");
          Notify.success("message sent successfully!");
        })
        .catch((e) => {
          commit("IsMessageSend", false);
          Notify.failure("server error please try again!");
        });
    } else {
      Notify.warning("please enter a message!");
    }
  },
};
