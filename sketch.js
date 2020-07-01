const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

var ball;
var ball2;

function setup(){
    var canvas = createCanvas(400,400);

    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    var ball_options ={
    restitution: 0.5

    }
    ball = Bodies.circle(100,250,15,ball_options);
    World.add(world,ball);

    var ball2_options ={
        isStatic: true
    }

    ball2 = Bodies.circle(200,150,20);
    World.add(world,ball2);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,15,15);

    ellipseMode(RADIUS);
    ellipse(ball2.position.x,ball.position.y,20,20);

}
