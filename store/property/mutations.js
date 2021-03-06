export default {
  Is_Adding: (state, payload) => (state.isAdding = payload),
  Adding_Error: (state, payload) => (state.addingError = payload),
  Fetching_Properties: (state, payload) => (state.properties = payload),
  Fetching_Properties_Loading: (state, payload) =>
    (state.isPropertyFetched = payload),

  /**
   * for admin
   */
  PropertyList: (state, payload) => (state.propertyList = payload),
  IspropertyListFetched: (state, payload) =>
    (state.ispropertyListFetched = payload),
};
