
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree;
var ground;
var stone1;

function preload(){
	treeImg = loadImage("images/tree.png");
	boyImg = loadImage("images/boy.png");
}
function setup() {
	createCanvas(1200, 800);

	engine = Engine.create();
	world = engine.world;

	//tree = new Tree(900,450,600,700);
	ground = new Ground(600,780,1200,40);
	stone1 = new Stone(200,600);
	

	mango1 = new Mango(700,400,50);
	mango2 = new Mango(700,300,30);
	mango3 = new Mango(800,200,30);
	mango4 = new Mango(800,350,40);
	mango5 = new Mango(800,450,30);
	mango6 = new Mango(900,150,40);
	mango7 = new Mango(950,300,30);
	mango8 = new Mango(900,400,50);

	elastic = new Elastic(stone1.body,{x:240,y: 590});

	console.log(stone1);
	Engine.run(engine);
}


function draw() {
	Engine.update(engine);
	background(0);

	//tree.display();
	
	imageMode(CENTER);
	image(treeImg,900,450,600,700);
	ground.display();
	image(boyImg,300,680,200,400);

	stone1.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();

	elastic.display();

	detectCollision(stone1,mango1);
	detectCollision(stone1,mango2);
	detectCollision(stone1,mango3);
	detectCollision(stone1,mango4);
	detectCollision(stone1,mango5);
	detectCollision(stone1,mango6);
	detectCollision(stone1,mango7);
	detectCollision(stone1,mango8);

}
function mouseDragged(){
	Body.setPosition(stone1.body,{ x : mouseX , y : mouseY });
}
function mouseReleased(){
	elastic.fly();
}
function detectCollision(Lstone,Lmango){
	stone = Lstone.body.position;
	mango = Lmango.body.position;

	var distance = dist(stone.x,stone.y,mango.x,mango.y);
	if(distance<= Lstone.radius+Lmango.radius){
		Body.setStatic(Lmango.body,false);
	}
}
function keyPressed(){
	if(keyCode === 32){
		Body.setPosition(stone1.body,{x:200,y:600});
		elastic.attach(stone1.body);
	}
}



