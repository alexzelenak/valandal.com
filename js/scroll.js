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

  var PUSH = 580;
  var to, prevToScroll;
  $doc.scroll(function(e) {
    scrollY = window.scrollY;
    
    console.log(scrollY);

    if (scrollY < 10) {
        $header.stop(true, false).animate({right: '50%'}, {queue: false}, 100);
    } else {
      toScroll = Math.min(scrollY * 1 * 3, PUSH / 2);

      toScroll = 50 - ( (toScroll / (PUSH)) * 100 );

      if (toScroll < 25) {
        toScroll = 25; //nahhhhhh dog
      }
      
      if(prevToScroll !== toScroll) {
        $header.stop(true, false).animate({right: toScroll + '%'}, {queue: false}, toScroll === 25 ? 50 : 30);
      }
      
      prevToScroll = toScroll;
    }
    
  });

});
