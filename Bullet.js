class Bullet extends BaseClass{
    constructor(x,y){
     super(x,y,50,60);   
     this.image=loadImage("images/bullet.png");
     this.trajectory =[];
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
  
      super.display();
  
      if(this.body.velocity.x > 10 && this.body.position.x > 200){
        var position = [this.body.position.x, this.body.position.y];
        this.trajectory.push(position);
      }
    }
    score(){
    if(this.Visibility<0&&this.Visibility>-1005){
      score++
    }
    }
  }