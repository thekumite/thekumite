function valider(form){
    if(form.titel.value == ""){
        alert('udfyld venligst Eventets titel');
        form.titel.focus()
        document.querySelector('.titel').style.backgroundColor = 'darksalmon';
        return false;
    }else{
        document.querySelector('.titel').style.backgroundColor = '#f8f7f7';
    };
    if(form.beskrivelse.value.length == 0){
        alert('Bekriv venligst dit event');
        form.beskrivelse.focus()
        document.querySelector('#beskrivelse').style.backgroundColor = 'darksalmon';
        return false;
    }else{
        document.querySelector('#beskrivelse').style.backgroundColor = '#f8f7f7';
    };

    if(form.sted.value.length == 0){
        alert('Fortæl venligst hvor dit event finder sted');
        form.sted.focus()
        document.querySelector('#sted').style.backgroundColor = 'darksalmon';
        return false;
    }else if(isNaN(form.sted.value)){
        document.querySelector('#sted').style.backgroundColor = '#f8f7f7';
    }else{
        alert('Et sted kan ikke bestå udelukkende af tal');
        form.sted.focus()
        document.querySelector('#sted').style.backgroundColor = 'darksalmon';
        return false;
    }
    
    if(form.navn.value.length == 0){
        alert('Vi har brug for en kontaktperson');
        form.navn.focus()
        document.querySelector('#navn').style.backgroundColor = 'darksalmon';
        return false;
    }else if(isNaN(form.navn.value)){
        document.querySelector('#navn').style.backgroundColor = '#f8f7f7';
    }else{
        alert('Et navn kan ikke bestå af tal');
        form.sted.focus()
        document.querySelector('#navn').style.backgroundColor = 'darksalmon';
        return false;
    }
    function validateEmail(email) {
        let re = /(.+)@(.+){2,}\.(.+){2,}$/;
        return re.test(String(email).toLowerCase());
       }         

      if(
      form.email.value.length == 0){
        alert("udfyld venligst email");
        form.email.focus();
        document.querySelector('#email').style.backgroundColor = 'darksalmon';
        return false;
      }else if(validateEmail(form.email.value)){
        document.querySelector('#email').style.backgroundColor = '#f8f7f7';
      }else{
          alert('dette er ikke en rigtig email')
          form.email.focus();
          document.querySelector('#email').style.backgroundColor = 'darksalmon';
          return false;
      };

      if(
        form.telefon.value.length == 0){
          alert("udfyld venligst telefon");
          form.telefon.focus();
          document.querySelector('#telefon').style.backgroundColor = 'darksalmon';
          return false;
        }else if(isNaN(form.telefon.value)){
          alert('dette er ikke et dansk telefonnummer');
          form.telefon.focus();
          document.querySelector('#telefon').style.backgroundColor = '#f8f7f7';
          return false;
        }else if(form.telefon.value.length != 8){
          alert('udfyld venligst med et rigtigt telefonnummer');
          form.telefon.focus();
          document.querySelector('#telefon').style.backgroundColor = '#f8f7f7';
          return false;
        }else{
            document.querySelector('#telefon').style.backgroundColor = 'darksalmon';
        };
    
};