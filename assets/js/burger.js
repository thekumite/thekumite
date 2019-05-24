
let menu        = document.querySelector('.size');
let open        = document.querySelector('.burger')



menu.addEventListener('click', function(){


    if (open.classList.contains('closed')){

        open.classList.replace('closed', 'open');

    }else if(open.classList.contains('open')){

            open.classList.replace('open', 'closed');    
    }; 

}); 

    
