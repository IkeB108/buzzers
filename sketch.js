function preload(){
  buzzers = []
  for(var i = 0; i < 8; i ++){
    buzzers.push(loadSound('buzzer' + (i+1) + '.wav'))
  }

  steelr = loadFont('steelr.regular.ttf')
}
function setup() {
  dispMode = 'pc' //pc or mobile
  currentBuzzer = 0
  if(dispMode == 'pc')createCanvas(350,650)
  if(dispMode == 'mobile')createCanvas(width,height);
  textAlign(CENTER,CENTER);
  textFont(steelr); noStroke();

  leftHitBox = {
    'x':0,
    'y':height - (height/5),
    'w':width/2,
    'h':height/5
  }
  rightHitBox = {
    'x':width/2,
    'y':height - (height/5),
    'w':width/2,
    'h':height/5
  }

}

function draw() {
  background(200); fill(0);
  textSize(width * 1/6)
  text('Buzzer', width/2, height * 1/4)
  textSize(width * 1/3)
  text(currentBuzzer + 1, width/2, height/2)
  text('<', width/5, height - (width/5))
  text('>', width - (width/5), height - (width/5))

  fill(255,100)
  rect(leftHitBox.x,leftHitBox.y,leftHitBox.w,leftHitBox.h)

  fill(255,0,0,100)
  rect(rightHitBox.x,rightHitBox.y,rightHitBox.w,rightHitBox.h)
}

function mouseClicked(){
  hitButton = false;
  if(collidePointRect(mouseX,mouseY,leftHitBox.x,leftHitBox.y,leftHitBox.w,leftHitBox.h)){
    currentBuzzer --;
    if(currentBuzzer < 0)currentBuzzer = buzzers.length-1;
    hitButton = true;
  }
  if(collidePointRect(mouseX,mouseY,rightHitBox.x,rightHitBox.y,rightHitBox.w,rightHitBox.h)){
    currentBuzzer ++;
    if(currentBuzzer > buzzers.length-1)currentBuzzer = 0;
    hitButton = true;
  }
  if(!hitButton)buzzers[currentBuzzer].play();
}
