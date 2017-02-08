//*******************************************************
//对顶部导航栏操作开始
//对"职业学院"下拉菜单进行操作开始
$("#headNavDownMenu_zhiyexueyua").mouseenter(function (e) {
    $("#headNavDownMenu_zhiyexueyuan_list").slideDown();
    e.stopPropagation();
});
$("#headNavDownMenu_zhiyexueyua").mouseleave(function () {
    $("#headNavDownMenu_zhiyexueyuan_list").hide();
});
//对"职业学院"下拉菜单进行操作结束
//对"会员课程"下拉菜单进行操作开始
$("#headNavDownMenu_VIPLesson").mouseenter(function (e) {
    $("#headNavDownMenu_huiyuankecheng").slideDown();
    e.stopPropagation();
});
$("#headNavDownMenu_VIPLesson").mouseleave(function () {
    $("#headNavDownMenu_huiyuankecheng").hide();
});
//对"会员课程"下拉菜单进行操作结束
//对"极客社区"下拉菜单进行操作开始
$("#headNavDownMenu_JikeCommunity").mouseenter(function (e) {
    $("#headNavDownMenu_jikeshequ").slideDown();
    e.stopPropagation();
});
$("#headNavDownMenu_JikeCommunity").mouseleave(function () {
    $("#headNavDownMenu_jikeshequ").hide();
});
//对"极客社区"下拉菜单进行操作结束
//导航栏顶部搜索框的显示与隐藏开始
$(".navRightRearch").click(function () {
    $("#navRearchBarWrapper").animate({
        width: '+850px'
    }, "slow");
    $("#headNavDownMenu_zhiyexueyua").fadeOut();
    $("#headNavDownMenu_VIPLesson").fadeOut();
    $("#headNavDownMenu_JikeCommunity").fadeOut();
});
$(".navRearchBarWrapperRightIcon").click(function (e) {
        e.stopPropagation();
        $("#navRearchBarWrapper").removeAttr("style");
        $("#headNavDownMenu_zhiyexueyua").fadeIn();
        $("#headNavDownMenu_VIPLesson").fadeIn();
        $("#headNavDownMenu_JikeCommunity").fadeIn();
    })
    //导航栏顶部搜索框的显示与隐藏结束
    //顶部导航栏二维码显示与隐藏操作开始
$(".navRightAppDownload").mouseenter(function (e) {
    $("#headNavDownMenu_appDownload").fadeIn();
    e.stopPropagation();
});
$(".navRightAppDownload").mouseleave(function () {
    $("#headNavDownMenu_appDownload").hide();
});
//顶部导航栏二维码显示与隐藏操作结束
//个人信息&&登录注册下拉框操作开始
$(".navRightLoge").mouseenter(function (e) {
    $("#headNavDownMenu_usrInfo").fadeIn();
    e.stopPropagation();
});
$(".navRightLoge").mouseleave(function (e) {
    $("#headNavDownMenu_usrInfo").hide();
});
//个人信息&&登录注册下拉框操作结束
//对顶部导航栏操作结束
//*********************************************************
//*********************************************************
//对主体目录部分操作开始
$("#rightMenuChange1").click(function () {
    $(".rightMenuListStyleWrapper").hide();
    $(".righMenuBlockStyleWrapper").show();
    $(".mainBodyWrapper").css("height", "1500px");
});
$("#rightMenuChange2").click(function () {
        $(".rightMenuListStyleWrapper").show();
        $(".righMenuBlockStyleWrapper").hide();
        $(".mainBodyWrapper").css("height", "2200px");
    })
    //对主体目录部分操作结束
    //*********************************************************