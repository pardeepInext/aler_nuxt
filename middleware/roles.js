export default ({ app, redirect }) => {
  if (app.$cookies.get("user").role_id != 1) 
  return redirect("/");
};
