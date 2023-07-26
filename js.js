const form = document.getElementById('form');
const Email = document.getElementById('Email');
const Phone = document.getElementById('Phone');
const text = document.getElementById('text');
const date = document.getElementById('date');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('error');

    errorDisplay.innertext = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}
    
const validateInputs = () => {
    const EmailValue = Email.value.trim();
    const PhoneValue = Phone.value.trim();
    const textValue = text.value.trim();
    const dateValue = date.value.trim();

    if(EmailValue == ''){
       setError(Email, 'Email is required');
    } else{
        setSuccess(Email);
    }
    if(PhoneValue === ''){
        setError(Phone, 'Phone is required');
    } else if (!isValidPhone(PhoneValue)){
        setError(Phone, 'Provide a valid Phone no.');
    } else{
        setSucess(Phone);
    }

};






