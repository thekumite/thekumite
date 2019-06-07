let tidsApp = document.querySelector('.maingrid')
let ur = document.querySelector('.select__tid');

ur.addEventListener('click', function(){

    if(tidsApp.classList.contains('maingrid__closed')){
        tidsApp.classList.replace('maingrid__closed', 'maingrid__open');
    }else{
        tidsApp.classList.replace('maingrid__open', 'maingrid__closed');
    };
});