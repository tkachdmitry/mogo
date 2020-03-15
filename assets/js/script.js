$(function() {
// Fixed Header
    let header = $("#header");
    let introH = $("#intro").innerHeight();
    let scrollOffset = $(window).scrollTop();
    checkScroll(scrollOffset);
    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });
    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }
// Smooth Scroll
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        let $this = $(this);
        let blockId = $(this).data("scroll");
        let blockOffset = $(blockId).offset().top;
        $("#nav a").removeClass('nav-link-active');
        $this.addClass("nav-link-active");
        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });
//Menu navigation toggle
    $("#nav-toggle").on("click", function(event) {
        event.preventDefault();
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });
// Collapse    
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();
        let $this = $(this);
        let blockId = $this.data("collapse");
        $(this).toggleClass("accordion-item-active");
    });
// Slider
    $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
    })
});