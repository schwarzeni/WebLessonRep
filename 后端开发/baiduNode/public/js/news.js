$(document).ready(function () {
    refreshNews('精选');

    $('nav a').click(function(e){
        e.preventDefault();
        var type = $(this).text();
        refreshNews(type);
    })
});

function refreshNews(type) {
    var $lists = $('article ul');
    //刷新时清除列表（ul）中原有的新闻
    $lists.empty();
    //获取后台数据
    $.ajax({
        url: "/news"
        , type: 'get'
        , datatype: 'json',
        data:{newstype:type}
        , success: function (data) {

            data.forEach(function(item,index,array){
                var $list = $('<li></li>').addClass("news-list").prependTo($lists);
                var $newsImg = $('<div></div>').addClass('newsimg').appendTo($list);
                var $img = $('<img>').attr('src', item.newsimg).appendTo($newsImg);
                var $newsContent = $('<div></div>').addClass('newscontent').appendTo($list);
                var $h1 = $('<h1></h1>').html(item.newstitle).appendTo($newsContent);
                var $p = $('<p></p>').appendTo($newsContent);
                var $newsTime = $('<span></span>').addClass('newstime').html(item.newstime.split('T')[0]
                ).appendTo($p);
                var $newsSrc = $('<span></span>').addClass('newssrc').html(item.newssrc).appendTo($p)
            });


            console.log(data);
        }


    })

}
