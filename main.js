var img = "";
var Status = "";
var objects = [];
var objectDetector = "";

function preload(){
    img = loadImage("")
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function modelLoaded(){
    console.log("Model Loaded");
    Status = true;
    objectDetector = ml5.objectDetector('cocossd', modelLoaded); 
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function gotResults(){
    if (error){
        console.error(error, "error");
}
      console.log(results, "results");
      objects = results;
}
