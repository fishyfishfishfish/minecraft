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

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    if(e.shiftKey==true && keypressed=='80'){
        blockimage_width=blockimage_width+10;
        blockimage_height=blockimage_height+10;
        document.getElementById("current_width").innerHTML=blockimage_width;
        document.getElementById("current_height").innerHTML=blockimage_height;
    }

    if(e.shiftKey==true && keypressed=='77'){
        blockimage_width=blockimage_width-10;
        blockimage_height=blockimage_height-10;
        document.getElementById("current_width").innerHTML=blockimage_width;
        document.getElementById("current_height").innerHTML=blockimage_height;
    }

    if(keypressed=='38'){
        up();
    }
    if(keypressed=='40'){
        down();
    }
    if(keypressed=='37'){
        left();
    }
    if(keypressed=='39'){
        right();
    }
    if(keypressed=='87'){
        new_image('wall.jpg');
    }
    if(keypressed=='71'){
        new_image('ground.png');
    }
    if(keypressed=='76'){
        new_image('light_green.png');
    }
    if(keypressed=='84'){
        new_image('trunk.jpg');
    }
    if(keypressed=='82'){
        new_image('roof.jpg');
    }
    if(keypressed=='89'){
        new_image('yellow_wall.png');
    }
    if(keypressed=='85'){
        new_image('unique.png');
    }
    if(keypressed=='68'){
        new_image('dark_green.png');
    }
    if(keypressed=='67'){
        new_image('cloud.jpg');
    }
}