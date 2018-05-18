$(document).ready(function() {

    function heightDetect() {
        $(".main_head").css("height", $(window).height());
    };

    heightDetect();
    $(window).resize(function() {
        heightDetect();
    });

    $(".toggle_mnu, .menu_item").click(function() {
        $(".sandwich").toggleClass("active");
    });
	
});

$(window).load(function() {

    $(".loader_inner").delay(600).fadeOut();
    $(".loader").delay(600).fadeOut("slow");

});