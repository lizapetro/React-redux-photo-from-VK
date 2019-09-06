const VK = window.VK;
export const GET_LOGIN_REQUEST='GET_LOGIN_REQUEST';
export const GET_LOGIN_SUCCESS='GET_LOGIN_SUCCESS';
export const GET_LOGIN_ERROR='GET_LOGIN_ERROR';

export function handleLogin(){
  console.log('Меня запустили');
  return (dispatch)=>{
    dispatch({
      type:GET_LOGIN_REQUEST
    });
    VK.Auth.login((r)=>{
      console.log(r);
      if (r.session){
        dispatch({
          type:GET_LOGIN_SUCCESS,
          payload:r.session.user
        });
      }else{
        dispatch({
          type:GET_LOGIN_ERROR,
          payload:'new Error()'
        });
      }

    },4);
  }


}
