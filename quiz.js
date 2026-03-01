
function quiz() {
var score = 0;
var guesses = 3;
    var question = [
        ["What is the smallest planet in our solar system?", "Mercury"],
        ["What is the largest planet in our solar system?", "Jupiter"],
        ["What planet is known as the 'Red Planet'?", "Mars"]
        ];


    
// create for loop inside the quiz function to track the quiz questions and answers 
for (var i = 0; i < question.length; i++)  {
  // user gets 3 attempts per question
    guesses = 3;


// create a while loop nested in the for loop
// tracks user's guesses
while (guesses > 0) {
var answer = prompt(question[i][0]);

// use an if statement to compare the user's answer
if (answer == question[i][1])  {
    alert("You are correct!");
    score += 3;
    break; 
}
// if user answers incorrectly, they lose a guess and a point
 else {
    guesses -= 1;
    alert("Sorry. Try again. You have " + guesses + " guesses left.")
    score -= 1;

// if user has used up all of their guesses they score 0 points. Without this if statement, the points would be negative

} if (guesses == 0) {
    alert('You did not earn any points. Sorry.');
    score = 0;
}
}

}

// return user's score
return score;
}















































    