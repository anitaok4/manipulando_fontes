difference =0;
leftWristx =0;
rightWristx=0;

function setup(){
    video = createCapture(VIDEO)
    video.size(550, 550);
    canvas = createCanvas(550, 550)
    canvas.position(560,150)
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function draw(){
    background('#BBE8B2')
    fill('#4f9ab0')
    textSize(difference)
    text("Anita", 100, 100)
}

function modelLoaded(){
    console.log("deu certo")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristx = results[0].pose.leftWrist.x
        rightWristx = results[0].pose.rightWrist.x
        difference = floor(leftWristx - rightWristx)
        
    }
}