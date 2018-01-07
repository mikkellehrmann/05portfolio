$(window).on("load", slideUp);

function slideUp() {
    console.log("slideUp");

    $("#overlay").addClass("slide_up");
}

$(document).ready(function () {

    $('.profile_icon, .cross, .about').click(function () {
        var menu = $('.profile');
        menu.toggleClass('profile_active')
    });

});

$('.up').click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 600);
    return false;
});


/** Brug af scroll **/

$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 3) {
        $("h2").addClass("blue");
    } else {
        $("h2").removeClass("blue");
    }
});

/**** Kilde:
https://stackoverflow.com/questions/3898130/check-if-a-user-has-scrolled-to-the-bottom

****/

$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 50) {
        $('.up').removeClass('up_black');
        $('.up').addClass('up_blue');
    } else {
        $('.up').removeClass('up_blue');
        $('.up').addClass('up_black');
    }
});
