var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var navIcon = document.getElementById('navIcon')
var nav = document.querySelector('.nav');



navIcon.addEventListener('click',function() {
  if((one.className == 'line ') || (one.className == 'line closeOne')) {
    one.className = 'line openOne';
    two.className = 'line openTwo';
    three.className = 'line openThree';
    showNav();
  }
  else {
    one.className = 'line closeOne';
    two.className = 'line closeTwo';
    three.className = 'line closeThree';
    hideNav();
  }
})



//nav bar display functions
function showNav() { 
  nav.style.display = 'flex';
  setTimeout(() => {
    header.zIndex = '6';
    nav.style.left = '0'; 
    navIcon.style.position = 'fixed';
    navIcon.style.top = '2rem';
    navIcon.style.right = '1rem';
  }, 300);
}
function hideNav() {
   nav.style.left = '100%'; 
  setTimeout(() => {
    nav.style.display = 'none';
    navIcon.style.position = 'relative';
    navIcon.style.top = '0';
    navIcon.style.right = '0';
  }, 400);
  }




/*

- Display the nav bar when scrolled is decreassing. 

- Hide when the scrolled is increasing.


*/