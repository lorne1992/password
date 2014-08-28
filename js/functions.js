/**
 * Возвращает псевдослучайное число от min до max включительно
 * @param {int} min
 * @param {int} max
 * @returns {int}
 */
function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Возвращает псевдослучайный слог (в конец слога может добавить число или символ)
 * @returns {string}
 */
function getRandomSyllable()
{
    var result = consonants[getRandomInt(0, consonants.length - 1)].toUpperCase();
    result += vowels[getRandomInt(0, vowels.length - 1)];

    switch (getRandomInt(0, 2)) {
        case 1:
            result += symbols[getRandomInt(0, symbols.length - 1)];
            break;
        case 2:
            result += numbers[getRandomInt(0, numbers.length - 1)];
            break;
    }

    return result;
}

/**
 * Возвращает зеркальное отражение строки
 * @param {string} str
 * @returns {string}
 */
function getMirror(str)
{
    var result = '';
    for (var i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}

/**
 * Возвращает псевдослучайную последовательность символов или цифр
 * @returns {string}
 */
function getRandomSequence()
{
    var result = '';
    var length = getRandomInt(MIN_LENGTH_SEQUENCE, MAX_LENGTH_SEQUENCE);
    var start, i;

    if (getRandomInt(0, 1) == 1) {
        start = getRandomInt(0, numbers.length - length);
        for (i = 0; i < length; i++) {
            result += numbers[start + i];
        }
    } else {
        start = getRandomInt(0, alphabet.length - length);
        for (i = 0; i < length; i++) {
            result += (i == 0) ? alphabet[start + i].toUpperCase() : alphabet[start + i];
        }
    }

    return result;
}

/**
 * Возвращает случайное значение из массива words
 * (в конец возвращаемого значения может добавить число или символ)
 * @returns {string}
 */
function getRandomWord()
{
    var word = words[getRandomInt(0, words.length - 1)];
    for (var i = 0; i < word.length; i++) {
        if (i == 0) {
            word = word.substring(0,i) + word.charAt(i).toUpperCase() + word.substring(i+1);
        }
    }
    switch (getRandomInt(0, 2)) {
        case 1:
            word += symbols[getRandomInt(0, symbols.length - 1)];
            break;
        case 2:
            word += numbers[getRandomInt(0, numbers.length - 1)];
            break;
    }
    return word;
}

/**
 * Возвращает сгенерированный пароль
 * @returns {string}
 */
function generate()
{
    var result = '';
    var haveWord = false;
    var lastWasMirror = false;
    var last = '';
    var rand;

    for (var i = 0; i < ITERATIONS; i++) {
        if (!haveWord) {
            rand = getRandomInt(0, (i == 0) ? 2 : (lastWasMirror) ? 2 : 3);
        } else {
            rand = getRandomInt(1, (i == 0) ? 2 : (lastWasMirror) ? 2 : 3);
        }

        switch (rand) {
            case 0:
                haveWord = true;
                lastWasMirror = true;
                last = getRandomWord();
                break;
            case 1:
                lastWasMirror = false;
                last = getRandomSequence();
                break;
            case 2:
                lastWasMirror = false;
                last = getRandomSyllable();
                break;
            case 3:
                lastWasMirror = true;
                last = getMirror(last);
                break;
        }

        result += last;
    }
    return result;
}
