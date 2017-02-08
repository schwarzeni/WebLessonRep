//Math.min.apply(), first argument ? null Math
console.log("1");
//确定图片加载位置
function imgLocation() {
    
        
   
    //获取图片容器，为确定大小
    var box = $(".box");
    //获取盒子的宽度（图片等宽）
    var boxWidth = box.eq(0).width();
    if($(window).width() > boxWidth){
    //确定一排能放多少个,使用floor函数将其转化为整数
    var num = Math.floor($(window).width() / boxWidth);
    //设立boxArr来储存一列中所有盒子的高度,用来寻找最小值
    var boxArr = [];
    var boxHeight;
    box.each(function (index, value) {
        //获取每一个盒子的高度
        boxHeight = box.eq(index).height();
        $(value).removeAttr("style");
        //储存第一排盒子高度
        if (index < num) {
            boxArr[index] = boxHeight;
        }
        else {
            //获取最小盒子高度
            //使用Math.min()方法
            var minboxHeight = Math.min.apply(Math, boxArr);
            //获取最小盒子的index
            //使用inArray()方法
            var minboxIndex = $.inArray(minboxHeight, boxArr);
            //获取jquery对象
            $(value).css({
                "position": "absolute"
                , "top": minboxHeight
                , "left": box.eq(minboxIndex).position().left
            });
            //改变当前盒子高度
            boxArr[minboxIndex] += box.eq(index).height();
        }
    });

         }
}
//滚动加载图像
function scrollside() {
    var box = $(".box");
    //获取最后一张图片顶端距离顶端的高度
    var lastboxHeight = box.last().offset().top;
    //获取鼠标滚动高度
    var scrollHeight = $(window).scrollTop();
    //当前视窗的高度
    var documentHeight = $(window).height();
    return lastboxHeight + $(box.last()).height()*(0.4)< scrollHeight + documentHeight;

}
var dataImg = {
    "data": [{
            "src": "pic/pic349155.jpg"
        }, {
            "src": "pic/pic347355.jpg"
        }, {
            "src": "pic/pic345640.jpg"
        }, {
            "src": "pic/pic343952.jpg"
        }, {
            "src": "pic/pic342284.jpg"
        }, {
            "src": "pic/pic340649.jpg"
        }, {
            "src": "pic/pic339001.jpg"
        }, {
            "src": "pic/pic337296.jpg"
        }, {
            "src": "pic/pic335594.jpg"
        }, {
            "src": "pic/pic333959.jpg"
        }, {
            "src": "pic/pic332308.jpg"
        }
        , {
            "src": "pic/pic339001.jpg"
        }, {
            "src": "pic/pic337296.jpg"
        }, {
            "src": "pic/pic335594.jpg"
        }, {
            "src": "pic/pic333959.jpg"
        }, {
            "src": "pic/pic332308.jpg"
        }, {
            "src": "pic/pic330623.jpg"
        }]
};
window.onscroll = function () {
    if (scrollside()) {
        $.each(dataImg.data, function (index, value) {
            var box = $("<div>").addClass("box").appendTo($(".picContainer"));
            var content = $("<div>").addClass("imgContent").appendTo(box);
            $("<img>").attr("src", $(value).attr("src")).appendTo(content);
        });
    }
    imgLocation();
};
$(window).resize(function(){
        imgLocation();
})