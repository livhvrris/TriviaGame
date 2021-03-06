var triviaQuestions = [

  {
    question: "How many years old is the universe?",
    answerChoices: ["3 Trillion", "7.5 Trillion", "14 Billion", "Infinity?"],
    correctAnswer: "14 Billion"
  },
  {
    question: "In what year was the first lunar landing?",
    answerChoices: ["1989", "1969", "1955", "1999"],
    correctAnswer: "1969"
  },
  {
    question: "What was the first living organism sent to space, from Earth?",
    answerChoices: ["an American Chimp", "Your Mom", "Neil Armstrong", "a Russian Dog"],
    correctAnswer: "a Russian Dog"
  },
  {
    question: "Is Time Travel possible?",
    answerChoices: ["Yes", "Yes, but only forward", "Yes, but only backward", "No"],
    correctAnswer: "Yes, but only forward"
  },
  {
    question: "Where does space start?",
    answerChoices: ["The Karman Line", "The Van Allen Belt", "The Stratosphere", "After the first word, and before the second..."],
    correctAnswer: "The Karman Line"
  }

];

var userAnswer = [];

var userCorrectAnswers = 0;
var userIncorrectAnswers = 0;
var userUnanswered = 0;

var number = 10; // Remember to update this to 60


// INTRO SCREEN
$(document).ready(preGame());


function preGame(){

  $('.startTriviaGameButton').show();
  $('.questionSection').hide();
  $('.countdownTimer').hide();
  $('.endOfGame').hide();

  $('#gameStartButton').on('click', startGame);
  // add event lister for answer on click here... ???

}



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
  endGame();
}



function triviaGameStart() {

  for (var i = 0; i < triviaQuestions[i].answerChoices.length; i++){

    // NEED TO IMPLEMENT USER ANSWER VALIDATION
          // PUSH User answrs to an array -- when time is up, vaidate array of userAnswers against Correct answers ???
          // and put event listener for user click in separate function ???
    // NEED TO INDICATE IF BUTTON IS CLICKED OR CHANGE TO RADIO BUTTONS
      // Also, think of the user answer array -- if a user clicks multiple buttons, we don't want all of them to push... ???

    userAnswer = $("#answerOne").on ("click", userAnswerValidation)

      $("#questionOne").html(triviaQuestions[0].question);
      $('#answerOne').append('<button class="answerButton">' + triviaQuestions[0].answerChoices[i] + '</button>')

      $("#questionTwo").html(triviaQuestions[1].question);
      $('#answerTwo').append('<button class="answerButton">' + triviaQuestions[1].answerChoices[i] + '</button>')

      $("#questionThree").html(triviaQuestions[2].question);
      $('#answerThree').append('<button class="answerButton">' + triviaQuestions[2].answerChoices[i] + '</button>')

      $("#questionFour").html(triviaQuestions[3].question);
      $('#answerFour').append('<button class="answerButton">' + triviaQuestions[3].answerChoices[i] + '</button>')

      $("#questionFive").html(triviaQuestions[4].question);
      $('#answerFive').append('<button class="answerButton">' + triviaQuestions[4].answerChoices[i] + '</button>')

  };

};



function endGame() {

  $('.questionSection').hide();
  $('.countdownTimer').hide();
  $('.endOfGame').show();

  $('#correctAnswerCount').html('<p>Correctly Answered: ' + userCorrectAnswers + '</p>')
  $('#incorrectAnswerCount').html('<p>Incorrectly Answered: ' + userIncorrectAnswers + '</p>')
  $('#unansweredCount').html('<p>Unanswered: ' + userUnanswered + '</p>')

}

// ______________________________________________

function userAnswerValidation() {
  if (userAnswer === triviaQuestions[i].correctAnswer) {
    userCorrectAnswers++
    console.log(userCorrectAnswers);
  } 

  else if (userAnswer !== triviaQuestions[i].correctAnswer) {
    userIncorrectAnswers++
    console.log(userIncorrectAnswers);
  }

  else {
    userUnanswered++
    console.log(userUnanswered);
  }
}

    // $(".answer").on ("click", function(){

    //   if ($(this).data("id") === triviaQuestions[i].correctAnswer) {
    //     userCorrectAnswers++;
    //     console.log(userCorrectAnswers);
    //   } else if ($(this).data("id") === triviaQuestions[i].correctAnswer) {
    //     userIncorrectAnswers++;
    //     console.log(userIncorrectAnswers);  
    //   } 
    //   else {
    //     userUnanswered++
    //     console.log(userUnanswered);
    //   }
      
    // });
