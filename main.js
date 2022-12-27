noseX = 0;
noseY = 0;

Difference = 0;
rightWrist = 0;
leftWrist = 0;

function setup() {
  video = createCapture(VIDEO);
  video.size(550, 500);

  canvas = createCanvas(550, 500);
  canvas.position(560, 150);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}

function modelLoaded() {
  console.log("PoseNest has been Initialized and is Running");
}

function draw() {
  background("#FF0000");
  stroke("#FF0000");
  text("Shaurya", noseX, noseY);
  textSize(Difference);
}

function gotPoses(results) {
  if (results.length > 0) {
    console.log(results);

    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;

    console.log("noseX = " + noseX + "noseY = " + noseY);

    leftWrist = results[0].pose.leftWrist.x;
    rightWrist = results[0].pose.rightWrist.x;
    Difference = floor(leftWrist - rightWrist);

    console.log(
      "Left Wrist X = " +
        leftWrist +
        "Right Wrist X = " +
        rightWrist +
        "The differnce between left and right wrist is = " +
        Difference
    );
  }
}
