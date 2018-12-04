$(document).ready(function() {

	var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
  	// e.preventDefault();
    e.stopPropagation();

    $hamburger.toggleClass("is-active");
    $(".navigation, .nav-menu").toggleClass("is-open");

    $(document).one("click", function closeMenu (e){
        if($(".navigation, .nav-menu").has(e.target).length === 0){
            $(".navigation, .nav-menu").removeClass('is-open');
            $hamburger.removeClass("is-active");
        } else {
            $(document).one("click", closeMenu);
        }
    });
  });

  $(".home-blocks").hover(function() {
  	$(this).children('p').toggleClass("block-hover");
  });

  $("#map-link").hover(function() {
    $(".map-info").toggleClass("map-info-hide");
    $(".map").toggleClass("map-no-overlay");
  });

});
