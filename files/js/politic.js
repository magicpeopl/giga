$( document ).ready(function() {
    var tempScrollTop = 0;
    var currentScrollTop = 0;

    $("#politic-btn").click(function () {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $("#politic").css('display','block');
            $(window).scroll(function () {
                currentScrollTop = jQuery(window).scrollTop();
                // if (tempScrollTop < currentScrollTop) {
                //     //scrolling down
                // }
                if (tempScrollTop > currentScrollTop && tempScrollTop < tempScrollTopPlus) {
                    //scrolling up
                    $("#public, #politic").css('display', 'none');
                    $(".overlay-public-zdv").removeClass('overlay-public-zdv-open');
                }
                tempScrollTop = currentScrollTop;

                if (typeof tempScrollTopPlus == 'undefined'){
                    tempScrollTopPlus = tempScrollTop -200;
                }
            });
        } else {
            $(".overlay-public-zdv").addClass('overlay-public-zdv-open');
            $("#politic").css('display','block');
        }
    });

    $("#public-btn").click(function () {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $("#public").css('display', 'block');
            $(window).scroll(function () {
                currentScrollTop = jQuery(window).scrollTop();
                // if (tempScrollTop < currentScrollTop) {
                //     //scrolling down
                // }
                if (tempScrollTop > currentScrollTop && tempScrollTop < tempScrollTopPlus) {
                    //scrolling up
                    $("#public, #politic").css('display', 'none');
                    $(".overlay-public-zdv").removeClass('overlay-public-zdv-open');
                }
                tempScrollTop = currentScrollTop;

                if (typeof tempScrollTopPlus == 'undefined'){
                    tempScrollTopPlus = tempScrollTop -200;
                }
            });
        } else {
            $(".overlay-public-zdv").addClass('overlay-public-zdv-open');
            $("#public").css('display', 'block');
        }
    });

    $(".overlay-public-zdv-close, .overlay-public-zdv").click(function () {
        $(".overlay-public-zdv").removeClass('overlay-public-zdv-open');
        $("#public, #politic").css('display','none');
    });



});