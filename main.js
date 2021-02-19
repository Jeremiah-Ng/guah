var canvas= new fabric.Canvas("myCanvas");
var playerob,blockob;
var x=10,y=10;
function updatedp(){
    fabric.Image.fromURL("player.png",function(IMG){
        playerob=IMG;
        playerob.scaleToWidth(150);
        playerob.scaleToHeight(150);
        playerob.set({
            top:y,
            left:x
        });
        canvas.add(playerob);
    });
}
var blockw=50,blockh=50;
function updatedb(getImage){
    fabric.Image.fromURL(getImage,function(IMG){
        blockob=IMG;
        blockob.scaleToWidth(blockw);
        blockob.scaleToHeight(blockh);
        blockob.set({
            top:y,
            left:x
        });
        canvas.add(blockob);
    });
}
window.addEventListener("keydown",keyd);
function keyd(e){
    keypres=e.keyCode;
    console.log(keypres)
if(keypres==49){
    updatedb("ironman_face.png");
console.log("1 press");
}
    if(keypres==50){
    updatedb("spiderman_body.png");
        console.log("2 press");
}
     if(keypres==51){
    updatedb("hulk_legs.png");
        console.log("3 press");
}
    if(keypres==52){
    updatedb("thor_right_hand.png");
        console.log("4 press");
}
     if(keypres==53){
    updatedb("captain_america_left_hand.png");
        console.log("5 press");
}
    if(keypres==87){
        up();
        console.log("w press")
    }
    if(keypres==65){
        left();
        console.log("a press")
    }
    if(keypres==83){
        down();
        console.log("s press")
    }
    if(keypres==68){
        right();
        console.log("d press")
    }
}
function up(){
    if(y>=0){
        y=y-10;
        canvas.remove(playerob)
        updatedp();
    }
}
function down(){
    if(y<=500){
        y=y+10;
        canvas.remove(playerob)
        updatedp();
    }
}
function left(){
    if(x>=-100){
        x=x-10;
        canvas.remove(playerob)
        updatedp();
    }
}
function right(){
    if(x<=900){
        x=x+10;
        canvas.remove(playerob)
        updatedp();
    }
}
function turnl(){
    angle=angle+5;
    updatedp();
}
function turnl(){
    angle=angle-5;
    updatedp();
}
