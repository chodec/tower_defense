var player;
var playerImg;
var backgroundImg;
var widthX = 800;
var heightY = 600;
var playerPosX = 400;
var playerPosY = 300;
var speedX = 0;
var speedY = 0;
var pointerX;
var pointerY;
var isClicked;

function preload()
{
  playerImg = loadImage("player.png");
  backgroundImg = loadImage("map.png");
}

function setup()
{
  createCanvas(widthX,heightY);
  smooth();
  frameRate(60);
}

function draw()
{
  noStroke();
  background(backgroundImg);
  drawPlayer();
  movePlayer();
  markPlayer();
}

function drawPlayer()
{
  image(playerImg, playerPosX, playerPosY, 35, 35);
}
function markPlayer()
{
  if((mouseX >= playerPosX-10 && mouseX <= playerPosX+35) && (mouseY >= playerPosY-20 && mouseY <= playerPosY+35))
  {
    if(mouseIsPressed)
    {
      if(mouseButton === LEFT)
      {
        isClicked = true;
      }
    }
  }
}

function movePlayer()
{
  //podminka pro pohyb
  if(isClicked == true)
  {

    stroke(153, 255, 51);
    noFill();
    ellipse(playerPosX + 15, playerPosY + 19, 40, 40);

    if(mouseIsPressed)
    {
      if(mouseButton == RIGHT)
      {
        pointerX = mouseX;
        pointerY = mouseY;

        //nastaveni pohybu x
        if(playerPosX > mouseX)
        {
          speedX = 1;
        }
        else if (playerPosX < mouseX)
        {
          speedX = 1;
        }

        //nastaveni pohybu y
        if (playerPosY > mouseY)
        {
          speedY = 1;
        }
        else if (playerPosY < mouseY)
        {
          speedY = 1;
        }
      }
      else if(mouseButton === LEFT || mouseButton === CENTER)
      {
        isClicked = false;
      }
    }
  }

  //pohyb ve směru x

  if(playerPosX != pointerX)
  {
    if(playerPosX > pointerX)
    {
      playerPosX -= speedX;
    }
    else if (playerPosX < pointerX)
    {
      playerPosX += speedX;
    }
  }
  else if (playerPosX == pointerX)
  {
    speedX = 0;
  }

  //pohyb ve směru y
  
  if(playerPosY != pointerY)
  {
    if (playerPosY > pointerY)
    {
      playerPosY -= speedY;
    }
    else if (playerPosY < pointerY)
    {
      playerPosY += speedY;
    }
  }
  else if (playerPosY == pointerY)
  {
    speedY = 0;
  }
}
