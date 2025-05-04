const questions = [
    {
        question: "What is the meaning of HTML?",
        answers: [
            {
                text: "Hyper Text Markup Language",
                correct: true
            },
            {
                text: "High Text Markup Language",
                correct: false
            },
            {
                text: "Hyper Tabular Markup Language",
                correct: false
            },
            {
                text: "None of these",
                correct: false
            }
        ]
    },
    {
        question: "What does CSS stand for?",
        answers: [
            {
                text: "Cascading Style Sheets",
                correct: true
            },
            {
                text: "Colorful Style Sheets",
                correct: false
            },
            {
                text: "Computer Style Sheets",
                correct: false
            },
            {
                text: "Creative Style Sheets",
                correct: false
            }
        ]
    },
    {
        question: "What does JS stand for?",
        answers: [
            {
                text: "JavaScript",
                correct: true
            },
            {
                text: "JavaSource",
                correct: false
            },
            {
                text: "JavaStyle",
                correct: false
            },
            {
                text: "JavaScript Source",
                correct: false
            }
        ]
    },
    {
        question: "Which HTML element do we put the JavaScript code in?",
        answers: [
            {
                text: "<script>",
                correct: true
            },
            {
                text: "<js>",
                correct: false
            },
            {
                text: "<javascript>",
                correct: false
            },
            {
                text: "<scripting>",
                correct: false
            }
        ]
    },
    {
        question: "What is the correct syntax to link an external JavaScript file?",
        answers: [
            {
                text: "<script src='file.js'>",
                correct: true
            },
            {
                text: "<script href='file.js'>",
                correct: false
            },
            {
                text: "<script ref='file.js'>",
                correct: false
            },
            {
                text: "<script link='file.js'>",
                correct: false
            }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer);
        
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButtonClick(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButtonClick();
    }else{
        startQuiz();
    }
})

startQuiz();