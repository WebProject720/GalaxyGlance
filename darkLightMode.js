var boolean__;
if (sessionStorage.getItem("boolean__") == null) {
    sessionStorage.setItem("boolean__", 1);
}
boolean__ = Number(sessionStorage.getItem("boolean__"));


let canvas = document.getElementById("dark-light-mode");
let x__ = 40;
let initial_color = "white";
let final_color = "black";
let border = "gray"
canvas.width = x__;
canvas.height = x__;
let context_1 = canvas.getContext('2d');
context_1.fillStyle = 'transparent';
context_1.strokeStyle = border;
context_1.beginPath();
context_1.lineWidth = 5;
context_1.arc(x__ / 2, x__ / 2, x__ / 2 - 4, Math.PI / 180 * 0, Math.PI / 180 * 360, false);
context_1.stroke();

DrawHalfCircle = () => {
    context_1.strokeStyle = 'transparent';
    context_1.beginPath();
    context_1.arc(x__ / 2, x__ / 2, x__ / 2 - 5, Math.PI / 180 * 180, Math.PI / 180 * 360, true);
    context_1.fillStyle = final_color;
    context_1.fill();
    context_1.stroke();
    context_1.strokeStyle = 'transparent';
    context_1.beginPath();
    context_1.arc(x__ / 2, x__ / 2, x__ / 2 - 5, Math.PI / 180 * 180, Math.PI / 180 * 360, false);
    context_1.fillStyle = initial_color;
    context_1.fill();
    context_1.stroke();
}

// First style
let Style_tag = document.createElement("link");
Style_tag.setAttribute("rel", "stylesheet");
Style_tag.href = "./body.css";
DrawHalfCircle();
// second Style
let dark_bg = document.createElement("link");
dark_bg.setAttribute("rel", "stylesheet");
dark_bg.href = "./dark.css";

if (boolean__ == 2) {
    document.head.append(Style_tag);
    initial_color = "#264141";
    final_color = "white";
    DrawHalfCircle();
    boolean__ = 2;
    window.sessionStorage.setItem("boolean__", 2);
}
else if (boolean__ == 3) {
    document.head.append(dark_bg);
    initial_color = "black";
    final_color = "white";
    DrawHalfCircle();
    boolean__ = 4;
    window.sessionStorage.setItem("boolean__", 3);
}
document.getElementById("darkLightMode").addEventListener('click', function () {
    if ((boolean__) == 1) {
        document.head.append(Style_tag);
        initial_color = "#264141";
        final_color = "white";
        DrawHalfCircle();
        boolean__ = 2;
        window.sessionStorage.setItem("boolean__", 2);
    } else if (boolean__ == 2) {
        document.head.removeChild(Style_tag);
        initial_color = "white";
        final_color = "black";
        DrawHalfCircle();
        boolean__ = 3;
        window.sessionStorage.setItem("boolean__", 1);
    } else if (boolean__ == 3) {
        document.head.append(dark_bg);
        initial_color = "black";
        final_color = "white";
        DrawHalfCircle();
        boolean__ = 4;
        window.sessionStorage.setItem("boolean__", 3);
    }else if(boolean__==4){
        document.head.removeChild(dark_bg);
        initial_color = "white";
        final_color = "#264141";
        DrawHalfCircle();
        boolean__ = 1;
        window.sessionStorage.setItem("boolean__", 1);
    }
});


