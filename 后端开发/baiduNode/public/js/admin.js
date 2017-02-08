//打开后台页面的时候发送请求，刷新新闻列表
$(document).ready(function () {
    var $newsTable = $('#newstable').children('tbody');

    refreshNews();

    //添加新闻
    $("#btnsubmit").click(function(e){
        var $newstitle = $("#newstitle");
        var $newstype = $("#newstype");
        var $newsimg = $("#newsimg");
        var $newstime = $("#newstime");
        var $newssrc = $("#newssrc");
        e.preventDefault();

        //输入判断
        if($newstitle.val() === '' || $newsimg.val() === '' || $newstime.val() === '' || $newssrc.val() === ''){
            if($newstitle.val() === ''){
                $newstitle.parent().addClass('has-error');
            }else{
                $newstitle.parent().removeClass('has-error');
            }
            if($newsimg.val() === ''){
                $newsimg.parent().addClass('has-error');
            }else{
                $newsimg.parent().removeClass('has-error');
            }
            if($newstime.val() === ''){
                $newstime.parent().addClass('has-error');
            }else{
                $newstime.parent().removeClass('has-error');
            }
            if($newssrc.val() === ''){
                $newssrc.parent().addClass('has-error');
            }else{
                $newssrc.parent().removeClass('has-error');
            }
        }else {
            var jsonNews = {
                newstitle: html_encode($newstitle.val()),
                newstype: $newstype.val(),
                newsimg: $newsimg.val(),
                newstime: $newstime.val(),
                newssrc: html_encode($newssrc.val())
            };
            $.ajax({
                url: '/admin/insert',
                type: 'post',
                data: jsonNews,
                datatype: 'json',
                success: function (data) {
                    refreshNews();
                    $newstitle.val(" ");
                    $newstype.val("精选");
                    $newsimg.val(" ") ;
                    $newstime.val(" ");
                    $newssrc.val(" ") ;
                }
            });
        }
    });


//删除新闻功能
    var deleteId = null;
//事件委托
    $newsTable.on('click','.btn-danger',function(e){
        $('#deleteMoal').modal('show');
        deleteId = $(this).parent().prevAll().eq(3).html();
    });
    $('#deleteMoal #confirmDelete').click(function(e){
       if(deleteId){
           $.ajax({
               url:'/admin/delete',
               type:'post',
               datatype:'json',
               data:{newsid:deleteId},
               success: function(data){
                   refreshNews();
                   $('#deleteMoal').modal('hide');
               }
           });

       }
    });
//修改新闻功能
    var updateId = null;
//事件委托
    $newsTable.on('click','.btn-primary',function(e){
        $('#updateMoal').modal('show');
        updateId = $(this).parent().prevAll().eq(3).html();
        $.ajax({
            url: 'admin/curnews',
            type:'get',
            datatype:'json',
            data:{newsid:updateId},
            success: function(data){
                $('#unewstitle').val(html_decode(data[0].newstitle));
                $('#unewstype').val(data[0].newstype);
                $('#unewsimg').val(data[0].newsimg);
                $('#unewssrc').val(html_decode(data[0].newssrc));
                var utime = data[0].newstime.split('T')[0];
                $('#unewstime').val(utime);
            }
        })
    });
    $('#updateMoal #confirmUpdate').click(function(e){
        if($('#unewstitle').val() === '' || $('#unewsimg') === '' || $('#unewstime') === '' || $('#unewssrc') === ''){
            if($('#unewstitle').val() === ''){
                $('#unewstitle').parent().addClass('has-error');
            }else{
                $('#unewstitle').parent().removeClass('has-error');
            }
            if($('#unewsimg').val() === ''){
                $('#unewsimg').parent().addClass('has-error');
            }else{
                $('#unewsimg').parent().removeClass('has-error');
            }
            if($('#unewstime').val() === ''){
                $('#unewstime').parent().addClass('has-error');
            }else{
                $('#unewstime').parent().removeClass('has-error');
            }
            if($('#unewssrc').val() === ''){
                $('#unewssrc').parent().addClass('has-error');
            }else{
                $('#unewssrc').parent().removeClass('has-error');
            }
        }else {
            var jsonNews = {
                unewstitle: html_encode($('#unewstitle').val()),
                unewstype: $('#unewstype').val(),
                unewsimg: html_encode($('#unewsimg').val()),
                unewstime: $('#unewstime').val(),
                unewssrc: html_encode($('#unewssrc').val()),
                uid:updateId
            };
            $.ajax({
                url: '/admin/update',
                type: 'post',
                data: jsonNews,
                datatype: 'json',
                success: function (data) {
                    refreshNews();
                    $('#updateMoal').modal('hide')
                }

            });

        }

        });

    function refreshNews() {
        $newsTable.empty();
        $.ajax({
            type: 'get',
            url: '/admin/getnews',
            datatype: 'json',
            success: function (data) {
                console.log('接受数据');
                console.log(data);
                data.forEach(function (item, index, array) {
                    var $tdid = $('<td>').html(item.id);
                    var $tdtype = $('<td>').html(item.newstype);
                    var $tdtitle = $('<td>').html(item.newstitle);
                    var newstime = item.newstime.split('T')[0];
                    var $tdtime = $('<td>').html(newstime);
                    var $tdctrl = $('<td>');
                    var $btnupdate = $('<button>').addClass('btn btn-primary btn-xs').html('修改');
                    var $btndelete = $('<button>').addClass('btn btn-danger btn-xs').html("删除");
                    $tdctrl.append($btndelete, $btnupdate);
                    var $tRow = $('<tr>');
                    $tRow.append($tdid, $tdtype, $tdtitle, $tdtime, $tdctrl);
                    $newsTable.append($tRow);
                })
            }
        })
    }
});
//转码
function html_encode(str)
{
    var s = "";
    if (str.length == 0) return "";
    s = str.replace(/&/g, "&amp;");
    s = s.replace(/</g, "&lt;");
    s = s.replace(/>/g, "&gt;");
    s = s.replace(/ /g, "&nbsp;");
    s = s.replace(/\'/g, "&#39;");
    s = s.replace(/\"/g, "&quot;");
    s = s.replace(/\n/g, "<br/>");
    return s;
}

//反转码
function html_decode(str)
{
    var s = "";
    if (str.length == 0) return "";
    s = str.replace(/&amp;/g, "&");
    s = s.replace(/&lt;/g, "<");
    s = s.replace(/&gt;/g, ">");
    s = s.replace(/&nbsp;/g, " ");
    s = s.replace(/&#39;/g, "\'");
    s = s.replace(/&quot;/g, "\"");
    s = s.replace(/<br\/>/g, "\n");
    return s;
}

