const contactform= document.querySelector('.contact-form');

let namee= document.getElementById('namee');
let email= document.getElementById('email');
let subject= document.getElementById('subject');
let message= document.getElementById('message');

contactform.addEventListener('submit', (e)=>{

    e.preventDefault();

    let formData = {
        name: namee.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }

    let xhr= new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('Email Sent');
            namee.value = '';
            email.value = '';
            subject.value = '';
            message.value = '';
        }else{
            alert('Something went wrong');
        }
    }

    xhr.send(JSON.stringify(formData));

});