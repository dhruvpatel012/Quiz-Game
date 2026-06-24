const queBox = document.querySelector("#quiz-question-box h2");
const ansBox = document.getElementById("quiz-ans-box");
const nextBtn = document.getElementById("next-btn");

const quizData = [
  {
    id: 1,
    question: "What is the capital of India?",
    options: ["Delhi", "Mumbai", "Ahmedabad", "Kolkata"],
    answer: "Delhi"
  },
  {
    id: 2,
    question: "Which language runs in the browser?",
    options: ["Python", "Java", "JavaScript", "C++"],
    answer: "JavaScript"
  },
  {
    id: 3,
    question: "How many days are there in a week?",
    options: ["5", "6", "7", "8"],
    answer: "7"
  },
  {
    id: 4,
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Netscape", "Google", "Apple"],
    answer: "Netscape"
  }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

function showQuestion() {
  answered = false;

  const question = quizData[currentQuestion];

  queBox.textContent = question.question;

  ansBox.innerHTML = "";

  question.options.forEach(option => {
    const p = document.createElement("p");

    p.textContent = option;

    p.addEventListener("click", () => {
      if (answered) return;

      answered = true;

      if (option === question.answer) {
        p.style.backgroundColor = "green";
        p.style.color = "white";
        score++;
      } 
      else {
        p.style.backgroundColor = "red";
        p.style.color = "white";

        const allOptions = ansBox.querySelectorAll("p");

        allOptions.forEach(item => {
          if (item.textContent === question.answer) {
            item.style.backgroundColor = "green";
            item.style.color = "white";
          }
        });
      }
    });

    ansBox.appendChild(p);
  });
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    showQuestion();
  } 
  else {
    document.getElementById("quiz-box").innerHTML = `
      <h1>Quiz Finished 🎉</h1>
      <h2 style="text-align:center; margin-top:30px;">
        Your Score: ${score}/${quizData.length}
      </h2>
    `;

    nextBtn.style.display = "none";
  }
});

showQuestion();