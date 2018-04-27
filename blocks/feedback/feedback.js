$(".feedback__show").click(function() {
    $(".feedback__blackout").show();
    $(".feedback__blackout-img").attr("src", $(this).parent().find(".feedback__img2").attr("src"));
});

$(".feedback__blackout").click(function() {
    $(this).hide();
})
