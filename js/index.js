$(document).ready(function () {

    // jS tooltips with css animation
    $('[data-toggle="tooltip"]').tooltip({ animation: true });

    // Hide About Me, Projects and Porfolio until an event triggers their reveal
    $("#aboutme").hide()
    $("#hideProjects").hide();
    $("#hidePortfolio").hide();
    $("#hideContact").hide();

    // Activates the scrollFunction when window is scrolled
    window.onscroll = function () {
        scrollFunction()
    };

    // Fades the To Top button in and out
    function scrollFunction() {
        if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
            $("#myBtn").fadeIn(750);
        }
        else if (document.documentElement.scrollTop < 75) {
            $("#myBtn").fadeOut(750);
        }
    }
});

// Toggles the Projects Section fade animation
function toggleProjectDiv() {
    $("#hideProjects").fadeToggle(500);
}

// Toggles the About Me Section slide animation
function aboutMeTransition() {
    // If Portfolio Section is visible when button is press, it will close the Portfolio Section
    if ($("#hidePortfolio").is(':visible')){
        portfolioTransition();
    }
    // If About Me Section is visible, slide up and switch button text
    if ($("#aboutme").is(":visible")) {
        $("#aboutme").slideToggle("slow", "swing", toggleProjectDiv());

        // Switches text
        $(".aboutBtn").text("Learn More About Me");
    }
    // If About Me Section is hidden, slide down and switch button text
    if ($("#aboutme").is(":hidden")) {
        $("#aboutme").slideToggle("slow", "swing", toggleProjectDiv());

        // Switches text 
        $(".aboutBtn").text("Hide");
    }
}

// Toggles the Portfolio Section slide animation
function portfolioTransition() {
    // If Portfolio Section is hidden, slide down and switch button text
    if ($("#hidePortfolio").is(':hidden')) {
        $("#hidePortfolio").slideToggle("slow", "swing", contactMeTransition());

        // Switches text
        $(".projectBtn").text("Hide Projects");
    }

    // If Portfolio Section is visible, slide up and switch button text
    else if ($("#hidePortfolio").is(':visible')) {
        $("#hidePortfolio").slideToggle("slow", "swing", contactMeTransition());

        // Switches text
        $(".projectBtn").text("Show Projects");
    }
}

// Toggles the Contact Me Section fade animation
function contactMeTransition() {
    $("#hideContact").fadeToggle(500);
}

// Animates the scroll to top to smooth scroll
function topFunction() {
    // SMOOTH SCROLL TO TOP FUNCTIONALITY
    $('html,body').animate({ scrollTop: 0 }, 500);
}

// Dynamically sets the Year in the footer
$('.copyRight').text(`Jimmy Vanetta \u00A9 ${new Date().getFullYear()}`);