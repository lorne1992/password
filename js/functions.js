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
 * Возвращает псевдослучайный слог
 * @returns {string}
 */
function getRandomSyllable()
{
    var result = consonants[getRandomInt(0, consonants.length - 1)].toUpperCase();
    result += vowels[getRandomInt(0, vowels.length - 1)];

    return result;
}

/**
 * Возвращает зеркальное отражение строки,
 * добавляя (если разрешено) перед этим псевдослучайный символ из массива symbols
 * @param {string} str
 * @param {bool} denySymbols исключать ли символы из массива symbols
 * @returns {string}
 */
function getMirror(str, denySymbols)
{
    var result = '';

    if (!denySymbols)
        result = symbols[getRandomInt(0, symbols.length - 1)];

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
 * Возвращает псевдослучайное значение из массива words,
 * добавляя (если разрешено) в конец возвращаемого значения
 * псевдослучайный символ (из symbols массива)
 * @param {bool} denySymbols исключать ли символы из массива symbols
 * @returns {string}
 */
function getRandomWord(denySymbols)
{
    var word = words[getRandomInt(0, words.length - 1)];
    for (var i = 0; i < word.length; i++) {
        if (i == 0) {
            word = word.substring(0,i) + word.charAt(i).toUpperCase() + word.substring(i+1);
        }
    }

    if (!denySymbols)
        word += symbols[getRandomInt(0, symbols.length - 1)];

    return word;
}

/**
 * Возвращает сгенерированный пароль
 * @param {bool} denySymbols исключать ли символы из массива symbols
 * @returns {string}
 */
function generate(denySymbols)
{
    var result = '';
    var haveWord = false;
    var lastWasMirror = false;
    var last = '';
    var rand;
    var syllableCount = 0;

    while (result.length < 8) {
        if (!haveWord) {
            rand = getRandomInt(0, (result.length == 0) ? 2 : (lastWasMirror) ? 2 : 3);
        } else {
            rand = getRandomInt(1, (result.length == 0) ? 2 : (lastWasMirror) ? 2 : 3);
        }

        switch (rand) {
            case 0:
                haveWord = true;
                lastWasMirror = true;
                last = getRandomWord(denySymbols);
                break;
            case 1:
                lastWasMirror = false;
                last = getRandomSequence();
                break;
            case 2:
                lastWasMirror = false;
                last = (syllableCount < MAX_SYLLABLE) ? getRandomSyllable() : getRandomSequence();
                syllableCount++;
                break;
            case 3:
                lastWasMirror = true;
                last = getMirror(last, denySymbols);
                break;
        }

        result += last;
    }
    return result;
}
