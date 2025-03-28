$(document).ready(function() {
    $.when(
        $.get(`Views/Home/HomeView.html`, function(data) { $("#homeContainer").append(data); })
    )
});


$(document).ready(function() {
    // Init Views
    $.when(
        $.get(`Views/Home/HomeView.html`, function(data) { $("#homeContainer").append(data); }),
        $.get(`Views/Home/ExploreView.html`, function(data) { $("#homeContainer").append(data); }),
        $.get(`Views/Home/ChatView.html`, function(data) { $("#homeContainer").append(data); }),
        $.get(`Views/Home/ActivityView.html`, function(data) { $("#homeContainer").append(data); })
    ).then(function() {
        var navBar = document.getElementById('navigationBar');

        navBar.querySelector("#logo").onclick = function(){
            console.log("homeView");
            showView("homeView");
        }
        navBar.querySelector("#home").onclick = function(){
            console.log("homeView");
            showView("homeView");
        }
        navBar.querySelector("#activity").onclick = function(){
            console.log("activityView");
            showView("activityView");
        }
        navBar.querySelector("#chat").onclick = function(){
            console.log("chatView");
            showView("chatView");
        }
        navBar.querySelector("#explore").onclick = function(){
            console.log("exploreView");
            showView("exploreView");
        }

        hashHandler();
    });

    function showView(className){
        $(".view").addClass("d-none"); // Hide all views
        $("#" + className).removeClass("d-none"); // Show the selected view
    }

    function hashHandler() {
        const hash = window.location.hash.slice(1).toLowerCase();

        if (hash == "explore") {
            showView("exploreView");
        } else if (hash == "activity") {
            showView("activityView");
        } else if (hash == "chat") {
            showView("chatView");
        } else {
            showView("homeView");
        }
    }
});