
// ---- contact me changes ----

function submitContactMe(event) {

    event.preventDefault();
    const firstName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;

    const newContact = {
        firstName: firstName,
        email: email,
        phoneNumber: phoneNumber,
        answered: false
    }

    let customerInquiries = window.localStorage.getItem('customerInquiries');
    if (!customerInquiries) {
        customerInquiries = [];
    } else {
        customerInquiries = JSON.parse(customerInquiries);
    }

    customerInquiries.push(newContact);

    window.localStorage.setItem("customerInquiries", JSON.stringify(customerInquiries))

    console.log(customerInquiries)


    document.querySelector('.hero-form').reset();
    document.querySelector('.contact-p').innerHTML = "Message received! 👍<br>I'll contact you in the next 24 hours";
}


// ---- style labels of required inputs ----

const input = document.getElementsByTagName("input");
const label = document.getElementsByTagName("label");

for (let i = 0; i < input.length; i++) {
    if (input[i].hasAttribute('required')) {
        for (let j = 0; j < label.length; j++) {
            if (i === j) {
                label[j].style.color = 'rgb(61, 166, 110)'
            }
        }
    }
}