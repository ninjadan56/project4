let kick, snare, hat, ride, tom1, tom2, crash;
let f1 = 255;
let f2 = 255;
let f3 = 255;
let f4 = 255;
let f5 = 255;
let f6 = 255;
let f7 = 255;


function preload() {
 	kick = loadSound("kick.wav");
  snare = loadSound('snare.wav');
  hat = loadSound('hihat.wav');
  ride = loadSound('ride.wav');
	tom1 = loadSound('tomhi.wav');
	tom2 = loadSound('tomlo.wav');
	crash = loadSound('crash.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

	fft = new p5.FFT();
	fft.setInput(kick);
	fft.setInput(snare);
	fft.setInput(hat);
	fft.setInput(ride);
	fft.setInput(tom1);
	fft.setInput(tom2);
	fft.setInput(crash);


}

function draw() {
  background(255,30,f1);

  fill(0);
  noStroke(f1, f2, f3*f4);
  rect(random(windowWidth), random(windowHeight), f7, 100);
  rect(random(windowWidth), random(windowHeight), 208, f2);
  rect(random(windowWidth), random(windowHeight), 12, f3);
  rect(random(windowWidth), random(windowHeight), 33, f4);
  rect(random(windowWidth), random(windowHeight), 80, f5);
  rect(random(windowWidth), random(windowHeight), 12, f6);

	let spectrum = fft.analyze();

  beginShape();
  for (i = 0; i < spectrum.length; i++) {
    vertex(i*20, map(spectrum[i], 0, 255, height, 0));
  }
  endShape();
}

function keyPressed() {
 if(keyCode == "70") {
   kick.play();
   f1 = 0;
 }
  if(keyCode == '68') {
  snare.play();
   f2 = 0;
 }
  if(keyCode == '74') {
  hat.play();
   f3 = 0;
 }
  if(keyCode == '75') {
    ride.play();
   f4 = 0;
 }
 	if(keyCode == '71') {
 	tom1.play();
	f5 = 0;
}
	if(keyCode == '72') {
	tom2.play();
 	f6 = 0;
}
	if(keyCode == '85') {
	crash.play();
	f7 = 0;
 }
}

function keyReleased() {
  f1 = 255;
  f2 = 255;
  f3 = 255;
  f4 = 255;
	f5 = 255;
	f6 = 255;
	f7 = 255;
}
