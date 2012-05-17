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

var amountPerPlate = 4,
    totalWelds;
  if (welds < amountPerPlate) {
      console.log("Wait, something is not right here!");
      totalWelds = 48;
  }
  else {
      totalWelds = Math.floor(welds / amountPerPlate);
  }	