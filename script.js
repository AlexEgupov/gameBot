'use strict';

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num) && num != 0;
};

function gameBot(counter) {
    let x = Math.ceil(Math.random() * 100);
    function compare() {
        let userNumber = prompt('Угадай число от 1 до 100');

        function numCheckout(condition, message) {

            if (condition) {
                counter--;
                confirm(message);
                compare();
            }
        };

        function results(condition, message1, message2) {

            if (condition) {
                confirm(message1);
            } else if (message1) {
                gameBot(9);
            } else { confirm(message2) };
        };

        if (userNumber == null) { confirm('Спасибо за игру, до свидания :)') };
        numCheckout(!isNumber(userNumber), 'Введи число! Осталось попыток: ' + counter);
        numCheckout(userNumber < x, 'Загаданное число больше. Осталось попыток: ' + counter);
        numCheckout(userNumber > x, 'Загаданное число меньше. Осталось попыток: ' + counter);
        results((userNumber == x), confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?'), 'Спасибо за игру, до свидания :)');
        results(counter === 0, confirm('Попытки закончились, хотите сыграть еще?'), 'Спасибо за игру, до свидания :)');
    }

    compare();
};

gameBot(9);
