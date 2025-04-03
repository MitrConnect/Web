import { auth } from "./config.js";
import * as rtdb from "./RTDB.js"
import { onAuthStateChanged } from "firebase/auth";
import { getAllPathNames, isPathName, isHashName, replaceWindow, onDocReady } from "../objects/_window.js";

const prod = false;
const pathname = getAllPathNames(prod);


onDocReady(function() {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      if (isPathName("login") || isPathName("createaccount")) {
        replaceWindow(pathname.explore);
      } else if (isPathName("forgotpassword")) {
        document.getElementById("showLogin2").parentElement.classList.add("d-none");
      } else {
        // Complex logic goes here!
      }
    } else {
      if (!isPathName("auth")) {
        replaceWindow(pathname.login);
      }
    }
  
    authNavFunc();
    navBarFunc();
  });
});

function navBarFunc() {
  if (!isPathName("auth")) {
    let navigationBar = document.getElementById("navigationBar");
    
    navigationBar.getElementsByClassName("logoBtn")[0].onclick = function() {
      console.log("logoBtn Pressed!");
      replaceWindow(pathname.explore);
    }
    navigationBar.getElementsByClassName("exploreBtn")[0].onclick = function() {
      console.log("exploreBtn Pressed!");
      replaceWindow(pathname.explore);
    }
    navigationBar.getElementsByClassName("activityBtn")[0].onclick = function() {
      console.log("activityBtn Pressed!");
      replaceWindow(pathname.activity);
    }
    navigationBar.getElementsByClassName("chatBtn")[0].onclick = function() {
      console.log("chatBtn Pressed!");
      replaceWindow(pathname.chat);
    }
    navigationBar.getElementsByClassName("profileBtn")[0].onclick = function() {
      console.log("profileBtn Pressed!");
      replaceWindow(pathname.profile);
    }
    navigationBar.getElementsByClassName("journalBtn")[0].onclick = function() {
      console.log("journalBtn Pressed!");
      replaceWindow(pathname.journal);
    }
  }
}

function authNavFunc() {
  if (isPathName("login")) {
    document.getElementById("showSignup").onclick = function(){
      replaceWindow(pathname.createaccount);
    }
    document.getElementById("showForgotPwd").onclick = function(){
      replaceWindow(pathname.forgotpassword);
    }
  } else if (isPathName("createaccount")) {
    document.getElementById("showLogin").onclick = function(){
      replaceWindow(pathname.login);
    }
  } else if (isPathName("forgotpassword")) {
    document.getElementById("showLogin").onclick = function(){
      replaceWindow(pathname.login);
    }
  }
}