class Target{
  constructor(bodyA, pointB){
      var options = {
          bodyA: bodyA,
          pointB: pointB,
          stiffness: 0.04,
          length: 10
      }
      this.target = loadImage('images/target.png');
      
      this.pointB = pointB
      this.target = Constraint.create(options);
      World.add(world, this.target);
  }
  attach(body){
      this.target.bodyA = body;
  }
  
  shoot(){
      this.target.bodyA = null;
  }

  display(){
      image(this.target,200,200);
      if(this.target.bodyA){
          var pointA = this.target.bodyA.position;
          var pointB = this.pointB;
          push();
          
          stroke(48,22,8);
          if(pointA.x < 220) {
              strokeWeight(7);
              line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
              line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
          }
          else{
              strokeWeight(3);
              line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y);
              line(pointA.x + 25, pointA.y, pointB.x + 30, pointB.y - 3);
              }
         
          
          pop();
      }
  }
  
}