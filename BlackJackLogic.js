//blackjack odds article https://www.casinocitytimes.com/alan-krigman/article/how-often-do-blackjacks-occur-5481
let Deck = require('./BlackJackDeck.js');
let trialArray = [];
for (trials=0; trials<1000; trials++) {

    let BjAttempts = 0;
    const DeckArray = Deck.array;
    const randomMultiplier = 51;
    let BlackJack = false;
    function deal() {
        
        let playersHand = [];
        let dealersHand = [];
        let playersFaceValue = [];
        let dealersFaceValue = [];    
        let playerTotal = 0;
        let dealerTotal = 0;
        let cardCheckArr = [];
        let RandArrayIndex=0;
        const givePlayerCard = () => {
            while (!cardCheckArr.includes(RandArrayIndex)){
                if (!cardCheckArr.includes(RandArrayIndex)) {
                    
                    cardCheckArr.push(RandArrayIndex);
                    //console.log("Deck Index is: ");
                    //console.log(RandArrayIndex);
                    //console.log(DeckArray[RandArrayIndex]);
                    //console.log(DeckArray[RandArrayIndex].point_value);
                    playersHand.push(DeckArray[RandArrayIndex].point_value);
                    playersFaceValue.push(DeckArray[RandArrayIndex].name);
                } else {
                    RandArrayIndex=Math.round(Math.random() * randomMultiplier);
                }
            };
        };
        const giveDealerCard = () => {
            while (!cardCheckArr.includes(RandArrayIndex)){
                    
                if (!cardCheckArr.includes(RandArrayIndex)) {
                    cardCheckArr.push(RandArrayIndex);
                    //console.log("Deck index is: ")
                    //console.log(RandArrayIndex);
                    //console.log(DeckArray[RandArrayIndex]);
                    //console.log(DeckArray[RandArrayIndex].point_value);
                    dealersHand.push(DeckArray[RandArrayIndex].point_value);
                    dealersFaceValue.push(DeckArray[RandArrayIndex].name);
                } else {
                    RandArrayIndex=Math.round(Math.random() * randomMultiplier);
                } 
            }
        };
            
        for (i=0; i<2; i++){
            RandArrayIndex=Math.round(Math.random() * randomMultiplier);
            // give player card
            givePlayerCard();
        
                
            //console.log(`cards dealt include ${cardCheckArr}`);
            RandArrayIndex=Math.round(Math.random() * randomMultiplier);
            // give dealer card
            giveDealerCard();
            
            //console.log(`cards dealt include ${cardCheckArr}`)
        };
        //console.log("length of deck number check array is:")    
        //console.log(cardCheckArr.length);
        if (cardCheckArr.length === 4) {
            // use the random numbers to retrieve the value of the card
            playerTotal = playersHand.reduce(
            (previousValue, currentValue) => previousValue += currentValue
            );
            dealerTotal = dealersHand.reduce(
            (previousValue, currentValue) => previousValue += currentValue
            );
            /*
            console.log(`players hand is ${playersFaceValue}`);
            console.log(`dealersHand is ${dealersFaceValue}`);
            console.log("player point total is: ")
            console.log(playerTotal);
            console.log("dealer point total is: ")
            console.log(dealerTotal);
            */
        } else {
            deal();
        }
        /*
        console.log("the player's hand is : ")
        console.log(playersFaceValue);
        console.log("the dealer's hand is: ")
        console.log(dealersFaceValue);
        */
        // check if player has pair
        if (playersHand[0] === playersHand[1]) {
            //console.log("You have a pair. Would you like to split?");
        }
        // check if player has a soft hand
        if (playersHand.includes(1)) {
            if (playerTotal === 11) {
                BlackJack = true;
                //console.log("BlackJack!");
                
            } else {
                blackJack = false;
                let NewPlayerTotal = playerTotal + 10; 
                //console.log(`You have a soft ${NewPlayerTotal}`)
            }
        } else {}
        return BlackJack;
    } // end function deal()  


        do {
            deal();
            //console.log(BlackJack);
            BjAttempts++;
            //console.log(BjAttempts);
            
        } while (!BlackJack);
        
        //console.log("Black Jack took this many attempts");
        //console.log(BjAttempts);
        trialArray.push(BjAttempts);
}

console.log(trialArray);
const average = (array) => array.reduce((a, b) => a + b) / array.length;
console.log(average(trialArray));
// ----the grave yard------//



/*
function checkCards(){
    while (cardCheckArr.length < randomMultiplier) {
        let RandArrayIndex = Math.ceil(Math.random()*randomMultiplier)
    if (!cardCheckArr.includes(RandArrayIndex)) {
        cardCheckArr.push(RandArrayIndex);
        cardCheckArr.sort((a,b) => a-b);
        console.log(cardCheckArr);
    }
    }
    
}   
*/
/*
function sum(...numbers) {
	return numbers.reduce((accumulator, current) => {
		return accumulator += current;
	});
};
*/
//checkCards();
//console.log(DeckArray);
/*
let arr = [1, 2, 3];
for(let num of arr) {
  console.log(num);
}
*/
/*
let truthCounter = 0;
const testArray = [{
    "name" : 1
},
{
"deck_id": 2
},];
*/
//console.log(testArray);
/*
const isEqual = (first, second) => {
    return JSON.stringify(first) === JSON.stringify(second);
}
*/
/*
const result = testArray.some(e => isEqual(e, {
    "name":1
}));
*/
/*
if (DeckArray.some(e => e.deck_id === 1 )) {
    //console.log("true");
} ;
*/