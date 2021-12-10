export default ({ $axios, $auth, redirect }) => {
    $axios.onError(err => {
          if(err.response.status === 401){
              $auth.logut();
              redirect('/');
          }
    });
};
