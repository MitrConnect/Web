
// Different screens
loginView = document.getElementById("loginView");
signupView = document.getElementById("signupView");
forgotPwdView = document.getElementById("forgotPwdView");

// Button to switch between screens
showLogin = document.getElementById("showLogin");
showLogin2 = document.getElementById("showLogin2");
showSignup = document.getElementById("showSignup");
showForgotPwd = document.getElementById("showForgotPwd");

// Auth button in each screens
createAccountBtn = document.getElementById("createAccountBtn");
loginBtn = document.getElementById("loginBtn");
forgotPwdBtn = document.getElementById("forgotPwdBtn");

// Init View Stage 
signupView.classList.add("d-none");
forgotPwdView.classList.add("d-none");

// Init popup
const popup = document.getElementById("popup")


// -----------------------------------
showLogin.onclick = function() {
    popup.classList.add("d-none");
    loginView.classList.remove("d-none");
    signupView.classList.add("d-none");
    forgotPwdView.classList.add("d-none");
}

showLogin2.onclick = function() {
    popup.classList.add("d-none");
    loginView.classList.remove("d-none");
    signupView.classList.add("d-none");
    forgotPwdView.classList.add("d-none");
}

showSignup.onclick = function() {
    popup.classList.add("d-none");
    loginView.classList.add("d-none");
    signupView.classList.remove("d-none");
    forgotPwdView.classList.add("d-none");
}

showForgotPwd.onclick = function() {
    popup.classList.add("d-none");
    loginView.classList.add("d-none");
    signupView.classList.add("d-none");
    forgotPwdView.classList.remove("d-none");
}

// -----------------------------------

const hash = window.location.hash.slice(1).toLowerCase();

if (hash == "createaccount") {
    showSignup.click();
} else if (hash == "forgotpassword") {
    showForgotPwd.click();
}

// -----------------------------------

// popup.innerText = "This is a popup message!";
// popup.classList.remove("d-none")

// -----------------------------------