const questions=[
    {
        question:"WHICH IS THE LARGEST STAR..?",
        answer:[
            {text:"NEPTUNE",correct:false},
            {text:"SUN",correct:true},
            {text:"ASTROID",correct:false},
            {text:"MOON",correct:false}
        ]
    },
    {
        question:"WHICH IS THE FASTEST ANIMEL..?",
        answer:[
            {text:"LION",correct:false},
            {text:"PANDA",correct:false},
            {text:"SLOTH",correct:false},
            {text:"CHEETAH",correct:true}
        ]
    },
    {
        question:"WHICH IS THE SMALLEST INSEECT..?",
        answer:[
            {text:"ANTS",correct:false},
            {text:"HOUSE FLY",correct:false},
            {text:"FAIRY FLY",correct:true},
            {text:"MOSQUITO",correct:false}
        ]
    },
    {
        question:"WHICH OF THE FOLLOWING IS NOT A PART OF SEVEN WONDERS OF THE WORLD ..?",
        answer:[
            {text:"TAJ MAHAL",correct:false},
            {text:"STATUE OF LIBERTY",correct:true},
            {text:"GREAT WALL  OF CHINA",correct:false},
            {text:"PETRA",correct:false}
        ]
    },
    {
        question:"WHICH IS THE DEEPEST OCEAN..?",
        answer:[
            {text:"ATLANTIC",correct:false},
            {text:"INDIAN",correct:false},
            {text:"ARCTIC",correct:false},
            {text:"PACIFIC",correct:true}
        ]
    },
    {
        question:"WHICH IS THE SMALLEST CONTINENT..?",
        answer:[
            {text:"ANTARCTICA",correct:false},
            {text:"SOUTH AMERICA",correct:false},
            {text:"CHINA",correct:false},
            {text:" AUSTRALIA",correct:true}
        ]
    },
    {
        question:"HOW LONG IS RIVER NILE..?",
        answer:[
            {text:"6650M",correct:true},
            {text:"1120M",correct:false},
            {text:"3444M",correct:false},
            {text:"900M",correct:false}
        ]
    },
    {
        question:"WHAT IS THE CAPITAL OF INDIA..?",
        answer:[
            {text:"CHENNAI",correct:false},
            {text:"MUMBAI",correct:false},
            {text:"CHANDIGARH",correct:false},
            {text:"DELHI",correct:true}
        ]
    },
    {
        question:"WHAT IS THE CAPITAL OF TN..?",
        answer:[
            {text:"CHENNAI",correct:true},
            {text:"MUMBAI",correct:false},
            {text:"CHANDIGARH",correct:false},
            {text:"DELHI",correct:false}
        ]
    },
    {
        question:"WHICH OF THE FOLLOWING IS THE TALLEST MOUNTAIN..?",
        answer:[
            {text:"EVEREST",correct:true},
            {text:"FUJI",correct:false},
            {text:"K2",correct:false},
            {text:"ALPS",correct:false}
        ]
    }
];
const questionElement=document.getElementById('question');
const answerButtons=document.getElementById('answer-buttons');
const nextButton=document.getElementById('next-btn');
let currentQuestionIndex=0;
let score=0;
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML='NEXT';
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion=questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex +1;
    questionElement.innerHTML=questionNo+'.'+currentQuestion.question;
    currentQuestion.answer.forEach(answer=>{
        const button=document.createElement('button');
        button.innerHTML=answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener('click',selectAnswer);
    });
}
function resetState(){
    nextButton.style.display='none';
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==='true';
    if(isCorrect){
        selectedBtn.classList.add('correct');
        score++;
    }
    else{
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==='true'){
            button.classList.add('correct');
        }
        button.disabled=true;
    });
    nextButton.style.display='block';
}
function showScore(){
    resetState();
    questionElement.innerHTML=`you scored ${score} out of ${ questions.length}!`;
    nextButton.innerHTML='PLAY AGAIN'; 
    nextButton.style.display='block';
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener('click',()=>{
    if(currentQuestionIndex< questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();
