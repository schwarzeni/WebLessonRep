window.onload = function () {
    $($('.sideNavBar').find('li').get(0)).css({
        'background-color': '#f5f4ed'
    });
};


$('.sideNavBar').delegate('li', 'click', function () {
    let navBaroption = $('.sideNavBar').find('li');
    let index = $(navBaroption).index($(this));
    let content = $('.mainContent').children();
    let i = content.length;
    if (index < i) {
        $(this).css({
            'background-color': '#f5f4ed'
        });
        while (i--) {
            if ($(content[i]).css('display') === 'block')break;
        }
        if (i != index) {
            $(navBaroption[i]).removeAttr('style');
        }
        $(content[i]).hide();
        $(content[index]).show();
    }

    $('body, html').animate({
        scrollTop: 50
    }, 500);
});

$('.question').on("mouseover",function(e){
    let $answer = $(this).next();
    $($answer).slideDown();


    e.stopPropagation();
}).on('mouseleave',function(){
    $(this).next().slideUp();
});

