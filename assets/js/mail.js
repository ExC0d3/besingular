const url = 'https://mighty-beach-81261.herokuapp.com';

const sendToContact = (name, email, message) => {
    $.post(`${url}/contact`, {
        name,
        email,
        message
    })
    .done(() => {
        alert('your message has been sent');
    });
}

const submitContact = () => {
    const name = document.getElementById('contactName').value;
    const email = document.getElementById('contactEmail').value;
    const message = document.getElementById('contactMessage').value;

    if (name.length === 0) {
        alert('Name cannot be empty');
    } else if (email.length === 0) {
        alert('Email cannot be empty');
    } else if(message.length === 0) {
        alert('Message cannot be empty');
    } else {
        sendToContact(name, email, message);
    }
}