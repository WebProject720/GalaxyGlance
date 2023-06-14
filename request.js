function ShowError(msg) {
    document.getElementById("error-msg").innerText = msg;
    document.getElementById("error-container").style.display = "flex";
    setTimeout(() => {
        document.getElementById("error-container").style.display = "none";
    }, 5000);
}






let Hdurl = [];

// import { error } from "console";
import { template } from "./template.js";
export async function getData() {
    let request = "https://api.nasa.gov/planetary/apod?api_key=3Rc60K0tWQ2o30fNBiepniHJytEbf1wkX0c7YgU6&count=" + 20;
    await fetch(request).then((respond_01) => {
        return respond_01.json();
    }).then((respond_02) => {
        let result = GetHDimage(respond_02);
        return result;
    });
}
async function GetHDimage(obj) {
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].media_type == 'image' && obj[i].hdurl != undefined) {
            Hdurl.push(obj[i].hdurl);
        }
    }
    return Hdurl;
}
export { Hdurl };
export async function GetCountData(count) {
    let date_today = new Date().GetShortDateToday();
    if (count == undefined) {
        count = 40;
    }
    //loading event set
    let requestLink = "https://api.nasa.gov/planetary/apod?api_key=ZJzSx852zoXoC6aqnVKn0DJriJBOGQ7YG3JENssK&count=" + count;
    // let requestLink = "https://api.nasa.gov/planetary/apod?api_key=3Rc60K0tWQ2o30fNBiepniHJytEbf1wkX0c7YgU6&start_date=" + date_today + "&end_date=" + date_today + "";
    fetch(requestLink).then((json) => {
        return json.json();
    }).then((object) => {
        //loading Event
        document.getElementById("main-container").style.display = "flow-root";
        //disable loading Event
        let DotLoadingEvent = document.getElementById("dot-loading-event").style;
        DotLoadingEvent.display = "none";

        for (let i = 0; i < object.length; i++) {
            object[i].FullDate = new Date().GetFullDate(object[i].date);
            if((object[i].explanation).search("digg_url")!=-1){
                object[i].explanation=(object[i].explanation).slice(0,(object[i].explanation).search("digg_url"));
            }
            document.getElementById("main-container").innerHTML += template(object[i]);
        }
        return object;
    }).catch(error=>{
        ShowError(error);
    })
}
export let GetShortDateToday = Date.prototype.GetShortDateToday = (d) => {
    let today_date;
    if (d == undefined) {
        today_date = new Date();
    } else {
        today_date = d;
    }
    let date = (today_date.getDate());
    let year = (today_date.getFullYear());
    let month = (today_date.getUTCMonth() + 1);
    date = addZero(date);
    month = addZero(month);
    let date_today = [year, month, date].join("-");
    return date_today;
}
function addZero(num) {
    num = Number(num);
    if (num <= 9) {
        num = "0" + num;
    } else {
        num = num;
    }
    return num;
}
export let MinusDay = Date.prototype.MinusDay = (days) => {
    return (new Date(new Date().valueOf() - days * 24 * 60 * 60 * 1000));
}

export let GetFullDate = Date.prototype.GetFullDate = (date) => {
    let month = Number(date.slice(5, 7));
    let Day = date.slice(8, 10);
    let year = date.slice(0, 4);
    switch (month) {
        case 1:
            month = ("January");
            break;
        case 2:
            month = ("February");
            break;
        case 3:
            month = ("March");
            break;

        case 4:
            month = ("April");
            break;

        case 5:
            month = ("May");
            break;

        case 6:
            month = ("June");
            break;

        case 7:
            month = (" July");
            break;
        case 8:
            month = ("August");
            break;
        case 9:
            month = ("September");
            break;
        case 10:
            month = ("Octomber");
            break;
        case 11:
            month = ("November");
            break;
        case 12:
            month = ("December");
            break;
        default:
            month = ("");
            break;
    }
    return (Day + " " + month + " " + year);
}