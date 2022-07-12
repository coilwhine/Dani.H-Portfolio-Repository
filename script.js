
// ---- contact me changes ----

function submitContactMe(event) {

    event.preventDefault();

    const firstName = document.getElementById('fullName')
    const email = document.getElementById('email')
    const phoneNumber = document.getElementById('phoneNumber')

    if (firstName.value === '') {
        firstName.focus()
        return false
    }

    if (email.value === '') {
        email.focus()
        return false
    }

    if (phoneNumber.value === '') {
        phoneNumber.focus()
        return false
    }

    document.querySelector('.hero-form').reset();

    document.querySelector('.contact-p').innerHTML = "Message received! 👍<br>I'll contact you in the next 24 hours";

    console.log(event)

}