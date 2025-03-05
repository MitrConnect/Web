import { auth } from "./config.js";
import { LoginUser, CreateUser, ForgotPassword } from "../Objects/OAuth.js"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";


// API Call for Logging in user
LoginUser().submit.onclick = function() {
  let userInfo = LoginUser();
  signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode + ": " + errorMessage);
  });
}

// API Call to create new user
CreateUser().submit.onclick = function() {
  let userInfo = CreateUser();
  createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode + ": " + errorMessage);
  });
}