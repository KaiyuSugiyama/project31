const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var maxDrops=100;
var drops = [];


function preload()
{
	
}

function setup() {
	createCanvas(500, 800);
	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
	for(var i = 0;i < maxDrops; i++) {
		drops.push(new Drops(random(0,400), random(0,400)));
	}
	
}


function draw() {
   background("black");
   if((frameCount % 10) === 0) {
	for(var i = 0;i < maxDrops; i++) {
		drops[i].display();
		//console.log("kaiyu")

		console.log("position.y = "+ drops[i].body.position.y)
   }	
   }
   
   

   


}



