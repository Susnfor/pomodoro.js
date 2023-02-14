let workTitle = document.getElementById('work');
let shortBreak = document.getElementById('shortbreak');
let longBreak = document.getElementById('longbreak');

let workTime = 10;
let shortTime = 5;
let longTime= 10;
let interval = 1000;
let stopPressed= true;
let seconds = "00";

window.onload = () => {
    document.getElementById("minutes").innerHTML =workTime;
    document.getElementById("seconds").innerHTML =seconds;
    workTitle.classList.add('active');
}
let start = () => {
    seconds = 59;

    let workMinutes = workTime -1;
    let shortMinutes = shortTime -1;
    let longMinutes = longTime -1;

    breakCount = 0;

    let timerFunction = () => {
    document.getElementById("minutes").innerHTML =workMinutes;
    document.getElementById("seconds").innerHTML =seconds;

    seconds = seconds -1;
    if (seconds ==0){
        workMinutes=workMinutes-1;
        if(workMinutes==-1){
            if ((breakCount !=0) && (breakCount%3==0)){
                workMinutes=longMinutes
                breakCount++
            }
            else{
            workMinutes=shortMinutes;
            breakCount++
            }

        }
        seconds=59;
    }


    }
let myInt = setInterval(timerFunction, interval)


}
