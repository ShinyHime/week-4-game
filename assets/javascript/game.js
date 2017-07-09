// INITIALIZE VARIABLES

var randomNumber = Math.floor((Math.random() * 100) + 1);
var wins = 0;
var losses = 0;
var pic1 = Math.floor((Math.random() * 10) + 1);
var pic2 = Math.floor((Math.random() * 10) + 1);
var pic3 = Math.floor((Math.random() * 10) + 1);
var pic4 = Math.floor((Math.random() * 10) + 1);
var totalScore = 0;

//start game
function startGame() {
	//makes random number/win condition to appear
	$('#randomNumber').append(randomNumber);

	//makes total score appear
	$('#totalScore').append(totalScore);

	//makes wins appear
	$('#wins').append('Wins: ' + wins);

	//makes losses appear
	$('#losses').append('Losses: ' + losses);

	console.log('Win Conidition: ' + randomNumber + " || " + 
				'Total Score: ' + totalScore);
	console.log('pic1: ' + pic1 + " || " + 
				'pic2: ' + pic2 + " || " +
				'pic3: ' + pic3 + " || " +
				'pic4: ' + pic4 );

}

startGame();

//FUNCTIONS

//if players click pic1
function click1(){
	$('#pic1').click(function() {
		//adds pic1 to total score
		totalScore = totalScore + pic1;
		$('#totalScore').html(totalScore);

		//changes the random numbers
		pic1 = Math.floor((Math.random() * 10) + 1);
		pic2 = Math.floor((Math.random() * 10) + 1);
		pic3 = Math.floor((Math.random() * 10) + 1);
		pic4 = Math.floor((Math.random() * 10) + 1);
		
		console.log('pic1: ' + pic1 + " || " + 
					'pic2: ' + pic2 + " || " +
					'pic3: ' + pic3 + " || " +
					'pic4: ' + pic4 );
		console.log('Total Score: ' + totalScore);

		if (totalScore > randomNumber) {
			lose();
		}

		if (totalScore === randomNumber) {
			win();
		}
	})
}

function click2(){
	$('#pic2').click(function() {
		//adds pic1 to total score
		totalScore = totalScore + pic2;
		$('#totalScore').html(totalScore);

		//changes the random numbers
		pic1 = Math.floor((Math.random() * 10) + 1);
		pic2 = Math.floor((Math.random() * 10) + 1);
		pic3 = Math.floor((Math.random() * 10) + 1);
		pic4 = Math.floor((Math.random() * 10) + 1);
		
		console.log('pic1: ' + pic1 + " || " + 
					'pic2: ' + pic2 + " || " +
					'pic3: ' + pic3 + " || " +
					'pic4: ' + pic4 );
		console.log('Total Score: ' + totalScore);

		if (totalScore > randomNumber) {
			lose();
		}

		if (totalScore === randomNumber) {
			win();
		}

	})
}

function click3(){
	$('#pic3').click(function() {
		//adds pic1 to total score
		totalScore = totalScore + pic3;
		$('#totalScore').html(totalScore);

		//changes the random numbers
		pic1 = Math.floor((Math.random() * 10) + 1);
		pic2 = Math.floor((Math.random() * 10) + 1);
		pic3 = Math.floor((Math.random() * 10) + 1);
		pic4 = Math.floor((Math.random() * 10) + 1);
		
		console.log('pic1: ' + pic1 + " || " + 
					'pic2: ' + pic2 + " || " +
					'pic3: ' + pic3 + " || " +
					'pic4: ' + pic4 );
		console.log('Total Score: ' + totalScore);

		if (totalScore > randomNumber) {
			lose();
		}

		if (totalScore === randomNumber) {
			win();
		}		
	})
}

function click4(){
	$('#pic4').click(function() {
		//adds pic1 to total score
		totalScore = totalScore + pic4;
		$('#totalScore').html(totalScore);

		//changes the random numbers
		pic1 = Math.floor((Math.random() * 10) + 1);
		pic2 = Math.floor((Math.random() * 10) + 1);
		pic3 = Math.floor((Math.random() * 10) + 1);
		pic4 = Math.floor((Math.random() * 10) + 1);
		
		console.log('pic1: ' + pic1 + " || " + 
					'pic2: ' + pic2 + " || " +
					'pic3: ' + pic3 + " || " +
					'pic4: ' + pic4 );
		console.log('Total Score: ' + totalScore);

		if (totalScore > randomNumber) {
			lose();
		}

		if (totalScore === randomNumber) {
			win();
		}
				
	})
}

//LOSE: if total score is more than random number
function lose() {
	losses = losses + 1;
	$('#losses').html('Losses: ' + losses);
	console.log('you lose');

	randomNumber = Math.floor((Math.random() * 100) + 1);
	totalScore = 0;

	$('#totalScore').html(totalScore);
	$('#randomNumber').html(randomNumber);
}

//WIN: if total score equals random number
function win() {
	wins = wins + 1;
	$('#wins').html('Wins: '+ wins);
	console.log('you win');

	randomNumber = Math.floor((Math.random() * 100) + 1);
	totalScore = 0;

	$('#totalScore').html(totalScore);
	$('#randomNumber').html(randomNumber);
}


//CALL FUNCTIONS
click1();
click2();
click3();
click4();