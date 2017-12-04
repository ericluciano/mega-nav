$(document).ready(function(){
 $('.toggle-menu').click(function(){
	 var self = $(this);
    self.toggleClass('display')
	$('.menu-header').toggleClass('display');
	if (self.hasClass('display')) {
        $('html, body')
            // Needed to remove previously bound handlers
            .off('touchstart touchmove')
            .on('touchstart touchmove', function (e) {
                e.preventDefault();
            });
    } else {
        $('html, body')
            .off('touchstart touchmove')
            .on('touchstart touchmove', function (e) {});
    }
});

$(window).on('scroll', function(){
    var _s = $(this);
    var ts = (function(){
        var exec = false;
        return function(){
            if(!exec){
                console.log(_s.scrollTop());
                if(_s.scrollTop() > 170){
                    $('.menu-header').attr('style', 'position:fixed');
                    exec = true;
                }
            }
        }
    })();
    ts();
})
});
