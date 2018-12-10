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

  $('#time-options').on('change', function() {
    if ( this.value == 'four') 
    {
      $(".weeks4").show();
    }
    else
    {
      $(".weeks4").hide();
    }
    if ( this.value == 'eight')
    {
      $(".weeks8").show();
    }
    else
    {
      $(".weeks8").hide();
    }
    if ( this.value == 'twelve')
    {
      $(".weeks12").show();
    }
    else
    {
      $(".weeks12").hide();
    }
  });

  $('#time-options-thirty').on('change', function() {
    if ( this.value == 'thirty-four') 
    {
      $(".thirty-weeks4").show();
    }
    else
    {
      $(".thirty-weeks4").hide();
    }
    if ( this.value == 'thirty-eight')
    {
      $(".thirty-weeks8").show();
    }
    else
    {
      $(".thirty-weeks8").hide();
    }
    if ( this.value == 'thirty-twelve')
    {
      $(".thirty-weeks12").show();
    }
    else
    {
      $(".thirty-weeks12").hide();
    }
  });

});
