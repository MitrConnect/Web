import { isPathName, onDocReady } from "./objects/_window.js";
import { LoginUser, CreateUser, ForgotPassword, SignOut } from "./objects/_auth.js"
import * as Auth from "./firebase/Auth.js";
import * as CloudDB from "./firebase/CloudDB.js"

onDocReady(function() {
  if (isPathName("login")) {
    // API Call for Logging in user
    LoginUser().submit.onclick = function() {
      let loginUser = LoginUser();
      
      Auth.signIn(loginUser.email, loginUser.password)
      .then((userCredential) => {
      })
      .catch((error) => {
        loginUser.popup.classList.remove("d-none");
        loginUser.popup.innerText = error.code;
      });
    }
  } else if (isPathName("createaccount")) {
    // API Call to Create New User
    CreateUser().submit.onclick = async function() {
      let createUser = CreateUser();

      Auth.signUp(createUser.email, createUser.password)
      .then((userCredential) => {
      })
      .catch((error) => {
        createUser.popup.classList.remove("d-none");
        createUser.popup.innerText = error.code;
      });
    }
  } else if (isPathName("forgotpassword")) {
    // API Call for User Forgot Password
    ForgotPassword().submit.onclick = function() {
      let forgotPassword = ForgotPassword();
    }
  } else if (!isPathName("auth")) {
    // API Call for User to Sign Out
    const SignOutFunc = SignOut();
    var intervalId;

    SignOutFunc.showConfirmation.onclick = function () {
      SignOutFunc.view.classList.remove("slideOut");
      SignOutFunc.view.classList.add("slideIn");
      SignOutFunc.view.classList.add("show");
    
      let countdown = 5;
      SignOutFunc.text.innerText = `You will be signed out in ${countdown} seconds.`;
    
      intervalId = setInterval(() => {
        countdown--;
    
        if (countdown > 0) {
          SignOutFunc.text.innerText = `You will be signed out in ${countdown} seconds.`;
        } else {
          clearInterval(intervalId);
          SignOutFunc.view.classList.add("slideOut");
          SignOutFunc.view.classList.remove("slideIn");
          SignOutFunc.submit.click();
        }
      }, 1000);
    };

    SignOutFunc.cancel.onclick = function() {
      SignOutFunc.view.classList.add("slideOut");
      SignOutFunc.view.classList.remove("slideIn");
      clearInterval(intervalId);
    }

    SignOutFunc.submit.onclick = function() {
      Auth.Out()
      .then(() => {
        console.log("Sign-out successful");
      });
    }
  }
});
