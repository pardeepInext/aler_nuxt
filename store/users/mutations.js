export default {
  UsersData: (state, payload) => (state.usersData = payload),
  Users: (state, payload) => (state.users = payload),
  IsUserFetch: (state, payload) => (state.users = payload),
  UserInserting: (state, payload) => (state.insertingLoading = payload),
  InsertedError: (state, payload) => (state.insertedError = payload),
  DeleteIndex: (state, payload) => state.users.splice(payload, 1),
  IsDeleting: (state, payload) => (state.isDeleting = payload),
  UpdateLoading: (state, payload) => (state.updateLoading = payload),
  UpdateError: (state, payload) => (state.updateError = payload),
};
