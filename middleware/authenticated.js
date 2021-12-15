export default ({app,redirect}) => {
  if (!app.$cookies.get("user")) return redirect("/login");
};
