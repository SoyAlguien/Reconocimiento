var detectados=false
function setup() {
  createCanvas(600, 400);
cocos=ml5.objectDetector("cocossd",listo)
}
function preload(){
  imagen=loadImage("dog_cat.jpg")
}
function draw() {
  imagen.resize(600,400)
  image(imagen,0,0);
  if(detectados){
     for(var i=0;i<objetos.length;i++){
       var elementos=objetos[i]
        noFill()
  strokeWeight(10)
  rect(elementos.x,elementos.y,elementos.width,elementos.height)
       strokeWeight(1)
       textSize(50)
         fill("red")
       text(elementos.label,elementos.x,elementos.y)
     }
     }
}
function listo(){
  console.log("modelo listo")
  cocos.detect(imagen,respuesta)
}
function respuesta(error,resultados){
  if(!error){
     objetos=resultados
    detectados=true
     }
}