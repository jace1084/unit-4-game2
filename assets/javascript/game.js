$(document).ready(function() {

	// =============================
	// Set up global variables first
	// =============================

	// initialize global variables
	var gemOneVal, gemTwoVal, gemThreeVal, gemFourVal;
	var wins = 0;
	var losses = 0;
	// ranComputerNum is the random digit computer will generage
	var ranComputerNum;
	// userTallyScore is the ongoing sum of gem values user has picked
	var userTallyScore;

	// ================
	// Set up functions
	// ================

	// function that initializes the variables for each new round of the game
	function initializeVariables() {
		// have computer pick a number between 19-120
		ranComputerNum = 19 + Math.floor(Math.random() * 102);
		// pick random gem values between 1-12
		gemOneVal = 1 + Math.floor(Math.random() * 12);
		gemTwoVal = 1 + Math.floor(Math.random() * 12);
		gemThreeVal = 1 + Math.floor(Math.random() * 12);
		gemFourVal = 1 + Math.floor(Math.random() * 12);
		// set initial value of user's ongoing gem selections sum to 0
		userTallyScore = 0;
		// update the html for the game board
		$("#winsTally").html("Wins: " + wins);
		$("#lossesTally").html("Losses: " + losses);
		$("#randomNumber").html(ranComputerNum);
		$("#userScore").html(userTallyScore);
		consoleLogVariables();
	}

	// function to check if user has won or lost
	// increment wins / losses in either case
	// and then re-initialize variables for new round
	// if user hasn't won or lost then nothing happens
	function hasUserWonOrLost() {
		// check if user has lost
		if (userTallyScore > ranComputerNum) {
			losses++;
			console.log("user lost");
			initializeVariables();
		}

		// check if user has won
		if (userTallyScore == ranComputerNum) {
			wins++;
			console.log("user won");
			initializeVariables();
		}
	}

	// debugging functionality function
	function consoleLogVariables() {
		console.log("wins: " + wins + " losses: " + losses);
		console.log("gemOneVal: ", gemOneVal + " gemTwoVal: " + gemTwoVal + " gemThreeVal: " + gemThreeVal + " gemFourVal: " + gemFourVal);
		console.log("ranComputerNum: " + ranComputerNum + " userTallyScore: " + userTallyScore);
		console.log("----------------------------------");

	}

	// =====================================
	// Now comes the main game functionality
	// =====================================

	initializeVariables();

	// listen for clicks on any of the gems by targeting the gem class
	$(".gem").on("click", function() {
		// each gem has a value attribute of gem1, gem2, gem3, or gem4
		// use this attribute to identify which gem the user actually clicked
		var pressed = $(this).attr("value");
        console.log(pressed);
        // add the value of the gem to the user's ongoing score tally
        if (pressed == "gem1") {
        	userTallyScore += gemOneVal;
        } else if (pressed == "gem2") {
        	userTallyScore += gemTwoVal;
        } else if (pressed == "gem3") {
        	userTallyScore += gemThreeVal;
        } else if (pressed == "gem4") {
        	userTallyScore += gemFourVal;
        } else {
        	console.log("error");
        }
        // then update the html for the user score
        $("#userScore").html(userTallyScore);
        consoleLogVariables();
        // call the function to see if user has won or lost
        hasUserWonOrLost();
	});

});