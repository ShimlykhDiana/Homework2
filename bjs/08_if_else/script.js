let answerNumber;
let orderNumber;
let gameRun = true;
let minValue;
let maxValue;

const orderNumberField = document.querySelector('#orderNumberField');
const answerField = document.querySelector('#answerField');

function convert() {

    const ones = ["один","два","три", "четыре", "пять", "шесть",
     "семь", "восемь", "девять", "десять"];
    
    const teens = ["одиннадцать","двенадцать", "тринадцать", "четырнадцать", 
    "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать"];

    let tens = ["двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", 
    "семьдесят", "восемьдесят", "девяносто"];

    let hundreds = ["сто","двести","триста", "четыреста", "пятьсот", "шестьсот",
     "семьсот", "восемьсот", "девятьсот"];

    let toLetters;

    let firstRank;
    let secondRank;
    let thirdRank;
    let sign= (answerNumber < 0) ? 'минус':'';
    let below = Math.abs(answerNumber);

    if(below > 9 && below <20) {
        toLetters = sign + " " + teens[below%10-1];
         }
    else {
        if(below === 0) {toLetters = 0}
        thirdRank = hundreds[(below-below%100)/100-1];
        secondRank = tens [(below%100-below%10)/10-2];
        firstRank = ones [below%10-1];
        
        toLetters = sign + " " +`${thirdRank === undefined ? '' : thirdRank} ${secondRank === undefined ? '' : secondRank} ${firstRank === undefined ? '' : firstRank}`;
    }
    
  
    if(below === 0) {
        return 0;
     }
// По заданию ограничение в 20 символов, мне больше нравится, когда все числа прописью
  else {
        return toLetters.length < 20 ? toLetters : answerNumber;
    }

}



// alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);

document.querySelector('#btnStart').addEventListener('click', function () {

minValue = Number(document.querySelector('#minValue').value);
maxValue = Number(document.querySelector('#maxValue').value);

switch (isNaN(minValue) || minValue) {
    case true:
      minValue = -999;
        break;
    default:
        minValue = minValue < -999 ? -999 : minValue;
}

switch (isNaN(maxValue) || maxValue) {
    case true:
      maxValue = 999;      
        break;
    default:
        maxValue = maxValue > 999 ? 999 : maxValue;  
}

answerNumber  = Math.floor((minValue + maxValue) / 2);
orderNumber = 1;
gameRun = true;
orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${convert(answerNumber)}?`;

})


document.querySelector('#btnRetry').addEventListener('click', function () {
  
    switch (isNaN(minValue) || minValue) {
        case true:
          minValue = -999;
            break;
        default:
            minValue = minValue < -999 ? -999 : minValue;
    }

  
    switch (isNaN(maxValue) || maxValue) {
        case true:
          maxValue = 999;      
            break;
        default:
            maxValue = maxValue > 999 ? 999 : maxValue;  
    }

    orderNumber = 1;
    gameRun = true;
    location.reload();

    // alert(`Сыграем еще раз? Загадайте любое другое целое число в диапазоне, и я снова его угадаю`);


})


document.querySelector('#btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue) {
            const phraseRandom = Math.round( Math.random() * 3);
            
           if  (phraseRandom == 1) 
           {
            answerPhrase = `Что-то тут не так!\n\u{1F914}`;}
            else if (phraseRandom === 2) {
                answerPhrase =  `Попробуй иначе\n\u{1F92F}`;}
            else  {
                answerPhrase = `Это что за шутки!\n\u{1F621}`;}
            
                answerField.innerText = answerPhrase;
                gameRun = false;
             }


         else {
            minValue = answerNumber + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            let abc = convert(answerNumber);
        
            const phraseRandom = Math.round( Math.random() * 3);
               if  (phraseRandom == 1) 
               {
            answerPhrase = `Может это ${abc}?`;}

            else if (phraseRandom == 2) {
                answerPhrase = `Как насчет ${abc}?`;
            }
            else {
                answerPhrase = `Вероятно, ${abc} подходит?`;
            }
        
        answerField.innerText = answerPhrase;
            
               }
    }
}
)


document.querySelector('#btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random() * 3);
            
            if  (phraseRandom == 1) 
            {
             answerPhrase = `Что-то тут не так!\n\u{1F914}`;}
             else if (phraseRandom === 2) {
                 answerPhrase =  `Попробуй иначе\n\u{1F92F}`;}
             else  {
                 answerPhrase = `Это что за шутки! \n\u{1F621}`;}
             
                 answerField.innerText = answerPhrase;
                 gameRun = false;
        }
        else {
            maxValue = answerNumber -1;
            answerNumber  = Math.ceil((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            let abc = convert(answerNumber);
            const phraseRandom = Math.round( Math.random() * 3);
               if  (phraseRandom == 1) 
               {
            answerPhrase = `Может это ${abc}?`;}

            else if (phraseRandom == 2) {
                answerPhrase = `Как насчет ${abc}?`;
            }
            else {
                answerPhrase = `Вероятно, ${abc} подходит?`;
            }
        
        answerField.innerText = answerPhrase;
               };
        
    }
})

document.querySelector('#btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round( Math.random() * 3);
        if (phraseRandom == 1) {
        answerPhrase =`Легче легкого\n\u{1F60E}`;
        }
        else if (phraseRandom == 2) {
        answerPhrase =`Я совсем не сомневался`;
        }
        else {
        answerPhrase =`Мне понравилось! Может, еще разок?`;
        }
        answerField.innerText = answerPhrase;
        gameRun = false;
    }
})



