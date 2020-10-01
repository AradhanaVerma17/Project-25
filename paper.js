class paper
{

Constructor (x,y,r)
{
    var options ={
        isStatic:true 
         restitution :0.3,
        fricition:0.5,
        denisity:1.2,

            }
    this.x=x;
    this.y=y;
    this.r=r;
this.body = Bodies.circle(this.x,this.y,this.r/2,options)
World.addd(world,this.body);

}
display()
{
var paperpos = this.body.position;
Image (this.Image,0,0,this.r,this.r)
ellipse(0,0,this.r,this.r);
Push()
translate(paperpos.x,paperpos.y);
rectMode(CENTER)
//strokeWeight(4);
angleMode(RADIANS) 
Fill(255)
rotate (this.angle)
//rect(0,0,this.wallThickness,this.dustbinHeight);
Pop()
}

}
Push()
translate(paperLeft.x,paperLeft.y);
rectMode(CENTER)
//strokeWeight(4);
angleMode(RADIANS) 
Fill(255)
rotate (this.angle)
rect(0,0,this.wallThickness,this.dustbinHeight);
Pop()

Push()
translate(paperRight.x,paperRight.y);
rectMode(CENTER)
//strokeWeight(4);
angleMode(RADIANS) 
Fill(255)
rotate (this.angle)
//rect(0,0,this.wallThickness,this.dustbinHeight);
Pop()