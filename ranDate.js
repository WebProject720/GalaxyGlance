//Function for get random  year
function Getyear() {
    let year;
    let i=false;
    do {
        year =Math.floor((Math.random() * 10000));
        if(year>1965 && year<new Date().getFullYear()){
            i=true;
        }
    } while (i!=true);
    return year;
}
//Function for get random month
function Getmonth(){
    let month;
    let i=false;
    do {
        month =Math.floor((Math.random() * 100));
        if(month>0 && month<12){
            i=true;
        }
    } while (i!=true);
    if(month>=1&&month<=9){
        month=('0'+month);
    }
    // console.log(month);
    return month;
}


function Getday(){
    let day;
    let i=false;
    do {
        day =Math.floor((Math.random() * 100));
        if(day>0 && day<31){
            i=true;
        }
    } while (i!=true);
    if(day>=1&&day<=9){
        day=('0'+day);
    }
    // console.log(day);
    return day;
}

function Getdate(){
    let day=Getday();
    let month=Getmonth();
    let year=Getyear();
    if(month==2 && day>27){
        month++;
    }
    let date=(month+"-"+day+"-"+year);
    // console.log(date);
    return date;
}
function GetDateArray(n){
    let date;
    let dateArr=[];
    for (let i = 0; i < n; i++) {
        date=Getdate();
        dateArr.push(date);
    }
    console.log(dateArr);
}
GetDateArray(20);