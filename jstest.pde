 void setup() {
   size(400, 400);
   background(255,0,0);
   stroke(0,0,200);
   ellipse(50, 50, 25, 25);
   text("Test!",100,100);
   
   int i=0;
   
   void draw(){
   point(i,random(0,400));
   i++;
   
   }
 }
