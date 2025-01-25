document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    
    alert(`Thank you, ${name}! We have received your message: "${message}". We will respond to you at ${email} soon.`);
});
