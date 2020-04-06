int count =0;
int screenx = 1440, screeny = 1024;
  float size = random(10, 50);
  float posx = random(0, screenx);
  float posy = random(300, screeny);
int [] colour = {4 ,26 , 150, 34};
  
void setup() {
  size(1440, 1024);
  background(102);
}

void draw() {
  variableEllipse(mouseX, mouseY, pmouseX, pmouseY);
}

void mouseClicked() {
  fill(100);
  rect(10,0 , 70, 55);
  noFill();
  textSize(32);
  text(pmouseX, 10, 30);
  text(pmouseY, 500, 30);
}

void variableEllipse(int x, int y, int px, int py) {
 ellipse(250,150, 200,200);
 fill(random(0, 255),random(0, 255),random(0, 255),50);
size = random(10, 50);
posx = random(0, screenx);
posy = random(300, screeny);
  if (count <=100000) {
      print(count);
    count = count+ 1;
    ellipse(posx, posy, size, size);
  }
}
