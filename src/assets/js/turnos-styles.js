$( document ).ready(function() {

    // $( ".content-box__logo" ).css( "display", "none !important" );
    // $( ".main-container" ).css( "background", "white !important" );

    // document.getElementById('iframe1').onload = function() {

    //     $( ".content-box__logo" ).css( "display", "none !important" );
    //     $( ".main-container" ).css( "background", "white !important" );

    //     setTimeout(function() { 
    //         $( ".content-box__logo" ).css( "display", "none !important" );
    //         $( ".main-container" ).css( "background", "white !important" );
    //     }, 2000);
    // };

    $('iframe').on('load', function() {
        console.log('entro!!');

        var iframe = document.getElementById("iframe1");
        var elmnt = iframe.contentWindow.document.getElementsByTagName("IMG")[0];
        elmnt.style.display = "none";
    });
});