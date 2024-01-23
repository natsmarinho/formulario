const btnSubmit = document.querySelector("#submit").addEventListener("click", submit);
const formName = document.querySelector("#nome");
const msgError = document.querySelectorAll(".error-msg");
const email = document.querySelector("#email")


function validateName () {
    if (formName.value.length <= 3) {
        const errorName = "Por favor, preencha com seu nome completo!";
        msgError[0].innerHTML = errorName;
        } else {
            msgError[0].innerHTML = "";
        }
}

function validateEmail () {
    const regexEmail = /^[^\.\s][\w\-]+(\.[\w\-]+)*@([\w-]+\.)+[\w-]{2,}$/;

    if (!regexEmail.test(email.value)) {
        const invalidEmail = "Por favor insira um email válido!";
        msgError[1].innerHTML = invalidEmail;
    } else {
        msgError[1].innerHTML = ""
    }
}

function submit () {
    validateName();
    validateEmail();
}