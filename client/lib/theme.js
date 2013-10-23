theme = function () {
    $(function () {
    $(window).scroll(function() {
        if ($(".navbar").offset().top>30) {
            $(".navbar-fixed-top").addClass("sticky");
        }
        else {
            $(".navbar-fixed-top").removeClass("sticky");
        }
    });



    // staticHeader.initialize();

    // portfolioItem.initialize();


    // segun esto corrige el pedo del dropdown en tablets and such
    // hay que testearlo!
//     $('.dropdown-toggle').click(function(e) {
//         e.preventDefault();
//         setTimeout($.proxy(function() {
//             if ('ontouchstart' in document.documentElement) {
//                 $(this).siblings('.dropdown-backdrop').off().remove();
//             }
//         }, this), 0);
//     });
});

// var portfolioItem = {
//     initialize: function () {
//         var $container = $("#portfolio_tem .left_box");
//         var $bigPics = $container.find(".big img");
//         var $thumbs = $container.find(".thumbs .thumb");

//         $bigPics.hide().eq(0).show();

//         $thumbs.click(function (e) {
//             e.preventDefault();
//             var index = $thumbs.index(this);
//             $bigPics.fadeOut();
//             $bigPics.eq(index).fadeIn();
//         });
//     }
// }

};