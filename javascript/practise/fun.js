'use strict';
var input = document.getElementById("infor");
var div = document.getElementById("myDiv");
div.onclick = function (e) {
    console.log(input.value);
}
input.onchange = function (e) {
    console.log(this.value);
}
div.onmouseover = function (e) {
    console.log("Mousein");
}