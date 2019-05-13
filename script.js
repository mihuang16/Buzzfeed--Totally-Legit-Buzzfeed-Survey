$(".aftersubmit").hide();
$(".aftertext").hide();

$(".submit").click(function(){
    $(".main").hide();
    $(".aftersubmit").show();
    $(".aftertext").show();
    $("body").css({"text-align": "center" , "background-color": "lightgreen"});
});
