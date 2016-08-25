// Can text be a palindrome?
var text = "ivicc";

function canBeDrome(text) {
    var letterMap = {};
    var textArr = text.split('');

    // console.log(textArr);

    for (var i = 0; i < textArr.length; i++) {
        if (letterMap[textArr[i]] == 1) {
            delete letterMap[textArr[i]];
        }
        else {
            letterMap[textArr[i]] = 1;
        }
    }

    console.log(letterMap);
}

//get all permutations of a string
function getPermutations(string) {

    var allCharsExceptLast = string.slice(0, -1);
    var lastChar = string[string.length - 1];

    // recursive call: get all possible permutations for all chars except last
    var permutationsOfAllCharsExceptLast = getPermutations(allCharsExceptLast);

    // put the last char in all possible positions for each of the above permutations
    var permutations = new Set();
    permutationsOfAllCharsExceptLast.forEach(function (permutationOfAllCharsExceptLast) {
        for (var position = 0; position <= allCharsExceptLast.length; position++) {
            var permutation = permutationOfAllCharsExceptLast.slice(0, position) + lastChar + permutationOfAllCharsExceptLast.slice(position);
            permutations.add(permutation);
        }
    });

    return permutations;
}

var text = "We came, we saw, we conquered...then we ate Bill's (Mille-Feuille) cake.:"

function isLetter(text) {

}

function mapWords(text) {
    var cleanText = '';

    for (var i = 0; i < text.length; i++) {
        var char = text.charAt(i);
        if ('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ '.indexOf(char) >= 0) {
            cleanText += char;
        }
        if (char == '-' || char == '.') {
            cleanText += ' ';
        }
    }

    var textArr = cleanText.toLowerCase().split(' ');
    var wordCount = new Map();

    for (var j = 0; j < textArr.length; j++) {
        var word = textArr[i];
        if (wordCount.has(word)) {
            wordCount.set(word, wordCount.get(word) + 1);
        } else {
            wordCount.set(word, 1);
        }
    }
    console.log(textArr);
}