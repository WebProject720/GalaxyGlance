import { getData, Hdurl,GetCountData } from '/HOME PAGE/JS/request.js';
(GetCountData(30));
let DotLoadingEvent=document.getElementById("dot-loading-event").style;
document.getElementById("show-more-image").addEventListener('click',function(){
    DotLoadingEvent.display="flex";
    (GetCountData(20));
});
