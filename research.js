console.log("research log");

var canvas;
var ctx;
var w = 1300;
var h = 550;
var rectangles = [];
document.querySelector("#myCanvas").onmousemove = move;



setUpCanvas();
animationLoop();




// GRADIENT
var grd = ctx.createLinearGradient(10,10, canvas.width, canvas.height);
grd.addColorStop(0,"royalblue");
grd.addColorStop(1,"darkblue");


function animationLoop(){
    clear();
    ctx.fillStyle = grd;
    ctx.fillRect(0,0, canvas.width, canvas.height);
    for(var i = 0; i<rectangles.length; i++){
        rect(rectangles[i]);
        forward(rectangles[i],7);
        turn(rectangles[i], 4);
        
    }
    requestAnimationFrame(animationLoop);
}

function move(event){
    addRectangles(rectangles, event.offsetX, event.offsetY);
}


function addRectangles(a,x,y){
    a.push({
        "x": x,
        "y": y,
        "w": 30,
        "h": 5+rand(5),
        "c": 220+rand(30),
        "a": 0.8+rand(0.2),
        "d": rand(10),
        "angle": 50+rand(150),
        "changle": 8,
    })
}

function clear(){
    ctx.clearRect(0,0,w,h);
}

function turn(o, angle){
    if(angle != undefined){
        o.changle = angle;
    };
    o.angle += o.changle;
}

function forward(o,d){
    var changeX;
    var changeY;
    var oneDegree = Math.PI/180;
    if(d != undefined){
        o.d = d;
    };
    changeX = o.d*Math.cos(o.angle*oneDegree);
    changeY = o.d*Math.sin(o.angle*oneDegree);
    o.x += changeX;
    o.y += changeY;
}
function bounce(o){
    if(o.x > w || o.x < 0){
        turn(o, 180-2*o.angle);
    };
    if(o.y > h || o.y < 0){
        turn(o, 360-2*o.angle);
    }
}

function circle(o){
    ctx.beginPath();
    ctx.arc(o.x,o.y,o.r,0,2*Math.PI);
    ctx.fillStyle = "hsla("+o.c+",100%,50%,"+o.a+")";
    ctx.fill();
}


function rect(o){
    var x = o.x;
    var y = o.y;
    var a = o.angle;
    var d = o.d;


    turn(o,180);
    forward(o,o.w/2);
    turn(o,90);
    forward(o,o.h/2);
    turn(o,90);
    ctx.beginPath();
    ctx.moveTo(o.x,o.y);
    forward(o, o.w); 
    ctx.lineTo(o.x,o.y);
    turn(o, 90);
    forward(o, o.h);
    ctx.lineTo(o.x,o.y);
    turn(o, 90);
    forward(o, o.w);
    ctx.lineTo(o.x,o.y);
    turn(o,90);
    forward(o,o.h);
    ctx.lineTo(o.x,o.y);
    ctx.fillStyle = "hsla("+o.c+",100%,30%,"+o.a+")";
    ctx.fill();

    o.x = x;
    o.y = y;
    o.angle = a;
    o.d = d;
}

// RANDOM FUNCTIONS
function randn(r){
    var result = Math.random()*r - r/2;
    return result
}
function randi(r){
    var result = Math.floor(Math.random()*r);
    return result
}
function rand(r){
    var result = Math.random()*r;
    return result
}

function setUpCanvas(){
    canvas = document.querySelector("#myCanvas");
    ctx = canvas.getContext("2d");
    canvas.width = w;
    canvas.height = h;
    canvas.style.border = "50px solid lightsteelblue";
    // ctx.fillStyle = "lightslategrey";
    ctx.fillRect(0,0, canvas.width, canvas.height);
}
