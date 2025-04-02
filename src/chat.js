import { isPathName, onDocReady } from "./firebase/screen_manager.js";
import { userListUI, received, sent, timestamp, SpinnerUI } from "./objects/_chat.js"


function msgUI(){
    const chatMsg = document.getElementById("chat-messages");

    const spinner = SpinnerUI();
    const loading = false;

    chatMsg.innerHTML = "";

    chatMsg.prepend(sent("Hi"));

    chatMsg.prepend(timestamp("Today"));
    
    chatMsg.prepend(received("img", "./assets/Icons/eg_img3.jpg"));
    chatMsg.prepend(received("link", "https://google.com/"));
    chatMsg.prepend(received("Received message\n\nReceived messageReceived messageReceived messageReceived messageReceived messageReceived messageReceived messageReceived messageReceived messageReceived messageReceived message"));

    chatMsg.prepend(timestamp("Mar. 15"));

    setTimeout(() => {
        chatMsg.scrollTo({ top: chatMsg.scrollHeight, behavior: "smooth" });

        chatMsg.onscroll = function() {
            const scrolledPercentage = (((chatMsg.scrollHeight - chatMsg.scrollTop) / chatMsg.scrollHeight) * 100);
            if (scrolledPercentage > 97 && !loading) {
                loading = false;
                chatMsg.prepend(spinner);
                // Recently loaded Old Messages goes here
            }
            console.log(scrolledPercentage);
        };

    }, 100);
}

// function usersUI(){
//     let lastClickedButton = null;

//     const userList = document.getElementById("userList");
//     const spinner = SpinnerUI();

//     userList.appendChild(userListUI("Mitr", "./assets/Icons/eg_img1.jpg", "Active now"));

//     document.querySelectorAll(".list-group-item").forEach(button => {
//         button.addEventListener("click", function () {
//             // Revert previous button if any
//             if (lastClickedButton) {
//                 lastClickedButton.classList.remove("bg-body-secondary");
//                 lastClickedButton.classList.add("bg-light");
//             }

//             // Change background of clicked button
//             this.classList.remove("bg-light");
//             this.classList.add("bg-body-secondary");

//             // Update last clicked button
//             lastClickedButton = this;

//             msgUI();
//         });
//     });

//     setTimeout(() => {
//         userList.onscroll = function() {
//             const scrolledPercentage = (((userList.scrollTop + userList.clientHeight) / userList.scrollHeight) * 100);
//             if (scrolledPercentage > 97) {
//                 userList.prepend(spinner);
//                 // Recently loaded Old Users goes here
//             }
//             console.log(scrolledPercentage);
//         };

//     }, 100);
// }

onDocReady(function() {
    if (isPathName("chat")) {
        // usersUI();
        msgUI();
    }
});