var short = document.getElementById('output')
var fizz = 3;
var buzz = 5;

var number = 0;

for (n=0; n<100; n++) {
    number++;
    if (number % buzz === 0 && number % fizz === 0) { // The common multiple is first
        short.innerHTML += 'FizzBuzz <br/>';          // to prevent conflicts.
    } else if (number % buzz === 0) {    
        short.innerHTML += 'Buzz <br/>';
    } else if (number % fizz === 0) {
        short.innerHTML += 'Fizz <br/>';
    } else {
        short.innerHTML += number + '<br/>';
    }
}