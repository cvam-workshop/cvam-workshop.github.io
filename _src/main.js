// JS
import jQuery from 'jquery';
import 'what-input';
import 'foundation-sites';

window.$ = window.jQuery = jQuery;

// init Foundation
$(document).foundation();

// toggle hamburger menu on offcanvas open
$("[data-off-canvas-wrapper]")
  .bind("opened.zf.offcanvas closed.zf.offcanvas", function(e) {
    $(".hamburger").toggleClass("is-active");
});

// Check URL parameter and show/hide slides links
$(document).ready(function() {
  function checkSlidesParam() {
    const urlParams = new URLSearchParams(window.location.search);
    const showSlides = urlParams.get('show-slides') === '1';
    
    if (showSlides) {
      $('.slides-link-container').addClass('show-slides');
    } else {
      $('.slides-link-container').removeClass('show-slides');
    }
  }
  
  // Check on page load
  checkSlidesParam();
  
  // Also check when URL changes (for single page applications or back/forward navigation)
  $(window).on('popstate', checkSlidesParam);
});
