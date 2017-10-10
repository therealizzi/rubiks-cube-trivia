//these are global variables
var time = "";
var x = "";
var pause = "";
var wins = "";
var losses = "";

//These are the question objects
var question1 = {
	question: "What state am I from",
	answer1: "Hollywood",
	answer2: "State of mind",
	answer3: "New Jersey",
	answer4: "Montana",
	correct: "Montana",
	solution: "answerButton4",
	image: "<img src=\"assets/images/star1.bmp\">",
};

var question2 = {
	question: "How hard is winning?",
	answer1: "Not hard",
	answer2: "A little hard",
	answer3: "Super duper hard",
	answer4: "I'm not sure",
	correct: "Super duper hard",
	solution: "answerButton3",
	image: "<img src=\"assets/images/star2.bmp\">",
};

//This function shows the final score
function endGame(){
	$("#heartbeat").html("Wins: "+wins);
	$("#question").html("Losses: "+losses);
};

//This array holds the question objects
var questionBank = [question1, question2];

var activeQuestion = "";

//This function picks the question and populates the answer buttons
function pickQuestion(){
	if (questionBank.length > 0){
		var i = Math.floor(Math.random()*questionBank.length)
		activeQuestion = questionBank[i];
		$("#question").html(questionBank[i].question);
		$("#answerButton1").html(questionBank[i].answer1);
		$("#answerButton2").html(questionBank[i].answer2);
		$("#answerButton3").html(questionBank[i].answer3);	
		$("#answerButton4").html(questionBank[i].answer4);
		questionBank.splice(i,1);
	} else {
		endGame();
	};
};

//This function runs pickQuestion() and starts a new round
function startTimer(){

	//This clears the image div before each new game
	$("#image").html("")
	
	//This picks a new question
	pickQuestion()

	//This starts the timer
 	time = 30;
 	x = setInterval(function(){

 	//This displays the countdown
 	time --;
 	$("#heartbeat").html(time);

 	//This stops the countdown at 0:00
 	if (time == 0){
 		clearInterval(x);
 	}
 	}, 1000);
};

//This "Start Game" button function runs startTimer()
$(".startgame").click(function(){
	startTimer();
});

//This checks answer, starts break-counter, and shows result
var test = "";

$(document).ready(function(){

	$(".answerButtons").click(function(){
		
//This displays the correct answer and image
		// $("#answerImage").img
		console.log(activeQuestion.solution)

//This checks the answer for the button clicked
		var test = jQuery(this).attr("id");	
		console.log(test);

		if (test === activeQuestion.solution){
			console.log("true")
			$("#question").html("Your correct, the answer is: "+activeQuestion.correct)
			wins++;
		} else {
			console.log("wtf")
			$("#question").html("Your wrong, the answer is: "+activeQuestion.correct)
			losses++;
		}

//This clears counter and counts down 3 seconds
		clearInterval(x);

 		//This adds an image to the img div
 		$("#image").html(activeQuestion.image);
		
		pause = 3;
		 x = setInterval(function(){
 		pause --;

 		$("#heartbeat").html(pause);

 //This ends counter at 0 and initiates next game
 		if (pause == 0){
 		clearInterval(x);
 		startTimer();
 		}; 
 		}, 1000);

	});
});