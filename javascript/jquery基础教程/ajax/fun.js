$("#infoHeadRecommend").click(function () {
    $("#infoLeft").load("page1.html");
});
$("#infoHeadNav").click(function () {
    $("#infoLeft").load("page2.html");
})
$(window).scroll(function () {
    console.log($(this).scrollTop());
    if ($(this).scrollTop() >= 40) {
        $("#infoRight").removeClass("infoRight").addClass("infoRightTop");
    }
    else {
        $("#infoRight").removeClass("infoRightTop").addClass("infoRight");
    }
})