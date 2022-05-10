//------obteniendo los id de los elementos html---------
var texto=document.getElementById("box-text");
var boton=document.getElementById("botoncito");
var lienzo=document.getElementById("cajita");
var color=document.getElementById("colorcito");

//-----obteniendo los atributos del canvas---------
var ancho=parseInt(lienzo.width)
var alto=parseInt(lienzo.height)

var papel=lienzo.getContext("2d");

//---variables---
var teclas={
  UP:38,
  DOWN:40,
  LEFT:37,
  RIGTH:39  
}


var coordenadas=lienzo.getBoundingClientRect();
lienzoRigth=coordenadas.right
lienzoLeft=coordenadas.left
lienzoTop=coordenadas.top
lienzoBottom=coordenadas.bottom

console.log(coordenadas.top)
console.log(coordenadas.bottom)
console.log(coordenadas.right)
console.log(coordenadas.left)
console.log(coordenadas.height)
console.log(coordenadas.width)

document.addEventListener("mousedown",mouseclick)
document.addEventListener("mouseup",mouseclick2)

function mouseclick(evento){
  var selectColor=color.value

  if(evento.clientX>=lienzoLeft && evento.clientX<=lienzoRigth && evento.clientY>=lienzoTop && evento.clientY<=lienzoBottom){
    
    papel.beginPath();
    console.log(evento.clientX-lienzoTop)
    console.log(evento.clientX)
    papel.strokeStyle=selectColor
    papel.moveTo(evento.clientX,evento.clientY-lienzoTop)

    
  }
  console.log(evento.clientY)

}

function mouseclick2(event){
  if(event.clientX>=lienzoLeft && event.clientX<=lienzoRigth && event.clientY>=lienzoTop && event.clientY<=lienzoBottom){

    papel.lineTo(event.clientX,event.clientY-lienzoTop)
    papel.stroke()
    papel.closePath()
  }
  console.log(event.clientY)

}


var a=document.getElementById("contenedor")
var ah=document.getElementById("contenedor-hijo")
a.addEventListener('mouseenter', ab)

a.addEventListener('mouseleave', abc)

function ab(){
  ah.style.background='#000';
}
function abc(){
  ah.style.background='grey';
}


//-----convirtiendo el canvas en formato 2d-----------



//--------creando eventos---------
// document.addEventListener("mousedown",mouseclick)



// var a=250;
// var b=250;

// //---------funcion cuando el usuario apreta una tecla---------
// function pressKey(event){
//   var selectColor=color.value
//   papel.beginPath()
//   papel.strokeStyle=selectColor
//   papel.moveTo(a,b)

//   var avanceX=0;
//   var avanceY=0;
//   switch(event.keyCode){
//     case teclas.UP:
//       avanceX=0;
//       avanceY=-100;
//       break
//     case teclas.DOWN:
//       avanceX=0;
//       avanceY=100;
//       break
//     case teclas.LEFT:
//       avanceX=-100;
//       avanceY=0;
//       break
//     case teclas.RIGTH:
//       avanceX=100;
//       avanceY=0;
//       break
//   }
//   a=a+avanceX
//   b=b+avanceY
//   papel.lineTo(a,b)
//   papel.stroke()
// }

//---------funcion para dibujar en el canvas---------------
// function draw(){
  
//   papel.clearRect(0,0,lienzo.width,lienzo.height) //resetea el lienzo

//   var selectColor=color.value; //obtiene el color
//   var cantidadLineas=ancho/parseInt(texto.value) //obtiene el valor de la caja de texto

//   papel.beginPath();
//   //bucle para dibujar en el lienzo
//   for(var i=0;i<=ancho;i++){
//     papel.strokeStyle=selectColor
//     papel.moveTo(0,cantidadLineas*i);
//     papel.lineTo(cantidadLineas*i+cantidadLineas,alto);
//     papel.stroke();
//     papel.closePath();
//   }
// }


//------funcion para dibujar con el teclado







