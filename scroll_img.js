import { getData, Hdurl } from './request.js';
 
const image = document.getElementById("image-container");
const title = document.getElementById("title");
const description = document.getElementById("description");
const publishDate = document.getElementById("publish-date");
const copywriter = document.getElementById("copywriter");
let date = (new Date().getDate());
let year = (new Date().getFullYear());
let month = (new Date().getUTCMonth() + 1);
function addZero(num) {
    num = Number(num);
    if (num <= 9) {
        num = "0" + num;
    } else {
        num = num;
    }
    return num;
}
date = addZero(date);
month = addZero(month);

//creating a loading event elements
let section_today_image = document.getElementById("loading-event-box");
let container_today_img = document.getElementById("content");
const loading_container = document.createElement("div");
loading_container.setAttribute("class", "loading");
const loading_container_2 = document.createElement("div");
const loading_container_3 = document.createElement("div");
loading_container_2.setAttribute("class", "loading-box");
loading_container_3.setAttribute("class", "loading-box-2");
loading_container_2.append(loading_container_3);
loading_container.append(loading_container_2);
section_today_image.appendChild(loading_container);
let date_today = new Date().GetShortDateToday();
// date_today = "2009-06-29";
// date_today = "2007-03-03";
// date_today = "2018-04-24";
// date_today = "2008-02-28";
let day = 1;
function GetTodayData(date_today) {
    // fetch("https://api.nasa.gov/planetary/apod?api_key=ZJzSx852zoXoC6aqnVKn0DJriJBOGQ7YG3JENssK&start_date=" + date_today + "&end_date=" + date_today + "")
    fetch("https://api.nasa.gov/planetary/apod?api_key=3Rc60K0tWQ2o30fNBiepniHJytEbf1wkX0c7YgU6&start_date=" + date_today + "&end_date=" + date_today + "")
        .then(response => response.json())
        .then(data => {
            document.getElementById("intro-web").style.display = "unset";
            let object = data;
            for (let i = 0; i < object.length; i++) {
                if ((object[i].explanation).search("digg_url") != -1) {
                    object[i].explanation = (object[i].explanation).slice(0, (object[i].explanation).search("digg_url"));
                }
                object[i].FullDate = new Date().GetFullDate(object[i].date);
                if (object[i].media_type == "other") {
                    object[i].url = "<img class='full-screen' id='image' src='/IMAGES/no-image-available.jpeg' alt='Space Image'></img>";
                } else if (object[i].media_type == "video") {
                    object[i].url = "<iframe class='image full-screen' src=" + object[i].url + " frameborder='0'></iframe>";
                } else if (object[i].media_type == "image") {
                    object[i].link = object[i].url;
                    object[i].url = "<img class='full-screen' id='image' src=" + object[i].url + " alt='Space Image'></img>";
                }
                document.getElementById("full-screen-container").innerHTML = object[i].url;
            }
            section_today_image.removeChild(loading_container);
            container_today_img.style.display = "flex";
            data = data[0];
            image.innerHTML = data.url;
            title.innerText = data.title;
            description.innerText = data.explanation;
            publishDate.innerHTML = "Publish On : <b>" + data.FullDate + "</b>";
            if (data.copyright == undefined) {
                copywriter.innerHTML += "";
            } else {
                copywriter.innerHTML = "Image Credit : <b>" + data.copyright + "</b>";
            }
            // Set Image as Full Screen
        })
        .catch(error => {
            console.log(error);
            if (day <= 6) {
                GetTodayData((new Date().MinusDay(day)).GetShortDateToday(new Date().MinusDay(1)));
                day++;
            }
        });
}
GetTodayData(date_today);
