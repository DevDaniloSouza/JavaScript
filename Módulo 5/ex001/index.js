function validateEmail(email) {
    if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-z]{2,}/)) {
        const error = new Error('Email inválido!')
        error.input = 'email'
        throw error
    }
}

const userInputs = {
    name: document.querySelector('#iname'),
    email: document.querySelector('#iemail'),
    password: document.querySelector('#ipass')
}

const form = document.querySelector('form')

form.addEventListener('submit', (ev) => {
    ev.preventDefault

    try {
        userInputs.name.classList.add('success')
        validateEmail(userInputs.email.value)
        userInputs.email.classList.add('success')
    } catch (error) {
        userInputs[error.input].classList.add('error')
        document.querySelector(`#${error.input}-error`).textContent = error.message
    }
})