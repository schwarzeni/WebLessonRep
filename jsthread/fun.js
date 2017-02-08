$("#test").click(function (argument){
    alert(1);
})

Concurrent.Thread.create(function(){
    $("#test").click(function (argument){
    alert(1);
});
    for(var i=0; i<1000000; i++){
        console.log(i);
    }

})
