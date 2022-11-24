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

}

rockbtn = document.querySelector('#rock');
paperbtn = document.querySelector('#paper');
scissorbtn = document.querySelector('#scissor');

rockbtn.addEventListener('click', playgame);
paperkbtn.addEventListener('click', playgame);
scissorbtn.addEventListener('click', playgame);