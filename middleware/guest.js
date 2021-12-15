export default ({ redirect, app }) => {
  if (app.$cookies.get("user")) return redirect("/");
};
