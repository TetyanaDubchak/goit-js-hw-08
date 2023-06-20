import throttle from 'lodash.throttle';

const formElem = document.querySelector('.feedback-form');
const btnElem = document.querySelector('.feedback-form button');
const inpElem = document.querySelector('.feedback-form input');
const textElem = document.querySelector('.feedback-form textarea');

formElem.addEventListener('submit', onFormSubmit);
formElem.addEventListener('input', throttle(onFormInput, 500));

let data = { }; 
onSaveStorage();

function onFormInput(evt) {
    data[evt.target.name] = evt.target.value
    
    localStorage.setItem("feedback-form-state", JSON.stringify(data));
}

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();

     if (inpElem.value === '' || textElem.value === '') {
         alert('Please,enter text!');
         return
    };

    const dataText = localStorage.getItem("feedback-form-state");
    const forConsoleDate = JSON.parse(dataText);
    console.log(forConsoleDate);
    localStorage.removeItem("feedback-form-state");
}


function onSaveStorage(){
    const savedMessage = localStorage.getItem('feedback-form-state');
    let data = JSON.parse(savedMessage);
    if (savedMessage) {
        formElem.elements.email.value = data.email;
        formElem.elements.message.value = data.message;
       }
    
}




