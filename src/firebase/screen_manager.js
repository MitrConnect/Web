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
      }
    }
  } else {
    if (!isPathName("auth")) {
      window.location.replace(`${winLocation.origin}${pathname.auth}#${winHash}`);
    }
  }

  console.log(winLocation);
});


// Helper Functions
export function isPathName(pathName){
  const cleanPathName = winLocation.pathname.toLowerCase().split('/').pop().replace(".html","");
  if (cleanPathName == pathName) {
    return true
  }

  return false
}

export function isHashName(hashName) {
  const cleanHashName = winLocation.hash.toLowerCase().slice(1);
  console.log(cleanHashName);
  if (cleanHashName == hashName) {
    return true
  }
  return false
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