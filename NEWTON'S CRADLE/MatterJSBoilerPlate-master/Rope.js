class Rope{

    constructor(body1,body2,offsetX,offsetY){
    
        this.offsetX=offsetX
        this.offsetY=offsetY

    var option = {
    
        bodyA:bodyA,
        bodyB:bodyB,
        point:{x:this.offsetX,y:this.offsetY}
    }
    this.rope=Constraint.create(option);
    World.add(world, this.chain);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this .rope.bodyB.position;
        strokeWeight(4);
        line (pointA.x,pointA.y,pointB.x, pointB.y);
        
        }
    
    }