var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object= "";
var block_image_object= "";

function player_update()
{
	fabric.Image.fromURL("player.png", function(Img) {
	player_object = Img;
	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({top:player_y,left:player_x});
	canvas.add(player_object);
	});
}

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;
	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({top:player_y,left:player_x});
	canvas.add(block_image_object);
	});

}

// Add an event listener and call the required function
window.addEventListener("keydown", my_keydown);

// Define the my_keydown function
function my_keydown(e)
// Check if the SHIFT and P keys are pressed together
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if(e.shiftKey == true && keyPressed == "80");
	{
		console.log("p and shift pressed together");
		block_image_width = block_image_width + 10;
		block_image_height = block_image_height + 10;
		document.getElementById("current_width").innerHTML = block_image_width;	
	    document.getElementById("current_width").innerHTML = block_image_height;
	}






// Check if the SHIFT and M keys are pressed together
    if(e.shiftKey && keyPressed == "77")
	{
		console.log("m and shift pressed together");
		block_image_width = block_image_width - 10;
		block_image_height = block_image_height - 10;
		document.getElementById("current_width").innerHTML = block_image_width;	
	    document.getElementById("current_width").innerHTML = block_image_height;
	}







    // Check if the key value is equal to the UP arrow key value 38
     if(keyPressed == "38")
 	{
       up();
       console.log("up");
	} 
	// Check if the key value is equal to the DOWN arrow key value 40
	if(keyPressed == "40")
	{
       down();
       console.log("down");
	} 

	// Check if the key value is equal to the LEFT arrow key value 37
	if(keyPressed  == "37")
    { 
       left();
       console.log("left"); 
	}
	// Check if the key value is equal to the RIGHT arrow key value 39
	if(keyPressed == "right")
    {
       right();
       console.log("right");
	}  
	// Check if the key value is equal to the 'W' key value 87
	if(keyPressed == "87")
	{
       new_image("wall.jpg");
	   console.log("w");
	}


	// Check if the key value is equal to the 'G' key value 71
	if(keyPressed == "71")
     {
       new_image("ground.png");
	   console.log("g");
	 }

	// Check if the key value is equal to the 'L' key value 76
	if(keyPressed == "76")
	{
		new_image("light_green.png");
		console.log("l");
	}




	// Check if the key value is equal to the 'T' key value 84
	if(keyPressed == "84")
	{
		new_image("trunk.jpg");
		console.log("t");
	}




	// Check if the key value is equal to the 'R' key value 82
	if(keyPressed == "82")
	{
		new_image("roof.jpg");
		console.log("r");
	}




	// Check if the key value is equal to the 'Y' key value 89
	if(keyPressed == "89")
	{
		new_image("yellow_wall");
		console.log("y");
	}




	// Check if the key value is equal to the 'D' key value 68
	if(keyPressed == "68")
	{
		new_image("dark_green.png");
		console.log("d");
	}




	// Check if the key value is equal to the 'U' key value 85
	if(keyPressed == "85")
	{
		new_image("different.png");
		console.log("u");
	}




	// Check if the key value is equal to the 'C' key value 67
	if(keyPressed == "67")
	{
		new_image("cloud.jpg");
		console.log("c");
	}




// Function to move the player up when UP arrow key is pressed
function up()
{
	if(player_y >=0)
	{
		player_y = player_y - block_image_height;
		console.log("block image height = " + block_image_height);
		console.log("When Up arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}
// Function to move the player down when DOWN arrow key is pressed
function down()
{
	if(player_y <=500)
	{
		player_y = player_y + block_image_height;
		console.log("block image height = " + block_image_height);
		console.log("When Down arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}
// Function to move the player left when LEFT arrow key is pressed
function left()
{
	if(player_x >0)
	{
		player_x = player_x - block_image_width;
		console.log("block image width = " + block_image_width);
		console.log("When Left arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}
// Function to move the player right when RIGHT arrow key is pressed
function right()
{
	if(player_x <=850)
	{
		player_x = player_x + block_image_width;
		console.log("block image width = " + block_image_width);
		console.log("When Right arrow key is pressed, X =  " + player_x + " , Y = "+player_y);
		canvas.remove(player_object);
		player_update();
	}
}
