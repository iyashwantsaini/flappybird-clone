var cvs = document.getElementById("canvas");

cvs.width = window.innerWidth-20;
cvs.height = window.innerHeight-20;
var ctx = cvs.getContext("2d");

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();

bird.src = "https://cdn.glitch.com/180b6160-0431-44ea-b9dd-f7b9082bb344%2Fbluebird-midflap.png?v=1567885073227";
bg.src = "https://cdn.glitch.com/180b6160-0431-44ea-b9dd-f7b9082bb344%2Fbackfull.png?v=1567888229822";
fg.src = "https://cdn.glitch.com/180b6160-0431-44ea-b9dd-f7b9082bb344%2Fground.png?v=1567887807620";
pipeNorth.src = "https://cdn.glitch.com/180b6160-0431-44ea-b9dd-f7b9082bb344%2Fpipe-green-down.png?v=1567887345074";
pipeSouth.src = "https://cdn.glitch.com/180b6160-0431-44ea-b9dd-f7b9082bb344%2Fpipe-green.png?v=1567885058321";

var gap=85;
var constant=pipeNorth.height+gap;
var bx=100;
var by=250;
var gravity=1;

document.addEventListener("keydown",moveUp);
function moveUp(){
  by-=20;
}

// var pipe=[];
// pipe[0]={
//   x:window.innerWidth-200,
//   y:0
// }

function draw(){
    ctx.drawImage(bg,0,0);
  
  
  // for(var i=0 ; i<pipe.length ; i++){
      // ctx.drawImage(pipeNorth,window.innerWidth-500,0);
      // ctx.drawImage(pipeSouth,window.innerWidth-500,pipeNorth.height+gap);
    // pipe[i].x--;
  // }
  
  ctx.drawImage(pipeNorth,200,200);

  ctx.drawImage(fg,0,window.innerHeight-fg.height);
  ctx.drawImage(bird,bx,by);
  
  by+=gravity;
  requestAnimationFrame(draw);
}

draw();