'use strict';
$(document).ready(function () {
    $(".ShowMenu").mouseover(function () {
        $(".wrapper").show();
    });
    $(".wrapper").mouseleave(function () {
        $(".wrapper").hide();
    });
    $("#ChangePage1").click(function () {
        $("#Insert").load("ajax.txt");
    });
    $("#callDownPage").click(function(){
        $("#pageDown").slideDown();
    });
    $("#upPageDown").click(function(){
       $("#pageDown").slideUp(); 
    });
});





