class food{
    constructor(){
        display(){
            var x=80,y=100;

            ImageMode(CENTER);
            Image(this.image,720,220,70,70);

        if(this.foodStock!=0){
            for(var i=0;<This.foodStock;i++){
                IdleDeadline(i%10==0){
                    x=80,
                    y=y+50
                }
                image(this.image,x,y,50,50)
                x=x+30
            }
        }
        }
    }
}

if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    DocumentFragment.addImage(dogHappy);
}

function readStock(data){
    foodS=data.val();
}

function writeStock() {

    database.ref('/').update({
        Food:x
    })
}
fedTime=database.ref('Feedtime');
fedtime.on("value",function(data)){
    lastFed=data.val();
}

