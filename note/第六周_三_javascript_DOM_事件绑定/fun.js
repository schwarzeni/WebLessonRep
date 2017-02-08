//var element = document.getElementById("myFirstDiv");
//console.log(element);
//
//var input = document.getElementById("username");
//element.onclick = function(e){
////    输出html内文件
////    console.log(e.target.innerHTML);
//
////    和上相同功能
////      console.log(this.innerHTML);
//    
////使字体变色
////    this.style.color = "red";
////    e.target.style.color = "red";
//    
//    console.log(input.value);
//    
//}
//
//input.onchange = function(e){
//    console.log(this.value);
//    
//}

//console.log(input[0]);



//var element = document.getElementById("outterDiv");
////鼠标移动到div内以及内部所有元素时出发
////element.onmousemove = function(){
////    console.log("onmousemove");
////}
//
////element.onmouseenter= function(){
////    console.log("mouseender");
////}
//
//element.onmouseover = function(){
//    console.log("mouseover");
//}
////显示窗口视窗大小
//window.onresize = function(){
//    console.log(window.screen.width);
//    console.log(window.screen.height);
//}


//*******javascript 事件绑定**********

var element = document.getElementById("outterDiv");
element.onclick = function(){
    alert("外部div");
}
var innerp = document.getElementById("innerp");
innerp.onclick = function(){
    alert("内部的p");
}

//*******W3C 方式**********
element.addEventListener("click",function(e){
    alert(1);
},false);

element.addEventListener("click",function(e){
    alert(2);
},false);

//************************
//阻止跳转-->alert()-->跳转

var _mya=document.getElementById("_mya");
_mya.addEventListener("click",function(e){
    e.preventDefault();
    alert("百度一下");
    location.href = "http://www.baidu.com/";
})

//***********************
//代理

//var _myul = document.getElementById("myul");
//_myul.addEventListener("click",function(e){
//    console.log(e.target);
//})

//对比

var _LI = document.getElementsByTagName("li");
for(var i=0; i<_LI.length; i++){
    _LI[i].addEventListener("click",function(){
        console.log(_LI[i].innerHTML);
    });
}
                   
                   