$(".step").click(function () {
    $(this).addClass("active").prevAll().addClass("active");
    $(this).nextAll().removeClass("active");
});

$(".step01").click(function () {
    $("#line-progress").css("width", "3%");
    $(".pesanan").addClass("active").siblings().removeClass("active");
});

$(".step02").click(function () {
    $("#line-progress").css("width", "25%");
    $(".penerimaan").addClass("active").siblings().removeClass("active");
});

$(".step03").click(function () {
    $("#line-progress").css("width", "50%");
    $(".pickup").addClass("active").siblings().removeClass("active");
});

$(".step04").click(function () {
    $("#line-progress").css("width", "75%");
    $(".perjalanan").addClass("active").siblings().removeClass("active");
});

$(".step05").click(function () {
    $("#line-progress").css("width", "100%");
    $(".selesai").addClass("active").siblings().removeClass("active");
});

if($(".step01").click(function() {
    $(".step02").disabled
}));