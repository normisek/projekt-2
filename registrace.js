const passwordInput = document.getElementById("password")
const passwordAgainInput = document.getElementById("password-again")
const submitButton = document.getElementById("submit-button")

function validatePasswords(passwordValue, passwordAgainValue) {
    passwordAgainInput.classList.remove("input-error", "input-ok")
    passwordInput.classList.remove("input-error", "input-ok")
    submitButton.disabled = false


    if (passwordValue === passwordAgainValue) {
        passwordInput.classList.add("input-ok")
        passwordAgainInput.classList.add("input-ok")
    } else {
        passwordInput.classList.add("input-error")
        passwordAgainInput.classList.add("input-error")
        submitButton.disabled = true
    }
}

passwordInput.addEventListener("change", function (event) {
    const passwordValue = event.target.value
    const passwordAgainValue = passwordAgainInput.value

    validatePasswords(passwordValue, passwordAgainValue)
})

passwordAgainInput.addEventListener("change", function (event) {
    const passwordValue = passwordInput.value
    const passwordAgainValue = event.target.value

    validatePasswords(passwordValue, passwordAgainValue)
})
