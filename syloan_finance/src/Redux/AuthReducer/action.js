// actions.js
import {
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    GOOGLE_SIGN_IN_SUCCESS,
    GOOGLE_SIGN_IN_FAILURE,
    // LOGOUT_SUCCESS,
    // LOGOUT_FAILURE,
  } from './actionTypes';
  
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
  
  // Action Creators
  
  // Sign Up Action
  export const signUp = (email, password) => {
    return (dispatch) => {
      const auth = getAuth();
  
      createUserWithEmailAndPassword(auth, email, password)
        .then((response) => {
          dispatch({ type: SIGN_UP_SUCCESS, payload: response });
        })
        .catch((error) => {
          dispatch({ type: SIGN_UP_FAILURE, payload: error.message });
        });
    };
  };
  
  // Login Action
  export const login = (email, password) => {
    return (dispatch) => {
      const auth = getAuth();
  
      signInWithEmailAndPassword(auth, email, password)
        .then((response) => {
          dispatch({ type: LOGIN_SUCCESS, payload: response });
        })
        .catch((error) => {
          dispatch({ type: LOGIN_FAILURE, payload: error.message });
        });
    };
  };
  
  // Google Sign In Action
  export const googleSignIn = () => {
    return (dispatch) => {
      const auth = getAuth();
      const googleProvider = new GoogleAuthProvider();
  
      signInWithPopup(auth, googleProvider)
        .then((response) => {
          dispatch({ type: GOOGLE_SIGN_IN_SUCCESS, payload: response });
        })
        .catch((error) => {
          dispatch({ type: GOOGLE_SIGN_IN_FAILURE, payload: error.message });
        });
    };
  };
  
  // Logout Action
//   export const logout = () => {
//     return (dispatch) => {
//       const auth = getAuth();
  
//       signOut(auth)
//         .then(() => {
//           dispatch({ type: LOGOUT_SUCCESS });
//         })
//         .catch((error) => {
//           dispatch({ type: LOGOUT_FAILURE, payload: error.message });
//         });
//     };
//   };
  