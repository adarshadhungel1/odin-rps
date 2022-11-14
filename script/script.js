function startgame(){
    let options = [1,2,3]; //1 = rock, 2 = paper, 3 = scissors
    let ai = Math.floor(Math.random() * options.length);
    let choice = prompt("1 for rock, 2 for paper, 3 for scissor:");
    if (ai==1 && choice==1){alert("tie")}
    else if (ai==1 && choice==2){alert("win")}
    else if (ai==1 && choice==3){alert("lose")}

    else if (ai==2 && choice==1){alert("lose")}
    else if (ai==2 && choice==2){alert("tie")}
    else if (ai==2 && choice==3){alert("win")}

    else if (ai==3 && choice==1){alert("win")}
    else if (ai==3 && choice==2){alert("lose")}
    else if (ai==3 && choice==3){alert("tie")}

    else {alert("something wrong")};
}


startgame()