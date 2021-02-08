console.log("research log");

var canvas;
var ctx;
var w = 1300;
var h = 550;


setUpCanvas();



function setUpCanvas(){
    canvas = document.querySelector("#myCanvas");
    ctx = canvas.getContext("2d");
    canvas.width = w;
    canvas.height = h;
    canvas.style.border = "50px solid lightsteelblue";
    // ctx.fillStyle = "lightslategrey";
    ctx.fillRect(0,0, canvas.width, canvas.height);
}
