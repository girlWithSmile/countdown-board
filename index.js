var WINDOW_WIDTH=1024;
var WINDOW_HEIGHT=768;
var R=8; //小圆圈半径
var MARGIN_TOP=60;  
var MARGIN_LEFT=30;
const ENDTIME=new Date(2018,3,30,18,47,52); //截止日期
var curShowTimeSeconds=0;  //距离截止日期还有多少秒
var myCanvas=document.getElementById("canv");
var cxt=myCanvas.getContext("2d");
myCanvas.width=WINDOW_WIDTH;
myCanvas.height=WINDOW_HEIGHT;
//myCanvas.style.border="1px solid black";

window.onload=function(){
	
	
	curShowTimeSeconds=getCurrentShowSeconds();
	// render(cxt);
	setInterval(
		function(){
			cxt.clearRect(0,0,myCanvas.width,myCanvas.height);
			render(cxt);
			curShowTimeSeconds=getCurrentShowSeconds();
		},500);
}

function getCurrentShowSeconds(){
	var now=new Date();
	var ret=ENDTIME.getTime()-now.getTime();
	ret=Math.round(ret/1000);
	return ret>=0 ? ret :0;
}
function update(){

}
function render(cxt){
	var hours,minutes,seconds;
	hours = parseInt(curShowTimeSeconds/3600);
	minutes = parseInt((curShowTimeSeconds-hours*3600)/60);
	seconds = curShowTimeSeconds%60;

	renderDigit(MARGIN_LEFT,MARGIN_TOP,parseInt(hours/10),cxt);
	renderDigit(MARGIN_LEFT+15*(R+1),MARGIN_TOP,parseInt(hours%10),cxt);
	renderDigit(MARGIN_LEFT+30*(R+1),MARGIN_TOP,10,cxt);

	renderDigit(MARGIN_LEFT+39*(R+1),MARGIN_TOP,parseInt(minutes/10),cxt);
	renderDigit(MARGIN_LEFT+54*(R+1),MARGIN_TOP,parseInt(minutes%10),cxt);
	renderDigit(MARGIN_LEFT+69*(R+1),MARGIN_TOP,10,cxt);

	renderDigit(MARGIN_LEFT+78*(R+1),MARGIN_TOP,parseInt(seconds/10),cxt);
	renderDigit(MARGIN_LEFT+93*(R+1),MARGIN_TOP,parseInt(seconds%10),cxt);


}
function renderDigit(x,y,num,cxt){
	cxt.fillStyle="rgb(0,102,153)";
	for(var i=0;i<digit[num].length;i++){
		for(var j=0;j<digit[num][i].length;j++){
			if(digit[num][i][j]==1){
				cxt.beginPath();
				cxt.arc(x+j*2*(R+1)+(R+1),y+i*2*(R+1)+(R+1),R,0,2*Math.PI,false);
				cxt.closePath();
				cxt.fill();
			}
		}
	}
}

