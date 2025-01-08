
//function to start Pomodoro-countdown
$(document).ready( function() { //the code inside will run then the DOM is fully loaded
    $("#button").click(function () { //function for what will happen when id #button is clicked
        $(".boks1").load("countdown1.html", function () { //load countdown1.html in element with class boks1
            countDown1(); //beginn this function after countdown1.html is loaded
        });
    })
})


//function for the countdown
let countdownInterval;
function countDown1(){
    const intervall1= 7; //choose your starting time here, in minutes
    let time = intervall1 * 60; // Transform the minutes to seconds, dont change.
    const countdownEl = document.getElementById('countdown'); //place element in div-container
    clearInterval(countdownInterval); //clears any previous countdowns
    countdownInterval =setInterval(updateCountdown,1000); // run the updateCountdown-method every second!


    function updateCountdown(){
        const minutes = Math.floor(time / 60); // vi regner ut minuttene
        let seconds = time % 60; //vi regner modulus av time, som gir det resterende når time deles på 60.

        seconds = seconds < 10 ? '0' + seconds : seconds; //forkortet if-setning

        countdownEl.innerHTML=`${minutes}:${seconds}`;
        time--;

        if(time < 0){
            clearInterval(countdownInterval); //tømmer id-en "countdownInterval", dvs stopper tellingen
            $(".boks1").load("startpause1.html"); //when time is below 0: starts the pause function into boks1 in index.html
        }
    }
}


// Restart countdown1-button:
$("#restartCountdown1").click(function () {
    $(".boks1").load("countdown1.html", function () {
        countDown1();
    });
});

