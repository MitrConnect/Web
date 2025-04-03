import { auth } from "./config.js";
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, validatePassword } from "firebase/auth";

export function signIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

export function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
}

export function Out() {
    return signOut(auth);
}

export async function isPasswordValid(password) {
    return await validatePassword(auth, password);
}

export function isEmailValid(email) {
    const emailRegex = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    return emailRegex.test(email);
}

export function getCurrentUser() {
    return auth.currentUser;
}

export function getCurrentUserID() {
    onAuthStateChanged(auth, (user) => {
        return (user.uid);
    });
}