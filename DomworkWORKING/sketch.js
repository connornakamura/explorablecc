//map function
let img;
let img1;
let wikipedia;

var firstslider

function setup() {

  createCanvas(2000,2000);
  background(0);
  button = createButton('Click me');
  button.position(windowWidth/8, 1150);
  button.mousePressed(aa);

  button1 = createButton('Click me');
  button1.position(windowWidth/8, 650);
  button1.mousePressed(ll);


  img = loadImage("lawrence.jpg");
  img1 = loadImage("aaron.jpg");
  wikipedia = loadImage("wikipedia.jpg");
  arduino = loadImage("arduino.jpg");
  wired = loadImage("wired.jpg");
  soundcloud = loadImage("soundcloud.jpg");
  flickr = loadImage("flickr.jpg");
  plos = loadImage("plos.jpg");
  flickrwiki = loadImage("flickrwiki.png");
  musicdes = loadImage("musicdes.png");
  video = loadImage("video.png");
  youtube = loadImage("youtube.png");
  music = loadImage("music.jpg");
  shortdescription = loadImage("shortdescription.png");
  uses = loadImage("uses.png");

  firstslider = createSlider(0, 400, 0);
  firstslider.position(150,200);
  firstslider.style('width', windowWidth-200+"px");


x = windowWidth / 8;
y = 2000;
x1 = windowWidth / 2.5;
y1 = 1500;
x2 = windowWidth / 1.3;
y2 = 1500;
x3 = windowWidth;
y3 = 1500;
x4 = windowWidth;
y4 = 1700;
x5 = windowWidth;
y5 = 1900;
}

var phrases = ["2001 Creative Commons founded.", "2001 Creative Commons founded.", "2002 Version 1.0 licenses released", "2003 Approximately 1 million licenses in use.", "2004 Estimated 4.7 million licensed works by the end of the year. Version 2.0 released.", "2005 Estimated 20 million works.Version 2.5 release. Science projects at Creative Commons launched.","2006 Estimated 50 million works", "2007 Estimated 90 million licensed works.  Version 3.0 released.", "2009 350 million CC licensed works. First mainstream album release. Wikipedia moves to CC platform."]
var textbox= {
  above: 200,
  below:400,
  size: 15,

}
var above = 200
var below = 400
var sliderx = 100
var slidery = 300




//window width and window height
function draw() {


  var val = firstslider.value();


stroke(255,255,255);
textSize(30);
text("Important People",125, 300);
image(shortdescription, 500, 350, shortdescription.width/2, shortdescription.height/2);
image(uses, 500, 450, uses.width/2, uses.height/2);
image(youtube, 500, 510);
image(video,500,640, uses.width/2, uses.height/2);
image(music,500,700);
image(musicdes,500,1250);
text("Background Info", 500,300);
text("Creative Commons",windowWidth/2 - windowWidth/7, 50);
textSize(15);
text("Timeline: Slide to explore!",windowWidth/2, 100);


if (val > 50) {
  textSize(15);
  fill(255, 0, 0);
  text(phrases[1], 10, 10, 100, 100);
}
if (val > 100) {
  textSize(15);
  fill(255, 153, 0);
  text(phrases[2], 10, 80, 100, 150);
}
if (val > 150){
  textSize(15);
  fill(255, 255, 0);
  text(phrases[3],10, 145, 100, 200);
}
if (val > 200){
  textSize(15);
  fill(110, 255, 0);
  text(phrases[4],10, 250, 100, 450);
}

if (val > 250){
  textSize(15);
  fill(0, 255, 242);
  text(phrases[5],10, 415, 100, 450);
}
if (val > 300){
  textSize(15);
  fill(0, 42, 255);
  text(phrases[6],10, 610, 100, 450);
}
if (val > 300){
  textSize(15);
  fill(93, 0, 255);
  text(phrases[7],10, 680, 100, 450);
}
if (val > 350){
  textSize(15);
  fill(255, 0, 178);
  text(phrases[8],10, 820, 100, 450);
}


image(shortdescription)

fill(255);
textSize(20)
text("Creative Commons examples" ,windowWidth/2 - windowWidth/7, 1400);

image(wikipedia, x, y);

y = y - 2;

  // Reset to the bottom
  if (y < 1500) {
    y = 2000;
  }




image(arduino, x1, y1);

y1 = y1 + 2;

  // Reset to the bottom
  if (y1 > 2000) {
    y1 = 1500;
  }

image(soundcloud, x2, y2);

  y2 = y2 - 2;

    // Reset to the bottom
    if (y2 < 1500) {
      y2 = 2000;
    }

    image(flickr, x3, y3)
            x3 = x3 - 2;

        if (x3 < -400) {
          x3 = windowWidth;
        }

image(plos, x4, y4)
        x4 = x4 - 2;

    if (x4 < -400) {
      x4 = windowWidth;
    }

    image(wired, x5, y5)
            x5 = x5 - 2;

        if (x5 < -400) {
          x5 = windowWidth;
        }









}





function ll () {
  var xpos = windowWidth/8;

//xpos = xpos + 5;
  //if(xpos > windowWidth/8)
  //{
    //xpos = windowWidth/8;
  //}
image(img, xpos, 350);
fill(0);
textSize(20);
text("Lawrence Lessig",xpos, 700);
textSize(15);
text("Lawyer in favor of open access who supported a middle way to copyright law.  Founded creative commons.", xpos, 750, xpos + 100, 1300); // Text wraps within text box


}
function aa () {
  var xpos1 = windowWidth/8;

//xpos = xpos + 5;
  //if(xpos > windowWidth/8)
  //{
    //xpos = windowWidth/8;
  //}
image(img1, xpos1, 850);
fill(0);
textSize(20);
text("Aaron Swartz",xpos1, 1200);
textSize(15);
text("Technical genius involved in many open source, free access movements.  Helped form creative commons and other projects, most notably reddit.", xpos1, 1250, xpos1 + 100, 1800); // Text wraps within text box

}
