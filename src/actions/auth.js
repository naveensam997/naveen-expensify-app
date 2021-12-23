import { signInWithPopup,signOut } from "firebase/auth";
// import { auth } from "../firebase/Firebase";
import { auth,googleAuthProvider } from "../firebase/Firebase";
export const login = (uid) => ({
    type: 'LOGIN',
    uid
  });

export const StartLogin = () => {
    return (dispatch) => {
      signInWithPopup(auth, googleAuthProvider)
        .then(({ user }) => {
          console.log("user",user)
        })
        .catch((error) => {
         console.log(error.message)
        });
    };
  };
  export const logout = () => ({
    type: 'LOGOUT'
  });
  

  export const StartLogout = () => {
    return (dispatch) => {
      signOut(auth, googleAuthProvider)
        
    };
  };