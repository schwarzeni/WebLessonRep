//点击事件
//动态事件
//each


//ready => html framework ready
//onload => whole page ready load

//$() => return array

// var mydiv2 = document.getElementsByClassName("TEST");
// console.log(mydiv2);

// $(document).ready(function(){
// 	var mydiv = $(".TEST");
// 	console.log(mydiv);
// });

// protogenesis when object not found, return NULL;
// var mydiv2 = document.getElementsByClassName("pp");
// console.log(mydiv2);

// report error
// mydiv2.onclick();

// jquary when object not found, donnot report error 
// $(document).ready(function(){
	// var mydiv = $("#pp");
	// mydiv.click(function(){})
	// console.log(mydiv);
// });

//become protogenesis object
//div[0]
//become jquery
//$(div)

//BEGINTEST
//-----
$(function(){
	$(".TEST").click(function(){
		alert("Welcome");
	});

	$('.TEST').on('click',function(){
			alert("hahaha");
	});
})

//----
//Add Tag
//事件代理
//----
//1
$('.TEST').on("click","p",function(){
	alert("Welcome,lala!");
});
//2
$('.TEST').delegate("p","click",function(){
	alert("Welcome,lala!");
});

//动态元素
//$().on(action,动态元素,function)

$(function(){
	$("#BTN").on('click', function(){
		$(".TEST").append("<p>Hello</p>");
		$(".TEST").css('color','white');
	})
});

//遍历
$('.TEST').each(function(){
	console.log($(this).attr("data-name"));
})

//----

