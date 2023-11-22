var detectados=false
var objetos=[]
function setup() {
  createCanvas(640, 480);
  video=createCapture(VIDEO)
  video.hide()
cocos=ml5.objectDetector("cocossd",listo)
}

function draw() {
  //video.size(640,480)
  image(video,0,0,640,480);
  if(detectados){
      cocos.detect(video,respuesta)
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
      detectados=true
}
function respuesta(error,resultados){
  if(!error){
     objetos=resultados
     }
}