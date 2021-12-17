export default {
  Is_Login: (state, payload) => (state.isLogin = payload),
  Login_Error: (state, payload) => (state.loginError = payload),
  User: (state, payload) => (state.user = payload),
  Is_LogedIn: (state, payload) => (state.isLogedIn = payload),
  Is_Logout: (state, payload) => (state.isLogout = payload),
  Current_User: (state, payload) => (state.currentUser = payload),
  IsUpdating: (state, payload) => (state.isUpdating = payload),
  UpdatingError: (state, payload) => (state.updatingError = payload),
};
