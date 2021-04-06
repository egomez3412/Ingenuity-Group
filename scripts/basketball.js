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

const number_of_cards = 5;
const cardTime = 45;
const category = 'basketball';


/* doc in parameter to access firebase info... */
function renderCards(timeLeft) {

    //---------------
    var leftBet = 0;
    var rightBet = 0;
    //----------------

    let divCardContainer = document.createElement('div');
    divCardContainer.setAttribute('id', 'cards');
    divCardContainer.setAttribute('class', 'card');
    divCardContainer.setAttribute('style', 'margin: auto 10vw;');

    let br = document.createElement('br');

    //-----------------------------------------------
    let divCardForm = document.createElement('form');
    divCardForm.setAttribute('data-bet-amount', 'form');
    //-----------------------------------------------

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
        
        cardImages1.setAttribute('src', 'images/' + category + '0' + num1.toString() + '.png');
        cardImages2.setAttribute('src', 'images/' + category + '0' + num2.toString() + '.png'); 
    }
    else if(num1 < num2)
    {
        cardImages1.setAttribute('src', 'images/' + category + '0' + num1.toString() + '.png');
        cardImages2.setAttribute('src', 'images/' + category + '0' + num2.toString() + '.png');
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
        cardImages1.setAttribute('src', 'images/' + category + '0' + num1.toString() + '.png');
        cardImages2.setAttribute('src', 'images/' + category + '0' + num2.toString() + '.png');
    }
      
    let divScore = document.createElement('div');
    divScore.setAttribute('class', 'score-container');

    let Scoreboard = document.createElement('span');
    Scoreboard.textContent = "Scoreboard";
    let score1 = 00; //start with score 0 ?s
    let score2 = 00;
    score1 = Math.floor(Math.random() * 10); //originally * 10
    score2 = Math.floor(Math.random() * 10); //originally * 10
    let score = document.createElement('span');
    if((score1 % 2) == 0)
    {
        score.textContent = score1.toString() + ':' + score2.toString();
    }
    else
    {
        score.textContent = score2.toString() + ':' + score1.toString();
    }
    
    
    //let gameTimeID = Math.floor(Math.random() * 50);
    let gameTime = document.createElement('span');
    //gameTime.setAttribute('id', 'timeElm' + gameTimeID.toString());
    gameTime.setAttribute('id', 'timeElm');
    gameTime.setAttribute('style', 'justify-content: flex-start; color: red;');
    
    
    //timeLeft = 45;
    
    
    //console.log(gameTime);
    var timerId = setInterval(countdown, 1000);
    
    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
        gameTime.textContent = 'Game Ended!';
        // Disable buttons for betting...
        //const betBtnDisable = document.getElementById('bet-button');
        // betBtnDisable.setAttribute('style', 'background: gray; color: white; border: none;');
        //betBtnDisable.getElementById('bet-button').disabled = true;
        const betBtnAll = document.querySelectorAll('#bet-button');
        //console.log(betBtnAll);
        for( var i = 0; i < betBtnAll.length; i++) {
            var element = betBtnAll[i];
            element.setAttribute('style', 'background: gray; color: white; border: none;');
            element.disabled = true;
            //console.log(element);
            //element.disabled = true;
        }

        const bet1 = document.querySelectorAll('#bet-amount1');
        const bet2 = document.querySelectorAll('#bet-amount2');
        //console.log(bet1);
        //console.log(bet2);
        for( var i = 0; i <bet1.length; i++) {
            var element1 = bet1[i];
            var element2 = bet2[i];
            
            element1.setAttribute('style', 'background: gray;');
            element2.setAttribute('style', 'background: gray;');
            element1.disabled = true;
            element2.disabled = true;
        }
        //------------------------------------------------
        //const points = document.getElementById('points');
        var pointValue = parseInt(points.innerHTML);
        console.log(leftBet + " | " + rightBet);
        if(score1 > score2) {
            pointValue += leftBet;
            pointValue -= rightBet;
            points.innerHTML = pointValue;
        }
        else if(score1 < score2) {
            pointValue += rightBet;
            pointValue -= leftBet;
            points.innerHTML = pointValue;
        }
        //console.log(pointValue);
        

        auth.onAuthStateChanged(function (user) {
            if (user) {
                var email = user.email;
                //const points = document.getElementById('points');
                db.collection('users').get().then((snapshot) => {
                    snapshot.docs.forEach(doc => {
                        datas = doc.data();
                        if(email == datas.email)
                        {
                            //console.log(doc.id);
                            var previousPoints = datas.points;
                            var newPoints = pointValue;
                            db.collection('users').doc(doc.id).update({points: newPoints});
                            pointDiff = newPoints - previousPoints;
                            /*
                            if(pointDiff > 0)
                            {
                                const cardChange = document.querySelectorAll('#cards');
                                for( var i = 0; i < cardChange.length; i++) {
                                    var element = cardChange[i];
                                    //element.setAttribute('style', 'background: rgba(0, 255, 13, 0.774);');
                                    element.style.background = 'rgba(0, 255, 13, 0.774)';
                                    //console.log(element);
                                    //element.disabled = true;
                                }
                            }
                            if(pointDiff < 0)
                            {
                                const cardChange = document.querySelectorAll('#cards');
                                for( var i = 0; i < cardChange.length; i++) {
                                    var element = cardChange[i];
                                    //element.setAttribute('style', 'background: rgba(241, 0, 0, 0.774);');
                                    element.style.background = 'rgba(241, 0, 0, 0.774)';
                                    //console.log(element);
                                    //element.disabled = true;
                                }
                            }
                            */
                            // maybe something sayin how much difference you one in a popup!
                        }
                    });
                });

                
            }
        });
        //------------------------------------------------
        
      } else {
        gameTime.textContent = 'Time Left: ' + timeLeft;
        let pointsAddition1 = Math.floor(Math.random() * 2) + 1; //originally *4
        let pointsAddition2 = Math.floor(Math.random() * 2) + 1;
        let modTime = Math.floor(Math.random() * 10) + 3; //originally + 4
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
    // let year = Math.floor(Math.random() * 22) + 1;
    let year = 21; //year 2020
    if(year >= 1 && year <= 9)
    {
        year = '0' + year.toString()
    }

    let spanDates = document.createElement('span');
    spanDates.setAttribute('id', 'spanDates' + spanDatesID.toString());
    spanDates.textContent = month + '/' + day + '/' + '20' + year;

    let divBet = document.createElement('div');
    divBet.setAttribute('class', 'button-container');

    let betButton = document.createElement('button');
    betButton.setAttribute('id', 'bet-button');
    betButton.setAttribute('type', 'submit'); //---

    // DIV BETTING
    let divBetting = document.createElement('div');
    divBetting.setAttribute('class', 'bets');

    let divBetText1 = document.createElement('div');
    divBetText1.setAttribute('id', 'bet1');

    let betLabel1 = document.createElement('label');
    betLabel1.setAttribute('for', 'bet-amount');
    betLabel1.setAttribute('id', 'betLabels');
    betLabel1.setAttribute('name', 'bet-amount');
    betLabel1.textContent = "How much do you want to bet?";
    
    //attach br

    let betInput1 = document.createElement('input');
    betInput1.setAttribute('type', 'number');
    betInput1.setAttribute('id', 'bet-amount1');
    betInput1.setAttribute('name', 'betValue1'); //---

    let divBetText2 = document.createElement('div');
    divBetText2.setAttribute('id', 'bet2');

    let betLabel2 = document.createElement('label');
    betLabel2.setAttribute('for', 'bet-amount');
    betLabel2.setAttribute('id', 'betLabels');
    betLabel2.setAttribute('name', 'bet-amount');
    betLabel2.textContent = "How much do you want to bet?";
    
    //attach br

    let betInput2 = document.createElement('input');
    betInput2.setAttribute('type', 'number');
    betInput2.setAttribute('id', 'bet-amount2');
    betInput2.setAttribute('name', 'betValue2'); //---

    let betBR1 = document.createElement('br');
    let betBR2 = document.createElement('br');

    divBetText1.appendChild(betLabel1);
    divBetText1.appendChild(betBR1);
    divBetText1.appendChild(betInput1);
    divBetText2.appendChild(betLabel2);
    divBetText2.appendChild(betBR2);
    divBetText2.appendChild(betInput2);
    divBetting.appendChild(divBetText1);
    divBetting.appendChild(divBetText2);

    // Append elements

    //----------------------------------------
    divCardContainer.appendChild(divCardForm);
    divCardForm.appendChild(divCardBody);
    //----------------------------------------
    divCardBody.appendChild(divTeamImages);
    divCardBody.appendChild(divBetting);
    

    divCardContainer.appendChild(gameTime);
    divBet.appendChild(betButton);



    divTeamImages.appendChild(cardImages1);
    divTeamImages.appendChild(vs);
    divTeamImages.appendChild(cardImages2);

    
    divCardBody.appendChild(divScore);
    divScore.appendChild(Scoreboard);
    divScore.appendChild(score);
    divScore.appendChild(spanDates);
    divScore.appendChild(divBet);
    

    //Append to document
    teamCards.appendChild(divCardContainer);
    teamCards.appendChild(br);
    //console.log(teamCards);

    //---------------------
    (function (window) {
        'use strict';
        var FORM_SELECTOR = '[data-bet-amount="form"]';
        var App = window.App;

        var FormHandler = App.FormHandler;
        var formHandler = new FormHandler(FORM_SELECTOR);

        formHandler.addSubmitHandler(function (data) {
            //var test = document.getElementById("cards").innerHTML;
            
            
            if(parseInt(data.betValue1) >= 0) leftBet += parseInt(data.betValue1);
            if(parseInt(data.betValue2) >= 0) rightBet += parseInt(data.betValue2);

            // Set the value after submit stays on input

            //document.getElementById('bet-amount1').setAttribute('value', betValue1);
            //document.getElementById('bet-amount2').setAttribute('value', betValue2);
        });
    })(window);

};

for(let i = 0; i < number_of_cards; i++)
{
    renderCards(cardTime); //---
}


