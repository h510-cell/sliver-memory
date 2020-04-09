const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
var enemy,enemy1,enemy2,enemy3,enemy4 ;
var target;
var bullet;

var gameState="ontarget";
var score=0;


function setup(){
    var canvas=createCanvas(400,400);
    engine=Engine.create();
    world=engine.world;

    enemy=new Enemy(180,350);
    enemy1=new Enemy(180,150);
    enemy2=new Enemy(330,350);
    enemy3=new Enemy(330,150);
    enemy4=new Enemy(330,250);
    target=new Target(200,200);
    bullet=new Bullet(200,200)


}

function draw(){
    background(0);
    noStroke();
    textSize(35)
    fill("white")
    text("Score"+score,width-300,50)
    
    Engine.update(engine);
    //strokeWeight(4);
    enemy.display();
    enemy.score();
    enemy1.display();
    enemy1.score();
    enemy2.display();
    enemy2.score();
    enemy3.display();
    enemy3.score();
    enemy4.display();
    enemy4.score();
    target.display();
    bullet.display();
}
function mouseDragged(){
    //if (gameState!=="ontarget"){
        Matter.Body.setPosition(target.body, {x: mouseX , y: mouseY});
    //}
function mouseReleased(){
    target.shoot();
    gameState = "ontarget";
}
function keyPressed(){
    if(keyCode === 32){
        target.trajectory = [];
        Matter.Body.setPosition(target.body,{ x:200,y:200});
       target.attach(target.body);
    }
}

}