$(function () {
    $('.select > p').on('click', function (e) {
        $('.select').toggleClass('open');
        e.stopPropagation();
    });
    $('.select > ul li').on('click', function (e) {
        var _this = $(this);
        $('.select > p').text(_this.attr('data-value'));
        _this.addClass('selected').siblings().removeClass('selected');
        $('.select').removeClass('open');
        e.stopPropagation();
    });
    $(document).on('click', function () {
        $('.select').removeClass('open');
    });
});