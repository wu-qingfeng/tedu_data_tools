
/*
function Flyer(ename,speed){
	this.ename = ename;
	this.speed = speed;
}

Flyer.prototype.fly = function(){
	console.log(this.ename + " 以" + this.speed + "时速飞行！" );
}


function Plane(ename,score,speed){
	Flyer.call(this,ename,speed);
	this.score = score;
}
Plane.prototype.getScore = function(){
	console.log('击落 '+this.ename+' 得分：'+this.score);
}

Object.setPrototypeOf(Plane.prototype,Flyer.prototype);




var plane = new Plane('小蜜蜂',1000,200);

plane.fly();
plane.getScore();  
*/

class Flyer{
	constructor(ename,speed){
		this.ename = ename;
		this.speed = speed;
	}

	fly(){
		console.log(this.ename + " 以" + this.speed + "时速飞行！" );
	}
}


class Plane extends Flyer{
	constructor(ename,score,speed){
		super(ename,speed);
		this.score = score;
	}
	getScore(){
		console.log('击落 '+this.ename+' 得分：'+this.score);
	}
}

class Fighter extends Flyer{
	constructor(ename,score,speed){
		super(ename,speed);
		this.score = score;
	}
	getScore(){
		console.log("击落"+this.ename+" 得："+this.score);
	}
}


var plane = new Plane('小蜜蜂',1000,200);

plane.fly();
plane.getScore();


var f18 = new Fighter("F18-战机",2000,300);
f18.fly();
f18.getScore();

console.dir(f18);