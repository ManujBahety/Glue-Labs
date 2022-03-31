const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
const password = document.querySelector('#password');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    var validation = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerText = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000);
    } 
    if (password.value.length <= 8 || password.value.match(validation)) {
        msg.classList.add('error');
        msg.innerText = 'Password length is less than 8 or has special characters';
        setTimeout(() => msg.remove(), 3000);
    }
    else {
        const li = document.createElement('li');
        const text = document.createTextNode(`Submitted: ${nameInput.value}: ${emailInput.value}`);
        li.appendChild(text);
        userList.appendChild(li); 
        nameInput.value = '';
        emailInput.value = '';
    }
}