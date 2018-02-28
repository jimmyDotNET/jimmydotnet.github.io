
$(document).ready(function() 
{
   
$('[data-toggle="tooltip"]').tooltip({animation: true});

 window.onscroll = function() {scrollFunction()
};

function scrollFunction() 
{
    if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) 
    {
         $("#myBtn").fadeIn(850);
    } 
    else if(document.documentElement.scrollTop < 75)
    {
        $("#myBtn").fadeOut(850);
    }
} 

});

function topFunction() 
{
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};






