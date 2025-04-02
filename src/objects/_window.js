// Windows Helper Functions
export function getAllPathNames(inProd){
    return {
        auth: `/${inProd ? "" : "build/"}auth${inProd ? "" : ".html"}`,
        profile: `/${inProd ? "" : "build/"}profile${inProd ? "" : ".html"}`,
        explore: `/${inProd ? "" : "build/"}explore${inProd ? "" : ".html"}`,
        activity: `/${inProd ? "" : "build/"}activity${inProd ? "" : ".html"}`,
        chat: `/${inProd ? "" : "build/"}chat${inProd ? "" : ".html"}`,
        journal: `/${inProd ? "" : "build/"}journal${inProd ? "" : ".html"}`
    }
}

export function isPathName(pathName){
    return (getPathName() == pathName);
}

export function isHashName(hashName) {
    return (getHashName() == hashName);
}

export function getPathName(){
    return window.location.pathname.toLowerCase().split('/').pop().replace(".html","");
}

export function getHashName(){
    return window.location.hash.toLowerCase().slice(1);
}

export function replaceWindow(pathName, withHash = true, addToHistory = false){
    const winLocation = window.location;
    const winHash = winLocation.hash.toLowerCase().slice(1);

    if (addToHistory) {
        winLocation.pathname = pathName;
    } else {
        if (withHash) {
        winLocation.replace(`${winLocation.origin}${pathName}#${winHash}`);
        } else {
        winLocation.replace(`${winLocation.origin}${pathName}`);
        }
    }
}

export function onDocReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}
