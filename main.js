var canvas =new fabric.Canvas("myCanvas");
 block_y=100;
 block_x=300;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	block_y=20;
	fabric.Image.fromURL(get_image,function(Img){

		power=Img;
		
		power.scaleToWidth(150);
		
		power.scaleToHeight(140);
		
		power.set(
			{
		left:block_x,
		top:block_y
		}
		);
		
		canvas.add(power);
		
		}
		
		);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
	block_x = 50;
	new_image('rr.jpg');
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		new_image('gr.png');
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		new_image('yr.png');
	}
	if(keyPressed == '80')
	{
		block_x = 500;
		new_image('pr.png');
	}
	if(keyPressed == '66')
	{
		block_x = 650;
	    new_image('br.png');  
		}
     
}

function new_imageunique()
{
	block_x=200;
	block_y=200;
	fabric.Image.fromURL('prback.jpg',function(Img){

		power=Img;
		
		power.scaleToWidth(700);
		
		power.scaleToHeight(300);
		
		power.set(
			{
		left:block_x,
		top:block_y
		}
		);
		
		canvas.add(power);
		
		}
		
		);
}