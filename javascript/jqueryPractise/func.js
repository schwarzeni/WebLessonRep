//$(document).ready(function () {
//    alert("ready!");
//});
//******选择器*********
$('button').click(function () {
    $('p').each(function (index, value) {
        $(value).text("p" + index);
    })
});
//*********事件**********
$('p').dblclick(function(){
    $(this).hide();
})

//*****绑定/解除事件来监听事件 bind(on,推荐) unbind(off)*******

$('button').on("click",showSomething);
function showSomething(){
    console.log("lalala");
}

//****事件的目标和事件的冒泡******
//currenttarget target
//stoplmmediatePropagation()阻止所有的冒泡事件
//stopPropagation() 阻止父级冒泡事件

//*****××**自定义事件*×××*******
var ClickMeBtn = $("button");
ClickMeBtn.on("click",function(){
    var e = jQuery.Event("MyEvent");
    ClickMeBtn.trigger(e);
});

ClickMeBtn.bind("MyEvent",function(event){
    console.log(event);
})