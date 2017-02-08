'use strict'
//var changeBackgroundColor = document.getElementById("wrapper");
//changeBackgroundColor.addEventListener("click", function (e) {
//    console.log(document.getElementsByTagName(e.target));
////    switch (e.target.backgroundColor) {
////    case "red":
////        document.body.style.backgroundColor = "red";
////        break;
////        case "blue":
////            document.body.style.backgroundColor = "blue";
////            break;
////            case "green":
////            document.body.style.backgroundColor = "green";
////            break;
////        default:
////            document.body.style.backgroundColor = "white";
////    }
//})
function setCookie(c_name, value, expiredays) {
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : "; expires=" + exdate.toGMTString())
}

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1
            c_end = document.cookie.indexOf(";", c_start)
            if (c_end == -1) c_end = document.cookie.length
            return unescape(document.cookie.substring(c_start, c_end))
        }
    }
    return ""
}
var textColor = document.getElementsByTagName("span");

function changeColor(ID) {
    var color;
    switch (ID) {
    case "red":
        document.body.style.backgroundColor = "red";
        for (var i = 0; i < textColor.length; i++) {
            textColor[i].style.color = "red";
        }
        break;
    case "blue":
        document.body.style.backgroundColor = "blue";
        for (var i = 0; i < textColor.length; i++) {
            textColor[i].style.color = "blue";
        }
        break;
    case "green":
        document.body.style.backgroundColor = "green";
        for (var i = 0; i < textColor.length; i++) {
            textColor[i].style.color = "green";
        }
        break;
    default:
        document.body.style.backgroundColor = "black";
    }
    setCookie("Color", ID,365);
}

function checkCookie() {
    var nowColor = getCookie("Color");
    if(nowColor != "")
        document.body.style.backgroundColor = nowColor;
}