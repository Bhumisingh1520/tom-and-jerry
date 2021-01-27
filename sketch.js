
var ground,groundImage;
var mouse,mouseImage,mouseIm1,mouseIm2,mouseIm3;
var cat,catImage,catIm1,catIm2  ;

function preload() {
    //load the images here
    catImage=loadAnimation("images/cat1.png");
    catIm1=loadAnimation("images/cat2.png","images/cat3.png");
    catIm2=loadAnimation("images/cat4.png");

    mouseImage=loadAnimation("images/mouse4.png");
    mouseIm1=loadAnimation("images/mouse1.png");
    mouseIm2=loadAnimation("images/mouse2.png");
    mouseIm3=loadAnimation("images/mouse3.png");


    
    groundImage=loadImage("images/garden.png");     }

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
     
    mouse=createSprite(200,490,50,50);
    mouse.addAnimation(mouseImage);
    mouse.scale=0.1;
    
    cat=createSprite(900,500,50,50);
    cat.addAnimation(catImage);
    cat.scale=0.1;
   
    ground=createSprite(800,250,50,50 );
    ground.scale=1.3;
    
      }  
    
  
function draw() {
    

    background(255);
    //Write condition here to evalute if tom and jerry collide
    
    ground.addImage(groundImage); 
  
    
   
  

    if (ground.x > 650) {
        ground.x = ground.height / 2;
      }

      if(keyDown("space")){
        keyPressed();
    
      }
      if(keyDown("p")){
      
    
      }

  
  
   
    drawSprites();}

   
function keyPressed(){
    ground.velocityX=2;

   
  
cat.changeAnimation("images/cat4.png");


mouse.changeAnimation("images/mouse3.png");

ground.depth=-7;



  //For moving and changing animation write code here   
  
}