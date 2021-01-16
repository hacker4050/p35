//Create variables here
var dogg,dog,food,happydog,foodstock;
var database;
var score=20;
var feed,addfood;
var milk;

function preload()
{
  //load images here
  doghappy=loadImage("images/dogImg1.png");
  dogg=loadImage("images/dogImg.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();

  dog = createSprite(250,330);
  dog.addImage(dogg);
  dog.scale=0.2;

  var foodstock = database.ref('Food');
  foodstock.on("value",readstoke);
  
  feed = createButton("feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog&&scoreMINUS);

  addfood = createButton("add food");
  addfood.position(700,130);
  addfood.mousePressed(addFood&&scorePLUS);

  milk = new Food(200,50);
  

}


function draw() {  
  background("darkgreen");
  
if (score>=29){
  text("note: cant add food more than 30",100,50);

}

  drawSprites();
  //add styles here
  text("note: press up  feed button to feed dargo milk",200,20);
  text("reaming food: "+ score,200,200);


}

function readstoke(data){
  food=data.val();

}

function writestoke(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1
  }
  

  database.ref('/').update({
    Food:x
   })

  }

function feedDog(){
   dog.addImage(doghappy);
  food.updateFoodStock(food.getFoodStock()-1);
    
   database.ref('/').update({
     Food:food.getFoodStock(),
     FeedTime:hour()
   })

}

function addFood(){
   database.ref('/').update({
     Food:score
   })
}
function scorePLUS(){
 if (score<=29){
   score=score+1;  
 }
}

function scoreMINUS(){
  if (score>=1){
    score=score-1; 
  }
}

