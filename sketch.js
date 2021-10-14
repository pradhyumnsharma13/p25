
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var  ground,ball

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	// 3 rectangle and 1 circle body
	var options= {
		isstatic:false,restitution:0.7, density:1.2 , friction:0
	}
	ball = Matter.Bodies.circle(100,100,20,options )
    World.add(world,ball)
	ground = new Ground(400,670,width,20);
	leftside= new Ground(490,620,20,100)
     rightside=new Ground(680,620,20,100)
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode(CENTER)
	ground.display();
    leftside.display();
	rightside.display();
	ellipse(ball.position.x,ball.position.y,40,40)
  drawSprites();
 
}

function keyPressed(){
if(keyCode===UP_ARROW){
	//Matter.Body.applyForce(body, {x:0,y:0}position, force)
	Matter.Body.applyForce(ball, ball.position, {x:52,y:-52})
}

}


