const quizData = [
    {
      question: "Why are space images originally black and white?",
      options: ["No color in space", "More sensitivity", "Artistic choice", "Film issue"],
      answer: "More sensitivity"
    },
    {
      question: "How are colors added to space photos?",
      options: ["Color mapping", "Manual painting", "Filters removed", "AI guessing"],
      answer: "Color mapping"
    },
    {
      question: "Why do scientists use multiple filters on telescopes?",
      options: ["Fix blur", "Add color", "Capture details", "Shorten exposure"],
      answer: "Capture details"
    },
    {
      question: "What special data do scientists use besides visible light?",
      options: ["Gravity data", "Narrowband data", "Heat readings", "Sound waves"],
      answer: "Narrowband data"
    },
    {
      question: "What do final colored space images represent?",
      options: ["Scientific view", "Artistic view", "Infrared heat", "Radar scan"],
      answer: "Scientific view"
    }
  ];

  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
      // Inform the user they were correct
      alert('Correct!');
    } else {
      // Inform the user they were incorrect and show the right answer
      alert(`Incorrect — correct answer: ${answer}`);
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
  }
  
  showQuestion();

