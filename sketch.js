const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,bar,ground;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options={
    isStatic : true
  }
  var bar_options={
    isStatic: true
  }

  var ball_options = {

  restitution : 1.0,
  density : 2.0

}
ground = Bodies.rectangle(200,400,400,20,ground_options)
World.add(world,ground);

bar = Bodies.rectangle(200,20,200,20,bar_options);
World.add(world,bar);

ball  = Bodies.circle(220,200,40,ball_options);
World.add(world,ball);

var options = {
  bodyA : ball,
  bodyB : bar,
  stiffness: 0.01,
  length : 200
}
var line = Constraint.create(options);
World.add(world,line);

}

function draw() {
  background(0); 
  Engine.update(engine);

fill ("blue");
rectMode(CENTER);
rect(bar.position.x,bar.position.y,300,20);

fill(0);
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);

fill("yellow");
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,40);

strokeWeight(5);
stroke("red")
line(ball.position.x,ball.position.y,bar.position.x,bar.position.y)
  
if(keyCode === 32){
ball.position.x = mouseX;
ball.position.y = mouseY;
}

else if (keyCode === ENTER){
ball.position.x = 200;

}

}
