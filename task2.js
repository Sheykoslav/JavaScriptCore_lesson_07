function Robot(){
  this.message = 'Я Robot – я просто працюю';
  this.work = function(){
    return this.message;
  }
}
function RobotCooker(){
  Robot.apply(this);
  this.message = 'Я RobotCoocker – я просто готую';
}

function CoffeRobot(){
  Robot.apply(this);
  this.message = 'Я CoffeRobot – я варю каву';
}

function RobotDancer(){
  Robot.apply(this);
  this.message = 'Я RobotDancer – я просто танцюю';
}

RobotCooker.prototype = Object.create(Robot.prototype);
RobotCooker.prototype.work = function(){
  Robot.prototype.work.apply(this);
}

RobotDancer.prototype = Object.create(Robot.prototype);
RobotDancer.prototype.work = function(){
  Robot.prototype.work.apply(this);
}

CoffeRobot.prototype = Object.create(Robot.prototype);
CoffeRobot.prototype.work = function(){
  Robot.prototype.work.apply(this);
}

var cooker = new RobotCooker();
var dancer = new RobotDancer();
var coffe = new CoffeRobot();
var robot = new Robot();

var Robot = [robot, coffe, dancer, cooker];
for(var i=0; i<Robot.length; i++){
  console.log(Robot[i].work());
}
