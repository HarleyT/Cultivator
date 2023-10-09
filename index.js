var width = 1024  
var height = 576
var canvas = document.getElementById('Cultivator');
var ctx = canvas.getContext('2d');
canvas.width = width
canvas.height = height

var image = new Image();
image.src="./img/Cultivator_Main.png";

image.onload = function() => {
    let loadedImageWidth = image.width;
    let loadedImageHeight = image.height;

    let scale_factor = Math.min(canvas.width/image.width,canvas.height/image.height);

    let newWidth = image.width * scale_factor;
    let newHeight = image.height * scale_factor;
    
    let x = (canvas.width/2) - (newWidth/2);
    let y = (canvas.height/2) - (newHeight/2);

    ctx.drawImage(image, x, y, newWidth, newHeight);
    console.log('image loaded');
}