x=0;
y=0;

drawcircle='';
drawrect='';

var SR = window.webkitSpeechRecognition;
var Recog = new SR();

function start(){
    document.getElementById('status').innerHTML = 'Please Speak';
    Recog.start();
}
Recog.onresult = function(e){
console.log(e);
var GS = e.results[0][0].transcript;
document.getElementById('status').innerHTML = 'You spoke ' + GS;
if(GS == 'circle'){
    x = Math.floor(Math.random()* 900);
    y = Math.floor(Math.random()* 600);
    document.getElementById('status').innerHTML = 'Drawing a Circle';
    drawcircle = 'hi';
}

if(GS == 'rectangle'){
    x = Math.floor(Math.random()* 900);
    y = Math.floor(Math.random()* 600);
    document.getElementById('status').innerHTML = 'Drawing a Rectangle';
    drawrect = 'hi';
}
}

function setup(){
    var C1 = createCanvas(900,600);
}
function draw (){
if(drawcircle=='hi'){
    radius=100;
    circle(x, y, radius);
    document.getElementById('status').innerHTML = 'Circle is Drawn';
    drawcircle = '';
}
if(drawrect=='hi'){
    length = 70;
    height = 50;
    rect(x, y, length, height);
    document.getElementById('status').innerHTML = 'Rectangle is Drawn';
    drawrect = '';
}

}