$(function() {

  var $doc = $(document),
      $header = $('#header');

  var prevScrollY = window.scrollY,
      scrollY,
      width = window.innerWidth,
      height = window.outerHeight,
      firstBlockPadding = parseInt($("#pages").css('paddingTop')), // "200px" should parse to 200
      toScroll,
      scaledImage = false,
      timeout;

  function resetWindow() {
    if (window.innerWidth < 1100)  {
      $header.css({position: 'static'});
      $("#pages").css({paddingTop: 0});
      return true;
    }
    return false;
  }

  $(window).resize(function() {
    if ( resetWindow() ) {
      
    }
  });

  $doc.scroll(function(e) {
    scrollY = window.scrollY;

    if (scrollY < 10) {
      if(Modernizr.csstransforms) {
        $header.stop(true, false).animate({scale: 1, translateX: 0}, {queue: false}, 100);
      } else {
        $header.stop(true, false).animate({scale: 1, right: 0}, {queue: false}, 100);
      }

    } else {
      toScroll = Math.max(scrollY * -1 * 3, -100 * 2.9);
      console.log(toScroll);
      //toScroll = (toScroll / ( -580 ) * 100;
      if(Modernizr.csstransforms) {
        $header.stop(true, false).animate({scale: .9, translateX: -1 * toScroll}, {queue: false}, 20);
      } else {
        $header.stop(true, false).animate({scale: .9, right: toScroll}, {queue: false}, 30);
      }
    }

    if ( !scaledImage ) {
        $header.find('hgroup h2').css({width: "50%"});
    }
    //cleanup
    prevScrollY = window.scrollY;

  });

    function normalizeXY(prevSY, currSY) {

      currSY = currSY === 0 ? 1 : currSY;

      return firstBlockPadding / currSY;
    }
});
