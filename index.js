window.addEventListener("load", () => {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d')
    const image = new Image()
        image.src = './img/Cultivator_Main.png'

});
canvas.width = 1024
canvas.height = 576

ctx.fillStyle = 'white'
ctx.fillRect(0, 0, canvas.width, canvas.height)

console.log(image)
