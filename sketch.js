const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;
var ground1;
var pig1;
var bird1;
var log1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(170,150,50,50);
    ground1 = new Ground(200, 380, 400, 20)
    pig1 = new Pig(200, 100);
    bird1 = new Bird(300, 200);
    log1 = new Log(50, 100, 50, PI/2);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground1.display();
    pig1.display();
    bird1.display();
    log1.display();
}