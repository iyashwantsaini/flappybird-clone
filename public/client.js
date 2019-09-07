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

var fly = new Audio();
var scor = new Audio();
var hit = new Audio();

fly.src = "https://cdn.glitch.com/180b6160-0431-44ea-b9dd-f7b9082bb344%2Fwing.wav?v=1567885013238";
scor.src = "https://cdn.glitch.com/180b6160-0431-44ea-b9dd-f7b9082bb344%2Fpoint.wav?v=1567884996415";
hit.src = "https://cdn.glitch.com/180b6160-0431-44ea-b9dd-f7b9082bb344%2Fhit.wav?v=1567884990411";

var gap=195;
var bX=100;
var bY=250;
var gravity=3;
var score = 0;
var hit=1;

document.addEventListener("keydown",moveUp);
function moveUp(){
  fly.play();
  bY-=35;
}

var pipe=[];
pipe[0]={
  x:window.innerWidth-500,
  y:0
}

function draw(){
    ctx.drawImage(bg,0,0);
  
  for(var i=0 ; i<pipe.length ; i++){
      ctx.drawImage(pipeNorth,pipe[i].x,pipe[i].y);
      ctx.drawImage(pipeSouth,pipe[i].x,pipe[i].y+pipeNorth.height+gap);
      pipe[i].x-=2;
    
      if(pipe[i].x == 600){
        pipe.push({
          x:window.innerWidth-500,
          y:Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height
        });
      }
    
        if( bX + bird.width >= pipe[i].x && bX <= pipe[i].x + pipeNorth.width && (bY <= pipe[i].y + pipeNorth.height || bY+bird.height >= pipe[i].y+pipeNorth.height+gap) || bY + bird.height >=  window.innerHeight - fg.height){
          location.reload();
          if(hit==1){
          hit.play();
          }
          hit++;
        }
    
    if(pipe[i].x <= 90){
            score++;
            scor.play();
      } 
  }
  
  ctx.drawImage(fg,0,window.innerHeight-fg.height);
  ctx.drawImage(bird,bX,bY);
  bY+=gravity;
  
  ctx.fillStyle = "#000";
  ctx.font = "20px Verdana";
  ctx.fillText("Score : "+score,10,cvs.height-20);
  
  
  requestAnimationFrame(draw);
}

draw();