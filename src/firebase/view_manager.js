import { auth } from "./config.js";
import * as rtdb from "./RTDB.js"
import { onAuthStateChanged } from "firebase/auth";
import { getAllPathNames, isPathName, isHashName, replaceWindow, onDocReady } from "../objects/_window.js";

const prod = false;
const pathname = getAllPathNames(prod);

onAuthStateChanged(auth, (user) => {
  if (user) {
    if (isPathName("auth")) {
      if (isHashName("forgotpassword")) {
        document.getElementById("showLogin2").parentElement.classList.add("d-none");
        replaceWindow(pathname.auth);
      } else {
        replaceWindow(pathname.explore);
      }
    } else {
      onDocReady(function() {
        navBarFunc();

        // Complex logic goes here!
        rtdb.WRITE(`users/${user.uid}/`, {
          "Name": user.displayName,
          "Email": user.email
        })
        rtdb.READ(`users/${user.uid}/`)
          .then((snapshot) => {
            if (snapshot.exists()) {
              console.log(snapshot.val());
            } else {
              console.log("No data available");
            }
          });
      });
    }
  } else {
    if (!isPathName("auth")) {
      replaceWindow(pathname.auth, false);
    }
  }
});

function navBarFunc() {
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