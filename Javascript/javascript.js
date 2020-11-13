$(window).scroll(function() {
    var y_scroll_pos = window.pageYOffset;
    var scroll_pos_test = 150;             
	// set to whatever you want it to be

    if(y_scroll_pos > scroll_pos_test) {
	   $("nav").addClass("backgroundVisible");
    }
	else
	{
		$("nav").removeClass("backgroundVisible");
	}
});

$.fn.isOnScreen = function(){
    
    var win = $(window);
    
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
    
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    
};

var someReasonableInterval = 300;
window.setInterval(function() {
    if ($('#visionTest').isOnScreen()) {
        $('#motorbike').addClass("motorbike");
        $('#minibus').addClass("minibus");
        $('#car').addClass("car");
    } else {
        $('#motorbike').removeClass("motorbike");
        $('#minibus').removeClass("minibus");
        $('#car').removeClass("car");
    }
},someReasonableInterval);

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));