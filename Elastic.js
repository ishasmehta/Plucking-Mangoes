class Elastic{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.004,
            length:20
        }
        this.elastic = Constraint.create(options);
        World.add(world,this.elastic);
        this.pointB = pointB;
    }
    fly(){
        this.elastic.bodyA = null;
    }
    attach(bodyA){
        this.elastic.bodyA = bodyA;
    }
    display(){
        if(this.elastic.bodyA){
            var pointA = this.elastic.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(3);
            stroke("green");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        } 
    }
}