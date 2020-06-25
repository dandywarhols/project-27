const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder;
var ball,ball2,ball3,ball4,ball5;
var ground;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground();  
  holder = new Holder();
  ball = new Ball(200,300,50);
  ball2 = new Ball(300,300,50);
  ball3 = new Ball(400,300,50);
  ball4 = new Ball(500,300,50);
  ball5 = new Ball(600,300,50);
  connector = new Connector({x:200,y:100},ball.body);
  connector2 = new Connector({x:300,y:100},ball2.body);
  connector3 = new Connector({x:400,y:100},ball3.body);
  connector4 = new Connector({x:500,y:100},ball4.body);
  connector5 = new Connector({x:600,y:100},ball5.body);
}


function draw() {
  background("black"); 
  Engine.update(engine);

  textSize(17);
  fill("lightyellow");
  textFont('alegren');
  text("Drag mouse to oscillate the pendulum to left and right with mouse",150,30);
  
  ground.display();
  holder.display();
  ball.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  connector.display();
  connector2.display();
  connector3.display();
  connector4.display();
  connector5.display();

  
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
//   Matter.Body.setPosition(ball2.body, {x: mouseX +200, y: mouseY});
//   Matter.Body.setPosition(ball3.body, {x: mouseX+400 , y: mouseY});
//   Matter.Body.setPosition(ball4.body, {x: mouseX +200, y: mouseY});
//   Matter.Body.setPosition(ball5.body, {x: mouseX+400 , y: mouseY});
  Matter.Body.setStatic(ball.body, false);
//   Matter.Body.setStatic(ball2.body, false);
//   Matter.Body.setStatic(ball3.body, false);
//   Matter.Body.setStatic(ball4.body, false);
//   Matter.Body.setStatic(ball5.body, false);
}