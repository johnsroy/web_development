var target;
var guess_input_text;
var guess_input;
var finished = false;
var guesses = 0;

function check_guess() {
    if (isNaN(guess_input)){
        alert("You've not entered a number.\n\n"+
             "Please enter a number in the range 1 to 100.");
        return false;
    }
    if ((guess_input < 1) || (guess_input>100)){
        alert ("Please enter an integer in the range 1 to 100");
        return false;
    }
    if (guess_input > target){
        alert ("Your number is too large!");
        return false;
    }
    if (guess_input<target){
        alert ("Your number is too small");
        return false;
    }
    alert("You've got it! The number was " +target+
        " It took you " +guesses+
         " guesses to get it right!");
    return true;
    }


function do_game() {
    var random_number = Math.random() * 100;
    var random_number_integer = Math.floor(random_number);
    target = random_number_integer + 1;
    while (!finished) {
        guess_input_text = prompt("I am guessing a number" +
                                 "in the range 1 to 100. \n\n" +
                                 "What is the number?");
        guess_input = parseInt(guess_input_text);
        guesses += 1;
        finished = check_guess();
    }
    
}

