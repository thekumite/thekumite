document.addEventListener('DOMContentLoaded', function(){

    let ClearButton = document.querySelector('.clear-button');
    let RegBox = document.querySelector('.registre-box');

    let RegButton = document.querySelector('.registre-button');

    ClearButton.addEventListener('click', function(){
        RegBox.style.display="none";
    });

    RegButton.addEventListener('click', function(){
        RegBox.style.display="none";
        
    }); 


});