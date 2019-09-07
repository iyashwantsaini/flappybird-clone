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
bg.src = "https://cdn.glitch.com/180b6160-0431-44ea-b9dd-f7b9082bb344%2Fback.jpg?v=1567885810251";
fg.src = "https://cdn.glitch.com/180b6160-0431-44ea-b9dd-f7b9082bb344%2Fbase.png?v=1567886163119";
pipeNorth.src = "https://cdn.glitch.com/180b6160-0431-44ea-b9dd-f7b9082bb344%2Fpipe-green-down.png?v=1567887345074";
pipeSouth.src = "https://cdn.glitch.com/180b6160-0431-44ea-b9dd-f7b9082bb344%2Fpipe-green.png?v=1567885058321";

var gap=85;
var constant=pipeNorth.height+gap;

function draw(){
  
  ctx.drawImage(bg,0,0);
  ctx.drawImage(pipeNorth,window.innerWidth-200,0);
  ctx.drawImage(pipeSouth,window.innerWidth-200,constant);
  ctx.drawImage(fg,0,0);
}

draw();