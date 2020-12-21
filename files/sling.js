class sling {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            sriffness: 1,
            angularStiffiness: 1,
            length: 220  
        };
        this.pointB = pointB;
        this.pointx = pointA.x;
        this.pointY = pointA.y - 250;
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }

    display(){
    if (this.sling.bodyA) {
        var pointA = this.sling.bodyA.poition;
        var pointB = this.pointB;
    push();
    strokeWeight(3.5);
    stroke("#fff");
    line(pointB.x,pointB.y,pointA.x,pointA.y);
pop();
    }
  }
}