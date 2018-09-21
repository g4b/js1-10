//write first method
function sleep_in(weekday, vacation) {
    return !weekday || vacation;
}

function monkey_trouble(a_smiling, b_smiling){
    return a_smiling && b_smiling || !a_smiling && !b_smiling;
}

function string_times(str, num){
    var newStr = "";
    for (var i = 0; i < num; i++){
        newStr += str;
    }
    return newStr;
}

function front_times(str, num){
    var first3 = str.substring(0,3);
    var newStr = "";
    for (var i = 0; i < num; i ++){
        newStr += first3;
    }
    return newStr;
}

function string_bits(str){
    var newStr = "";
    for (var i = 0; i < str.length; i += 2){
        newStr += str.charAt(i);
    }
    return newStr;
}

function caughtSpeeding(speed, isBirthday){
    if (isBirthday){
        if (speed <= 65){
            return 0;
        } else if (speed <= 85 && speed >= 66){
            return 1;
        } else {
            return 2;
        }
    } else {
        if (speed <= 60){
            return 0;
        } else if (speed <= 80 && speed >= 61){
            return 1;
        } else {
            return 2;
        }
    }
}

function fizz_buzz(num){
    if (num % 15 == 0){
        return "FizzBuzz";
    } else if (num % 5 == 0 && num % 3 != 0){
        return "Buzz";
    } else if (num % 5 != 0 && num % 3 == 0){
        return "Fizz";
    } else {
        return "" + num + "!";
    }
}

function teaParty(tea, candy) {
    if (tea < 5 || candy < 5){
        return 0;
    } else if (tea >= (candy * 2) || candy >= (tea * 2)){
        return 2;
    } else {
        return 1;
    }
}

function blackjack(first, second){
    if (first >= 21 && second >= 21){
        return 0;
    } else if ((first > 21 && second < 21) || (second > first && second <= 21)) {
        return second;
    } else {
        return first;
    }
}

function loneSum(first, second, third){
    if (first == second && second == third){
        return 0;
    } else if (first == second && !(second == third)){
        return third;
    } else if (second == third && !(first == third)){
        return first;
    } else if (first == third && !(second == third)){
        return second;
    } else {
        return first + second + third;
    }
}

//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleep_in(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    document.getElementById("output").innerHTML += string_times("Mars", 6);
    document.getElementById("output").innerHTML += front_times("Mars", 3);
    document.getElementById("output").innerHTML += string_bits("Oldman");
    document.getElementById("output").innerHTML += caughtSpeeding(63, true);
    document.getElementById("output").innerHTML += fizz_buzz(75035);
    document.getElementById("output").innerHTML += teaParty(16, 4);
    document.getElementById("output").innerHTML += blackjack(true, false);
    document.getElementById("output").innerHTML += loneSum(true, false);
}
