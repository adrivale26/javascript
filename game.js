var count = 0;

var promptDiv = document.getElementById('prompt').innerHTML = '<button onclick = "playGame()">Start Game</button>'; 

// array of questions
var questions = [
	["What city is considered the 'city of love' ?", 1, "Madrid", "Paris", "Rome"],
	["What is the capitol of Texas?", 1, "Dallas", "Austin", "Houston"],
	["What city is known as the 'big apple'?", 1, "Los Angeles", "New York City", "Miami"]	
];


function playGame(){
	var question = questions[count];
	
	// access first question in array
	var questionId = document.getElementById('question').innerHTML = question[0];
	
	question.shift();
	
	// access correct index
	var correctIndex = question[0];
	
	question.shift();
	
	// create list with remaining possible answers 
	var possibleAnswers = " ";
	
	for(var i = 0; i < question.length; i++) {
	
	possibleAnswers += '<li><a href="#" onclick="checkAnswer('+ i + ',' + correctIndex + ')">'+ question[i] + '</a></li>';                             
	
	}
	document.getElementById('answers').innerHTML = possibleAnswers;
	alert("Click the best answer :p!");
	
	
	
}

function checkAnswer(userIndex, correctIndex) {
	if(userIndex == correctIndex) {
		alert("You got it :)")
		
	} 
	else {
	    alert("Try again :(")
	
	}
	
	count++;
	
	
	if (count >= questions.length) {
		document.getElementById('prompt').innerHTML =
		'<button onclick="location.reload()">Restart Game</button>';
	} else {
		document.getElementById('prompt').innerHTML = 
		'<button onclick="playGame()">Next Question</button>';
		
	}
	
	
}
	

	
	
