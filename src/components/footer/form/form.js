const form = document.querySelector('.form');
const emailField = form.querySelector('.form__email');
const submitButton = form.querySelector('.form__submit');

const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    emailField.classList.remove('form__email_error');
    
    if (!regularExpression.test(emailField.value)) {
        return emailField.classList.add('form__email_error');
    }
    form.submit();
});
