/************************************************************************
Welcome to bouncy party balls! Become mesmerized in the lovely, colourful 
and flashy ball bouncing on the screen! Once you're done with that, click
on the screen to add some more, until party balls are everywhere!!!
************************************************************************/

//Variables for the program
var balls = []; // Array to hold the ball objects
// Initializing variables for the ball shadows.
var shadowWidth = 0;
var shadowHeight = 20;
var programSpeed = 70; // Frame rate.
var index = 0; // Tracking index of balls array.

// Defining a bouncy-ball object.
var BouncyBall = function(ballX, ballY, ballUp, ballSide) {
    this.ballX = ballX;
    this.ballY = ballY;
    this.ballUp = ballUp;
    this.ballSide = ballSide;
    this.color1 = random(0,255);
    this.color2 = random(0,255);
    this.color3 = random(0,255);
};

// Making a function to draw the ball.
BouncyBall.prototype.drawBall = function() {
    noStroke();
    this.color1 += (random(0,20)-10);
    this.color2 += (random(0,20)-10);
    this.color3 += (random(0,20)-10);
    fill(this.color1,this.color2,this.color3);
    ellipse(this.ballX,this.ballY,75,75);
};

// Making a function to draw the ball's shadow.
BouncyBall.prototype.drawShadow = function() {
    fill(186,171,171);
    noStroke();
    ellipse(this.ballX,310,shadowWidth,shadowHeight);
    shadowWidth = 85 - (this.ballY-250);
};

// Making a function to adjust the ball's position.
BouncyBall.prototype.moveBall = function() {
    // Bouncing the ball up.
    this.ballY += this.ballUp;
    // Simulating gravity (adjusting upwards speed).
    this.ballUp += 0.3;
    // Preventing the ball from going off the screen.
    if (this.ballY >= 260) {
        this.ballUp = random(-12,-8);
    }
    
    // Bouncing the ball to the side.
    this.ballX += this.ballSide;
    // Preventing the ball from going off the screen.
    if (this.ballX >= 362.5) {
        this.ballSide = random(-10,-3);
    }
    if (this.ballX <= 37.5) {
        this.ballSide = random(3,10);
    }
};

draw = function() {
    frameRate(programSpeed);
    background(224, 201, 201);
    
    // Running all the functions of each ball on the screen.
    for (var i = 0; i < balls.length; i++) {
        balls[i].drawBall();
        balls[i].drawShadow();
        balls[i].moveBall();
    }
//Mouse interaction to draw a new ball
    mouseClicked = function() {
        balls[index] = new BouncyBall(200,200,-6,2);
        index++;
    };
};
