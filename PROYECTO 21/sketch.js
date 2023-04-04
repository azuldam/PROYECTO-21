
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var suelo
var pared1
var pared2

function setup() {
	createCanvas(2000, 1000);


	engine = Engine.create();
	world = engine.world;

	var ball_options={

		isStatic: false,
		restitution: 0.3,
        friction: 3,
		density: 1.2,
	}

	//crear los cuerpos aquí.
	ball = Bodies.circle(50, 20, 30, ball_options)
	World.add(world, ball);

	suelo = new Ground(width/2, 950, width, 20);
	pared1 = new Ground(1100, 865, 30, 150)
	pared2 = new Ground(1400, 865, 30, 150)

	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  suelo.display();
  pared1.display();
  pared2.display();

  ellipse(ball.position.x, ball.position.y, 30, 30)
 
}


function keyPressed () {

if (keyCode === UP_ARROW){

	Matter.Body.applyForce(ball, ball.position, {x:30, y: -60})
}
}

