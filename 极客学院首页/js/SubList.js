$(function () {
    //    $('.SchoolList').on('mouseover', function (e) {
    //        $('.SchoolList').toggleClass('open');
    //        e.stopPropagation();
    //    });
    $('.SchoolList').on('mouseenter', function (e) {
        $('.SchoolList').toggleClass('open');
        e.stopPropagation();
    });
    $('.SchoolList').on('mouseleave', function () {
        $('.SchoolList').removeClass('open');
    });
    $('.VipLesson').on('mouseenter', function (e) {
        $('.VipLesson').toggleClass('open');
        e.stopPropagation();
    });
    $('.VipLesson').on('mouseleave', function () {
        $('.VipLesson').removeClass('open');
    });
    $('.JiKeCommunity').on('mouseenter', function (e) {
        $('.JiKeCommunity').toggleClass('open');
        e.stopPropagation();
    });
    $('.JiKeCommunity').on('mouseleave', function () {
        $('.JiKeCommunity').removeClass('open');
    });
    $('.persionInformation').on('mouseenter', function (e) {
        $('.persionInformation').toggleClass('open');
        e.stopPropagation();
    });
    $('.persionInformation').on('mouseleave', function () {
        $('.persionInformation').removeClass('open');
    });
    $('.AppDownload').on('mouseenter', function (e) {
        $('.AppDownload').toggleClass('open');
        e.stopPropagation();
    });
    $('.AppDownload').on('mouseleave', function () {
        $('.AppDownload').removeClass('open');
    });
});