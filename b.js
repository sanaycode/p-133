var status="";
var objects=[];
var img="";
var objectDetector="";
function back(){
    window.location="index.html";
}
function preload(){
    img=loadImage("bedroom.jpg")
}
function setup(){
    canvas=createCanvas(640, 420);
    canvas.position(450, 260);
    document.getElementById("status").innerHTML="Status : Detecting Object";
}
function modelLoaded(){
    console.log("Model Loaded!");
    objectDetector.detect(img, gotResults);
    status="true";
}
function gotResults(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;
}
function draw(){
    image(img, 0, 0, 640, 420);
    if(status != ""){
        for(i=0, i;objects.length(); i++){
            document.getElementById("status").innerHTML="Status: Object Detected";
            fill("#FF0000");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+""+percent+"%"+objects[i].x+15+objects[i].y+15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}