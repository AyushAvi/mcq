var answer1 = document.getElementsByName('que-1');
var answer2 = document.getElementsByName('que-2');
var answer3 = document.getElementsByName('que-3');
var answer4 = document.getElementsByName('que-4');
var answer5 = document.getElementsByName('que-5');

const scorevalue = document.getElementById('score-title');
const message = document.getElementById('score');

const div = document.querySelector('.score-display');

var score = 0;

function answerSubmit(){

    for(var i=0; i<4; i++){
        if(answer1[i].checked){
            score += parseInt(answer1[i].value);
        }
        if(answer2[i].checked){
            score += parseInt(answer2[i].value);
        }
        if(answer3[i].checked){
            score += parseInt(answer3[i].value);
        }
        if(answer4[i].checked){
            score += parseInt(answer4[i].value);
        }
        if(answer5[i].checked){
            score += parseInt(answer5[i].value);
        }
    }
    
    scorevalue.innerText = score;

    if(score>=4){
        message.innerText = "Congratulations: Yes";
    } else if(score>=2 && score<=3){
        message.innerText = "Better luck next time: Maybe";
    } else{
        message.innerText = "You can do better: No";
    }

    div.classList.replace('score-display','score-display-on')
}


function reset(){
    score = 0;
    
    div.classList.replace('score-display-on', 'score-display');

    for(var i=0; i<4; i++){
        if(answer1[i].checked){
            answer1[i].checked = false;
        }
        if(answer2[i].checked){
            answer2[i].checked = false;
        }
        if(answer3[i].checked){
            answer3[i].checked = false;
        }
        if(answer4[i].checked){
            answer4[i].checked = false;
        }
        if(answer5[i].checked){
            answer5[i].checked = false;
        }
    }
}