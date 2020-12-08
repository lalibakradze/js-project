const warning = document.querySelector('.warning');
const name  = document.querySelector('.name');
const lastname  = document.querySelector('.last-input');
const password  = document.querySelector('.password-input');
const submit = document.querySelector('.submit');
const form = document.querySelector('.form');
const email = document.querySelector('.email');
const input = document.querySelector('.input');
const secondpass = document.querySelector('.second-pass');

submit.addEventListener('click',function(){
    let messages = [];
  
    if (input.value === ''){
        messages.push('password is required')
      
    }


    if (password.value.length >= 20){
                messages.push('password must be shorter than 20 characters')
             
            }

    if (password.value.length < 6){
        messages.push('password must be longer than 6 characters')
     
    }
    
    if (secondpass.value = password){
        messages.push('reenter password ')
    }else{
        messages.push('success')

    }

   
     var letters = /^[A-Za-z]+$/;
     var letterNumber = /^[0-9a-zA-Z]+$/;

     if(password.value.match(letterNumber)){
        messages.push('normal password')
     }else if(password.value.match(letters)){
        messages.push('poor password')
     }

     alert(messages.join(','));
})




