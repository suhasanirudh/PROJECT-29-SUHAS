class Polygon {
    constructor(x, y, r) {
      var options = {
        //'isStatic': true,
        'restitution':1,
        'friction':1,
        'density':1
      }
      this.body = Bodies.circle(x, y, r, options);
      this.r = r;
      this.image = loadImage("polygon.png")
      
      World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        strokeWeight(2);
        stroke(0);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r);
        pop();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,70,70);
    }
  }