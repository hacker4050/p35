class Food {
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50;
        this.height = 50;
        this.image = loadImage("images/Milk.png");
        World.add(world, this.body);
        this.foodStock;
        this.lastFed;

    
    }

    display(){
        var x=80,y=100;

        imageMode(CENTER);

        if(this.foodStock!== 0){
            for(var i=0;i<this.foodStock;i++){
                if(i%10===0){
                    x=80;
                    y=y+50;
                }
                image(this.image,x,y,50,50);
                x=x+30;
            }
        }
    } 
    getFoodStock(){


    } 
    updateFoodStock(){


    }
    deductFood(){


    }
  }
  