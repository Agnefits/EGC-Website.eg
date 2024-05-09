var Quisetion=document.getElementById("type_of_Quisetion");
var t_fQuisetion=document.getElementById("t_f");
var m_cQuisetion=document.getElementById("m_c");
var s_AQuisetion=document.getElementById("shortAnswer");

Quisetion.addEventListener("change",function(event){
    if(event.target.value=="tf")
    {
        t_fQuisetion.style.display="block";
        m_cQuisetion.style.display="none";
        s_AQuisetion.style.display="none";
    }
    else if(event.target.value=="Multiply")
    {
        m_cQuisetion.style.display="block";
        t_fQuisetion.style.display="none";
        s_AQuisetion.style.display="none";
    }
    else
    {
        m_cQuisetion.style.display="none";
        t_fQuisetion.style.display="none";
        s_AQuisetion.style.display="block";
    }
});

const addQuizButton = document.getElementById('add-quiz');
let quizCount = 1; 

addQuizButton.addEventListener('click', function() {
    
  const newQuizContainer = document.getElementById('quiz-1').cloneNode(true);

  newQuizContainer.querySelectorAll('textarea, input[type="text"], input[type="radio"]').forEach(element => element.value = '');

  newQuizContainer.id = `quiz-${++quizCount}`;
  newQuizContainer.querySelector('.remove-quiz').addEventListener('click', function() {
    this.parentNode.remove();
  });

  document.getElementById('quiz-container').appendChild(newQuizContainer);

  updateQuestionTypeDisplay(newQuizContainer);
  newQuizContainer.querySelector('.remove-quiz').style.display="block";

});

function updateQuestionTypeDisplay(container) {
  const t_fQuisetion = container.querySelector('.t_f');
  const m_cQuisetion = container.querySelector('.m_c');
  const s_AQuisetion = container.querySelector('.shortAnswer');
  const Quisetion = container.querySelector('.type_of_Quisetion');

  Quisetion.addEventListener("change", function(event) {
    if (event.target.value === "tf") {
      t_fQuisetion.style.display = "block";
      m_cQuisetion.style.display = "none";
      s_AQuisetion.style.display = "none";
    } else if (event.target.value === "Multiply") {
      m_cQuisetion.style.display = "block";
      t_fQuisetion.style.display = "none";
      s_AQuisetion.style.display = "none";
    } else {
      m_cQuisetion.style.display = "none";
      t_fQuisetion.style.display = "none";
      s_AQuisetion.style.display = "block";
    }
  });
}
