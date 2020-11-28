const canvas = document.getElementById('jsCanvas');
const colors = document.getElementsByClassName('jsColor');
const range = document.getElementById('jsRange');
const mode = document.getElementById("jsMode");
const save = document.getElementById("jsSave");
let painting = false;
const ctx = canvas.getContext('2d');
const INITIAL_COLOR = 'black;'
ctx.fillStyle = 'white';
ctx.fillRect(0,0,500,500);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
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
function handleCM(event){
    event.preventDefault();
}
function handleColorClick(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;

}

if (canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("contextmenu", handleCM);
}

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick))

function handleRange(event){
    console.log(event.value);
}

function handleRange(event){
    ctx.lineWidth = event.target.value;
}
if(range){
    range.addEventListener("input", handleRange);
}

var filling = new Boolean(false);

function handleMode(event){
    if(filling === false){
        mode.innerText = "Paint";
        ctx.fillRect(0,0,500,500);
    }
    else{
        mode.innerText = "Fill";
    }
    filling = !filling;
}
if(mode){
    mode.addEventListener("click", handleMode);
}

function handleSave(event){
    const image = canvas.toDataURL("image/jpeg");
    const link = document.createElement("a");
    link.href = image;
    link.download = "hello.";
    link.click();
}
if(save){
    save.addEventListener("click", handleSave);
}