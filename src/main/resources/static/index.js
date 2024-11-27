$(document).ready( function() { // function to start countdown 1!
    $("#button").click(function () {
        $(".boks1").load("countdown1.html", function () {
            countDown1(); //function starts after countdown1.html is loaded
        });
    })
})





let countdownInterval;
function countDown1(){
    const intervall1= 0.1; //choose your starting time
    let time = intervall1 * 60; // Transform to seconds.  10*60 = 600 sekunder. let fordi det skal forandres

    const countdownEl = document.getElementById('countdown'); //plassere element i index
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
            $(".boks1").load("startpause1.html");

        }
    }
}


// Restart countdown1-button:
$("#restartCountdown1").click(function () {
    $(".boks1").load("countdown1.html", function () {
        countDown1();
    });
});

