document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    console.log('Email\t\t: ' + email);
    console.log('Password\t: ' + password);

    if (email === '' || password === ''){
        alert("Email dan password tidak boleh kosong!");
        return;
    }

    if (email === "admin@gmail.com" && password === "admin"){
        window.location.href = '../dash_pemilik/dash_pemilik.html';
    } else if(email === "penghuni@gmail.com" && password === "penghuni"){
        window.location.href = '../dashboard/dashboard.html';
    } else{
        alert("email atau password salah!")    }

});
