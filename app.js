const canvas = document.getElementById('jsCanvas');
let painting = false;
const ctx = canvas.getContext('2d');
ctx.strokeStyle = 'black';
ctx.lineWidth = 2.5;
canvas.width = 500;
canvas.height = 500;

function stopPainting(){
    painting = false;
}
function startPainting(){
    painting = true;
}
function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x, y);
    }
    else{
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}
function onMouseDown(event){
    startPainting();
}


if (canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("mouseup", stopPainting);
}