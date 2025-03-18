import { auth } from "./config.js";
import { onAuthStateChanged } from "firebase/auth";

const prod = false;

const winLocation = window.location;
const winHash = winLocation.hash.toLowerCase().slice(1)

const pathname = {
  home: `/${prod ? "" : "build/"}home.html`,
  auth: `/${prod ? "" : "build/"}auth.html`
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    if (isPathName("auth") && isHashName("forgotpassword")) {
      document.getElementById("showLogin2").parentElement.classList.add("d-none");
      window.location.replace(`${winLocation.origin}${pathname.auth}#${winHash}`);
    } else if (!isPathName("home")) {
      window.location.replace(`${winLocation.origin}${pathname.home}#${winHash}`);
      // More Complex logic to be implement here!
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