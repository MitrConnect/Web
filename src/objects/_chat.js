import { doc } from "firebase/firestore";

export const timestamp = function(time) {
    const div = document.createElement("div");
    div.className = "text-center my-3";

    const span = document.createElement("span");
    span.className = "text-muted px-3 py-2 cursor-default";
    span.innerText = time;

    div.appendChild(span);

    return div;
}

export const received = function(type, data) {
    const receivedDiv = document.createElement("div");
    receivedDiv.className = "d-flex align-items-start mb-3";

    const div = document.createElement("div");

    if (type == "link") {
        div.className = "p-3 bg-white shadow-sm rounded-3 cursor-pointer";
        div.style = "max-width: 80% !important;";

        const a = document.createElement("a");
        a.className = "text-primary text-decoration-none";
        a.innerText = data;

        div.appendChild(a);
    } else if (type == "img") {
        const img = document.createElement("img");
        img.className = "rounded-3 img-fluid cursor-pointer";
        img.src = data;
        img.style = "max-width: 400px; max-height: 400px; object-fit: cover;";

        div.appendChild(img);
    } else {
        div.className = "p-3 bg-white shadow-sm rounded-3 cursor-pointer";
        div.style = "max-width: 80% !important;";

        const p = document.createElement("p");
        p.className = "mb-1 text-dark";
        p.innerText = (data == undefined ? type : data);

        div.appendChild(p);
    }

    receivedDiv.appendChild(div);

    return receivedDiv;
}

export const sent = function(data) {
    const sentDiv = document.createElement("div");
    sentDiv.className = "d-flex flex-row-reverse mb-3";

    const div = document.createElement("div");
    div.className = "p-3 bg-primary shadow-sm rounded-3 cursor-pointer";


    const p = document.createElement("p");
    p.className = "mb-1 text-white";
    p.innerText = data;

    div.appendChild(p)
    sentDiv.appendChild(div);

    return sentDiv;
}

export const userListUI = function(userName, avatar, lastActive) {
    const li = document.createElement("li");
    li.className = "list-group-item bg-light border-bottom cursor-pointer";

    const outerDiv = document.createElement("div");
    outerDiv.className = "d-flex align-items-center gap-3"

    const img = document.createElement("img");
    img.className = "rounded-circle";
    img.style = "object-fit: cover";
    img.src = avatar; 

    const innerDiv = document.createElement("div");
    innerDiv.className = "d-flex flex-column mt-3";

    const span = document.createElement("span");
    span.className = "text-dark";
    span.innerText = userName;

    const p = document.createElement("p");
    p.className = "text-muted";
    p.innerText = lastActive;

    innerDiv.appendChild(span);
    innerDiv.appendChild(p);

    outerDiv.appendChild(img);
    outerDiv.appendChild(innerDiv);

    // li.onclick = function() {
    //     li.className = "list-group-item bg-body-secondary border-bottom cursor-pointer";
    // }

    li.appendChild(outerDiv);

    return li;
}

export const SpinnerUI = function(){
    const outerDiv = document.createElement("div");
    outerDiv.className = "d-flex justify-content-center";

    const innerDiv = document.createElement("div");
    innerDiv.className = "spinner-border text-muted"
    innerDiv.role = "status"

    outerDiv.prepend(innerDiv);

    return outerDiv;
}