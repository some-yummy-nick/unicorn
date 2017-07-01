import hamburger from "./hamburger";
import links from "./links";
hamburger();
links();
$(document).ready(function(){
  $('.feature .slider').bxSlider({
    hideControlOnEnd: true,
    slidesWidth:360,
    pager: false,
    infiniteLoop: false
  });
  $('.clients__slider').bxSlider({
    hideControlOnEnd: true,
    pager: false,
    infiniteLoop: false
  });
});