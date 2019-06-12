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

    document.querySelector('.registre-button-ny').addEventListener('click', function(event){
        event.preventDefault();
        location.href = './formside1.html';
    
     });

     document.querySelector('.registre-button').addEventListener('click', function(event){
        event.preventDefault();
        location.href = './grundside.html';
        

         });


});