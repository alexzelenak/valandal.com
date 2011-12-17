$(function() {

  var $doc = $(document),
      $header = $('#header');

  var prevScrollY = window.scrollY,
      scrollY,
      width = window.innerWidth,
      height = window.outerHeight,
      firstBlockPadding = parseInt($("#pages").css('paddingTop')), // "200px" should parse to 200
      toScroll,
      timeout;

  $doc.scroll(function(e) {
    scrollY = window.scrollY;

    if (scrollY < 2) {
      if(Modernizr.csstransforms) {
        $header.stop(true, false).animate({scale: 1, translateX: 0}, {queue: false}, 100);
      } else {
        $header.stop(true, false).animate({right: 0}, {queue: false}, 100);
      }
    } else {
      toScroll = Math.max(scrollY * -1 * 2.9, -100 * 2.9);

      if(Modernizr.csstransforms) {
        $header.stop(true, false).animate({scale: .9, translateX: -1 * toScroll}, {queue: false}, 20);
        //$header.css({right: toScroll});
      } else {
        $header.stop(true, false).animate({right: toScroll}, {queue: false}, 30);
      }
      //header.style.right = toScroll + "px";
    }

    //cleanup
    prevScrollY = window.scrollY;

  });

    function normalizeXY(prevSY, currSY) {

      currSY = currSY === 0 ? 1 : currSY;

      return firstBlockPadding / currSY;
    }
});
