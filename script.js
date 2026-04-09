const nav = document.querySelector('.nav');

function scrollToContact() {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function validateForm(event) {
  const name = event.target.name.value.trim();
  const email = event.target.email.value.trim();
  const message = event.target.message.value.trim();

  // Basic validation
  if (!name || !email || !message) {
    alert('Por favor, completa todos los campos.');
    event.preventDefault();
    return false;
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Por favor, ingresa una dirección de correo electrónico válida.');
    event.preventDefault();
    return false;
  }

  // Length checks to prevent abuse
  if (name.length > 100 || message.length > 1000) {
    alert('Entrada demasiado larga. Por favor, mantenerlo razonable.');
    event.preventDefault();
    return false;
  }

  // Sanitize inputs (basic)
  event.target.name.value = name.replace(/[<>\"']/g, '');
  event.target.message.value = message.replace(/[<>\"']/g, '');

  return true;
}

// Attach validation to form
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', validateForm);
  }
});

window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

