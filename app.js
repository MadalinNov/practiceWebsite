//GLOBAL VARIABLES
// SIDEBAR
var menuButton=document.querySelector('.menu');
var closeMenuButton=document.querySelector('.close');
var sidebar=document.querySelector('.sidebar');
// INDEX SECTION
var videoPlay = document.querySelector('.play');
var videoPause = document.querySelector('.pause');
var video = document.querySelector('.showcase');
// ABOUT SECTION
var clock = document.querySelector('.time');
var date = document.querySelector('.date');


// EVENT LISTENERS
// INDEX SECTION
videoPlay.addEventListener('click', playVideo);
videoPause.addEventListener('click', pauseVideo);
// SIDEBAR
menuButton.addEventListener('click', showSidebar);
closeMenuButton.addEventListener('click', hideSidebar);
// WINDOW SIZE EVENT LISTENER
var heightOutput = document.querySelector('#height');
var widthOutput = document.querySelector('#width');

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
  var btnLargeScreen=document.querySelector('.btnLargeScreen');
  var btnSmallScreen=document.querySelector('.btnProductMobile');
  if(widthOutput<1025){
    btnLargeScreen.style.display='none';
    btnSmallScreen.style.display='block';
  }
}

window.onresize = reportWindowSize;
// FUNCTIONS

// SIDEBAR
function showSidebar(){
  date.style.display='none';
  clock.style.display='none';
  sidebar.style.display='block';
  menuButton.style.display='none';
  closeMenuButton.style.display='block';
}
function hideSidebar(){
  date.style.display='block';
  clock.style.display='block';
  sidebar.style.display='none';
  menuButton.style.display='block';
  closeMenuButton.style.display='none';
}
// INDEX SECTION
function playVideo(){
  video.play();
  videoPause.style.display='block';
  videoPlay.style.display='none';
}
function pauseVideo(){
  video.pause();
  videoPause.style.display='none';
  videoPlay.style.display='block';
}
// ABOUT SECTION
// clock
function updateTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  var tStr = hours + ':' + minutes;
  clock.innerHTML = tStr;
}
setInterval(updateTime, 1000);
//date
// For todays date;
Date.prototype.today = function() {
  return ((this.getDate() < 10) ? "0" : "") + this.getDate() + "/" + (((this.getMonth() + 1) < 10) ? "0" : "") + (this.getMonth() + 1) + "/" + this.getFullYear();
};
// For the time now
function updateDate() {
  var datetime = new Date().today();
  date.innerHTML = datetime;
}
setInterval(updateDate, 1000);
//PRODUCTS section
// Button Click Handler
if (document.body.addEventListener) {
  document.body.addEventListener('click', clickHandler, false);
} else {
  document.body.attachEvent('onclick', clickHandler); //for IE
}
function clickHandler(e) {
  e = e || window.event;
  var target = e.target || e.srcElement;
  var productZero=document.querySelector('.product0');
  var productOne=document.querySelector('.product1');
  var productTwo=document.querySelector('.product2');
  // Product One
  if (target.className.match(/btnProductOne/)) {
  if(productZero.style.display==='none'){
    productZero.style.display='block';
    productOne.style.display='none';
    productTwo.style.display='none';
  }else{
    productZero.style.display='none';
  }


// Product Two
} else if (target.className.match(/btnProductTwo/)) {
  if(productOne.style.display==='none'){
    productOne.style.display='block';
    productZero.style.display='none';
    productTwo.style.display='none';
  }else{
    productOne.style.display='none';
  }

  // Product Three
} else if (target.className.match(/btnProductThree/)) {
  if(productTwo.style.display==='none'){
    productTwo.style.display='block';
    productZero.style.display='none';
    productOne.style.display='none';
  }else{
    productTwo.style.display='none';
  }
}
}
