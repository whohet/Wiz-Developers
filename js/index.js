function fun() {
    setTimeout(func, 5000);
}

function func() {
    var x = document.querySelector(".bar");
    var y = document.querySelector(".hide");
    var z = document.querySelector(".circle");
    var a = document.querySelector("body");
    var b = document.querySelector("html");
    y.classList.toggle("hide");
    x.classList.toggle("hide");
    z.classList.toggle("hide");
    a.classList.toggle("not-hide");
    b.classList.toggle("not-hide");
}
window.onscroll = function() {
    myFunction()
};
if ($('.smart-scroll').length > 0) { // check if element exists
    var last_scroll_top = 0;
    $(window).on('scroll', function() {
        scroll_top = $(this).scrollTop();
        if (scroll_top < last_scroll_top) {
            $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
        } else {
            $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
        }
        last_scroll_top = scroll_top;
    });
}