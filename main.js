var canvas = new fabric.Canvas("myCanvas");
block_width_image=30;
block_height_image=30;
player_x=10;
player_y=10;
var player_object="";
var block_image_object="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img) {
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(100);
        player_object.set({
           top:player_y,left:player_x
    });
    canvas.add(player_object);
})
}
function new_image(get_image) {
    fabric.Image.fromURL(get_image,function(Img) {
        block_image_object=Img;
        block_image_object.scaleToWidth(block_width_image);
        block_image_object.scaleToHeight(block_height_image);
        block_image_object.set({
           top:player_y,left:player_x
    });
    canvas.add(block_image_object);
});
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
   keypress = e.keyCode;
   console.log(keypress);
   if (e.shiftKey == true && keypress == "80") {
       console.log("Shift and P are pressed together");
       block_width_image = block_width_image+10;
       block_height_image = block_height_image+10;
       document.getElementById("current_width").innerHTML=block_width_image;
       document.getElementById("current_height").innerHTML=block_height_image;
   }
   if (e.shiftKey == true && keypress == "77") {
    console.log("Shift and M are pressed together");
    block_width_image = block_width_image-10;
    block_height_image = block_height_image-10;
    document.getElementById("current_width").innerHTML=block_width_image;
    document.getElementById("current_height").innerHTML=block_height_image;
}

if (keypress == "70") {
    new_image("ironman_face.png");
    console.log("F");
}

if (keypress == "66") {
    new_image("ironman_body.png");
    console.log("B");
}

if (keypress == "76") {
    new_image("ironman_legs.png");
    console.log("L");
}

if (keypress == "82") {
    new_image("ironman_right_hand.png");
    console.log("R");
}

if (keypress == "72") {
    new_image("ironman_left_hand.png");
    console.log("H");
}
if (keypress == "38") {
    up();
    console.log("Up");
}
if (keypress == "40") {
    down();
    console.log("Down");
}if (keypress == "37") {
    left();
    console.log("Left");
}if (keypress == "39") {
    right();
    console.log("Right");
}
}