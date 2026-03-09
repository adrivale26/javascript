function greeting() {

var today = new Date();
      var hours = today.getHours();
      var minutes = today.getMinutes();
      var seconds = today.getSeconds();
var message = '';

var am_pm = '';
if (hours < 12) {
    am_pm = "AM";
} else {
    am_pm = "PM";
}

hours = hours % 12;
 if (hours == 0) {
    hours = 12;
 } 
 
// ask user for their name
var name = prompt("What is your name?");

// use switch statement to determine which greeting to use 
var message = '';
switch (am_pm) {
case 'AM':
 message = 'Good Morning'
 break;

case 'PM':
 message = 'Good Evening'
 break;
 
default:
 message = 'Have a nice day!'
} 
console.log(am_pm);


// add greeting with name and capitalize the first letter of the user's name
document.write("<p>" + message + " " + name.charAt(0).toUpperCase() +  name.slice(1) + "!</p>"); 



}

// ask user to enter their email and validate email
function validateEmail() {
var email = prompt("Enter your email address: ");
var emailRegex = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/; 

while (!emailRegex.test(email)) {
    email = prompt('Please enter a valid email.');
}


// split the username and domain
var emailSplit = email.split("@");
var userName = emailSplit[0].toUpperCase();
var domain = emailSplit[1]



// print the username and domain
document.write("<p>Username: <strong>" + userName + "</strong></p>")
document.write("<p>Domain: " + domain + "</p>")

}



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
// return user's score and percentage
// only
var percentage = ((score / 9) * 100).toFixed(2);
document.write(percentage + "%");
return score;
}


// function that displays current date and time 
function date() {
var today = new Date();

var months =  ['January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August', 'September', 'October',
    'November', 'December'];

var month = months[today.getMonth()];

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
    'Thursday', 'Friday', 'Saturday']

var dayOfWeek = days[today.getDay()];

var dayOfMonth = today.getDate();
var fullYear = [today.getFullYear()];



// display am if the time is < 12 displays pm if time > 12
var am_pm = '';
if (hours < 12) {
    am_pm = "AM";
} else {
    am_pm = "PM";
}


var today = new Date();
      var hours = today.getHours();
      var minutes = today.getMinutes();
      var seconds = today.getSeconds();


// convert hours from military time to regular time 
hours = hours % 12;
 if (hours == 0) {
    hours = 12;
 } 

 

document.write('<p>Today is: ' + dayOfWeek + ', ' +  month + ' ' + dayOfMonth + ', ' + fullYear +   
'. It is ' + hours + ":" + minutes + ":" + seconds + ' ' +  am_pm + ' ' + '</p>');

}


function quotes() {
// quote of the day generate a random number between 0 and 4 and use that to get a quote 
            var quotes = [
            "What you seek is seeking you.- Rumi", 
            "All change is hard at first, messy in the middle and gorgeous at the end. - Robin Sharma",
            "Every moment is a fresh beginning. - T.S Eliot", 
            "The secret of getting ahead is getting started. - Mark Twain", 
            "All you need is love. - The Beatles"
        ];
		    var random_number = Math.floor(Math.random() * quotes.length);
            document.write("<p>Quote of The Day: " + quotes[random_number] + "</p>");
    }