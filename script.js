$("button").click(function(){
    var name = $("#name").val();
    var age = $(".age").val();
    var siblings = $("#siblings").val();
    $("#result").text("You'll have " + age * siblings + " new relatives");
    $("h2").hide();
    $("input").hide();
    $("button").hide();
});
