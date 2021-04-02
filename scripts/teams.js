//cards = document.getElementsByClassName("card");
//cards = document.getElementById("cards");
//console.log(cards);
/*
for(var i = 0; i < 5; i++)
{
    var container = document.getElementById('container');
    container.innerHTML += '<div id="cards" class="card" style="margin: 1em;"><div class="card-body"><div class="team-images"> <img src="images/titans.png" alt=""> <img id="vs" src="images/vs.png" alt=""> <img src="images/tritons.png" alt=""></div><div class="score-container"> <span>Scoreboard</span> <span>1:1</span></div></div></div><div id="container"></div>';
}
*/
const teamCards = document.querySelector('#test-container');
/* doc in parameter to access firebase info... */
function renderCards(timeLeft) {

    let divCardContainer = document.createElement('div');
    divCardContainer.setAttribute('id', 'cards');
    divCardContainer.setAttribute('class', 'card');
    divCardContainer.setAttribute('style', 'margin: auto 10vw;');

    let br = document.createElement('br');

    let divCardBody = document.createElement('div');
    divCardBody.setAttribute('class', 'card-body');

    let divTeamImages = document.createElement('div');
    divTeamImages.setAttribute('class', 'team-images');

    let vs = document.createElement('img');
    vs.setAttribute('src', 'images/vs.png');

    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);
    
    let cardImages1 = document.createElement('img');
    let cardImages2 = document.createElement('img');
    if(num1 > num2)
    {
        
        cardImages1.setAttribute('src', 'images/pic0'+ num1.toString() + '.png');
        cardImages2.setAttribute('src', 'images/pic0'+ num2.toString() + '.png'); 
    }
    else if(num1 < num2)
    {
        cardImages1.setAttribute('src', 'images/pic0'+ num1.toString() + '.png');
        cardImages2.setAttribute('src', 'images/pic0'+ num2.toString() + '.png');
    }
    else if(num1 == num2)
    {
        if(num1 == 9)
        {
            num1 -= 1;
        }
        else
        {
            num1 += 1;
        }
        cardImages1.setAttribute('src', 'images/pic0'+ num1.toString() + '.png');
        cardImages2.setAttribute('src', 'images/pic0'+ num2.toString() + '.png');
    }
      
    let divScore = document.createElement('div');
    divScore.setAttribute('class', 'score-container');

    let Scoreboard = document.createElement('span');
    Scoreboard.textContent = "Scoreboard";

    let score1 = Math.floor(Math.random() * 20);
    let score2 = Math.floor(Math.random() * 20);
    let score = document.createElement('span');
    if((score1 % 2) == 0)
    {
        score.textContent = score1.toString() + ':' + score2.toString();
    }
    else
    {
        score.textContent = score2.toString() + ':' + score1.toString();
    }
    
    
    let gameTimeID = Math.floor(Math.random() * 50);
    let gameTime = document.createElement('span');
    gameTime.setAttribute('id', 'timeElm' + gameTimeID.toString());
    gameTime.setAttribute('style', 'justify-content: flex-start; color: red;');
    
    
    //timeLeft = 45;
    
    
    //console.log(gameTime);
    var timerId = setInterval(countdown, 1000);
    
    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
        gameTime.textContent = 'Game Ended!';
        // Disable buttons for betting...
      } else {
        gameTime.textContent = 'Time Left: ' + timeLeft;
        let pointsAddition1 = Math.floor(Math.random() * 4) + 1;
        let pointsAddition2 = Math.floor(Math.random() * 4) + 1;
        let modTime = Math.floor(Math.random() * 10) + 2;
        if((timeLeft % modTime) == 0)
        {
            score1 += pointsAddition1;
            score2 += pointsAddition2;
            score.textContent = score1.toString() + ':' + score2.toString();
        }
        /*
        if((timeLeft % 5) == 0)
        {
            //console.log("score1 " + timeLeft);
            score1 += 4;
            score2 += 1;
            score.textContent = score1.toString() + ':' + score2.toString();

        }
        else if((timeLeft % 2) == 0)
        {
            //console.log("score2 " + timeLeft);
            score1 -= 2;
            score2 += 1;
            score.textContent = score1.toString() + ':' + score2.toString();
        }
        if((timeLeft % 2) == 1)
        {
            //console.log("score3 " + timeLeft);
            score1 += 1;
            score2 += 2;
            score.textContent = score1.toString() + ':' + score2.toString();
        }
        
        if((timeLeft % 10) == 0)
        {
            //console.log("score3 " + timeLeft);
            score1 += 11;
            score2 += 1;
            score.textContent = score1.toString() + ':' + score2.toString();
        }
        */
        timeLeft--;
      }
    }

    let spanDatesID = Math.floor(Math.random() * 50);
    let day = Math.floor(Math.random() * 30) + 1;
    let month = Math.floor(Math.random() * 11) + 1;
    let year = Math.floor(Math.random() * 22) + 1;
    if(year >= 1 && year <= 9)
    {
        year = '0' + year.toString()
    }

    let spanDates = document.createElement('span');
    spanDates.setAttribute('id', 'spanDates' + spanDatesID.toString());
    spanDates.textContent = month + '/' + day + '/' + '20' + year;

    // Append elements
    divCardContainer.appendChild(divCardBody);
    divCardBody.appendChild(divTeamImages);

    divCardContainer.appendChild(gameTime);

    divTeamImages.appendChild(cardImages1);
    divTeamImages.appendChild(vs);
    divTeamImages.appendChild(cardImages2);

    divCardBody.appendChild(divScore);
    divScore.appendChild(Scoreboard);
    divScore.appendChild(score);
    divScore.appendChild(spanDates);
    

    //Append to document
    teamCards.appendChild(divCardContainer);
    teamCards.appendChild(br);
    //console.log(teamCards);

};

for(let i = 0; i < 5; i++)
{
    renderCards(45 - i + 1);
}


