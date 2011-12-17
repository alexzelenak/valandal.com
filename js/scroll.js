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
      $header.animate({right: 0}, 100);
    } else if (scrollY < 500) {
      toScroll = Math.max(scrollY * -3, -315);

      $header.animate({right: toScroll}, {queue: false}, 60);
      //header.style.right = toScroll + "px";
    } else {
//probably nothing
    }

    console.log("ScrollY", scrollY);

    //cleanup
    prevScrollY = window.scrollY;

  });

    function normalizeXY(prevSY, currSY) {

      currSY = currSY === 0 ? 1 : currSY;

      return firstBlockPadding / currSY;
    }
});
