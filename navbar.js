let navbarstatus = true;
document.getElementById("navbar-toggle-btn").addEventListener('click', function () {
    if (navbarstatus) {
        document.getElementById('buttons-box').style.display = 'flex';
        navbarstatus = false;
    } else {
        document.getElementById('buttons-box').style.display = 'none';
        navbarstatus = true;
    }
});


// Search


// Check Date Between Two Dates;
function CheckDate(date) {
    let initial_date = "1996-06-16";
    // let date = "2008-09-25";
    let final_date = [new Date().getFullYear(), addZero(new Date().getMonth() + 1), addZero(new Date().getDate())].join("-");;
    if (Number(initial_date.slice(0, 4)) <= Number(date.slice(0, 4)) && Number(final_date.slice(0, 4)) >= Number(date.slice(0, 4))) {
        if (Number(date.slice(0, 4)) == 1996) {
            if (Number(initial_date.slice(5, 7)) <= Number(date.slice(5, 7))) {
                if (Number(initial_date.slice(5, 7)) == 6) {
                    if (Number(initial_date.slice(8, 10)) <= Number(date.slice(8, 10))) {
                        return true;
                    } else {
                        return false;
                    }
                }
                return (true);
            } else {
                return (false);
            }
        }
        else if (Number(date.slice(0, 4)) == new Date().getFullYear()) {
            if (Number(date.slice(5, 7)) <= new Date().getMonth() + 1) {
                if (Number(date.slice(5, 7)) == new Date().getMonth() + 1) {
                    if (Number(date.slice(8, 10)) <= new Date().getDate()) {
                        return true;
                    } else {
                        return false;
                    }
                }
                return (true);
            } else {
                return (false);
            }
        } else {
            return (true);
        }
    } else {
        return (! true)
    }
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
// 
// Redirect on Search
//
document.getElementById("search-form-box").addEventListener("submit", function (e) {
    e.preventDefault();
    let date = (e.target[0].value);
    let a = document.createElement("a");
    a.href = `./navigator.html?query=${date}`;
    if (CheckDate(date)) {
        a.click();
    }
    else {
        ShowError("Date must be between Jun 16, 1995 and Jun 14, 2023");
    }
});
//

// 
document.getElementById("cancel-error").addEventListener("click", function () {
    document.getElementById("error-container").style.visibility = "none";
});
function ShowError(msg) {
    document.getElementById("error-msg").innerText = msg;
    document.getElementById("error-container").style.display = "flex";
    setTimeout(() => {
        document.getElementById("error-container").style.display = "none";
    }, 5000);
}
if(! navigator.onLine){
    ShowError("You are Offline");
}