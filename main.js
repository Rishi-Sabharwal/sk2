function preload(params) {
    
}

function setup() {
  	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(ping_pong);
	video = createCapture(VIDEO);
  	video.size(800,400);
	video.parent('game_console');

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);  
}

function modelLoaded() {
	console.log('Model Loaded!');
}