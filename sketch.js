var cubito

function setup() {
  createCanvas(400,400);

  cubito = createSprite (200,200,35,35);

}



function draw() 
{
  background ("lightblue");

  drawSprites ();

  if (keyIsDown(UP_ARROW)) {

    cubito.position.y = cubito.position.y - 2

  }

  if (keyIsDown(DOWN_ARROW)) {

    cubito.position.y = cubito.position.y + 2

  }

  if (keyIsDown(LEFT_ARROW)) {

    cubito.position.x = cubito.position.x - 2

  }

  if (keyIsDown(RIGHT_ARROW)) {

    cubito.position.x = cubito.position.x + 2

  }



}






