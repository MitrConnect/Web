// $(document).ready(function() {
//     // Init Views
//     $.when(
//         $.get(`Views/Auth/loginView.html`, function(data) { $("#authContainer").append(data); }),
//         $.get(`Views/Auth/signupView.html`, function(data) { $("#authContainer").append(data); }),
//         $.get(`Views/Auth/forgotPwdView.html`, function(data) { $("#authContainer").append(data); })
//     ).then(function() {
//         hashHandler();
//     });

//     function showView(className){
//         $("#loginView").addClass("d-none");
//         $("#signupView").addClass("d-none");
//         $("#forgotPwdView").addClass("d-none");
//         $(`#${className}`).removeClass("d-none");
//     }

//     function hashHandler() {
//         const hash = window.location.hash.slice(1).toLowerCase();

//         if (hash == "createaccount") {
//             showView("signupView");
//         } else if (hash == "forgotpassword") {
//             showView("forgotPwdView");
//         } else {
//             showView("loginView");
//         }
//     }

//     // Event Listerners
//     window.addEventListener('hashchange', hashHandler);
// });



// Init popup
// const popup = document.getElementById("popup");

// -----------------------------------


// -----------------------------------

// popup.innerText = "This is a popup message!";
// popup.classList.remove("d-none")

// -----------------------------------