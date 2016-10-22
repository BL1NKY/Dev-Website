$( document ).ready(function() {

    mobileNav();

    mentoringBubbleClick();

    $(window).scroll(function () {
        youtubeVidScroll();
        startMentoring();
    });
});


function youtubeVidScroll() {
    var wScroll = $(window).scrollTop();
    $(".video-strip").css("background-position","center -" + wScroll/3 + "px")
}

function mobileNav() {
    $(".mobile-nav-toggle").on("click", function () {
        $(".mobile-nav-toggle, .mobile-nav").toggleClass("is-open");
    });
}

function mentoringBubbleClick() {
    $(".face").on("click", function () {
        var $this = $(this),
            faceTop = $this.position().top,
            vertMath = -(faceTop - 230 + 35);
        $this.siblings().removeClass("has-bubble-open");
        $this.parent().css("top", + vertMath + "px");
        setTimeout(function () {
            $this.addClass("has-bubble-open");
        }, 300);
    });
}

function startMentoring() {
    var wScroll = $(window).scrollTop();

    if($("section.mentoring").offset().top - 500 < wScroll) {
        $(".faces").addClass("launched");
        setTimeout(function () {
            $(".face:nth-child(3)").addClass("has-bubble-open");
        }, 300);
    }
}
