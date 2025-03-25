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
        window.location.replace(`${winLocation.origin}${pathname.auth}#${winHash}`);
      } else {
        window.location.replace(`${winLocation.origin}${pathname.home}#${winHash}`);
        navBarFunc();
      }
    } else {
      navBarFunc();
    }
  } else {
    if (!isPathName("auth")) {
      window.location.replace(`${winLocation.origin}${pathname.auth}#${winHash}`);
    }
  }
  
  console.log(winLocation);
});

function navBarFunc() {
  let navigationBar = document.getElementById("navigationBar");
  
  navigationBar.getElementsByClassName("logoBtn").item([0]).onclick = function() {
    winLocation.pathname = pathname.home;
  }
  navigationBar.getElementsByClassName("homeBtn").item([0]).onclick = function() {
    winLocation.pathname = pathname.home;
  }
  navigationBar.getElementsByClassName("exploreBtn").item([0]).onclick = function() {
    winLocation.pathname = pathname.explore;
  }
  navigationBar.getElementsByClassName("activityBtn").item([0]).onclick = function() {
    winLocation.pathname = pathname.activity;
  }
  navigationBar.getElementsByClassName("chatBtn").item([0]).onclick = function() {
    winLocation.pathname = pathname.chat;
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