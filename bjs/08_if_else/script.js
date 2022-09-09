let minValue = parseInt(prompt('Минимальное значение числа для игры','0'));
switch (isNaN(minValue) || minValue) {
    case true:
      minValue = -999;
        break;
    default:
        minValue = minValue < -999 ? -999 : minValue;
}

let maxValue = parseInt(prompt('Максимальное значение числа для игры','100'));
switch (isNaN(maxValue) || maxValue) {
    case true:
      maxValue = 999;      
        break;
    default:
        maxValue = maxValue > 999 ? 999 : maxValue;  
}
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.querySelector('#orderNumberField');
const answerField = document.querySelector('#answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.querySelector('#btnRetry').addEventListener('click', function () {
    minValue = parseInt;
    switch (isNaN(minValue) || minValue) {
        case true:
          minValue = -999;
            break;
        default:
            minValue = minValue < -999 ? -999 : minValue;
    }

    maxValue = parseInt;
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

    alert(`Сыграем еще раз? Загадайте любое другое целое число в диапазоне, и я снова его угадаю`);


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
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

            const phraseRandom = Math.round( Math.random() * 3);
               if  (phraseRandom == 1) 
               {
            answerPhrase = `Может это ${answerNumber }?`;}

            else if (phraseRandom == 2) {
                answerPhrase = `Как насчет ${answerNumber }?`;
            }
            else {
                answerPhrase = `Вероятно, ${answerNumber } подходит?`;
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
            maxValue = answerNumber ;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round( Math.random() * 3);
               if  (phraseRandom == 1) 
               {
            answerPhrase = `Может это ${answerNumber }?`;}

            else if (phraseRandom == 2) {
                answerPhrase = `Как насчет ${answerNumber }?`;
            }
            else {
                answerPhrase = `Вероятно, ${answerNumber } подходит?`;
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



