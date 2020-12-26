const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var world, engine;
var ground, ball; 



function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  var options ={
    isStatic : true
  }
  ground = Bodies.rectangle(200, 390, 200, 20, options);
  World.add(world, ground);

  var ball_options ={
    restitution : 1.0
  }
  ball = Bodies.circle(200, 100, 20, ball_options);
  World.add(world, ball);
}

function draw() {
  background("black");  

  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y, 400, 20);
  
  ellipseMode(CENTER);
  ellipse(ball.position.x, ball.position.y, 20, 20);
}