var sketchProc=function(processingInstance){ with (processingInstance){
size(400, 400);
frameRate(30);


//ProgramCodeGoesHere
//change this to make the game speed different.  Default: 60
//high numbers will be limited by hardware
var framerate=60;


var backcolor=color(random(0,255), random(0,255), random(0,255));
var playercolor=color(255, random(0,255), random(0,255));
var started=1;
var cubeX=200;
var cubeY=381;
var cubeW=40;
var cubeH=40;
var enemy=[random(1,400),random(1,400),random(1,400),random(1,400),random(1,400),random(1,400),random(1,400)];
rectMode(CENTER);
var motion=[random(-framerate/30,framerate/30),random(-framerate/30,framerate/30),random(-framerate/30,framerate/30),random(-framerate/30,framerate/30),random(-framerate/30,framerate/30),random(-framerate/30,framerate/30),random(-framerate/30,framerate/30)];
var powerUp=0;
var chance=0;
var tokenX;
var tokenY;
var powerTimer;
var speed=framerate/30;
var score=0;
var evil;
var timer=framerate*20;
frameRate(framerate);
var button=function(buttonx,buttony,Width, Height,buttonfill){
    fill(buttonfill);
    rect(buttonx,buttony,Width,Height);
 mouseClicked=function(){
            if(mouseX>(buttonx-Width/2) && mouseX<(buttonx+Width/2) && mouseY>(buttony-Height/2) && mouseY<(buttony+Height/2)){
                started+=1;
            }
 };
};
draw= function() {
   background(backcolor);
    //reset
    if(started===0){
    backcolor=color(random(0,255), random(0,255), random(0,255));
    playercolor=color(255, random(0,255), random(0,255));
     cubeX=200;
     cubeY=381;
     cubeW=40;
     cubeH=40;
     enemy=[random(1,400),random(1,400),random(1,400),random(1,400),random(1,400),random             (1,400),random(1,400)];
     powerUp=0;
     speed=framerate/30;
     score=0;
        started=1;
        timer=framerate*20;
    }
    //title screen
    if(started===1){
        fill(255, 0, 0);
        textSize(40);
        text("Runny Cube",88,80);
        button(200,325,100,50,color(255, 0, 0));
        //rect(200,325,100,50);
        textSize(20);
        fill(0,0,0);
        text("Start!",176,333);
        text("Avoid the blue enemies.",20,150);
        text("Get the gold powerup!",20,170);
        text("Don't let the timer hit 0!",20,190);
         //   mouseClicked=function(){
           // if(mouseX>150 && mouseX<250 && mouseY>300 && mouseY<350){
             //   started=2;
            //}
            
       // };
       
    }
    //main game
    if(started===2){
        if(keyIsPressed && key.code===32){
            playercolor=color(random(0,255),random(0,255),random(0,255));
        }
     fill(playercolor);
     rect(cubeX,cubeY,cubeW,cubeH);
     
     //player movement
     if(keyIsPressed && keyCode=== UP){
      cubeY+=-speed;
     }
     if(keyIsPressed && keyCode=== DOWN){
      cubeY+=speed;
     }
     if(keyIsPressed && keyCode=== LEFT){
      cubeX+=-speed;
     }
     if(keyIsPressed && keyCode=== RIGHT){
      cubeX+=speed;
     }
     
     if(powerUp===1){
      tokenX=random(0,400);
      tokenY=random(0,400);
      powerUp=2;
     }
     if(powerUp===2){
         fill(240, 224, 0);
         ellipse(tokenX,tokenY,20,20);
         if(abs(cubeY-tokenY)<=(cubeH+20)/2 && abs(cubeX-tokenX) <=(cubeW+20)/2){
             if(round(random(1,10))===6){
             powerUp=4;
             }else{
                 powerUp=3;
             }
         powerTimer=0;
         playSound(getSound("retro/coin"));
         score=score+1;
         timer=timer+(framerate*8);
     }
     }
     if(powerUp===3){
         powerTimer++;
         cubeW=20;
         cubeH=20;
         speed=framerate/15;
         if(powerTimer >=300){
         cubeW=40;
         cubeH=40;
         powerUp=0;
         speed=framerate/30;
         }
     }
     if(powerUp===4){
         powerTimer++;
         cubeW=60;
         cubeH=60;
         speed=framerate/60;
         if(powerTimer >=300){
         cubeW=40;
         cubeH=40;
         powerUp=0;
         speed=framerate/30;
         }
     }
     
     
     //enemies
     fill(0, 0, 255);
     ellipse(enemy[0],50,20,20);
     ellipse(enemy[1],100,20,20);
     ellipse(enemy[2],150,20,20);
     ellipse(enemy[3],200,20,20);
     ellipse(enemy[4],250,20,20);
     ellipse(enemy[5],300,20,20);
     ellipse(enemy[6],350,20,20);
     
     //enemy movement
     if(enemy[0]>0&&enemy[0]<400){
     enemy[0]+=motion[0];
     }else{
         enemy[0]=random(50,350);
         motion[0]=random(-(score+5),score+5);
     }
     if(enemy[1]>0&&enemy[1]<400){
     enemy[1]+=motion[1];
     }else{
         enemy[1]=random(50,350);
         motion[1]=random(-(score+5),score+5);
     }
     if(enemy[2]>0&&enemy[2]<400){
     enemy[2]+=motion[2];
     }else{
         enemy[2]=random(50,350);
         motion[2]=random(-(score+5),score+5);
     }
     if(enemy[3]>0&&enemy[3]<400){
     enemy[3]+=motion[3];
     }else{
         enemy[3]=random(50,350);
         motion[3]=random(-(score+5),score+5);
     }
     if(enemy[4]>0&&enemy[4]<400){
     enemy[4]+=motion[4];
     }else{
         enemy[4]=random(50,350);
         motion[4]=random(-(score+5),score+5);
     }
     if(enemy[5]>0&&enemy[5]<400){
     enemy[5]+=motion[5];
     }else{
         enemy[5]=random(50,350);
         motion[5]=random(-(score+5),score+5);
     }
     if(enemy[6]>0&&enemy[6]<400){
     enemy[6]+=motion[6];
     }else{
         enemy[6]=random(50,350);
         motion[6]=random(-(score+5),score+5);
     }
     
     //death detection
     if(abs(cubeY-50)<=(cubeH+20)/2 && abs(cubeX-enemy[0]) <=(cubeW+20)/2){
         started=3;
         playSound(getSound("retro/boom2"));
     }
     if(abs(cubeY-100)<=(cubeH+20)/2 && abs(cubeX-enemy[1]) <=(cubeW+20)/2){
         started=3;
         playSound(getSound("retro/boom2"));
     }
     if(abs(cubeY-150)<=(cubeH+20)/2 && abs(cubeX-enemy[2]) <=(cubeW+20)/2){
         started=3;
         playSound(getSound("retro/boom2"));
     }
     if(abs(cubeY-200)<=(cubeH+20)/2 && abs(cubeX-enemy[3]) <=(cubeW+20)/2){
         started=3;
         playSound(getSound("retro/boom2"));
     }
     if(abs(cubeY-250)<=(cubeH+20)/2 && abs(cubeX-enemy[4]) <=(cubeW+20)/2){
         started=3;
         playSound(getSound("retro/boom2"));
     }
     if(abs(cubeY-300)<=(cubeH+20)/2 && abs(cubeX-enemy[5]) <=(cubeW+20)/2){
         started=3;
         playSound(getSound("retro/boom2"));
     }
     if(abs(cubeY-350)<=(cubeH+20)/2 && abs(cubeX-enemy[6]) <=(cubeW+20)/2){
         started=3;
         playSound(getSound("retro/boom2"));
     }
    
    if(powerUp===0){
     chance=50;
     if(chance===50){
      powerUp=1;
     }
    }
    fill(255, 255, 255);
    textSize(20);
    text("score: "+score,8,18);
    textSize(12);
     text(round(timer/framerate),370,12);
     timer-=framerate/60;
     if(timer===0){
         started=3;
     }
    }
    
    
    //death screen
    if(started===3){
        textSize(50);
        text("LOSER!",100,200);
        fill(255, 128, 0);
        //rect(380,20,40,40);
        button(380,20,40,40,color(255,128,0));
        fill(0,0,0);
        textSize(10);
        text("Restart",363,22);
        //mouseClicked=function(){
        //if(mouseX>=360 && mouseX <= 400 && mouseY<=40 && mouseY >= 0){
          //  started=0;
        //}
        //};
    }
    if(started===4){
        started=0;
    }
    
};

}};
