var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

var x = canvas.width/2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;

var ballRadius = 10;

function drawBall() {
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI*2);
	ctx.fillStyle = "#0095DD";
	ctx.fill();
	ctx.closePath();
}

function drawOutline() {
	ctx.beginPath();
	ctx.rect(0, 0, canvas.width, canvas.height);
	ctx.strokeStyle = "rgb(0, 0, 0)";
	ctx.stroke();
	ctx.closePath();
}

function loop() {
	// Update ball position
	x += dx;
	y += dy;

	// Check for collisions
	if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
		dx = -dx;
	}
	if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
		dy = -dy;
	}
	// draw
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawOutline();
	drawBall();
}

setInterval(loop, 10);