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

// -----------------------------------
showLogin.onclick = function() {
  loginView.classList.remove("d-none");
  signupView.classList.add("d-none");
  forgotPwdView.classList.add("d-none");
}

showLogin2.onclick = function() {
  loginView.classList.remove("d-none");
  signupView.classList.add("d-none");
  forgotPwdView.classList.add("d-none");
}

showSignup.onclick = function() {
  loginView.classList.add("d-none");
  signupView.classList.remove("d-none");
  forgotPwdView.classList.add("d-none");
}

showForgotPwd.onclick = function() {
  loginView.classList.add("d-none");
  signupView.classList.add("d-none");
  forgotPwdView.classList.remove("d-none");
}
// -----------------------------------

