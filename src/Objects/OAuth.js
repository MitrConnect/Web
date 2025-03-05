
loginView = document.getElementById("loginView");
signupView = document.getElementById("signupView");
forgotPwdView = document.getElementById("forgotPwdView");


export const LoginUser = function() {
    return {
        email: loginView.querySelector("#email").value,
        password: loginView.querySelector("#password").value,
        presistent: loginView.querySelector("#rememberMe").value,
        submit: loginView.querySelector("#submitBtn"),
    }
}

export const CreateUser = function() {
    return {
        email: signupView.querySelector("#email").value,
        password: signupView.querySelector("#password").value,
        confirmPwd:  signupView.querySelector("#confirmPwd").value,
        submit: signupView.querySelector("#submitBtn")
    }
}

export const ForgotPassword = function() {
    return {
        email: forgotPwdView.querySelector("#email").value,
        submit: forgotPwdView.querySelector("#submitBtn")
    }
}