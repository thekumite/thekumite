let countdown;
const timerDisplay = document.querySelector('.ur__timer');

function timer(seconds){
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);

    countdown = setInterval(() => {
        const secondsleft = Math.round((then - Date.now()) / 1000);

        if(secondsleft < 0){
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsleft);
    }, 1000);
};
function displayTimeLeft(seconds){
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `11:11`;
    console.log({minutes, remainderSeconds});
}