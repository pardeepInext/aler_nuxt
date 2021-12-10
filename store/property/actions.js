import TomSelect from "tom-select";
import { Notify, Block } from "notiflix";
export default {
  /**
   * fetching countries for country autocomplete
   */
  countrySelect() {
    let _this = this;
    new TomSelect("#country", {
      valueField: "id",
      labelField: "name",
      searchField: "name",
      closeAfterSelect: true,
      placeholder: "Select Country",
      load: async function (query, callback) {
        const response = await _this.$axios.get(`countries/${query}`);
        callback(response.data);
      },
    });
  },
  /**
   * posting property to database
   */
  async addProperty({ commit }, property) {
    const data = new FormData(property);
    data.append("user_id", 2);
    await this.$axios
      .post("properties", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        commit("Is_Adding", false);
        if (res.data.success) {
          Notify.success("property has submit successfully");
          this.$router.push("/");
        } else {
          commit("Adding_Error", res.data.error);
          Notify.warning("please fill all details");
        }
      })
      .catch((err) => {
        commit("Is_Adding", false);
        Notify.failure("Server error please try again!");
      });
  },
  /**
   * fetching property with filter
   */
  async fetchProperty({ commit }, payload = {}) {
    Block.hourglass("#property-list");

    await this.$axios
      .get("properties", { params: payload })
      .then((res) => {
        Block.remove("#property-list");
        commit("Fetching_Properties_Loading", false);
        commit("Fetching_Properties", res.data);
      })
      .catch((e) => {
        Block.remove("#property-list");
        commit("Fetching_Properties_Loading", false);
        Notify.failure("Server error please try again!");
      });
  },
};
