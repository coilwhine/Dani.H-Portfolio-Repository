
// ---- contact me changes ----


function onLoad() {
    wellcomeText();
    chartFill();
}

function wellcomeText() {
    const customerInquiries = window.localStorage.getItem('customerInquiries');

    if (customerInquiries) {
        const customers = JSON.parse(customerInquiries);
        const customer = customers[customers.length - 1];
        let customerNameArray = (customer.fullName).toLowerCase().split(' ');

        const nameArray = []
        for (string of customerNameArray) {
            let fLetter = string[0].toUpperCase();
            let restLetters = (string.slice(1, string.length)).toLowerCase();
            nameArray.push(fLetter + restLetters);
        }

        let finalName = '';
        for (word of nameArray) {
            finalName += word + ' ';
        }

        document.querySelector('.wellcomeText').innerText = `Wellcome back ${finalName}`;
    }
}

function submitContactMe(event) {

    event.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;

    const newContact = {
        fullName: fullName,
        email: email,
        phoneNumber: phoneNumber,
        answered: false
    };

    let customerInquiries = window.localStorage.getItem; ('customerInquiries');
    if (!customerInquiries) {
        customerInquiries = [];
    } else {
        customerInquiries = JSON.parse(customerInquiries);
    }

    customerInquiries.push(newContact);

    window.localStorage.setItem("customerInquiries", JSON.stringify(customerInquiries));


    document.querySelector('.hero-form').reset();
    document.querySelector('.contact-p').innerText = "Message received! 👍 I'll\ncontact you in the next 24 hours";

    setTimeout(function () { document.querySelector('.contact-p').innerText = 'Leave your information and I will get back to you as soon as I can! 😃'; }, 5000);

    wellcomeText();
}

function prophesional(e) {
    const toolTip = document.getElementById('tool-tip');
    toolTip.style.display = 'inline-block';
    toolTip.style.top = (`${e.layerY - 45}px`);
    toolTip.style.left = (`${e.layerX - 50}px`);
}

function priphesionalNone() {
    const toolTip = document.getElementById('tool-tip');
    toolTip.style.display = 'none';
}


function chartFill() {
    const stripArrays = document.getElementsByClassName('strip-fill');
    const spanValus = document.getElementsByClassName('strip-span');

    for (strip in stripArrays) {
        if (!isNaN(strip)) {
            stripArrays[strip].style.width = (spanValus[strip].innerText);
        }
    }
}