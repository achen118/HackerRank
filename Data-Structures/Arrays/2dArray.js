// CONTEXT

// Given a 6 x 6 2D Array, A:

//    1 1 1 0 0 0
//    0 1 0 0 0 0
//    1 1 1 0 0 0
//    0 0 0 0 0 0
//    0 0 0 0 0 0
//    0 0 0 0 0 0

// We define an hourglass in  to be a subset of values with indices falling in this pattern in A's graphical representation:

//    a b c
//      d
//    e f g

// There are 16 hourglasses in A, and an hourglass sum is the sum of an hourglass' values.

// PROBLEM

// Calculate the hourglass sum for every hourglass in A, then print the maximum hourglass sum.

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var arr = [];
    for (arr_i = 0; arr_i < 6; arr_i++) {
        arr[arr_i] = readLine().split(' ');
        arr[arr_i] = arr[arr_i].map(Number);
    }

    // My code here
    let greatestSum;
    for (let row = 0; row < arr.length - 2; row++) {
        for (let col = 0; col < arr.length - 2; col++) {
            let currSum = arr[row][col] + arr[row][col + 1] + arr[row][col + 2] + arr[row + 1][col + 1] + arr[row + 2][col] + arr[row + 2][col + 1] + arr[row + 2][col + 2]
            if (typeof greatestSum === "undefined") { greatestSum = currSum; }
            if (currSum > greatestSum) { greatestSum = currSum; }
        }
    }
    console.log(greatestSum);
}