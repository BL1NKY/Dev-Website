$( document ).ready(function() {

    mobileNav();

    mentoringBubbleClick();

    $(window).scroll(function () {
        youtubeVidScroll();
        startMentoring();
    });

    resize();

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
            vertMath = -1 * (faceTop - 230 + 35),
            faceLeft = $this.position().left,
            horizMath = (0 - faceLeft);

            $this.siblings().removeClass("has-bubble-open");
            if($(window).width() > 640) {
                $this.parent().css("top", + vertMath + "px");
            } else {
                if($this.hasClass("back-btn")){
                    mentoringNarrowStart();
                } else {
                    $this.parent().css("left", + horizMath + "px");
                }
            }
            setTimeout(function () {
                $this.addClass("has-bubble-open");
            }, 300);
    });
}

function startMentoring() {
    var wScroll = $(window).scrollTop(),
        triggerPoint = $("section.mentoring").offset().top - 500;


    if(triggerPoint < wScroll) {
        if($(window).width() > 640) {
            $(".faces").addClass("launched");
            if(!$(".face").hasClass("has-bubble-open") && !$(this).hasClass("back-btn")) {
                setTimeout(function () {
                    $(".face:nth-child(3)").addClass("has-bubble-open");
                }, 300);
            }
        } else {
            if(!$(".face").hasClass("has-bubble-open")) {
                $(".face").first().addClass("has-bubble-open");
            }
        }
    }
}

$(window).resize(function () {
    if($(window).width() > 640) {
        mentoringWideStart();
    } else {
        mentoringNarrowStart();
    }
});

function resize() {
    $(window).resize(function () {
        if($(window).width() > 640) {
            mentoringWideStart();
        } else {
            mentoringNarrowStart();
        }
    });
}

function mentoringNarrowStart() {
    $(".faces").css({
        "top":"230px",
        "left":"0px"
    });
    $(".face").first().addClass("has-bubble-open").siblings().removeClass("has-bubble-open");
}

function mentoringWideStart() {
    $(".faces").css({
        "top":"0px",
        "left":"0px"
    });
    $(".face:nth-child(3)").addClass("has-bubble-open").siblings().removeClass("has-bubble-open");
}
