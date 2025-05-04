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
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;