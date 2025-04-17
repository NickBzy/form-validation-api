import "../styles/styles.css"

// INPUT + VALIDATION MESSAGE
const email = document.getElementById("email")
const emailLabel = email.nextElementSibling
const emailMessage = document.querySelector(".email.validation")

const country = document.getElementById("country")
const countryLabel = country.nextElementSibling
const countryMessage = document.querySelector(".country.validation")

const postal = document.getElementById("postal")
const postalLabel = postal.nextElementSibling
const postalMessage = document.querySelector(".postal.validation")

const password = document.getElementById("password")
const passwordLabel = password.nextElementSibling
const passwordMessage = document.querySelector(".password.validation")

const passwordConfirm = document.getElementById("password-confirm")
const passwordConfirmLabel = passwordConfirm.nextElementSibling
const passwordConfirmMessage = document.querySelector(
  ".password-confirm.validation"
)

let hasError = true
function checkValidity(input, label, message) {
  input.addEventListener("blur", function () {
    label.classList.remove("filled")
    message.innerText = ""
    message.style.display = "none"
    if (input.value !== "") {
      label.classList.add("filled")
    }
    if (!input.checkValidity()) {
      hasError = true
      if (input === postal) {
        message.innerText =
          "Please enter a valid Canadian postal code. Example: A1B 2C3"
      } else if (input === password) {
        if (!/[a-zA-Z]/.test(input.value)) {
          message.innerHTML += "Password must contain at least one letter.<br>"
        }
        if (!/\d/.test(input.value)) {
          message.innerHTML += "Password must contain at least one number.<br>"
        }
        if (input.value.length < 6) {
          message.innerHTML += "Password must contain at least 6 characters."
        }
      } else {
        message.innerText = input.validationMessage
      }
      message.style.display = "block"
    }
    if (input === passwordConfirm) {
      message.innerHTML = ""
      if (input.value !== password.value) {
        hasError = true
        input.setCustomValidity("Does not match given password.")
        message.innerHTML = "Does not match given password"
        message.style.display = "block"
      }
    }
  })
}

function submitForm() {
  const submitBtn = document.querySelector(".submit")
  const container = document.querySelector(".container")

  submitBtn.addEventListener("click", function (event) {
    event.preventDefault()
    if (hasError) {
      container.classList.remove("shake")

      void container.offsetWidth

      container.classList.add("shake")
    }
  })
}

checkValidity(email, emailLabel, emailMessage)
checkValidity(country, countryLabel, countryMessage)
checkValidity(postal, postalLabel, postalMessage)
checkValidity(password, passwordLabel, passwordMessage)
checkValidity(passwordConfirm, passwordConfirmLabel, passwordConfirmMessage)
submitForm()
