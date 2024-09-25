const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const nextButton = document.getElementById('next');

const quizQuestions = [
    {
        question: "What is the size of int in Java?",
        answers: {
            a: "8 bits",
            b: "16 bits",
            c: "32 bits",
            d: "64 bits"
        },
        correctAnswer: "c"
    },
    {
        question: "Which company developed Java?",
        answers: {
            a: "Microsoft",
            b: "Google",
            c: "Sun Microsystems",
            d: "IBM"
        },
        correctAnswer: "c"
    },
    {
        question: "Which keyword is used to inherit a class in Java?",
        answers: {
            a: "implement",
            b: "extends",
            c: "inherits",
            d: "super"
        },
        correctAnswer: "b"
    },
    {
        question: "Which method is the entry point of a Java program?",
        answers: {
            a: "main",
            b: "start",
            c: "run",
            d: "init"
        },
        correctAnswer: "a"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const answers = [];

    for (const letter in currentQuestion.answers) {
        answers.push(
            `<label>
                <input type="radio" name="question${currentQuestionIndex}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
            </label>`
        );
    }

    quizContainer.innerHTML = `
        <div class="question">${currentQuestion.question}</div>
        <div class="answers">${answers.join('')}</div>
    `;
}

function showResults() {
    quizContainer.style.display = 'none';
    nextButton.style.display = 'none';

    resultsContainer.innerHTML = `Your score: ${score} out of ${quizQuestions.length}`;
}

function checkAnswer() {
    const answerContainers = quizContainer.querySelector('.answers');
    const selector = `input[name=question${currentQuestionIndex}]:checked`;
    const userAnswer = (answerContainers.querySelector(selector) || {}).value;

    if (userAnswer === quizQuestions[currentQuestionIndex].correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

showQuestion();

nextButton.addEventListener('click', checkAnswer);
