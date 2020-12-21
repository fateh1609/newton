const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const MouseConstraint = Matter.MouseConstraint;

var engine, world;
var bob1, bob2, bob3, bob4, bob5;
var string1, string2,string3,string4,string5;

function setup(){
canvas = createCanvas(windowWidth/2,windowHeight/1.5);
engine = Engine.create();
world = engine.world;

let canvasmouse = Mouse.create(canvas.elt);
canvasmouse.pixelRatio = pixelDencity();
let optinons = {
    mouse : canvasmouse
};
mConstraint = MouseConstraint.create(engine, options);
World.add(world, mComnstraint)

bob1 = new pendulum(100,100,"red");
bob2 = new pendulum(200,100,"blue");
bob3 = new pendulum(300,100,"red");
bob4 = new pendulum(400,100,"blue");
bob5 = new pendulum(500,100,"red");  

}

function draw(){
background("black")
Engine.update(engine);
bob1.display;
bob2.display;
bob3.display;
bob4.display;
bob5.display;
}

function mouseDragged(){
    Matter.Body.setPosition(pendulum.body,{x: mouseX, y: mouseY});
}
