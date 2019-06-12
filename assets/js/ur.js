let countdown;
let timerDisplay = document.querySelector('.ur__timer');
let buttons = document.querySelectorAll('.select__time');
let currentTime = 0;

function timer(seconds){
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    
    countdown = setInterval(() => {
        const secondsleft = Math.round((then - Date.now()) / 1000);
        currentTime = secondsleft;

        if(secondsleft < 0){
            clearInterval(countdown);
            document.title = 'TheKumite';
            return
        }
        displayTimeLeft(secondsleft);
    }, 1000);
};

function displayTimeLeft(seconds){
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    document.title = display;
    timerDisplay.textContent = display;
}

    function startTimer() {
    let seconds = parseInt(this.dataset.time);
    timer(seconds);
}


buttons.forEach(button => button.addEventListener('click' , function(){
    let seconds = parseInt(this.dataset.time);
    currentTime = seconds;
    displayTimeLeft(seconds);
}));

let startStop = document.querySelector('.start');
let resetknap = document.querySelector('.reset');

startStop.addEventListener('click', function(){
    if(startStop.textContent === 'Stop'){
        startStop.textContent = 'Start';
        clearInterval(countdown);

    }else{ 
        timer(currentTime);
        startStop.textContent = 'Stop';
    }
});

resetknap.addEventListener('click', function(){
    clearInterval(countdown);
    timerDisplay.textContent = '0:00';
    currentTime = 0;
    document.title = 'TheKumite';
});
