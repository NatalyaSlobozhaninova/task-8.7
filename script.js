let minValue = parseInt(prompt('Минимальное знание числа для игры','-999'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','999'));
minValue < -999 ? minValue = -999 : minValue;
maxValue > 999 ? maxValue = 999 : maxValue;
minValue!==minValue ? minValue = minValue || -999 : minValue;
maxValue!==maxValue ? maxValue = maxValue || 999 : maxValue;
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let resultTextNumber = '';
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
resultTextNumber = toString(answerNumber);

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = 0;
    maxValue = 100;
    minValue = parseInt(prompt('Минимальное знание числа для игры','-999'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры','999'));
    minValue < -999 ? minValue = -999 : minValue;
    maxValue > 999 ? maxValue = 999 : maxValue;
    minValue!==minValue ? minValue = minValue || -999 : minValue;
    maxValue!==maxValue ? maxValue = maxValue || 999 : maxValue;
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    resultTextNumber = toString (answerNumber);
    gameRun = true;
    orderNumberField.innerText = orderNumber;


})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (maxValue === minValue){
            const phraseRandom = Math.round( Math.random() * 3);
            switch (phraseRandom) {
                case 1:
                    answerField.innerText =  `Вы загадали неправильное число!\n\u{1F914}`;
                    break;
                case 2:
                    answerField.innerText =   `Я сдаюсь..\n\u{1F92F}`;
                    break;
                case 3:
                    answerField.innerText =   `Что-то не так`;
                    break;

            }
             gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            const quesRandom = Math.round( Math.random() * 3);
            switch (quesRandom) {
                case 1:
                 answerField.innerText = `Вы загадали число ${resultTextNumber}?`;
                break;
                case 2:
                answerField.innerText = `Думаю, что загаданное число ${resultTextNumber}?`;
                break;
                case 3:
                answerField.innerText = `Может ${resultTextNumber}?`;
                break;
            }
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            resultTextNumber = toString(answerNumber);
        }
    }
})



document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random() * 3);
            switch (phraseRandom) {
                case 1:
                    answerField.innerText =  `Вы загадали неправильное число!\n\u{1F914}`;
                    break;
                case 2:
                    answerField.innerText =   `Я сдаюсь..\n\u{1F92F}`;
                    break;
                case 3:
                    answerField.innerText =   `Что-то не так`;
                    break;

            }
             gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            resultTextNumber = toString(answerNumber);
            const quesRandom = Math.round( Math.random() * 3);
            switch (quesRandom) {
                case 1:
                 answerField.innerText = `Вы загадали число ${resultTextNumber}?`;
                break;
                case 2:
                answerField.innerText = `Думаю, что загаданное число ${resultTextNumber}?`;
                break;
                case 3:
                answerField.innerText = `Может ${resultTextNumber}?`;
                break;
            }
            orderNumber++;
            orderNumberField.innerText = orderNumber;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    const qRandom = Math.round( Math.random() * 3);
    switch (qRandom) {
        case 1:
         answerField.innerText = `Я всегда угадываю\n\u{1F60E}`;
        break;
        case 2:
        answerField.innerText = `Я так и знал\n\u{1F600}`;
        break;
        case 3:
        answerField.innerText = `Ура\n\u{1F60E}`;
        break;
    }
        gameRun = false;
    })

    function  toString(answerNumber) {
 let number =  ["", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"];
 let numbers = ["десять", "одиннадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать"];
 let tennumbers = ["двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто"];
 let hundnumbers = ["сто", "двести", "триста", "четыреста", "пятьсот", "шестьсот", "семьсот", "восемьсот", "девятьсот"];
 let numberResult = '';
 let numbersResult = '';
 let tenResult = '';
 let hundResult = '';
 let checkResult = '';

  if   (answerNumber > 0) {

    if ((answerNumber % 100 > 0 && answerNumber % 100 < 10) || (answerNumber % 10 > 0 && answerNumber % 10 < 10))
        numberResult = number[answerNumber % 10];

    if (answerNumber % 100 > 9 && answerNumber% 100 < 20)
        numbersResult = numbers[answerNumber % 10];

    if (Math.trunc(answerNumber % 100 / 10) > 1 && Math.trunc(answerNumber % 100 / 10) < 10)
        tenResult = tennumbers[Math.trunc(answerNumber % 100 / 10) - 2];

    if (Math.trunc(answerNumber / 100) > 0 && Math.trunc (answerNumber / 100) < 10)
        hundResult = hundnumbers[Math.trunc(answerNumber / 100) - 1]

    checkResult = `${hundResult} ${tenResult} ${numbersResult}${numberResult}`;

    if (checkResult.length < 20) {
        answerNumber = checkResult;
        return answerNumber;

    } else
        return answerNumber;

} else if (answerNumber < 0) {

    answerNumber *= -1;
    let minus = "минус"

    if ((answerNumber % 100 > 0 && answerNumber % 100 < 10) || (answerNumber % 10 > 0 && answerNumber % 10 < 10))
        numberResult = number[answerNumber % 10];

    if (answerNumber % 100 > 9 && answerNumber % 100 < 20)
        numbersResult = numbers[answerNumber % 10];

    if (Math.trunc(answerNumber % 100 / 10) > 1 && Math.trunc(answerNumber % 100 / 10) < 10)
        tenResult = tennumbers[Math.trunc(answerNumber % 100 / 10) - 2];

    if (Math.trunc(answerNumber / 100) > 0 && Math.trunc(answerNumber / 100) < 10)
        hundResult = hundnumbers[Math.trunc(answerNumber / 100) - 1]

    checkResult = `${hundResult} ${tenResult} ${numbersResult}${numberResult}`;

    if (checkResult.length < 20) {
        answerNumber = `${minus} ${hundResult} ${tenResult} ${numbersResult}${numberResult}`;
        return answerNumber;
    } else
        return answerNumber *= -1;

} else {
    number = ["ноль"];
    return answerNumber = number[answerNumber];
}
    }