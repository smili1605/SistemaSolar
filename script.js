var totalQuestions = 5;
var currentQuestion = 1;
var score = 0;

function nextQuestion() {
  var currentAnswer = document.querySelector('input[name="answer' + currentQuestion + '"]:checked');
  if (currentAnswer) {
    if (currentQuestion === 1) {
        score += currentAnswer.value === "A" ? 1 : 0;
      }
      if (currentQuestion === 2) {
        score += currentAnswer.value === "D" ? 1 : 0;
      } 
      if (currentQuestion === 3) {
        score += currentAnswer.value === "E" ? 1 : 0;
      }
      if (currentQuestion === 4) {
        score += currentAnswer.value === "C" ? 1 : 0;
      }else {
        score += currentAnswer.value === "D" ? 1 : 0; 
      }
   
    currentQuestion++;
    if (currentQuestion <= totalQuestions) {
      showQuestion(currentQuestion);
    } else {
      showResults();
    }
  }
}

function showQuestion(questionNumber) {
  var questions = document.getElementsByClassName('question');
  for (var i = 0; i < questions.length; i++) {
    questions[i].style.display = 'none';
  }
  document.getElementById('question' + questionNumber).style.display = 'block';
}

function showResults() {
  var results = document.getElementById('results');
  var scoreText = document.getElementById('score');
  scoreText.innerHTML = "Você acertou " + score + " de " + totalQuestions + " perguntas.";
  results.style.display = 'block';
}

showQuestion(1);