import { auth } from "./config.js";
import { onAuthStateChanged } from "firebase/auth";

const prod = false;

const winLocation = window.location;
const winHash = winLocation.hash.toLowerCase().slice(1)

const pathname = {
  auth: `/${prod ? "" : "build/"}auth${prod ? "" : ".html"}`,
  home: `/${prod ? "" : "build/"}home${prod ? "" : ".html"}`,
  explore: `/${prod ? "" : "build/"}explore${prod ? "" : ".html"}`,
  activity: `/${prod ? "" : "build/"}activity${prod ? "" : ".html"}`,
  chat: `/${prod ? "" : "build/"}chat${prod ? "" : ".html"}`
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    if (isPathName("auth")) {
      if (isHashName("forgotpassword")) {
        document.getElementById("showLogin2").parentElement.classList.add("d-none");
        replaceWindow(pathname.auth);
      } else {
        replaceWindow(pathname.home);
      }
    } else {
      navBarFunc();
      // Complex logic goes here!
    }
  } else {
    if (!isPathName("auth")) {
    }
  }
  
  console.log(winLocation);
});

function navBarFunc() {
  let navigationBar = document.getElementById("navigationBar");
  
  navigationBar.getElementsByClassName("logoBtn").item([0]).onclick = function() {
    replaceWindow(pathname.home);
  }
  navigationBar.getElementsByClassName("homeBtn").item([0]).onclick = function() {
    replaceWindow(pathname.home);
  }
  navigationBar.getElementsByClassName("exploreBtn").item([0]).onclick = function() {
    replaceWindow(pathname.explore);
  }
  navigationBar.getElementsByClassName("activityBtn").item([0]).onclick = function() {
    replaceWindow(pathname.activity);
  }
  navigationBar.getElementsByClassName("chatBtn").item([0]).onclick = function() {
    replaceWindow(pathname.chat);
  }
}


export function replaceWindow(pathName, withHash = true, addToHistory = false){
  if (addToHistory) {
    winLocation.pathname = pathName;
  } else {
    if (withHash) {
      window.location.replace(`${winLocation.origin}${pathName}#${winHash}`);
    } else {
      window.location.replace(`${winLocation.origin}${pathName}`);
    }
  }
}

// Windows Helper Functions
export function isPathName(pathName){
  return (getPathName() == pathName);
}

export function isHashName(hashName) {
  return (getHashName() == hashName);
}

export function onDocReady(fn) {
  // see if DOM is already available
  if (document.readyState === "complete" || document.readyState === "interactive") {
      // call on next available tick
      setTimeout(fn, 1);
  } else {
      document.addEventListener("DOMContentLoaded", fn);
  }
}

export function getPathName(){
  return winLocation.pathname.toLowerCase().split('/').pop().replace(".html","");
}

export function getHashName(){
  return winLocation.hash.toLowerCase().slice(1);
}