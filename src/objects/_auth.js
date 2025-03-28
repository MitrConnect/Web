export const LoginUser = function() {
    const loginView = document.getElementById("loginView");

    return {
        email: loginView.querySelector("#email").value,
        password: loginView.querySelector("#password").value,
        presistent: loginView.querySelector("#rememberMe").value,
        submit: loginView.querySelector("#submitBtn"),
    }
}

export const CreateUser = function() {
    const signupView = document.getElementById("signupView");

    return {
        email: signupView.querySelector("#email").value,
        password: signupView.querySelector("#password").value,
        confirmPwd:  signupView.querySelector("#confirmPwd").value,
        submit: signupView.querySelector("#submitBtn")
    }
}

export const ForgotPassword = function() {
    const forgotPwdView = document.getElementById("forgotPwdView");

    return {
        email: forgotPwdView.querySelector("#email").value,
        submit: forgotPwdView.querySelector("#submitBtn")
    }
}

export const SignOut = function() {
    const view = document.getElementById("signOutConfirmView");

    return {
        showConfirmation : document.getElementById("signOutBtn"),
        view: view,
        submit: view.getElementsByClassName("btn-danger")[0],
        cancel: view.getElementsByClassName("btn-secondary")[0],
        text: view.getElementsByTagName("a")[0]
    }
}