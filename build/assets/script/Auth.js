$(document).ready(function() {
    // Init Views
    $.get(`Views/loginView.html`, function(data) { $("#authContainer").append(data); });
    $.get(`Views/signupView.html`, function(data) { $("#authContainer").append(data); });
    $.get(`Views/forgotPwdView.html`, function(data) { $("#authContainer").append(data); });
    
    function showView(className){
        $("#loginView").addClass("d-none");
        $("#signupView").addClass("d-none");
        $("#forgotPwdView").addClass("d-none");
        $(`#${className}`).removeClass("d-none");
    }

    // Event Listerners
    $("#showSignup").click(function() { showView("signupView"); });
    $("#showLogin").click(function() { showView("loginView"); });
    $("#showLogin2").click(function() { showView("loginView"); });
    $("#showForgotPwd").click(function() { showView("forgotPwdView"); });
      
    window.addEventListener('hashchange', function() {
        const hash = window.location.hash.slice(1).toLowerCase();

        if (hash == "createaccount") {
            showView("signupView");
        } else if (hash == "forgotpassword") {
            showView("forgotPwdView");
        } else {
            showView("loginView");
        }
    });

    initViews();
    showView(loginView);
});



// Init popup
const popup = document.getElementById("popup");

// -----------------------------------


// -----------------------------------

// popup.innerText = "This is a popup message!";
// popup.classList.remove("d-none")

// -----------------------------------