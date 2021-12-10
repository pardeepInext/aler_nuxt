import { Block, Notify } from "notiflix";
export default {
  /**
   *  fetching all agents
   */
  async fetchagents({ commit, state }, page) {
    Block.standard("#agent-list");
    this.$axios
      .get("/agents", { params: { page: page } })
      .then((res) => {
        Block.remove("#agent-list");
        commit("Agents", state.agents.concat(res.data.data));
        commit("CurrentPage", res.data.current_page);
        commit("LastPage", res.data.last_page);
      })
      .catch((e) => {
        Notify.failure("Server error please try again!");
        Block.remove("#agent-list");
      });
  },
  /**
   * load more functionlity for agent property
   */
  async loadMoreProp({ commit, state }, data) {
    Block.hourglass(".agent-property-list");
    await this.$axios
      .get(`/agents/${data.id}?page=${data.page}`)
      .then((res) => {
        Block.remove(".agent-property-list");
        const newProperty = state.agentProperties.concat(
          res.data.properties.data
        );
        commit("Agent", res.data);
        commit("AgentProperty", newProperty);
      });
  },
};
