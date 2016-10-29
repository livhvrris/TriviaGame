var triviaQuestions = [

  {
    question: "Question 1 Placeholder",
    answerChoices: ["a", "b", "c", "d"],
    correctAnswer: "c"
  },
  {
    question: "Question 2 Placeholder",
    answerChoices: ["a", "b", "c", "d"],
    correctAnswer: "b"
  },
  {
    question: "Question 3 Placeholder",
    answerChoices: ["a", "b", "c", "d"],
    correctAnswer: "d"
  },
  {
    question: "Question 4 Placeholder",
    answerChoices: ["a", "b", "c", "d"],
    correctAnswer: "a"
  },
  {
    question: "Question 5 Placeholder",
    answerChoices: ["a", "b", "c", "d"],
    correctAnswer: "a"
  }

];

var userCorrectAnswers = 0;
var userIncorrectAnswers = 0;
var userUnanswered = 0;

var number = 10; // Remember to update this to 60


// INTRO SCREEN

function preGame(){

  number = 10; // Remember to update this to '60' // Bug: When game restarts, it decrements my increasing amounts, instead of by 1

  $('.startTriviaGameButton').show();
  $('.questionSection').hide();
  $('.countdownTimer').hide();
  $('.endOfGame').hide();

  $('#gameStartButton').on('click', startGame);

}

preGame();

// BEGIN GAME

function startGame(){

  triviaGameStart()

  $('#countdownTimeRemaining').html('<h3>Time Remaining: 10 </h3>'); // Remember to update this to '60'

  counter = setInterval(decrement, 1000);

  $('.startTriviaGameButton').hide();
  $('.questionSection').show();
  $('.countdownTimer').show();

  userCorrectAnswers = 0;
  userIncorrectAnswers = 0;
  userUnanswered = 0;

}

// TIMER //

function decrement(){

  number--;

  $('#countdownTimeRemaining').html('<h3>Time Remaining: ' + number + '</h3>');

  if (number === 0){

    alert('Time Up!')
    stop();
    preGame();
  
  }
}

function stop(){

  clearInterval(counter);

}



function triviaGameStart() {

for (var i = 0; i < triviaQuestions[i].answerChoices.length; i++){

  $("#questionOne").html(triviaQuestions[0].question);
  $("#answerOne").html(triviaQuestions[0].answerChoices);
  // $('#answerOne').append('<button>' + triviaQuestions[0].answerChoices + '</button>')

    // console.log(triviaQuestions[0].question);
    // console.log(triviaQuestions[0].answerChoices);

  $("#questionTwo").html(triviaQuestions[1].question);

  $("#questionThree").html(triviaQuestions[2].question);

  $("#questionFour").html(triviaQuestions[3].question);

  $("#questionFive").html(triviaQuestions[4].question);

};
}


// _______________________________________________________
// _______________________________________________________


// // var displayQuestion = $('<div>');
// // $('.questionSection').append('<p>' + triviaQuestions[i].question + '</p>')

// // $("#questionOne").html('<p>' + triviaQuestions.question[0] '</p>')

//   for (var i = 0; i < triviaQuestions[i].answers.length; i++){

//     var userAnswer = question.answers[i];

//       if (userAnswer === triviaQuestions[i].correctAnswer) {
//         userCorrectAnswers++
//       }

//       else if (userAnswer !== triviaQuestions[i].correctAnswer) {
//         userIncorrectAnswers++
//       }

//       // else if (userAnswer === null) {
//       //   userUnanswered++
//       // }
    
//   }


