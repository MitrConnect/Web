import { auth } from "./config.js";
import { onAuthStateChanged } from "firebase/auth";

const winLocation = window.location;
const winHash = winLocation.hash.slice(1).toLowerCase();

const extension = "/build";
// const extension = "";

const pathname = {
  home: `${extension}/Home.html`,
  auth: `${extension}/Auth.html`
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    if (winLocation.pathname == pathname.auth && winHash == "forgotpassword") {
      window.location.replace(`${winLocation.origin}${pathname.auth}#forgotpassword`);
    } else if (winLocation.pathname != pathname.home) {
      window.location.replace(`${winLocation.origin}${pathname.home}`);
    }
  } else {
    if (winLocation.pathname != pathname.auth) {
      window.location.replace(`${winLocation.origin}${pathname.auth}`);
    }
  }
});

export function getCurrentScreen() {
  return getKeyByValue(pathname, window.location.pathname)
}



// Helper Functions

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}