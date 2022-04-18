(function($) {
	
	"use strict";

    /* ==========================================================================
        Banner Slider
    ========================================================================== */
    let bgImageArraySelector = ['.section-banner .bg-img.bg-img1 img','.section-banner .bg-img.bg-img2 img','.section-banner .bg-img.bg-img3 img'];
    let bgContentArraySelector = ['.section-banner .slider .item.item1','.section-banner .slider .item.item2','.section-banner .slider .item.item3'];
    let currentbgImg = 'https://themes.envytheme.com/vaximo/wp-content/uploads/2020/08/bg-1-1.jpg';
    let currentBgIndex = 0;
    let interval = null;

    function backgroundSequence() {
      interval = setInterval(() => setDataInterval(), 10000);
    }
  
    function prevSlide() {
      currentBgIndex = currentBgIndex === 0 ? 2: --currentBgIndex;
  
      clearInterval(interval);
      setDataInterval(true);
      interval = setInterval(() => setDataInterval(), 10000);
    }
  
    function nextSlide() {
      currentBgIndex = currentBgIndex === 2 ? 0: ++currentBgIndex;
  
      clearInterval(interval);
      setDataInterval(true);
      interval = setInterval(() => setDataInterval(), 10000);
    }
  
    function setDataInterval(manualToggle = false) {
      if(!manualToggle) {
        currentBgIndex = currentBgIndex === 2 ? 0: ++currentBgIndex;
      }
  
      for (let i = 0; i < bgContentArraySelector.length; i++) {
        if(currentBgIndex === i) {
            document.querySelector(bgContentArraySelector[i]).style.display = "block";
  
            document.querySelector(bgImageArraySelector[i]).classList.remove('hidden');
            document.querySelector(bgImageArraySelector[i]).classList.remove('visuallyhidden');
        } else {
            document.querySelector(bgContentArraySelector[i]).style.display = "none";
  
            document.querySelector(bgImageArraySelector[i]).classList.add("visuallyhidden");
            document.querySelector(bgImageArraySelector[i]).classList.add('hidden');
        }
      }
    }
    

    /* ==========================================================================
        When document is loaded, do
    ========================================================================== */
	
	$(window).on('load', function() {

        $('#handle-preloader').fadeOut();
        $('.preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({'overflow':'visible'});

        backgroundSequence();
        $(".btn_next").click(function () {
            nextSlide();
        })
        $(".btn_prev").click(function () {
            prevSlide();
        })
	});

	

})(window.jQuery);