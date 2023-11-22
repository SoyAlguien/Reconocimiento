var detectados = false
var video_cargado = false
var objetos = []
function preload() {
  video = createVideo("Messi.mp4")
}
function video_listo() {
  video_cargado=true
  video.loop()
  video.volume(0.25)
}
function setup() {
  createCanvas(854,480);
  //video.hide()
  cocos = ml5.objectDetector("cocossd", listo)
}

function draw() {
  video.size(854,480)
  image(video, 0, 0,854,480);
  if (detectados&&video_cargado) {
    cocos.detect(video, respuesta)
    for (var i = 0; i < objetos.length; i++) {
      var elementos = objetos[i]
      noFill()
      strokeWeight(10)
      rect(elementos.x, elementos.y, elementos.width, elementos.height)
      strokeWeight(1)
      textSize(50)
      fill("red")
      text(elementos.label, elementos.x, elementos.y)
    }
  }
}
function listo() {
  console.log("modelo listo")
  detectados = true
}
function respuesta(error, resultados) {
  if (!error) {
    objetos = resultados
  }
}