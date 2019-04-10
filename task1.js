function Robot(){
  this.work = function(){
    if(this.__proto__==CoffeRobot.prototype){
      return 'Я CoffeRobot – я варю каву';
    }
    else if(this.__proto__==RobotDancer.prototype){
      return 'Я RobotDancer – я просто танцюю';
    }
    else if(this.__proto__==RobotCooker.prototype){
      return 'Я RobotCoocker – я просто готую';
    }
    else{
      return 'Я Robot – я просто працюю';
    }
  }
}

function CoffeRobot(){
  Robot.call(this);
}
function RobotDancer(){
  Robot.call(this);
}
function RobotCooker(){
  Robot.call(this);
}

var robot = new Robot();
var coffe = new CoffeRobot();
var dancer = new RobotDancer();
var cooker = new RobotCooker();
var Robot = [robot, coffe, dancer, cooker];

for(var i=0; i<Robot.length; i++){
  console.log(Robot[i].work());
}
