

const answerOptions  = document.querySelector(".answert_opt")
let quizCategory = "Programming";  
let numberofqst = 5 ;
const next_qst = document.querySelector(".next_qst")   ;     
const qst_status = document.querySelector(".qst_status");    
const time = document.querySelector(".time");
const quizcontainer = document.querySelector(".quizcontainer");
const result_container = document.querySelector(".result_container");
const container = document.querySelector(".container");





const quiz_time_limit = 10 ;
let currenttime = quiz_time_limit ; 
let timer = null;    
let currentQuestion = null ;
const questionindexHisory = [];
let coorectanswcount = 0 ;

// display the result 
const showQuizresult = () => {
    quizcontainer.style.display = "none";
    result_container.style.display = "block";

    const resultText = `You answred <b> ${coorectanswcount}</b> of <b>${numberofqst}</b> questions correctly. Great effort `;
  document.querySelector(".result_msg").innerHTML = resultText;
}

// clear and reseat the time
const resettime = () => {
    clearInterval(timer) ;
    currenttime = quiz_time_limit;
    time.innerHTML = `${currenttime}s` ;

}


// initialize time
const starttimer = () => {
    timer = setInterval(( ) => {
  currenttime-- ; 
  time.innerHTML = `${currenttime}s` ;
  if(currenttime <=0) { clearInterval(timer) ;
    quizcontainer.querySelector(".tim").style.background = "red";
    Highlightcorrectanswer() ;
    quizcontainer.querySelector(".tim").style.background = "red";
    
    next_qst.style.visibility = "visible";
    answerOptions.querySelectorAll(".answert_op").forEach(opotion => opotion.style.pointerEvents = ("none"))
   };
                                                  } , 1000 )

}

// Retourne QUESTIONS selon category , puis retourne une random questions  
 const getRandomQuestions = () => {
  const categoryQuestions = questions.find(cat=> cat.category.toLowerCase() === 
  quizCategory.toLowerCase()).questions || [];

// show numbers of questions asked 
 if(questionindexHisory.length >= Math.min(categoryQuestions.length , numberofqst)) {
    return showQuizresult();
 }

  // filtrer les questions deja poses 
  const availaibleqst = categoryQuestions.filter((_, index) => !questionindexHisory.includes(index) );
  const randomQst = availaibleqst[Math.floor(Math.random()*availaibleqst.length)];
  questionindexHisory.push(categoryQuestions.indexOf(randomQst))
  return randomQst;
}

// highlight the correct answer 
Highlightcorrectanswer = () => {
    const correctoption = answerOptions.querySelectorAll(".answert_op")[currentQuestion.correctAnsw ];
    correctoption.classList.add("corr");
    const icon = ` <span class="material-symbols-rounded">check_circle</span> ` ;
    correctoption.insertAdjacentHTML("beforeend" , icon);
} 



const handleAnswer = ( option , answerIndex ) => {
    const isCorrect = currentQuestion.correctAnsw === answerIndex;
    clearInterval(timer); 
    option.classList.add( isCorrect ? 'corr' : 'wr');
    // Montre la reponse vraie si ona choisie la fausse 
    !isCorrect  ? Highlightcorrectanswer() : coorectanswcount++ ;

    const icon = ` <span class="material-symbols-rounded">${ isCorrect ? 'check_circle' : 'cancel' } </span> ` ;
    option.insertAdjacentHTML("beforeend" , icon);


    // Disable all answers after chosing one 
    answerOptions.querySelectorAll(".answert_op").forEach(opotion => opotion.style.pointerEvents = ("none"))
    next_qst.style.visibility = "visible";


}


// Render the current question and its options in the quiz
const renderQuestion = () => {
    currentQuestion = getRandomQuestions() ;

    if(!currentQuestion) return ;
        console.log(currentQuestion);
    
    // Update the Ul
    answerOptions .innerHTML = "";
    next_qst.style.visibility = "hidden";
    quizcontainer.querySelector(".tim").style.background = "rgba(0, 0, 0, 0.881) ";

    document.querySelector(".quiz_qst").textContent = currentQuestion.question;
    qst_status.innerHTML = ` <b>${questionindexHisory.length}</b> of <b>${numberofqst}</b> questions `
    resettime(); 
    starttimer();
     
    // Create option <li> elements and append them
    currentQuestion.options.forEach((option , index ) => {
        const li = document.createElement("li");
        li.classList.add("answert_op");
        li.textContent = option;
        answerOptions.appendChild(li);
        li.addEventListener("click", () => handleAnswer(li , index))
    });
};
const startquiz = () => {
    container.style.display="none";
    quizcontainer.style.display="block";
    // update the quiz category and no of questions
     quizCategory = container.querySelector(".category_option.active").textContent;
     numberofqst = parseInt(container.querySelector(".question_option.active").textContent);
    
    
    renderQuestion(); 
}
// highlight the selected option click  category or no of question 
document.querySelectorAll(".category_option , .question_option").forEach( option => {
    option.addEventListener("click", () => {
        option.parentNode.querySelector(".active").classList.remove("active");
        option.classList.add("active");
    });
});


const resetquiz = () =>
{
     resettime();
     coorectanswcount = 0;
     questionindexHisory.length = 0 ;
     result_container.style.display = "none";
     container.style.display="block"
}


next_qst.addEventListener("click",renderQuestion);
document.querySelector(".try_again").addEventListener("click",resetquiz);
document.querySelector(".start").addEventListener("click",startquiz);












