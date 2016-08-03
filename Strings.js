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
    permutationsOfAllCharsExceptLast.forEach(function(permutationOfAllCharsExceptLast) {
        for (var position = 0; position <= allCharsExceptLast.length; position++) {
            var permutation = permutationOfAllCharsExceptLast.slice(0, position) + lastChar + permutationOfAllCharsExceptLast.slice(position);
            permutations.add(permutation);
        }
    });

    return permutations;
}