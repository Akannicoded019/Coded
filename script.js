const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const year = document.getElementById('year');
const form = document.getElementById('booking-form');
const formMessage = document.getElementById('form-message');

if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', function () {
    navLinks.classList.toggle('show');
  });
}

if (year) {
  year.textContent = new Date().getFullYear();
}

if (form && formMessage) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const submitButton = form.querySelector('button[type="submit"]');
    const name = document.getElementById('name').value.trim();
    const service = document.getElementById('service').value.trim();
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const message = document.getElementById('message').value.trim();
    const mailtoAddress = submitButton?.dataset.mailto?.replace('mailto:', '') || 'akannicoded019@gmail.com';

    const subject = encodeURIComponent('Booking Request from ' + name);
    const body = encodeURIComponent(
      'Name: ' + name + '\n' +
      'Service: ' + service + '\n' +
      'Preferred Date: ' + (date || 'Not specified') + '\n' +
      'Preferred Time: ' + (time || 'Not specified') + '\n' +
      'Message: ' + (message || 'No extra details')
    );

    formMessage.textContent = 'Please wait while we complete your booking request for ' + service + '. Thank you for your patience.';
    form.reset();

    setTimeout(function () {
      window.location.href = 'mailto:' + mailtoAddress + '?subject=' + subject + '&body=' + body;
    }, 400);
  });
}
