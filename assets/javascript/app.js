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

var number = 60;


function preGame(){

  $(".questionSection").hide();
  $(".countdownTimer").hide();
  $(".endOfGame").hide();

  $('#gameStartButton').on('click', startGame);

}

function startGame(){

  counter = setInterval(decrement, 1000);

  $('.startTriviaGameButton').hide();
  $('.questionSection').show();
  $('.countdownTimer').show();

  userCorrectAnswers = 0;
  userIncorrectAnswers = 0;
  userUnanswered = 0;

}


function decrement(){

  $('#countdownTimeRemaining').html('<h3>Time Remaining: ' + number + '</h3>');

  number--;

  if (number === 0){
    stop();
    alert('Time Up!')
  }

}


function stop(){
  clearInterval(counter);
}


function triviaGameStart() {

var displayQuestion = $('<div>');
$('.questionSection').append('<p>' + triviaQuestions[i].question + '</p>')

  for (var i = 0; i < triviaQuestions[i].answers.length; i++){

    var userAnswer = question.answers[i];

      if (userAnswer === triviaQuestions[i].correctAnswer) {
        userCorrectAnswers++
      }

      else if (userAnswer !== triviaQuestions[i].correctAnswer) {
        userIncorrectAnswers++
      }

      // else if (userAnswer === null) {
      //   userUnanswered++
      // }
    
  }
}

preGame();