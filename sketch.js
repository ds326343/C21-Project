var speed,weight,bullet,wall
var deformation


function setup(){
createCanvas(1200,400)
speed=random(223,321)
weight=random(30,52)
thickness=random(22,83);
bullet = createSprite(50,200,50,5)
bullet.velocityX=speed
bullet.shapeColor="white"
wall = createSprite(1000,200,thickness,height/2)
wall.shapeColor="white"
}




function draw(){
background(0);

if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    deformation=0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(deformation<10){
        wall.shapeColor="green"
    }
    
    if(deformation>10){
        wall.shapeColor="red"
    }



}
drawSprites()

}
function hasCollided(bullet1,wall1){
    bulletRightEdge=bullet1.x+bullet1.width;
    wallLeftEdge=wall1.x;
    if(bulletRightEdge>=wallLeftEdge){
        return true
    }
    else return false 

}
