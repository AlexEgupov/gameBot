'use strict';

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num) && num != 0;
};

function gameBot(counter) {
    let x = Math.ceil(Math.random() * 100);

    function compare() {
        let userNumber = prompt('Угадай число от 1 до 100');
        let storageWin = {
            conditionn: userNumber == x,
            messagee: 'Поздравляю, Вы угадали!!! Хотели бы сыграть еще?'
        };
        let storageLose = {
            conditionn: counter == 0,
            messagee: 'Попытки закончились, хотите сыграть еще?'
        }

        if (userNumber == null) { counter = 0; thx(); };

        function results(condition, message) {

            if (condition === true) {
                playAgain(message);
            } else {
                numCheckout(!isNumber(userNumber), ('Введи число! Осталось попыток: ' + counter));
                numCheckout((userNumber < x), ('Загаданное число больше. Осталось попыток: ' + counter));
                numCheckout((userNumber > x), ('Загаданное число меньше. Осталось попыток: ' + counter));
            }
        };

        function numCheckout(condition, message) {

            if (condition === true && counter != 0) {
                counter--;
                confirm(message);
                compare();
            }
        };

        function playAgain(message) {
            confirm(message) === true ? gameBot(9) : thx();
        };

        function thx() {
            alert('Спасибо за игру, до свидания :)');
            return gameBot;
        };

        results(storageWin.conditionn, storageWin.messagee);
        results(storageLose.conditionn, storageLose.messagee);
    }
    compare();
};

gameBot(9);
