$(document).ready(function() {
    // Init Views
    $.when(
        $.get(`Views/Home/HomeView.html`, function(data) { $("#homeContainer").append(data); }),
        $.get(`Views/Home/ExploreView.html`, function(data) { $("#homeContainer").append(data); }),
        $.get(`Views/Home/ChatView.html`, function(data) { $("#homeContainer").append(data); }),
        $.get(`Views/Home/ActivityView.html`, function(data) { $("#homeContainer").append(data); })
    ).then(function() {
        hashHandler();
    });

    function showView(className){
        $("#activityView").addClass("d-none");
        $("#chatView").addClass("d-none");
        $("#exploreView").addClass("d-none");
        $("#homeView").addClass("d-none");
        $(`#${className}`).removeClass("d-none");
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

    // Event Listerners
    window.addEventListener('hashchange', hashHandler);
});