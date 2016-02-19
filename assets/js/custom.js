// JavaScript Document



$(document).ready(function() {
	
  // Home Banner Slider
  
  $("#homeBannerSlider").owlCarousel({

  navigation : true,
  slideSpeed : 1500,
  paginationSpeed : 1500,
  singleItem : true

  // "singleItem:true" is a shortcut for:
  // items : 1, 
  // itemsDesktop : false,
  // itemsDesktopSmall : false,
  // itemsTablet: false,
  // itemsMobile : false

  });
  
  // Testimonial Slider  
  
  $("#tMonialSlider").owlCarousel({

  navigation : true,
  slideSpeed : 1000,
  paginationSpeed : 1000,
  singleItem : true

  // "singleItem:true" is a shortcut for:
  // items : 1, 
  // itemsDesktop : false,
  // itemsDesktopSmall : false,
  // itemsTablet: false,
  // itemsMobile : false

  });
  
    // Blog Post Slider  
  
  $("#blogPostSlider").owlCarousel({

  navigation : true,
  slideSpeed : 2000,
  paginationSpeed : 2000,
  //singleItem : true,
  items : 4

  // "singleItem:true" is a shortcut for:
  // items : 1, 
  // itemsDesktop : false,
  // itemsDesktopSmall : false,
  // itemsTablet: false,
  // itemsMobile : false

  });
  
});