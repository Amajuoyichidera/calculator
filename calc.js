// let a = '';
// let b = '';
let num = [];
// let ans;

// All the numbers and operators input will be stored in an array "num" using function "sendNum()"
function sendNum(Digit) {
    num.push(Digit);
    if (num.length !=1) {
        // a = '';
        document.getElementById('screen').innerHTML = '';       // clearing the screen.  
    }

    // for (i=0; i<num.length; i++) {
    //     a += num[i]                                         // concatenate the elements of the array "num" into a single string, which will be displayed on the screen
    // }
    document.getElementById('screen').innerHTML = num.join('');          // displaying the concatenated string
}

// when the user presses "=", function "equalTo()" is called
function equalTo() {
    document.getElementById('screen').innerHTML = '';

//    for(i=0; i<num.length; i++) {
//        b += num[i];                          // concatenating the array "num" into a single sting
//    }
   ans = eval(num.join(''))

   document.getElementById('screen').innerHTML = ans;    // result display

//    while(num.length > 0) {
//        num.pop();                 // emptying the array "num"
//    }

    // num = []
    num.length = 0

   num.push(ans.toString());

}

// when user presses "AC", function "clearSrc" is called
function clearSrc() {
    document.getElementById('screen').innerHTML = '';

    //x while(num.length > 0) {
    //     num.pop();                       // emptying the array "num"
    // }

    // num = []
    num.length = 0

    // a = '';
    // b = '';
}