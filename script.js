let passwordInputs = document.querySelectorAll("input[type='password']")
let passwordError = document.querySelector('.error');

let password = "a";
let confirmPassword = "b";

passwordInputs.forEach(pInput => pInput.addEventListener('keypress', comparePassword));

function comparePassword(e) {
    if (e.target.id == 'password')
        password = e.target.value;
    else if (e.target.id = 'confirm_password')
        confirmPassword = e.target.value;

    if (password == confirmPassword)
        passwordError.textContent = '';
    else
        passwordError.textContent = '*Password do not match.';
}