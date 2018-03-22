
$(document).ready(function () {

    $('[data-toggle="tooltip"]').tooltip({ animation: true });

    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
            $("#myBtn").fadeIn(750);
        }
        else if (document.documentElement.scrollTop < 75) {
            $("#myBtn").fadeOut(750);
        }
    }

});

function topFunction() {

    // SMOOTH SCROLL TO TOP FUNCTIONALITY
    $('html,body').animate({ scrollTop: 0 }, 500);

    // INSTANT SCROLL FUNCTIONALITY
    // document.body.scrollTop = 0; // For Safari
    // document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};


// CAROUSEL SLIDE ANIMATION

// $(function () {
//     $('.carousel').carousel({
//         interval: 3000,
//     });
// });




