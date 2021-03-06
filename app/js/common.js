
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
    for (i = 0; i < myTabs.length; i++) {
		myTabs[i].addEventListener("click", myTabClicks)
	}


//slider
var slider = tns({
   // "autoWidth": true,
    // "items": 3.2,
    // "edgePadding": 170,
    "mouseDrag": true,
    "navAsThumbnails": false,
    "arrowKeys": false,
    "nav": false,
    "prevButton": true,
    "controlsText": ["prev item", "next item"],
    container: '.my-slider',
    items: 1,
    responsive: {
      640: {

        gutter: 20,
        items: 1
      },
      700: {
        gutter: 90
      },
      981: {
        items: 3
      }
    }
  });
  
  var centers = document.querySelectorAll('.tns-slide-active');
  for (var i = 0; i < centers.length; i++) {
      centers[i].classList.remove('center');
      centers[i].classList.remove('right');
      if (centers[i].previousElementSibling.classList.contains('tns-slide-active') && centers[i].nextElementSibling.classList.contains('tns-slide-active')  ) {
          centers[i].classList.add('center');
      } else {
          centers[i].classList.remove('center');
      }
      if (centers[i].previousElementSibling.classList.contains('center')) {
         centers[i].classList.add('right');
      } else {
          centers[i].classList.remove('right');
      }
  }
  var customizedFunction = function () {
    var centers = document.querySelectorAll('.tns-slide-active');
    for (var i = 0; i < centers.length; i++) {
        //console.log(centers[i].nextElementSibling);
        centers[i].classList.remove('right');
        if (centers[i].nextElementSibling !==null) {
            if (centers[i].previousElementSibling.classList.contains('tns-slide-active') && centers[i].nextElementSibling.classList.contains('tns-slide-active')  ) {
                centers[i].classList.add('center');
            } else {
                centers[i].classList.remove('center');
            }
            if (centers[i].previousElementSibling.classList.contains('center')) {
                centers[i].classList.add('right');
            } else {
                centers[i].classList.remove('right');
            }
        }
    }
  }
  slider.events.on('transitionEnd', customizedFunction);


});