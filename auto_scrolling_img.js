let Total_img_width = document.getElementById("auto-scroll-img-container").scrollWidth;
let ani_sty = document.createElement('style');
function AnimationScroll(Total_img_width) {
    let Anime = `
    @keyframes scrollImage {
        0%{
            transform: translateX(0px);
        }100%{
            transform: translateX(${Total_img_width}px);
        }
    }
    `;
    ani_sty.append(Anime);
    document.head.append(ani_sty);
}











import { getData, Hdurl } from './request.js';
await getData();
let bg_img_arr = ['https://apod.nasa.gov/apod/image/2303/_GHR3094-venerelunafirma.jpg', 'https://apod.nasa.gov/apod/image/2303/Doodad200mmAPOD.jpg', '/IMAGES/pexels-photo-1048039.jpg', 'https://apod.nasa.gov/apod/image/2303/pressdracowithspacecraft1_1.jpg', 'https://apod.nasa.gov/apod/image/2303/my_hero_rot.jpg', 'https://apod.nasa.gov/apod/image/2303/ana03BennuVantuyne1465c.jpg', 'https://apod.nasa.gov/apod/image/2303/hyperion_cassini_1024.jpg', 'https://apod.nasa.gov/apod/image/2303/RainbowTree_Houck_3198.jpg', 'https://apod.nasa.gov/apod/image/2303/Soul_Jimenez_3940.jpg', 'https://apod.nasa.gov/apod/image/2303/JupiterVenus_Luy_5496.jpg', 'https://apod.nasa.gov/apod/image/2303/NGC5139_Omega_Centauri_3700px.jpg', 'https://apod.nasa.gov/apod/image/2303/medusaNeb.jpg'];
bg_img_arr = [];

//Auto Scrolling image
let Img_container = document.getElementById("auto-scroll-img-container");
Hdurl.forEach(element => {
    bg_img_arr.push(element);
});
bg_img_arr.forEach(element => {
    Img_container.innerHTML += "<img class='scrolling-nav-img' src=" + element + " alt=''></img>"
});




//
let image = document.querySelectorAll(".scrolling-nav-img");



let setIntervalValue = 0;
var IntervalID = setInterval(() => {
    image.forEach(element => {
        if (Total_img_width < document.getElementById("auto-scroll-img-container").scrollWidth) {
            Total_img_width = document.getElementById("auto-scroll-img-container").scrollWidth
            AnimationScroll(Total_img_width - window.innerWidth)
        }
    });
    setIntervalValue++;
    if (setIntervalValue >= 1500) {
        StopInterval();
    }
}, 5);
function StopInterval() {
    clearInterval(IntervalID)
}

// Scrolling on Button Click
// document.getElementById("left-scroll").addEventListener("click", function () {
//     image.forEach(e=>{
//         // e.style.translate(-1500);
//         // e.style.width("100px");
//         console.log(e.style)
//     })
//     setTimeout(() => {
//     }, 2000);
// });
