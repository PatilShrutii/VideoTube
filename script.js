//ithe basically side bar chya menu chi css property anhe ani jevha apn 
//sidebar icon click kru tevha tyala smallSlideBar chi css property lagayla hvi
//same as for side bar ane smallSlideBar
var menuIcon = document.querySelector(".menuIcon");
var sideBar = document.querySelector(".sideBar");
var container = document.querySelector(".container");

menuIcon.onclick = function(){
    sideBar.classList.toggle("smallSideBar");
    container.classList.toggle("largeContainer");
}




    

