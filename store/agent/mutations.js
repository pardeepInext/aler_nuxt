export default {
  Agents: (state, payload) => (state.agents = payload),
  CurrentPage: (state, payload) => (state.currentPage = payload),
  LastPage: (state, payload) => (state.lastPage = payload),
  Agent: (state, payload) => (state.agent = payload),
  AgentProperty: (state, payload) => (state.agentProperties = payload),
};
