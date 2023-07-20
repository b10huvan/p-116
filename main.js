mouthX=0
mouthY=0


function preload(){
   moustache = loadImage('https://i.postimg.cc/CKd4JDc0/mustache.png');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();


    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(moustache, mouthX, mouthY, 50, 50);
}

function take_snapshot(){
    save('myFilterImage.png');

}

function gotPoses(results){
    if(results.length > 0){
       console.log(results);
       mouthX = results[0].pose.nose.x-23;
       mouthY = results[0].pose.nose.y-4;
       console.log("mouth x = " + mouthX);
       console.log("mouth y = " + mouthY);
    }
}