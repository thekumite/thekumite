let countdown;
const timerDisplay = document.querySelector('.ur__timer');
const buttons = document.querySelectorAll('.select__time');

function timer(seconds){
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);

    countdown = setInterval(() => {
        const secondsleft = Math.round((then - Date.now()) / 1000);

        if(secondsleft < 0){
            clearInterval(countdown);
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
    timerDisplay.setAttribute('data-time', seconds);
    displayTimeLeft(seconds);
}));

let startStop = document.querySelector('.start');
let resetknap = document.querySelector('.reset');

startStop.addEventListener('click', function(){
        timer(parseInt(timerDisplay.getAttribute('data-time')));
        startStop.innerHTML = 'Stop';
});
