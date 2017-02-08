'use strict';

/*
 *  就个人而言我觉得使用单例模式让不同功能代码之间不会相互干扰,还可以避免重复声明对象，节约资源
 */




//*******************
//页面滑动时对搜索框的操作开始
/*
 *  单例模式
 */
let searchBarPositionChange = (function () {
    let instance;

    function init() {
        return {
            method: function () {
                $(window).scroll(function () {
                    //记录当前位置距离页首的高度
                    const top = $(this).scrollTop();
                    //获取搜索框容器的ID
                    const flowSearch = $("#researchWrapper");
                    //获取变化后搜索框左边Logo的ID
                    const searchImg = $("#researchImg");
                    //获取变化前搜索框上部Logo的ID
                    const mainLogo = $("#headLogoImg");
                    //获取页首导航栏的ID
                    const navBar = $("NavWrapper");
                    //如果当前页面距离页首高度超过180px,则变化搜索区域
                    if (top > 180) {
                        flowSearch.removeClass("researchWrapper_NotTop").addClass("researchWrapper_AtTop");
                        searchImg.fadeIn();
                        mainLogo.hide();
                        navBar.hide();
                        $(".buttonMenuWrapper").css("padding-top", "290px");
                        //显示回到顶部选项
                        $("#BackToTheTop").show();
                    }
                    else {
                        flowSearch.removeClass("researchWrapper_AtTop").addClass("researchWrapper_NotTop");
                        searchImg.css("display", "none");
                        mainLogo.show();
                        navBar.show();
                        $(".buttonMenuWrapper").css("padding-top", "0");
                        //去除回到顶部选项
                        $("#BackToTheTop").hide();
                    }
                    $("#changeStyleWraper").css("position", "fixed");
                });
            }
        };
    }

    return {
        useMethod: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    };
})();

searchBarPositionChange.useMethod().method();
searchBarPositionChange = null;

//页面滑动时对搜索框的操作结束
//*******************
//*******************
//对换肤操作
//对导航栏换肤下拉菜单设置
/*
 *  单例模式
 */
let downMenuOfChangeStyle = (function () {
    let instance;

    function init() {
        const $changeStyleButton = $('#changeStyleButton');
        const $up = $('.up');
        const $researchWrapper = $('#researchWrapper');
        const $buttonMenuWrapper = $('.buttonMenuWrapper');
        const $changeStyleWraper = $('#changeStyleWraper');
        return {
            method: function () {
                $changeStyleButton.click(function () {
                    $changeStyleWraper.slideDown();
                });
                //点击一下三个部分,换肤菜单收起
                //菜单中收起选项
                $up.click(function () {
                    $changeStyleWraper.slideUp();
                });
                //搜索区域
                $researchWrapper.click(function () {
                    $changeStyleWraper.slideUp();
                });
                //底部菜单区域
                $buttonMenuWrapper.click(function () {
                    $changeStyleWraper.slideUp();
                });
            }
        };
    }

    return {
        useMethod: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    };

})();

downMenuOfChangeStyle.useMethod().method();
downMenuOfChangeStyle = null;
//对页面操作开始
/*
 *  单例模式
 */
let changePageStyle = (function () {
    let instance;

    function init() {
        return {
            method: function () {
                const BGmenu = document.getElementById('changeStyleMenu')
                    , BCpic = BGmenu.getElementsByTagName('img')
                    , MainPic = document.getElementById("MainLogo")
                    , MainPicName = "img/logo_white.png"
                    , NavA = document.getElementById("NavWrapper").getElementsByTagName("a");
//选择背景图片类型
                let curImgUlId = "#ImgPage1_remen";
                let changeImgUlId;
                let NumberOfImgPage = "1";
                let KindOfImgPage = {};
                $(curImgUlId).show();
                KindOfImgPage[2] = "remen";
                KindOfImgPage[0] = "1";
                $(".changeStyleNavWrapper").delegate("li", "click", function () {
                    $(curImgUlId).css("display", "none");
                    changeImgUlId = $(this).attr("id");
                    KindOfImgPage = changeImgUlId.split('_');
                    NumberOfImgPage = changeImgUlId.slice(0, 1);
                    changeImgUlId = "#ImgPage" + NumberOfImgPage + "_" + KindOfImgPage[2];
                    curImgUlId = changeImgUlId;
                    $(changeImgUlId).css("display", "block");
                });
//切换预览效果
                BGmenu.onmouseover = function (ev) {
                    var ev = ev || window.event
                        , target = ev.target || ev.srcElement;
                    for (var i = 0, l = BCpic.length; i < l; i++) {
                        if (BCpic[i] == target) {
                            console.log($(BCpic[i]).attr("src"));
                            var SRC = $(BCpic[i]).attr("src");
                            $("#Previewbackground").attr('src', SRC);
                            $("#ppp").addClass("pppHover");
                        }
                    }
                };
                BGmenu.onmouseout = function (ev) {
                    var ev = ev || window.event
                        , target = ev.target || ev.srcElement;
                    for (var i = 0, l = BCpic.length; i < l; i++) {
                        if (BCpic[i] == target) {
                            $("#Previewbackground").attr('src', "");
                            $("#ppp").removeClass("pppHover");
                        }
                    }
                };
//改变网站元素样式
                BGmenu.onclick = function (ev) {
                    var ev = ev || window.event
                        , target = ev.target || ev.srcElement;
                    for (var i = 0, l = BCpic.length; i < l; i++) {
                        if (BCpic[i] == target) {
                            var SRC = $(BCpic[i]).attr("src");
                            $('body').css("background-image", 'url(' + SRC + ')');
                            $("#MainLogo").attr("src", MainPicName);
                            $("#researchButton").addClass("researchButton_ChangeBackground");
                            $("#NavWrapper").addClass("NavWrapper_ChangeColor");
                            for (var i = 0, l = NavA.length; i < l; i++) {
                                $(NavA[i]).css({
                                    "color": "#fff"
                                    , "font-weight": "bold"
                                });
                            }
                            $("#StyleReset").show();
                            //对导航栏透明度进行操作
                            $(".NavWrapper").css({
                                "opacity": "0.8"
                            });
                            //对底部菜单进行操作
                            $("#buttomMenu").css({
                                "opacity": "0.8"
                            });
                            $(".buttonMenuWrapper").css({
                                "background-color": "none"
                            });
                            $(".buttomNavWrapper").css({
                                "background-color": "#fff"
                            });
                            //对 回到顶部 框进行操作
                            $("#BackToTheTop").css({
                                "background-color": "#555"
                                , "opacity": "0.8"
                            });
                            //对 回到顶部 字体改变样式
                            $(".BackToTheTopWord").css({
                                "color": "#fff"
                            });
                            //设置localStorage
                            localStorage.setItem('BackgroundImg', SRC);
                            localStorage.setItem('IsChange', '1');
                        }
                    }
                };
                document.getElementById("StyleReset").onclick = function (ev) {
                    var ev = ev || window.event
                        , target = ev.target || ev.srcElement;
                    $('body').css("background-image", ' url("#")');
                    $("#MainLogo").attr("src", "img/normalLogo.png");
                    $("#researchButton").removeClass("researchButton_ChangeBackground");
                    $("#NavWrapper").removeClass("NavWrapper_ChangeColor");
                    for (var i = 0, l = NavA.length; i < l - 1; i++) {
                        $(NavA[i]).css({
                            "color": "#555"
                        });
                        if (i <= 3) {
                            $(NavA[i]).css({
                                "font-weight": "normal"
                            });
                        }
                    }
                    $(this).hide();
                    //对底部菜单进行操作
                    //            $(".buttomMenu").css({
                    //                "opacity" : 0;
                    //            });
                    $("#BackToTheTop").css({
                        "background-color": "#fafafa"
                        , "opacity": "1"
                    });
                    //对 回到顶部 字体改变样式
                    $(".BackToTheTopWord").css({
                        "color": "#999"
                    });
                    $(".buttomNavWrapper").css({
                        "background-color": "#fff"
                    });
                    localStorage.setItem("IsChange", "0");
                };
//根据之前的选择再再次刷新页面时更改部分元素的css
                (function () {
                    //    if (Cookies.get("IsChange") == "1") {
                    if (localStorage.getItem("IsChange") == "1") {
                        //        $('body').css("background-image", 'url(' + Cookies.get("BackgroundImg") + ')');
                        $('body').css("background-image", 'url(' + localStorage.getItem("BackgroundImg") + ')');
                        $("#MainLogo").attr("src", MainPicName);
                        $("#researchButton").addClass("researchButton_ChangeBackground");
                        $("#NavWrapper").addClass("NavWrapper_ChangeColor");
                        for (let i = 0, l = NavA.length; i < l; i++) {
                            $(NavA[i]).css({
                                "color": "#fff"
                                , "font-weight": "bold"
                            });
                        }
                        $("#StyleReset").show();
                        //对导航栏透明度进行操作
                        $(".NavWrapper").css({
                            "opacity": "0.8"
                        });
                        //对底部菜单进行操作
                        $("#buttomMenu").css({
                            "opacity": "0.8"
                        });
                        $(".buttonMenuWrapper").css({
                            "background-color": "none"
                        });
                        $(".buttomNavWrapper").css({
                            "background-color": "#fff"
                        });
                        //对 回到顶部 框进行操作
                        $("#BackToTheTop").css({
                            "background-color": "#555"
                            , "opacity": "0.8"
                        });
                        //对 回到顶部 字体改变样式
                        $(".BackToTheTopWord").css({
                            "color": "#fff"
                        });
                    }
                    else {
                        // $("#MainLogo").attr("src", "img/normalLogo.png");
                        for (let i = 0, l = NavA.length; i < l - 1; i++) {
                            $(NavA[i]).css({
                                "color": "#555"
                            });
                            if (i <= 3) {
                                $(NavA[i]).css({
                                    "font-weight": "normal"
                                });
                            }
                        }
                        $("#BackToTheTop").css({
                            "background-color": "#fafafa"
                            , "opacity": "1"
                        });
                        //对 回到顶部 字体改变样式
                        $(".BackToTheTopWord").css({
                            "color": "#999"
                        });
                        //        Cookies.get("IsChange", "0");
                        localStorage.setItem("IsChange", "0");
                    }
                })();

            }
        };
    }

    return {
        useMethod: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    };
})();

changePageStyle.useMethod().method();
changePageStyle = null;
//对页面操作结束
//*************
//*************
//对导航栏用户信息下拉框设置
/*
 *  单例模式
 */
let downMenuOfNavBar = (function () {
    let instance;

    function init() {
        const $NavRight_Usr = $("#NavRight_Usr");
        const $NavUsr_DownMenu = $("#NavUsr_DownMenu");
        const $researchWrapper = $("#researchWrapper");
        const $NavRight_Setting = $("#NavRight_Setting");
        const $NavRight_moreProduct = $("#NavRight_moreProduct");
        const $NavSetting_DownMenuHead = $("#NavSetting_DownMenuHead");
        return {
            method: function () {
                let isEnter = 0;
//悬浮于用户选项时显示菜单
                $NavRight_Usr.mouseover(function () {
                    $NavUsr_DownMenu.fadeIn();
                });
//悬浮于贴吧选项但未进入菜单,隐藏菜单
                $("#NavRight_Usr_LeftSide").mouseover(function () {
                    if (isEnter === 0) $NavUsr_DownMenu.fadeOut();
                });
//悬浮于搜索区域但未进入菜单,隐藏菜单
                $researchWrapper.mouseover(function () {
                    if (isEnter === 0) $NavUsr_DownMenu.fadeOut();
                });
//悬浮于设置选项但未进入菜单,隐藏菜单
                $NavRight_Setting.mouseover(function () {
                    if (isEnter === 0) $NavUsr_DownMenu.fadeOut();
                });
//离开选项并进入菜单后的操作
                $NavRight_Usr.mouseleave(function () {
                    $NavUsr_DownMenu.mouseover(function () {
                        isEnter = 1;
                        $NavUsr_DownMenu.fadeIn();
                    });
                    $NavUsr_DownMenu.mouseleave(function () {
                        $NavUsr_DownMenu.hide();
                        isEnter = 0;
                    });
                })
//对导航栏设置下拉框操作
                let isEnter2 = 0;
//悬浮于设置选项时显示菜单
                $NavRight_Setting.mouseover(function () {
                    $("#NavSetting_DownMenu").fadeIn();
                });
//悬浮于用户选项但未进入菜单,影藏菜单
                $NavRight_Usr.mouseover(function () {
                    if (isEnter === 0) $("#NavSetting_DownMenu").fadeOut();
                });
//悬浮于更多产品选项但为进入菜单,隐藏菜单
                $NavRight_moreProduct.mouseover(function () {
                    if (isEnter === 0) $("#NavSetting_DownMenu").fadeOut();
                });
//悬浮于搜索区域但未进入菜单,隐藏菜单
                $researchWrapper.mouseover(function () {
                    if (isEnter === 0) $("#NavSetting_DownMenu").fadeOut();
                });
//离开设置选项,进入菜单后的操作
                $NavRight_Setting.mouseleave(function () {
                    $NavSetting_DownMenuHead.mouseover(function () {
                        isEnter = 1;
                        $NavSetting_DownMenuHead.fadeIn();
                    });
                    $NavSetting_DownMenuHead.mouseleave(function () {
                        $NavSetting_DownMenuHead.hide();
                        isEnter = 0;
                    });
                });
//对右侧下拉框操作
                $NavRight_moreProduct.mouseover(function () {
                    $("#rightDownMenu").fadeIn();
                });
                $("#rightDownMenu").mouseleave(function () {
                    $("#rightDownMenu").fadeOut(100);
                });


            }
        };
    }

    return {
        useMethod: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    };
})();

downMenuOfNavBar.useMethod().method();
downMenuOfNavBar = null;
//**********************
//对底部菜单栏操作开始
/*
 *  单例模式
 */
let buttonMenuSetting = (function () {
    let instance;

    function init() {
        return {
            method: function () {
                const $buttomNavWrapperLeft = $("#buttomNavWrapperLeft");
                $("#buttomNavWrapper_Recommend").css({
                    "background-color": "#9a9ba2"
                    , "color": "#fff"
                    , "font-weight": "bold"
                });
//变量"TmpButtomNavButtonId"用于储存上一个选定选项的ID,初始化为第二个选项
                let TmpButtomNavButtonId = "#buttomNavWrapper_Recommend";
//加载页面时显示第二个选项"推荐"对应的内容
                $("#buttomMenu_Recommend").css("display", "block");
//采用事件代理对li进行操作
                $buttomNavWrapperLeft.delegate("li", "click", function () {
                    //获取当前下部页面(需要隐藏)的ID
                    let TmpMenuId = '#buttomMenu_' + TmpButtomNavButtonId.split('_')[1];
                    //隐藏未选择前的页面
                    $(TmpMenuId).css("display", "none");
                    //获取导航栏选择项对应的页面的ID
                    let CurMenuId = '#buttomMenu_' + $(this).attr("id").split('_')[1];
                    //改变其css属性,使其显示
                    $(CurMenuId).css("display", "block");
                    //对当前导航栏选项样式的操作
                    //恢复上一个li的样式
                    $(TmpButtomNavButtonId).css({
                        "background-color": "#fff"
                        , "color": "#333"
                        , "font-weight": "normal"
                    });
                    //恢复上一个li的hover效果
                    $(TmpButtomNavButtonId).on("mouseenter", this, function () {
                        $(this).css({
                            "background-color": "#b3b6bb"
                            , "color": "#fff"
                        })
                    }).on("mouseleave", this, function () {
                        $(this).css({
                            "background-color": "#fff"
                            , "color": "#666"
                        })
                    });
                    //如果是第一个li,则回复li中小图像的hover效果
                    if ($(TmpButtomNavButtonId).attr("id") === "buttomNavWrapper_myFocus") {
                        $(TmpButtomNavButtonId).on("mouseenter", this, function () {
                            $(this).css({
                                "background-position": "-144px 0"
                            });
                        }).on("mouseleave", this, function () {
                            $(this).css({
                                "background-color": "-15px 0"
                            })
                        }).children("#buttomNavWrapperLeftIcon").css("background-position", "-15px 0");
                    }
                    //改变选择项css样式
                    if ($(TmpButtomNavButtonId).attr("id") === "buttomNavWrapper_myFocus") {
                        $(this).children("#buttomNavWrapperLeftIcon").css("background-position", "15px 0");
                    }

                    TmpButtomNavButtonId = "#" + $(this).attr("id");
                    $(this).css({
                        "background-color": "#9a9ba2"
                        , "color": "#fff"
                        , "font-weight": "bold"
                    });
                    //移除hover效果
                    $(this).unbind("mouseenter").unbind("mouseleave");
                    //如果是第一个选项,则改变图标颜色为白色
                    if ($(this).attr("id") === "buttomNavWrapper_myFocus") {
                        $(this).children("#buttomNavWrapperLeftIcon").css("background-position", "-144px 0");
                    }
                });
//点击底部菜单导航栏右侧图标,显示设置栏
                $("#buttomNavWrapperRight").click(function () {
                    $("#buttomMenu_setting").slideToggle();
                });
//点击其他区域收起设置栏
                $("#researchWrapper").click(function () {
                    $("#buttomMenu_setting").slideUp();
                });
//点击底部菜单设置栏选择框对导航栏显示选项进行操作
//获取底部导航栏的栏目
                let buttomNavChoice = $buttomNavWrapperLeft.children("ul").children("li");
//let IsButtomNavChoice[buttomNavChoice.length];
//for(let i=0, l = buttomNavChoice.length; i<l; i++){
//}
//点击"未订阅"栏目,添加所选项至导航栏,并在"已订阅栏目"显现,在"未订阅"栏目中消失
                $("#buttomMenu_setting_UnChosenMenu").delegate("li", "click", function () {
                    //获取所选项div中的文字,好和未订阅项目配对
                    let chosenText = $(this).text(), //获取已订阅项目的列表
                        unChosenText = $("#buttomMenu_setting_ChosenMenu").children("ul").children("li");
                    //在已订阅列表中寻找对应的项目
                    for (let i = 0, l = unChosenText.length; i < l; i++) {
                        //若符合条件,则执行操作
                        if (unChosenText[i].innerHTML === chosenText) {
                            $(unChosenText[i]).show();
                            $(this).hide();
                            for (let j = 0, l2 = buttomNavChoice.length; j < l2; j++) {
                                if (buttomNavChoice[j].innerHTML === chosenText) $(buttomNavChoice[j]).show();
                            }
                        }
                    }
                });
//点击"已订阅栏目",将所选项从导航栏中移除,并在"未订阅栏目"显现,在"已订阅"栏目中消失
                $("#buttomMenu_setting_ChosenMenu").delegate("li", "click", function () {
                    //获取所选项div中的文字,好和已订阅项目配对
                    let UnchosenText = $(this).text(), //获取为订阅项目的列表
                        ChosenText = $("#buttomMenu_setting_UnChosenMenu").children("ul").children("li");
                    //在未订阅列表中寻找对应的项目
                    for (let i = 0, l = ChosenText.length; i < l; i++) {
                        //若符合条件,则执行操作
                        if (ChosenText[i].innerHTML === UnchosenText) {
                            $(ChosenText[i]).show();
                            $(this).hide();
                            for (let j = 0, l2 = buttomNavChoice.length; j < l2; j++) {
                                if (buttomNavChoice[j].innerHTML === UnchosenText) $(buttomNavChoice[j]).hide();
                            }
                        }
                    }
                });
            }
        };
    }

    return {
        useMethod: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    };
})();

buttonMenuSetting.useMethod().method();
buttonMenuSetting = null;
//对底部菜单栏操作结束
//**********************
//**********************
//回到顶部操作开始
//鼠标悬浮改变图标显示
/*
 *  单例模式
 */
let goToTop = (function () {
    let instance;

    function init() {
        return {
            method: function () {
                const $BackToTheTop = $("#BackToTheTop");
                $BackToTheTop.hover(function () {
                    $(".BackToTheTopIcon").hide();
                    $(".BackToTheTopWord").show();
                }, function () {
                    $(".BackToTheTopWord").hide();
                    $(".BackToTheTopIcon").show();
                });
                $BackToTheTop.click(function () {
                    $('body,html').animate({
                        scrollTop: 0
                    }, 500);
                });
            }
        };
    }

    return {
        useMethod: function() {
            if(!instance){
                instance = init();
            }
            return instance;
        }
    };
})();

goToTop.useMethod().method();
goToTop = null;
//回到顶部操作结束
//**********************