

   function pause1() {
       document.getElementById('pause1element').innerHTML = "";
       countDown2();

   }

       let countdownInterval;

       function countDown2() {
           const intervall1 = 0.1; //choose your starting time
           let time = intervall1 * 60; // Transform to seconds.  10*60 = 600 sekunder. let fordi det skal forandres


           const countdownEl = document.getElementById('pause1element'); //plassere element i index
           clearInterval(countdownInterval); //clears any previous countdowns

           countdownInterval = setInterval(updateCountdown, 1000); // run the updateCountdown-method every second!


           function updateCountdown() {
               const minutes = Math.floor(time / 60); // vi regner ut minuttene
               let seconds = time % 60; //vi regner modulus av time, som gir det resterende når time deles på 60.

               seconds = seconds < 10 ? '0' + seconds : seconds; //forkortet if-setning

               countdownEl.innerHTML = `${minutes}:${seconds}`;
               time--;

               if (time < 0) {
                   clearInterval(countdownInterval); //tømmer id-en "countdownInterval"
                   window.location.href = 'index.html';
               }
           }
       }







