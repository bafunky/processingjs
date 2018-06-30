int a;
a=1;


void setup() {
   size(400, 400);
   background(255,0,0);
   stroke(0,0,200);
   strokeWeight(3);
   fill(150,20,150);
   ellipse(50, 50, 25, 25);
   text("Does this\nwork?",100,100);
 }
 
 void draw(){
 if(a<300){
 point(a,random(0,400));
 a++;
 }else{
 a=0;
 };
 }
