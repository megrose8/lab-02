'use strict'
// // greeting prompts//

let correctAnswers = 0

let userName = prompt('Hi there! What should I call you?')
//console.log(userName)
alert('Hi there ' + userName + ' !')

// //question 1//

let guessEducation = prompt('When do you think I graduated college? Please answer in YYYY numerical format.')
let edu = '2023';
//console.log(guessEducation)

if (guessEducation === '2023') {
  alert('Wow! Great guess! It is!');
  correctAnswers++;
}
else {
  alert('no not quite...');
}


// //question 2//

let guessHomeTown = prompt('Where do you think I am from?')
let homeTown = 'spokane';
//console.log(guessHomeTown)

if (guessHomeTown.toLowerCase() === homeTown) {
  alert('Unfortunately, yes. Got the heck out of there...');
  correctAnswers++;
}
else {
  alert('Lower your expectations, you are incorrect');
}


// //question 3//

let guessPet = prompt('What type of animal do you think I have as a pet?')
let pet = 'dog';
//console.log(guessPet)

if (guessPet.toLowerCase() === pet) {
  alert('Yes! I love her very much...');
  correctAnswers++;
}
else {
  alert('Nope! Not quite.');
}


// //question 4//

let guessMajor = prompt('What do you think my college major was?')
let major = 'history';
//console.log(guessMajor)

if (guessMajor.toLowerCase() === major) {
  alert('Yep! And it definitely was worth the student debt...');
  correctAnswers++;
}
else {
  alert('Nope! Think of something less applicable to the employment market.');
}


// //question 5//

let guessHobby = prompt('Do you think I like to read?')
let read = 'yes';
//console.log(guessHobby)

if (guessHobby.toLowerCase() === read) {
  alert('Yep! I just finished Pet Semetary! If you are not into sleeping, I highly recommend it.');
  correctAnswers++;
}
else {
  alert('Incorrect! I love to read.');
}


// //question 6//

let yearAttempts = 0

while (yearAttempts < 4) {
  yearAttempts++;
  let yearsPortlandString = prompt("How many years do you think I have lived in Portland")
  let yearsPortlandNumber = parseInt(yearsPortlandString);

  if (yearsPortlandNumber > 6) {
    console.log(yearsPortlandNumber);
    yearsPortlandString = alert("Nope! Less than that.")
    yearsPortlandNumber = parseInt(yearsPortlandString)

  } if (yearsPortlandNumber < 6) {
    console.log(yearsPortlandString)
    yearsPortlandString = alert("Not quite, more than that.")
    yearsPortlandNumber = parseInt(yearsPortlandString)
    
  } if (yearsPortlandNumber === 6) {
    console.log(yearsPortlandString);
    yearsPortlandString = alert("Yep! You got it!")
    correctAnswers++
    break;
  }
}

//question 7//

let citiesLivedIn = ["seattle", "spokane", "everett", "portland"]
let cityAttempts = 6

while (cityAttempts > 0) {
  let userGuess = prompt("Guess what American cities I have lived in. You have " + cityAttempts + " guesses remaining");
  userGuess.toLowerCase();
  if (citiesLivedIn.includes(userGuess)) {
    cityAttempts--;
    alert("Good job " + userGuess + " is one of the cities!");
    correctAnswers++
    break;
  } else {
    cityAttempts--;
    alert("Sorry " + userGuess + " is not a city I have lived in.");
  }
}
alert("The correct answers were Spokane, Portland, Everett, and Seattle.")

//goodbye message//


alert('Thanks for playing ' + userName + '! You got ' + correctAnswers + ' correct. Hope you learned some new things about me!')




