'use strict';
//储存输入值
var Cal = [];
//统计输入个数
var IndexOfCal = 0;
//精确加减法运算
function accAdd(arg1, arg2) {
    var r1, r2, m;
    try {
        r1 = arg1.toString().split(".")[1].length;
    }
    catch (e) {
        r1 = 0;
    }
    try {
        r2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
        r2 = 0;
    }
    m = Math.pow(10, Math.max(r1, r2));
    return (arg1 * m + arg2 * m) / m;
}
//精确乘法
function accMul(arg1, arg2) {
    var m = 0
        , s1 = arg1.toString()
        , s2 = arg2.toString();
    try {
        m += s1.split(".")[1].length;
    }
    catch (e) {}
    try {
        m += s2.split(".")[1].length;
    }
    catch (e) {}
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
}
//精确除法
//function accDiv(arg1,arg2){
//    var t1=0,t2=0,r1,r2;
//    try{t1=arg1.toString().split(".")[1].length}catch(e){}
//    try{t2=arg2.toString().split(".")[1].length}catch(e){}
//    with(Math){
//        r1=Number(arg1.toString().replace(".",""))
//        r2=Number(arg2.toString().replace(".",""))
//        return (r1/r2)*pow(10,t2-t1);
//    }
//}
//计算并输出计算结果
function outputResult() {
    var i = IndexOfCal;
    while (IndexOfCal != 0) {
        while (Cal[IndexOfCal] != '+' && Cal[IndexOfCal] != '-' && Cal[IndexOfCal] != '*' && Cal[IndexOfCal] != '/' && Cal[IndexOfCal] != "√" && Cal[IndexOfCal] != 'sin' && Cal[IndexOfCal] != 'cos' && Cal[IndexOfCal] != 'tan') {
            IndexOfCal--;
        }
        var result = 0;
        switch (Cal[IndexOfCal]) {
        case "√":
            result = Math.sqrt(parseFloat(Cal[IndexOfCal - 1]));
            break;
        case "sin":
            result = Math.sin(parseFloat(Cal[IndexOfCal - 1]));
            break;
        case "cos":
            result = Math.cos(parseFloat(Cal[IndexOfCal - 1]));
            break;
        case "tan":
            result = Math.tan(parseFloat(Cal[IndexOfCal - 1]));
            break;
        case "+":
            //            result = parseFloat(Cal[IndexOfCal - 1]) + parseFloat(Cal[IndexOfCal + 1]);
            result = accAdd(parseFloat(Cal[IndexOfCal - 1]), parseFloat(Cal[IndexOfCal + 1]));
            break;
        case "-":
            //            result = parseFloat(Cal[IndexOfCal - 1]) - parseFloat(Cal[IndexOfCal + 1]);
            result = accAdd(parseFloat(Cal[IndexOfCal - 1]), -parseFloat(Cal[IndexOfCal + 1]));
            break;
        case "*":
            //            result = parseFloat(Cal[IndexOfCal - 1]) * parseFloat(Cal[IndexOfCal + 1]);
            result = accMul(parseFloat(Cal[IndexOfCal - 1]), parseFloat(Cal[IndexOfCal + 1]));
            break;
        case "/":
            if (parseFloat(Cal[IndexOfCal + 1]) === 0) {
                document.getElementById("outputResult").innerHTML = "除法时除数不能为0！";
                return;
            }
            result = (parseFloat(Cal[IndexOfCal - 1]) / parseFloat(Cal[IndexOfCal + 1])).toFixed(5);
            break;
        default:
            document.getElementById("outputResult").innerHTML = "错误！";
        }
        result = parseFloat(result);
        document.getElementById("outputResult").innerHTML = result;
        IndexOfCal--;
        Cal[IndexOfCal] = result;
    }
}
//处理输入数据
function getInput(ID) {
    if (ID === "clear") document.getElementById("outputResult").innerHTML = " ";
    else {
        Cal[IndexOfCal] = document.getElementById(ID).innerHTML;
        if (IndexOfCal === 0 && (Cal[IndexOfCal] === "+" || Cal[IndexOfCal] === "-" || Cal[IndexOfCal] === "/" || Cal[IndexOfCal] === "*" || Cal[IndexOfCal] === "." || Cal[IndexOfCal] === "√" || Cal[IndexOfCal] === "sin" || Cal[IndexOfCal] === "cos" || Cal[IndexOfCal] === "tan")) {
            document.getElementById("outputResult").innerHTML = "输入错误";
        }
        else if (IndexOfCal != 0 && Cal[IndexOfCal] === "=") {
            outputResult();
        }
        else if (IndexOfCal != 0 && (Cal[IndexOfCal - 1] != "+" && Cal[IndexOfCal - 1] != "-" && Cal[IndexOfCal - 1] != "/" && Cal[IndexOfCal - 1] != "*" && Cal[IndexOfCal - 1] != "√" && Cal[IndexOfCal - 1] != "sin" && Cal[IndexOfCal - 1] != "cos" && Cal[IndexOfCal - 1] != "tan") && (Cal[IndexOfCal] != "+" && Cal[IndexOfCal] != "-" && Cal[IndexOfCal] != "/" && Cal[IndexOfCal] != "*" && Cal[IndexOfCal] != "√" && Cal[IndexOfCal] != "sin" && Cal[IndexOfCal] != "cos" && Cal[IndexOfCal] != "tan")) {
            Cal[IndexOfCal - 1] = Cal[IndexOfCal - 1] + Cal[IndexOfCal];
            IndexOfCal--;
            document.getElementById("outputResult").innerHTML = Cal[IndexOfCal];
        }
        else {
            document.getElementById("outputResult").innerHTML = Cal[IndexOfCal];
            if (Cal[IndexOfCal] === "π") Cal[IndexOfCal] = 3.141592657;
        }
        IndexOfCal++;
    }
}
//初始化数组
function reset() {
    Cal = [];
    IndexOfCal = 0;
    document.getElementById("outputResult").innerHTML = "已初始化";
}