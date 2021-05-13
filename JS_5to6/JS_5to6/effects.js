$(document).ready(function() {
    $("#hide").click(function() {
        $("img").hide(1000);
    });
    $("#show").click(function() {
        $("img").show(1000);
    });

    $("#toggle").click(function() {
        $("img").toggle(1000);
    });


    $("#fadeIn").click(function() {
        $("img").fadeIn(1000);
    });


    $("#fadeOut").click(function() {
        $("img").fadeOut(1000);
    });


    $("#fadeToggle").click(function() {
        $("img").fadeToggle(1000);
    });



    $("#slideUp").click(function() {
        $("img").slideUp(1000);
    });

    $("#slideDown").click(function() {
        $("img").slideDown(1000);
    });

    $("#slideToggle").click(function() {
        $("img").slideToggle(1000);
    });
})