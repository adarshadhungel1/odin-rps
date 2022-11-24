function startgame(){
    let options = [1,2,3]; //1 = rock, 2 = paper, 3 = scissors
    let ai = Math.floor(Math.random() * options.length);
    let choice = prompt("1 for rock, 2 for paper, 3 for scissor:");
    if (ai==1 && choice==1){alert("User Chose Rock and AI chose Rock.\n Result = Tie")}
    else if (ai==1 && choice==2){alert("User Chose Paper and AI chose Rock.\n Result = Win")}
    else if (ai==1 && choice==3){alert("User Chose Scissor and AI chose Rock.\n Result = Lose")}

    else if (ai==2 && choice==1){alert("User Chose Rock and AI chose Paper.\n Result = Lose")}
    else if (ai==2 && choice==2){alert("User Chose Paper and AI chose Paper.\n Result = Tie")}
    else if (ai==2 && choice==3){alert("User Chose Scissor and AI chose Paper.\n Result = Win")}

    else if (ai==3 && choice==1){alert("User Chose Rock and AI chose Scissor.\n Result =  Win")}
    else if (ai==3 && choice==2){alert("User Chose Paper and AI chose Scissor.\n Result = Lose")}
    else if (ai==3 && choice==3){alert("User Chose Scissor and AI chose Scissor.\n Result = Tie")}

    else {alert("Unexpected Input!!")};
    }


function playgame(e){
    let options = ['rock', 'paper', 'scissors'];
    let userSelection = e.path[0].id;
    let aiChoice = options[Math.floor(Math.random()*options.length)];
    
    if (aiChoice=='rock' && userSelection=='paper'){displayText("Tie");}
    else if (aiChoice=='rock' && userSelection=='paper'){displayText("Win");}
    else if (aiChoice=='rock' && userSelection=='scissors'){displayText("Lose");}

    else if (aiChoice=='paper' && userSelection=='rock'){displayText("Lose");}
    else if (aiChoice=='paper' && userSelection=='paper'){displayText("Tie");}
    else if (aiChoice=='paper' && userSelection=='scissors'){displayText("Win");}

    else if (aiChoice=='scissors' && userSelection=='rock'){displayText("Win");}
    else if (aiChoice=='scissors' && userSelection=='paper'){displayText("Lose");}
    else if (aiChoice=='scissors' && userSelection=='scissors'){displayText("Tie");}   
}

function displayText(result){
    let div = document.querySelector('#result');
}

rockbtn = document.querySelector('#rock');
paperbtn = document.querySelector('#paper');
scissorbtn = document.querySelector('#scissors');

rockbtn.addEventListener('click', playgame);
paperbtn.addEventListener('click', playgame);
scissorbtn.addEventListener('click', playgame);