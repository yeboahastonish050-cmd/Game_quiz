
    document.getElementById('best').style.display='none';
    function start() {
    document.getElementById('hide').style.zIndex='1';
    document.getElementById('foot').style.display='none';
    document.getElementById('but').style.display='none'; 
    document.getElementById('best').style.display='none';
    document.getElementById('fun').style.display='none';
    document.getElementById('level').style.display='flex';

}
function Easy() {
    document.getElementById('container1').style.display='block';
        document.getElementById('level').style.display='none';
         document.getElementById('time2').style.display='block';
    automatic();      
}
function Hard() {
    document.getElementById('container6').style.display='block';
    document.getElementById('level').style.display='none';
     document.getElementById('time3').style.display='block';
    automatic6();
}

function automatic6() {
    let timer = 30;
    let timeDiplay=document.getElementById('time6');
    let timeleft = setInterval(function () {
        timer--;
        timeDiplay.innerHTML=timer
        if (timer==0) {
            clearInterval(timeleft);
            document.getElementById('best1').style.display='block';
            document.getElementById('container6').style.display='none';
            document.getElementById('container7').style.display='none';
            document.getElementById('container8').style.display='none';
            document.getElementById('container9').style.display='none';
            document.getElementById('container10').style.display='none';
            document.getElementById('try1').style.display='none';
            document.getElementById('time3').style.display='none';
            document.getElementById('view1').style.display='flex';
        }
    },500);
    
    document.getElementById('container10').addEventListener('click',function next10() {
        timer=0;
    timeDiplay.innerText = timer;
    clearInterval(timeleft); 

    })
}
function automatic() {
    let timer = 60;
    let timeDiplay = document.getElementById('time');
    let timeleft = setInterval(function () {
        timer--;
        timeDiplay.innerText=timer;
        if (timer==0) {
            clearInterval(timeleft);
            document.getElementById('best').style.display='block';
            document.getElementById('container1').style.display='none';
            document.getElementById('container2').style.display='none';
            document.getElementById('container3').style.display='none';
            document.getElementById('container4').style.display='none';
            document.getElementById('container5').style.display='none';
            document.getElementById('try').style.display='none';
            document.getElementById('time2').style.display='none';
            document.getElementById('view').style.display='flex';
                }
    },500);
    document.getElementById('container5').addEventListener('click',function next5() {
        timer=0;
    timeDiplay.innerText = timer;
    clearInterval(timeleft); 

    })
}

function next1() {
    const answer1 = 'Transmission Control Protocol';
    let score ;
     const input1 = document.getElementById('input1').value;
    if (answer1===input1) {
        
        score = 1;
        
    } else {
        
        score = 0;
    }
    
    document.getElementById('container1').style.display='none';
    document.getElementById('container2').style.display='block';
    return score;
     

}

function next2() {
    const answer2 = 'HyperText Transfer Protocol';
    let score1;
    const input1 = document.getElementById('input2').value;
    if (answer2===input1) {
        
        score1 = 1;
        
    } else {
        
        score1 = 0;
    }
    document.getElementById('container2').style.display='none';
    document.getElementById('container3').style.display='block';
    return score1;
}

function next3() {
    const answer3 = 'HyperText Transfer Protocol Secure';
    let score2 ;
    const input1 = document.getElementById('input3').value;
    if (answer3===input1) {
                score2 = 1;
       
    } else {
        
        score2 = 0;
    }
    document.getElementById('container3').style.display='none';
    document.getElementById('container4').style.display='block';
    return score2;
}

function next4() {
    const answer4 = 'Internet Protocol';
    let score3;
    const input1 = document.getElementById('input4').value;
    if (answer4===input1) {
          score3 = 1;
       
    } else {
        
        score3 = 0;
    }
    document.getElementById('container4').style.display='none';
    document.getElementById('container5').style.display='block';
    return score3;
}

function next5() {
    const answer5 = 'Media Access Control';
    let score4;
    const input1 = document.getElementById('input5').value;
    if (answer5===input1) {
        
        score4 = 1;
        
    } else {
        
        score4 = 0;
    }
    
    document.getElementById('container5').style.display='none';
    document.getElementById('best').style.display='block';    
    document.getElementById('fun').style.display='none';
   
    
    document.getElementById('time2').style.display='none';
    document.getElementById('try').style.display='none';
    document.getElementById('view').style.display='flex';  
    return score4;
    
   
      
}



function next6() {
    const answer1 = 'Open Shortest Path First';
    let score ;
    const input1 = document.getElementById('input6').value;
    if (answer1===input1) {
        
        score = 1;
        
    } else {
        
        score = 0;
    }
    
    document.getElementById('container6').style.display='none';
    document.getElementById('container7').style.display='block';
    return score;
}
function next7() {
    const answer2 = 'Border Gateway Protocol';
    let score1;
    const input1 = document.getElementById('input7').value;
    if (answer2===input1) {
        
        score1 = 1;
        
    } else {
        
        score1 = 0;
    }
    document.getElementById('container7').style.display='none';
    document.getElementById('container8').style.display='block';
    return score1;
}
function next8() {
    const answer3 = 'Dynamic Host Configuration Protocol';
    let score2 ;
    const input1 = document.getElementById('input8').value;
    if (answer3===input1) {
                score2 = 1;
       
    } else {
        
        score2 = 0;
    }
    document.getElementById('container8').style.display='none';
    document.getElementById('container9').style.display='block';
    return score2;
}
function next9() {
    const answer4 = 'Simple Network Management Protocol';
    let score3;
    const input1 = document.getElementById('input9').value;
    if (answer4===input1) {
          score3 = 1;
       
    } else {
        
        score3 = 0;
    }
    document.getElementById('container9').style.display='none';
    document.getElementById('container10').style.display='block';
    return score3;
}
function next10() {
    const answer5 = 'Address Resolution Protocol';
    let score4;
   
    const input1 = document.getElementById('input10').value;
    if (answer5===input1) {
        
        score4 = 1;
        
    } else {
        
        score4 = 0;
    }
    document.getElementById('container10').style.display='none';
    document.getElementById('best1').style.display='block';    
    document.getElementById('fun').style.display='none';
    document.getElementById('view1').style.display='flex';  
    document.getElementById('try1').style.display='none';
    document.getElementById('time3').style.display='none';
    return score4;
    
   
      
}
function view() {
    
const high=next1()+next2()+next3()+next4()+ next5();
localStorage.setItem('high',high);
document.getElementById('score').textContent=high;
if (high>=3 && high<=5) {
    alert('Congratulations');
} else {
    alert('Try again');
    document.getElementById('view').style.display='none';
    document.getElementById('try').style.display='flex';    
        
}
e();
}    

function view1() {
    
const high=next6()+next7()+next8()+next9()+ next10();
localStorage.setItem('high1',high);
document.getElementById('score3').textContent=high;
if (high>=3 && high<=5) {
    alert('Congratulations');
} else {
    alert('Try again');
    document.getElementById('view1').style.display='none';
    document.getElementById('try1').style.display='flex';    
        
}
b();
}    
function try1() {
    document.getElementById('best').style.display='none';
    document.getElementById('container1').style.display='block';
    document.getElementById('time2').style.display='block';
    
        automatic();          
    
}
function try2() {
    document.getElementById('best1').style.display='none';
    document.getElementById('container6').style.display='block';
    document.getElementById('time3').style.display='block';
    
        automatic6();
}
function e() {
    let high = Number(localStorage.getItem('high'));
    let score6 = 0;
    if (score6<high) {
        score6 = high;
    } else {
        score6=score6;
    }
    document.getElementById('score1').textContent=score6;
    
}
function b() {
    let high = Number(localStorage.getItem('high1'));
    let score6 = 0;
    if (score6<high) {
        score6 = high;
    } else {
        score6=score6;
    }
    document.getElementById('score1').textContent=score6;
    
}    
