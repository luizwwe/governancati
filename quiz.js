// Importa o banco de questões (se estiver em arquivo separado)
// ou inclua o array questionBank diretamente aqui

document.addEventListener('DOMContentLoaded', function() {
  // Elementos da página
  const quizContainer = document.getElementById('quiz-container');
  const submitBtn = document.getElementById('submit-btn');
  const resultsContainer = document.getElementById('results');
  const scoreDisplay = document.getElementById('score');
  
  // Sorteia 10 questões
  const quizQuestions = getRandomQuestions(questionBank, 10);
  let score = 0;
  let userAnswers = new Array(10).fill(null);

  // Exibe o quiz na página
  function displayQuiz() {
    let output = '';
    
    quizQuestions.forEach((question, index) => {
      output += `
        <div class="question">
          <h3>${index + 1}. ${question.question}</h3>
          <div class="options">
            ${question.options.map((option, i) => `
              <label>
                <input type="radio" name="question${index}" value="${i}">
                ${option}
              </label><br>
            `).join('')}
          </div>
          <div class="feedback" id="feedback${index}"></div>
        </div>
      `;
    });
    
    quizContainer.innerHTML = output;
  }

  // Verifica as respostas
  function checkAnswers() {
    score = 0;
    resultsContainer.innerHTML = '';
    
    quizQuestions.forEach((question, index) => {
      const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
      const feedbackEl = document.getElementById(`feedback${index}`);
      
      if (selectedOption) {
        userAnswers[index] = parseInt(selectedOption.value);
        
        if (userAnswers[index] === question.answer) {
          score++;
          feedbackEl.innerHTML = '<span class="correct">✓ Correto!</span>';
        } else {
          feedbackEl.innerHTML = `
            <span class="incorrect">✗ Incorreto. A resposta correta é: 
            ${question.options[question.answer]}</span>
          `;
        }
      } else {
        feedbackEl.innerHTML = '<span class="unanswered">Você não respondeu esta questão.</span>';
      }
    });
    
    scoreDisplay.textContent = `Você acertou ${score} de ${quizQuestions.length} questões!`;
    resultsContainer.style.display = 'block';
  }

  // Event listeners
  submitBtn.addEventListener('click', checkAnswers);
  
  // Inicializa o quiz
  displayQuiz();
});