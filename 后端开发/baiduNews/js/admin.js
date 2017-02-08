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
                newstitle: $newstitle.val(),
                newstype: $newstype.val(),
                newsimg: $newsimg.val(),
                newstime: $newstime.val(),
                newssrc: $newssrc.val()
            };
            $.ajax({
                url: 'server/insert.php',
                type: 'post',
                data: jsonNews,
                datatype: 'json',
                success: function (data) {
                    console.log(data);
                    refreshNews();
                    $newstitle.val(" ");
                    $newstype.val(" ");
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
               url:'server/delete.php',
               type:'post',
               datatype:'json',
               data:{newsid:deleteId},
               success: function(data){
                   console.log(data);
                   refreshNews();
               }
           });

           $('#deleteMoal').modal('hide');
       }
    });
//修改新闻功能
    var updateId = null;
//事件委托
    $newsTable.on('click','.btn-primary',function(e){
        $('#updateMoal').modal('show');
        updateId = $(this).parent().prevAll().eq(3).html();
        $.ajax({
            url: 'server/curnews.php',
            type:'get',
            datatype:'json',
            data:{newsid:updateId},
            success: function(data){
                console.log('当前数据');
                console.log(data);
                $('#unewstitle').val(data[0].newstitle);
                $('#unewstype').val(data[0].newstype);
                $('#unewsimg').val(data[0].newsimg);
                $('#unewssrc').val(data[0].newssrc);
                var utime = data[0].newstime.split(' ')[0];
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
                unewstitle: $('#unewstitle').val(),
                unewstype: $('#unewstype').val(),
                unewsimg: $('#unewsimg').val(),
                unewstime: $('#unewstime').val(),
                unewssrc: $('#unewssrc').val(),
                uid:updateId
            };
            $.ajax({
                url: 'server/update.php',
                type: 'post',
                data: jsonNews,
                datatype: 'json',
                success: function (data) {
                    console.log(data);
                    refreshNews();
                }
            });


            $('#updateMoal').modal('hide');
        }

        });

    function refreshNews() {
        $newsTable.empty();
        $.ajax({
            type: 'get',
            url: 'server/getnews.php',
            datatype: 'json',
            success: function (data) {
                console.log('接受数据');
                console.log(data);
                data.forEach(function (item, index, array) {
                    var $tdid = $('<td>').html(item.id);
                    var $tdtype = $('<td>').html(item.newstype);
                    var $tdtitle = $('<td>').html(item.newstitle);
                    var $tdtime = $('<td>').html(item.newstime);
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