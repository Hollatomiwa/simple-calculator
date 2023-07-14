var x = document.getElementById("display");
var sequence = [];
var isSignPressed = false;
var isDecimalPressed = false;

var numBtns = document.querySelectorAll(".num-btn");
for (let i = 0; i < numBtns.length; i++) {
    numBtns[i].addEventListener("click", function() {
        if (x.value === "0" || sequence[0] === "0") {
            isSignPressed = false;
            x.value = numBtns[i].value;
            sequence[0] = numBtns[i].value;
        } else {
            isSignPressed = false;
            x.value += numBtns[i].value;
            sequence.push(numBtns[i].value);
        }
    });
}

var clear = document.getElementById("clear");
clear.addEventListener("click", function() {
    isSignPressed = false;
    isDecimalPressed = false; 
    x.value = "0";
    sequence = [];
});

var del = document.getElementById("delete");
del.addEventListener("click", function() {
    isSignPressed = false;
    isDecimalPressed = false; 
    sequence = sequence.slice(0, -1);
    x.value = sequence.join("");
    if (sequence.length === 0) {
        x.value = "0";
    }
});

var decimal = document.getElementById("decimal");
decimal.addEventListener("click", function() {
    if (!isDecimalPressed) {
        isDecimalPressed = true;
        isSignPressed = false; 
        x.value += decimal.value;
        sequence.push(decimal.value);
    }
});

var signBtns = document.querySelectorAll(".sign-btn");
for (let i = 0; i < signBtns.length; i++) {
    signBtns[i].addEventListener("click", function() {
        isDecimalPressed = false; 
        if (!isSignPressed) {
            x.value += signBtns[i].value;
            sequence.push(signBtns[i].value);
            isSignPressed = true;
        } else {
            sequence[sequence.length - 1] = signBtns[i].value;
            x.value = sequence.join("");
        }
    });
}

var equal = document.getElementById("equal");
equal.addEventListener("click", function() {
    isSignPressed = false;
    isDecimalPressed = false; 
    var y = eval(x.value);
    x.value = y;
    sequence = [y.toString()];
    console.log(sequence);
});
