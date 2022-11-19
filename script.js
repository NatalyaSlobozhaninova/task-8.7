let minValue = parseInt(prompt('Минимальное знание числа для игры','-999')) || -999;
minValue = (minValue < -999) ? -999 : minValue;
let maxValue = parseInt(prompt('Максимальное знание числа для игры','999')) || 999;
maxValue = (maxValue > 999) ? 999 : maxValue;
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true; 
let qRandom = [`Я всегда угадываю\n\u{1F60E}`, `Я так и знал\n\u{1F600}`, `Ура\n\u{1F60E}`];
let answerPhrase = [`Вы загадали неправильное число!\n\u{1F914}`, `Я сдаюсь..\n\u{1F92F}` , `Что-то не так....`];
let guesRandom = [`Вы загадали число` , `Думаю, что загаданное число` , `Может`];


const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    window.location.reload();
    minValue = 0;
    maxValue = 100;
    orderNumber = 0;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue || minValue == answerNumber){
            let a = answerPhrase[Math.floor( Math.random() * 3)];
            answerField.innerText = a;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            let b = guesRandom[ Math.floor( Math.random() * 3) ];
            answerField.innerText = `${b} ${answerNumber}?`;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue || minValue == answerNumber){
            let a = answerPhrase[ Math.floor( Math.random() * 3) ];
            answerField.innerText = a;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            let b = guesRandom[ Math.floor( Math.random() * 3) ];
            answerField.innerText = `${b} ${answerNumber}?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        let c = qRandom[ Math.floor( Math.random() * 3) ];
        answerField.innerText = c;
        gameRun = false;
    }
})
