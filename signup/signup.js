document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    window.location.href = '../dashboard/dashboard.html';
});

document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    console.log('Email\t\t: ' + email);
    console.log('Password\t: ' + password);
});