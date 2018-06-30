 void setup() {
   size(400, 400);
   background(255,0,0);
   stroke(0,0,200);
   ellipse(50, 50, 25, 25);
   text("Test!",100,100);
   
   int a=0;
   
   void draw(){
   ellipse(a,random(0,400),10,10);
   a++;
   
   }
 }
