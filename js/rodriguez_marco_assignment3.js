/* 
Author: Marco ROdriguez
Date: 05-15-12
SDI - Project 3
Project Wraith continued...
*/

// global variables

var best60 = 1.21;
var bestEt = 8.21;
var bestMph = 185;
var airToFuel = 11.5;
var degrees = 26;
var raceFuel = 116;

// method procedure 

var projectWraith = function(weight){
	console.log("Project Wraith is back from the paint shop, it\'s time to build the Forced Inducted Twin Turbo Motor!");
	if(weight > 3000){
		console.log("Looks like at our weight we will be bulidng a Forced Inducted Twin Turbo Motor.");
		}
		else
		{
		if(weight < 3000){
			console.log("Car weighed in at a race weight for True 10.5 competition.");
			}
			else
			{
			console.log("We have to stick to 10.5 bracket for the race.");
			}
		}
	};
projectWraith(2900);
	console.log(" ");

//

var weldsNeeded = function(welds) {
var amountPerPlate = 4,
    totalWelds;
  if (welds < amountPerPlate) {
      console.log("Wait, something is not right here!");
      totalWelds = 48;
  }
  else {
      totalWelds = Math.floor(welds / amountPerPlate);
  }
  return totalWelds;
};

// return array 

function trackPrep() {
	var dialIn = [];
	dialIn[0] = "60ft out the hole";
	dialIn[1] = " overall ET in the 1/4 mile";
	dialIn[2] = " overall mph";

	return dialIn.join(); // return array
}

// array function

var horsePower = [150, 300, 450, 600, 750, 900, 1050, 1200];
var rpm = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000];
var boostLb = [2, 4, 6, 8, 10, 12, 14, 16];

var dynoTime = function() {
var power;
	console.log( "Now that we are approved by NHRA, it's time for some Dyno Tuning to see the numbers it puts out:");
	for(var i = 0; i < horsePower.length; i++){
		console.log(horsePower[i] + " hp @ " + rpm[i] + " RPMs " + "with " + boostLb[i] + " pounds of Boost.");
	}
	power = "I think that " + horsePower[7] + " horses @ " + rpm[7] + " RPMs with only " + boostLb[7] + " pounds of boost is not too shabby for it\'s first dyno pull!";
	return power;
}

var power = dynoTime();
console.log(power);
console.log("With Wraith pumping out " + horsePower[7] + " horses, we are confident in kicking ass in the Fall Nationals this year!");
console.log("Now that we have our dyno numbers, we can now go to the track and get the car\'s suspension, chassis, boost and launch dialed in");
	console.log(" ");
// calling property object

var dynoTime = {
	numbers: function (json) {
		console.log("Now that we have our dyno numbers, we can make comparisons when fine tunning our car's dial in performance at the track.");
		console.log("After a long day of dialing the car and numerous runs down the track, we have some numerous to log them in.");

		console.log("Pass: " + testing.pass + ", Boost: " + testing.boost + "lbs, 60ft: " + testing.sixtyft + ", 1/8 mile: = " + testing.eightmile + ", 1/4 mile = " + testing.quartermile + ", mph = " + testing.mph); 
	}
	console.log("After those runs, we have logged our numbers in and will determine where the car needs tweaking.");
	console.log("With few adjustments, we logged in our best 60ft out the hole at " + best60 + " with a best ET of " + bestEt + " at " + bestMph + " mph" );
	}
};

// function
console.log("There will be lots of elements when it comes to dialing in a car's performance, but the three main ones I will be looking for are:");
console.log(trackPrep());
