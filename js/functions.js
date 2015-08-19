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
 * @param {bool} noRepeat отключить ли повтор слога
 * @returns {string}
 */
function getRandomSyllable(noRepeat)
{
    var result = consonants[getRandomInt(0, consonants.length - 1)].toUpperCase();

    //Т.к. y может быть как согласной буквой, так и гласной,
    //то следует исключить генерацию слога Yy
    result += vowels[getRandomInt(0, vowels.length - ((result.toLowerCase() == 'y') ? 2 : 1))];

    if (!noRepeat) {
        result += result.toLowerCase();
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
    var length = getRandomInt(MIN_SEQUENCE_LENGTH, MAX_SEQUENCE_LENGTH);
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
 * Возвращает псевдослучайное значение из массива words
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

    return word;
}

/**
 * Возвращает разделитель из массива symbols (если разрешено) либо numbers
 * @param {string} password текущий пароль
 * @param {bool} denySymbols запретить ли использовать символы из массива symbols
 * @returns {*}
 */
function getDivider(password, denySymbols)
{
    var last = password[password.length - 1];

    if (
        ( /\d/.test(last) || (getRandomInt(0, 10) > 2) )
        &&
        (!denySymbols)
    ) {
        return symbols[getRandomInt(0, symbols.length - 1)];
    } else {
        return numbers[getRandomInt(0, numbers.length - 1)];
    }
}

/**
 * Возвращает сгенерированный пароль
 * @param {bool} denySymbols исключать ли символы из массива symbols
 * @param {bool} noRepeatSyllable отключить ли повтор слогов
 * @param {bool} noWords отключить ли использование словарных слов
 * @returns {string}
 */function generate(denySymbols, noRepeatSyllable, noWords)
{
    var result = '';
    var haveWord = false;
    var lastWasMirror = false;
    var last = '';
    var rand;
    var syllableCount = 0;

    while (result.length < 8) {
        if (!haveWord && !noWords) {
            rand = getRandomInt(0, (result.length == 0) ? 2 : (lastWasMirror) ? 2 : 3);
        } else {
            rand = getRandomInt(1, (result.length == 0) ? 2 : (lastWasMirror) ? 2 : 3);
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
                last = (syllableCount < MAX_SYLLABLE) ? getRandomSyllable(noRepeatSyllable) : getRandomSequence();
                syllableCount++;
                break;
            case 3:
                lastWasMirror = true;
                last = getMirror(last);
                break;
        }

        result += last;

        result += getDivider(result, denySymbols);
    }
    return result;
}

/**
 * Проверяет, можно ли считать в некоторых комбинациях пароль достаточно безопасным
 * @param {string} password
 * @returns {boolean}
 */
function isSafePassword(password)
{
    return (/\d/.test(password)) && (/[A-Za-z]/.test(password));
}
