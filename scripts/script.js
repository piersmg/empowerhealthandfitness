$(document).ready(function() {

  // Burger menu/nav opening 
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

  // Change border on hover on home blocks - homepage
  $(".home-blocks").hover(function() {
  	$(this).children('p').toggleClass("block-hover");
  });

  // Remove overlay on hover on map - contact page
  $("#map-link").hover(function() {
    $(".map-info").toggleClass("map-info-hide");
    $(".map").toggleClass("map-no-overlay");
  });

  // When read more is clicked: open correct testimonial and spin caret; move border of read more to fake border expanding with info; show the testimonial - testimonials page
  $(".read").on("click", function() {
    var clickread = $(this);
    var id = clickread.attr("id");
    clickread.children(".caret").toggleClass("rotate");
    clickread.toggleClass("border-move");
    var txt = clickread.hasClass("border-move") ? 'less' : 'more';
    clickread.find(".more").text(txt);
    $('.testimonial-body[data-id=' + id + ']').toggleClass('is-open');
    $('.testimonial-text[data-id=' + id + ']').toggleClass("show");
  });

  // Show or hide package options in tables for mobiel - packages page
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
