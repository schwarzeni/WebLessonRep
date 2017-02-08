//用于存储颜色
var color = "";

//用于设置页面特定部分颜色
function setCss(Color) {
    //导航栏"首页"背景颜色
    document.getElementById("ulHead").style.backgroundColor = Color;
    //导航栏外边框顶部
    document.getElementById("wrapper").style.borderTopColor = Color;
    //导航栏"权威推荐"
    document.getElementById("QuanWeiTuiJian").style.color = Color;
    //导航栏底部边框
    document.getElementById("ul2").style.borderColor = Color;
    //导航栏第一行内容悬浮变色
    for (var i = 1; i < document.getElementById("UL2").childNodes.length; i = i + 2) {
        document.getElementById("UL2").childNodes[i].onmouseover = function () {
            this.childNodes[0].style.color = Color;
        }
    }
    for (var i = 1; i < document.getElementById("UL2").childNodes.length; i = i + 2) {
        document.getElementById("UL2").childNodes[i].onmouseout = function () {
            this.childNodes[0].style.color = "black";
        }
    }
    //导航栏第二行内容悬浮变色
    for (var i = 1; i < document.getElementById("UL1").childNodes.length; i = i + 2) {
        document.getElementById("UL1").childNodes[i].onmouseover = function () {
            this.childNodes[0].style.color = Color;
        }
    }
    for (var i = 1; i < document.getElementById("UL1").childNodes.length; i = i + 2) {
        document.getElementById("UL1").childNodes[i].onmouseout = function () {
            this.childNodes[0].style.color = "black";
        }
    }
    //目录栏右侧文字的颜色
    document.getElementById("RightMenu1").style.color = Color;
    document.getElementById("RightMenu2").style.color = Color;
    document.getElementById("RightMenu3").style.color = Color;
    document.getElementById("RightMenu4").style.color = Color;
    document.getElementById("RightMenu5").style.color = Color;
    document.getElementById("RightMenu6").style.color = Color;
    document.getElementById("RightMenu7").style.color = Color;
}
//根据用户选项判断应该改为何种颜色    
function ChangeColor(ID) {
    switch (ID) {
    case "color1":
        color = "#07ac72";
        //        setCss("#07ac72");
        break;
    case "color2":
        color = "#b09880";
        //        setCss("#b09880");
        break;
    case "color3":
        color = "#281383";
        //        setCss("#281383");
        break;
    case "color4":
        color = "#de1c1c";
        //        setCss("#de1c1c");
        break;
    case "color5":
        color = "#999";
        //        setCss("#999");
        break;
    default:
        break;
    }
    setCss(color);
    setCookie("username", color, 365);
}
//cookie操作
//设置cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
//获取cookie
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}
//验证cookie
function checkCookie() {
    var user = getCookie("username");
    if (user != "") setCss(user);
    else {
        setCookie("username", color, 365);
    }
}