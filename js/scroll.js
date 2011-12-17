$(function() {

  var $doc = $(document),
      $header = $("#header");

  var prevScrollY = window.scrollY,
      scrollY;

  $doc.scroll(function(e) {

    //cleanup
    prevScrollY = window.scrollY;
  });
});
