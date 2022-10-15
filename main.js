var canvas=new fabric.Canvas('myCanvas');
playerX=10;
playerY=10;
blockimage_width=30;
blockimage_height=30;

var player_object="";
var block_image_object="";


function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:playerY,
            left:playerX
        });
        canvas.add(player_object);
    });
}

function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_image_object.scaleToWidth(blockimage_width);
        block_image_object.scaleToHeight(blockimage_height);
        block_image_object.set({
            top:playerY,
            left:playerX
        });
        canvas.add(block_image_object);
    });
}