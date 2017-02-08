'use strict';

function assessGrade() {
    var inputScore = document.getElementById("grade").value;
    if (inputScore > 100 || inputScore < 0) {
        document.getElementById("assessOutput").innerHTML = "错误：输入数据超出范围";
    }
    else if (inputScore === "") {
        document.getElementById("assessOutput").innerHTML = "错误：请输入学成绩[0,100]";
    }
    else if (inputScore >= 90 && inputScore <= 100) {
        document.getElementById("assessOutput").innerHTML = "一等生";
    }
    else if (inputScore >= 80 && inputScore < 90) {
        document.getElementById("assessOutput").innerHTML = "二等生";
    }
    else if (inputScore >= 70 && inputScore < 80) {
        document.getElementById("assessOutput").innerHTML = "三等生";
    }
    else if (inputScore >= 60 && inputScore < 70) {
        document.getElementById("assessOutput").innerHTML = "四等生";
    }
    else if (inputScore >= 50 && inputScore < 60) {
        document.getElementById("assessOutput").innerHTML = "五等生";
    }
    else if (inputScore >= 40 && inputScore < 50) {
        document.getElementById("assessOutput").innerHTML = "六等生";
    }
    else if (inputScore >= 30 && inputScore < 40) {
        document.getElementById("assessOutput").innerHTML = "七等生";
    }
    else if (inputScore >= 20 && inputScore < 30) {
        document.getElementById("assessOutput").innerHTML = "八等生";
    }
    else if (inputScore >= 10 && inputScore < 20) {
        document.getElementById("assessOutput").innerHTML = "九等生";
    }
    else if (inputScore >= 0 && inputScore < 10) {
        document.getElementById("assessOutput").innerHTML = "十等生";
    }
    else {
        document.getElementById("assessOutput").innerHTML = "错误：输入值请为数字";
    }
}