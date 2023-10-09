var width = 1123    
var height = 794
var canvas = document.getElementById('Cultivator');
var ctx = canvas.getContext('2d');
canvas.width = width
canvas.height = height

var image = new Image();
image.src="./img/Cultivator_Main.png";

image.onload = function() {
    ctx.drawImage(image,0,0);
    console.log('image loaded');
}