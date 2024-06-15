document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === 'admin' && password === 'admin') {
        window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});
