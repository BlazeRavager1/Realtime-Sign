function setup() {
  video = createCapture(VIDEO);
  video.size(550, 500);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);

  canvas = createCanvas(550, 500);
  canvas.position(560, 150);
}

function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);
  }
}

function draw() {
  background("#FF0000");
}

function modelLoaded() {
  console.log("PoseNest has been Initialized");
}
