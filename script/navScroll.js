var header = document.querySelector('.header').style;
var navIcon2 = document.getElementById('navIcon');


var lastScroll = 0;
document.addEventListener('scroll', function() {
  
  let scrollingNow = Math.round(window.scrollY);
  if(lastScroll > scrollingNow)  {
    showHeader(); //up scrolling
    if(scrollingNow > 200) header.borderBottom = `2px solid grey`;
    else header.borderBottom = 'none';
  }
  else {
    if(scrollingNow > 600) {
      hideHeader(); 
    }
  }

  lastScroll = scrollingNow;
});


function showHeader() {
  //cannot be absolute coz it will appear at the top of doc and not window.
  header.position = 'fixed';
  header.top = '0'; 
}


function hideHeader() {
  header.position = 'absolute';
  header.top = '-5rem'; 
}


//hiding header transition isn't smooth. check on that.