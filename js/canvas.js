
var escala=0.2;//tamano en escala

var c=document.getElementById("icon");
var ctx=c.getContext("2d");
ctx.fillStyle=("black");
ctx.beginPath();//arranco un recorrido
ctx.arc(escala*50,escala*25,escala*20,0,Math.PI*2,true);
ctx.closePath;//cierra la forma
ctx.fill();//rellena con el color seleccionado

ctx.fillStyle=("black");
ctx.beginPath();//arranco un recorrido
ctx.arc(escala*50,escala*90,escala*40,Math.PI,Math.PI*2,false);
ctx.closePath;//cierra la forma
ctx.fill();//rellena con el color seleccionado

