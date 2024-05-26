const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nky8nzq', 'template_4fh3f01', '#contact-form', 'lIFOs-l41h8ESdtSa')
        .then(() => {
            contactMessage.textContent = 'Message sent successfully ✅';
            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);
            contactForm.reset()
        }, () => {
            contactMessage.textContent = 'Message not sent (service error) ❌';
        });
}

contactForm.addEventListener('submit', sendEmail);