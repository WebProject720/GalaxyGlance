let CancelBtn=document.getElementById("cancel-btn");
let CancelBtn_2=document.getElementById("error-cancel");
x=30;
y=30;
context="";
CancelBtn.height=x;
CancelBtn.width=y;
context=CancelBtn.getContext('2d');
context.strokeStyle='gray';
context.fillStyle='gray';
context.lineWidth=8;

context.beginPath();
context.moveTo(0, 0);
context.lineTo(x, y);
context.stroke();

context.beginPath();
context.moveTo(x, 0);
context.lineTo(0, y);
context.stroke();

// Error Cancel Button
x=30;
y=30;
context="";
CancelBtn_2.height=x;
CancelBtn_2.width=y;
context=CancelBtn_2.getContext('2d');
context.strokeStyle='black';
context.fillStyle='black';
context.lineWidth=8;

context.beginPath();
context.moveTo(0, 0);
context.lineTo(x, y);
context.stroke();

context.beginPath();
context.moveTo(x, 0);
context.lineTo(0, y);
context.stroke();

