export const LoginUser = function() {
    loginView = document.getElementById("loginView");

    return {
        email: loginView.querySelector("#email").value,
        password: loginView.querySelector("#password").value,
        presistent: loginView.querySelector("#rememberMe").value,
        submit: loginView.querySelector("#submitBtn"),
    }
}

export const CreateUser = function() {
    signupView = document.getElementById("signupView");

    return {
        email: signupView.querySelector("#email").value,
        password: signupView.querySelector("#password").value,
        confirmPwd:  signupView.querySelector("#confirmPwd").value,
        submit: signupView.querySelector("#submitBtn")
    }
}

export const ForgotPassword = function() {
    forgotPwdView = document.getElementById("forgotPwdView");

    return {
        email: forgotPwdView.querySelector("#email").value,
        submit: forgotPwdView.querySelector("#submitBtn")
    }
}

export const SignOut = function() {
    return {
        submit: document.getElementById("signOutBtn")
    }
}