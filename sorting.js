//Quicksort (iterative)
var arr = [8,4,6,2,1,9,5,5,4,3,4,3];

function qsort(arr)
{
    var stack = [arr];
    var sorted = [];

    while (stack.length) {

        var temp = stack.pop(), tl = temp.length;

        if (tl == 1) {
            sorted.push(temp[0]);
            continue;
        }
        var pivot = temp[0];
        var left = [], right = [];

        for (var i = 1; i &lt; tl; i++) {
            if (temp[i] &lt; pivot) {
                left.push(temp[i]);
            } else {
                right.push(temp[i]);
            }
        }

        left.push(pivot);

        if (right.length)
            stack.push(right);
        if (left.length)
            stack.push(left);

    }

    console.log(sorted);
}

//Quicksort (recursive)
function recursiveQs (arr) {
    var left = [];
    var right = [];

    if (arr.length === 0) {
        return [];
    }

    var midPoint = parseInt(arr[0]);

    arr.shift();

    for (var i = 0; i < arr.length; i++) {
        if (parseInt(arr[i]) < midPoint) {
            left.push(parseInt(arr[i]));
        }
        if (parseInt(arr[i]) > midPoint) {
            right.push(parseInt(arr[i]));
        }
    }

    return (recursiveQs(left)).concat([midPoint], recursiveQs(right));
}

//counting sort (iterative)
function countingSort(theArray, maxValue) {

    // array of 0s at indices 0..maxValue
    var numsToCounts = [];
    for (var i = 0; i < maxValue + 1; i++) {
        numsToCounts[i] = 0;
    }

    // populate numsToCounts
    theArray.forEach(function(num) {
        numsToCounts[num] += 1;
    });

    // populate the final sorted array
    var sortedArray = [];
    var currentSortedIndex = 0;

    // for each num in numsToCounts
    for (var num = 0; num < numsToCounts.length; num++) {
        var count = numsToCounts[num];

        // for the number of times the item occurs
        for (var x = 0; x < count; x++) {

            // add it to the sorted array
            sortedArray[currentSortedIndex] = num;
            currentSortedIndex++;
        }
    }

    return sortedArray;
}