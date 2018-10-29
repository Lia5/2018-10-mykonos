
document.addEventListener('DOMContentLoaded', function(){
//menu
    var menu = document.querySelector('.toggle-menu');
    menu.addEventListener('click', function(){
        var nav = document.querySelector('.main-menu');
        nav.classList.toggle('active');

    });
    var cross = document.querySelector('.cross');
    cross.addEventListener('click', function(){
        var nav = document.querySelector('.main-menu');
        nav.classList.toggle('active');

    });
//tabs
	// store tabs variable
	var myTabs = document.querySelectorAll("ul.header__tabs > li");
    function myTabClicks(tabClickEvent) {
		for (var i = 0; i < myTabs.length; i++) {
			myTabs[i].classList.remove("active");
		}
		var clickedTab = tabClickEvent.currentTarget;
		clickedTab.classList.add("active");
		tabClickEvent.preventDefault();
		var myContentPanes = document.querySelectorAll(".tab-pane");
		for (i = 0; i < myContentPanes.length; i++) {
			myContentPanes[i].classList.remove("active");
		}
        var anchorReference = tabClickEvent.target;
        console.log(anchorReference);
        var activePaneId = anchorReference.getAttribute("href");
        console.log(activePaneId);
        var activePane = document.querySelector(activePaneId);
        console.log(activePaneId);
		activePane.classList.add("active");
	}


//slider
var slider = tns({
   // "autoWidth": true,
    // "items": 3.2,
    // "gutter": 10,
    "mouseDrag": true,
    // "navAsThumbnails": true,
    // "arrowKeys": true,
//    "slideBy":2,
  //  "swipeAngle": false,
  //  "container": "#autoWidth",
    container: '.my-slider',
    items: 1,
    responsive: {
      640: {
        edgePadding: 20,
        gutter: 20,
        items: 2
      },
      700: {
        gutter: 30
      },
      900: {
        items: 3,
        navAsThumbnails: true
      }
    }
  });
  
  var centers = document.querySelectorAll('.tns-slide-active');
  for (var i = 0; i < centers.length; i++) {
      console.log(centers[i]);
      if (centers[i].previousElementSibling.classList.contains('tns-slide-active') && centers[i].nextElementSibling.classList.contains('tns-slide-active')  ) {
          centers[i].classList.add('center');
      } else {
          centers[i].classList.remove('center');
      }
  }
  var customizedFunction = function () {
    var centers = document.querySelectorAll('.tns-slide-active');
    for (var i = 0; i < centers.length; i++) {
        console.log(centers[i]);
        if (centers[i].previousElementSibling.classList.contains('tns-slide-active') && centers[i].nextElementSibling.classList.contains('tns-slide-active')  ) {
            centers[i].classList.add('center');
        } else {
            centers[i].classList.remove('center');
        }
    }
  }
  slider.events.on('transitionEnd', customizedFunction);


});