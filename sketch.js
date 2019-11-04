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
	background(153,12, f7);
	let spectrum = fft.analyze();

  beginShape();
  for (i = 0; i < spectrum.length; i++) {
    vertex(i, map(spectrum[i], 0, 255, height, 0));
  }
  endShape();

 	stroke(0);
  fill(255, f1, f1);
  rect(random(500), random(windowHeight), random(f1), random(f1));
  fill(255, f2, f2);
	rect(random(windowWidth), random(windowHeight), random(f2), random(f2));
  fill(255, f3, f3);
  rect(random(windowWidth), random(224), random(f3), random(f3));
  fill(255, f4, f4);
  rect(random(304), random(windowHeight), random(f4), random(f4));
	fill(255, f5, f5);
	rect(random(windowWidth), random(windowHeight), random(f5), random(f5));
	fill(255, f6, f6);
  rect(random(windowWidth), random(506), random(f6), random(f6));


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
  f1 = 123;
  f2 = 145;
  f3 = 68;
  f4 = 95;
	f5 = 173;
	f6 = 34;
	f7 = 255;
}
