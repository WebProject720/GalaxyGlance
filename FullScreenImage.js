let FullScreenBtn = document.getElementById("full-screen-image");
let x = 30;
let y = 30;
FullScreenBtn.height = x;
FullScreenBtn.width = y;
context="";
context = FullScreenBtn.getContext('2d');
context.strokeStyle = 'gray';
context.lineWidth = 8;


context.beginPath();
context.moveTo(0, 0);
context.lineTo(x / 2 + 2, 0);
context.stroke();

context.beginPath();
context.moveTo(0, 0);
context.lineTo(0, y / 2 + 2);
context.stroke();

context.beginPath();
context.moveTo(x, y);
context.lineTo(x, y / 2 - 2);
context.stroke();

context.beginPath();
context.moveTo(x, y);
context.lineTo(x / 2 - 2, y);
context.stroke();

// Logic FullScreen Section
let FullScreenBtn_ = document.getElementById("btn-full-screen");
let Full_Screen_Section = document.getElementById("full-screen-section").style;
let navbar=document.querySelector("nav").style;
let header=document.querySelector(".scrolling-image-section").style;
let main_tag=document.querySelector("main").style;
FullScreenBtn_.addEventListener('click', function () {
    Full_Screen_Section.display = "unset";
    header.opacity="0.4";
    main_tag.opacity="0.4";
    navbar.opacity="1";
    document.body.style.overflow="hidden";
});
document.getElementById("cancel-btn").addEventListener('click',function(){
    Full_Screen_Section.display = "none";
    header.opacity="1";
    main_tag.opacity="1";
    document.body.style.overflow="unset";

});






