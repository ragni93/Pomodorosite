
let countdownInterval; 
let time = 0.1 * 60 //preferred working time
let isWork = true; //which state are we in? work or pause?

$(document).ready(function (){

    $("#status").text("Lets get started!"); // sørger for at første session har riktig tekst
    updateCountdownDisplay();

    $("#startButton").click(function () { //startCountdown when user click at startButton
        startCountdown();

    });

    $("#pauseButton").click(function () { //startCOuntdown() when user click pauseButton
        clearInterval(countdownInterval); // fryser nedtellingen
    });

    $("#resetButton").click(function () {
        clearInterval(countdownInterval);
        time = isWork ? 0.1 * 60 : 50,2 * 60 //isWork true or false? reset is dependent on this! 
        updateCountdownDisplay(); //time has been updated, lets start all over
    });

});

function startCountdown() {
    clearInterval(countdownInterval);
    countdownInterval=setInterval(updateCountdown, 1000);
}

function updateCountdown(){
    time--;

    if(time<0){ //times up? clear interval and switch to work/pause
        clearInterval(countdownInterval); 
        switchPhase(); 
    } else { //still time?
        updateCountdownDisplay(); //update the display
    }
}

function switchPhase(){
    isWork=!isWork; //switches
    if(isWork){
        $("#status").text("Arbeid");
        time=0.1*60;
    } else {
        $("#status").text("Pause");
        time=0.2*60;
        pauseJingle();
        console.log("pausejingle spilles!")
    }
    updateCountdownDisplay();
    startCountdown(); 

}

function updateCountdownDisplay() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    $("#countdown").text(`${minutes}:${seconds}`);
}

function pauseJingle(){
    const pauseStart = new Audio('sounds/pause.wav');
    pauseStart.play();
}









