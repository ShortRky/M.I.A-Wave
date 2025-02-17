document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const userData = {
        email: email,
        username: username,
        password: password
    };

    localStorage.setItem('userData', JSON.stringify(userData));
    alert('Signup successful! You can now log in.');
    window.location.href = 'login.html';
});
