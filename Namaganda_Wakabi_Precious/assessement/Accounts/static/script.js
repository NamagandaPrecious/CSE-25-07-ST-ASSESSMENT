// --- SIGNUP VALIDATION ---
const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', function (e) {
    let valid = true;

    const fields = ['fullname', 'email', 'phone', 'password', 'confirm'];
    fields.forEach(id => {
      const input = document.getElementById(id);
      input.classList.remove('error', 'valid');

      if (input.value.trim() === '') {
        input.classList.add('error');
        valid = false;
      } else {
        input.classList.add('valid');
      }
    });

    // Email and phone validation
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const phonePattern = /^[0-9]{10,13}$/;

    if (!emailPattern.test(email.value)) {
      email.classList.add('error');
      valid = false;
    }

    if (!phonePattern.test(phone.value)) {
      phone.classList.add('error');
      valid = false;
    }

    // Password match
    const password = document.getElementById('password');
    const confirm = document.getElementById('confirm');
    if (password.value !== confirm.value) {
      confirm.classList.add('error');
      valid = false;
    }

    if (!valid) {
      e.preventDefault();
      return;
    }

    // show success banner
    e.preventDefault(); // keep user on signup page
    const banner = document.getElementById('successBanner');
    banner.classList.remove('hidden');

    // After short delay, redirect to login page
    setTimeout(() => {
      window.location.href = "/";
    }, 2000);
  });

  // Close banner
  const closeBanner = document.getElementById('closeBanner');
  if (closeBanner) {
    closeBanner.addEventListener('click', () => {
      document.getElementById('successBanner').classList.add('hidden');
    });
  }
}

// --- LOGIN VALIDATION ---
const loginForm = document.querySelector('.auth-container form');
if (loginForm) {
  const inputs = loginForm.querySelectorAll('input');
  loginForm.addEventListener('submit', function (e) {
    let valid = true;
    inputs.forEach(input => {
      input.classList.remove('error', 'valid');
      if (input.value.trim() === '') {
        input.classList.add('error');
        valid = false;
      } else {
        input.classList.add('valid');
      }
    });

    if (!valid) {
      e.preventDefault();
      return;
    }

    // Redirect manually to success page (demo)
    e.preventDefault();
    window.location.href = "/success/";
  });
}
