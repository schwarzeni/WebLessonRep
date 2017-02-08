'use strict';
//用于词典排序
//var str = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"];
var str = ["a", "b", "b", "d", "m", "b", "b", "m", "p", "j", "a"];
//用于保存原来的顺序
//var strBefore = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"];
var strBefore = ["a", "b", "b", "d", "m", "b", "b", "m", "p", "j", "a"];
//进行词典排序
var strSort = str.sort();
var i = 0;
//记录当前字符个数
var temp = 1;
//记录最多单词个数
var maxNum = 1;
//记录最多的单词
var maxCharacter = undefined;
//进行比较
for (i = 1; i < strSort.length; i++) {
    //如果和前一个字符相等，则当前字符个数加一
    if (strSort[i] == strSort[i - 1]) {
        temp++;
    }
    //如果和前一个字符不等，则结束当前字符字数统计，判断其个数是否大于最多字符个数
    else {
        if (temp >= maxNum) {
            //如果是，则更新最多字符以及其个数的数据
            maxNum = temp;
            maxCharacter = strSort[i - 1];
        }
        //进入下一个字符个数的统计
        temp = 1;
    }
}
//输出最多的字符
console.log("最多字符 ：" + maxCharacter);
//在原数组中找出最多字符的位置并输出
console.log("最多字符位置：");
for (i = 0; i < strBefore.length; i++) {
    if (maxCharacter == strBefore[i]) {
        console.log(i);
    }
}