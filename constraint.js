class Connector{

    constructor(pointA,bodyB){
        var options = {
            pointA : pointA,
            bodyB : bodyB,
            stiffness: 0.04,
            length : 190
          }
          this.pointA=pointA;
          this.string = Constraint.create(options);
          World.add(world,this.string);
    }
    display(){
        var pointA = this.pointA;
        var pointB = this.string.bodyB.position;
        push();
        strokeWeight(6);
        stroke("skyblue");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        pop();
    }
}