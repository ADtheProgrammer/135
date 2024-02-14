function setup() {
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(450, 450);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on(pose, "got_poses");
}

function modelLoaded() {
    console.log("poseNet is Initialized");
}

function got_poses() {
    if (results.length > 0) {
        console.log(results);
    }
}

