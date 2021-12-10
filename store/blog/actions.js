import { Block, Notify } from "notiflix";
export default {
  addBlog({}, payload) {
    console.log(payload);
  },

  async fetchblogs({ commit }, page) {
    Block.standard(".blog-item-list");
    this.$axios
      .get("/blogs", { params: { page: page } })
      .then((res) => {
        Block.remove(".blog-item-list");
        commit("Fetching_Blogs", res.data);
      })
      .catch((e) => {
        Notify.failure("Server error please try again!");
        Block.remove(".blog-item-list");
      });
  },
};
