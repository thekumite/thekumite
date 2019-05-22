
    var menu        = document.querySelector('.size');
    var open        = document.querySelector('.burger')
    var close       = document.querySelector('.closebtn');

    

    menu.addEventListener('click', function(){


        if (open.classList.contains('closed')){

            open.classList.replace('closed', 'open');

        close.addEventListener('click', function(){

            if(open.classList.contains('open')){
                open.classList.replace('open', 'closed');
            }
        });
        }; 

    }); 

    
