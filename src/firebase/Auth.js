import { auth } from "./config.js";
import { LoginUser, CreateUser, ForgotPassword, SignOut } from "../Objects/OAuth.js"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, validatePassword } from "firebase/auth";


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

// API Call to Create New User
CreateUser().submit.onclick = async function() {
  let userInfo = CreateUser();
  const status = await validatePassword(auth, userInfo.password)
  if (status.isValid) {
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
  } else {
    if (containsUppercaseLetter && containsLowercaseLetter) {}
    if (containsNonAlphanumericCharacter && containsNumericCharacter) {}
    if (meetsMaxPasswordLength && meetsMinPasswordLength) {}
  }
}

// API Call for User Forgot Password
ForgotPassword().submit.onclick = function() {
  // Implement here

}

// API Call for User to Sign Out
// SignOut().submit.onclick = function() {
//   signOut(auth).then(() => {
//     console.log("Sign-out successful");
//   }).catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorCode + ": " + errorMessage);
//   });
// }