import throttle from 'lodash.throttle';

const formElem = document.querySelector('.feedback-form');
const btnElem = document.querySelector('.feedback-form button');
const inpElem = document.querySelector('.feedback-form input');
const textElem = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = "feedback-form-state";
formElem.addEventListener('submit', onFormSubmit);
formElem.addEventListener('input', throttle(onFormInput, 500));

let data = { }; 
onSaveStorage();

function onFormInput(evt) {
    data[evt.target.name] = evt.target.value
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function onFormSubmit(evt) {
    evt.preventDefault();

     if (inpElem.value === '' || textElem.value === '') {
         alert('Please,enter text!');
         return
    };

    const dataText = localStorage.getItem(STORAGE_KEY);
    const forConsoleDate = JSON.parse(dataText);
    console.log(forConsoleDate);
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    
}


function onSaveStorage(){
    const savedMessage = localStorage.getItem(STORAGE_KEY);
    let data = JSON.parse(savedMessage);
    if (savedMessage) {
        formElem.elements.email.value = data.email;
        formElem.elements.message.value = data.message;
       }
    
}




