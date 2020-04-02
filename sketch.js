
var sun,mercury,venus,earth,mars,jupiter,saturn,uranus,neptune,suni,mercuryi,venusi,earthi,marsi,jupiteri,saturni,uranusi,neptunei;


function preload(){

suni = loadImage(sun.jpg)
mercuryi = loadImage(mercury.jpg)
venusi = loadImage(venus.jpg)
earthi = loadImage(earth.jpg)
marsii = loadImage(mars.jpg)
jupiteri = loadImage(jupiter.jpg)

saturni = loadImage(saturn.jpg)

uranusi = loadImage(uranus.jpg)

neptunei = loadImage(neptune.jpg)


}




function setup() {
  createCanvas(4000,4000);
  //createSprite(400, 200, 50, 50);


  sun   =  createSprite(2000, 2000, 50, 50);
sun.addImage("sun",suni)


mercury   =  createSprite(2200, 2200, 50, 50);
mercury.addImage("mercury",mercuryi)


venus   =  createSprite(2400, 2400, 50, 50);
venus.addImage("venus",venusi)


earth   =  createSprite(2600, 2600, 50, 50);
earth.addImage("earth",earthi)


mars   =  createSprite(2800, 2800, 50, 50);
mars.addImage("mercury",marsi)


jupiter   =  createSprite(3000, 3000, 50, 50);
jupiter.addImage("jupiter",jupiteri)

saturn   =  createSprite(3200, 3200, 50, 50);
saturn.addImage("saturn",saturni)


uranus   =  createSprite(3400, 3400, 50, 50);
uranus.addImage("uranus",uranusi)


neptune   =  createSprite(3600, 3600, 50, 50);
neptune.addImage("neptune",neptunei)


}

function draw() {
  background("black");  
  drawSprites();
}