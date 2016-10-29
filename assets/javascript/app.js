var triviaQuestions = [

  {
    question: "Question 1",
    answerChoices: ["a", "b", "c", "d"],
    correctAnswer: "c"
  },
  {
    question: "Question 2",
    answerChoices: ["a", "b", "c", "d"],
    correctAnswer: "b"
  },
  {
    question: "Question 3",
    answerChoices: ["a", "b", "c", "d"],
    correctAnswer: "d"
  },
  {
    question: "Question 4",
    answerChoices: ["a", "b", "c", "d"],
    correctAnswer: "a"
  },
  {
    question: "Question 5",
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

  $(".questionSection").hide();
  $(".countdownTimer").hide();
  $(".endOfGame").hide();

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
  }
}

function stop(){

  clearInterval(counter);

}


function triviaGameStart() {
  console.log('does this work?')
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


