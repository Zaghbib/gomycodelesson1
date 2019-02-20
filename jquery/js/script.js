
$("document").ready(function(){
//start jquery
$("#fontfamily").change(function(){
$("#editor").css("fontFamily", $(this).val());
});

$("#fontsize").change(function(){
    $("#editor").css("fontSize", $(this).val());
    });

$("#bold").click(function(){
$("#editor").css("fontWeight", "bold")
});

$("#italic").click(function(){
    $("#editor").css("fontStyle", "italic")
    });

$("#underline").click(function(){
    $("#editor").css("textDecoration", "underline")
    });
//end jquery
});