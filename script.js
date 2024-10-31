const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username   
 = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Replace this with your actual authentication logic
    if (username === 'your_username' && password === 'your_password') {
        // Successful login,   
 redirect or show a success message
        alert('Login successful!');
        // You might want to redirect to another page or trigger a page transition here.
    } else {
        alert('Invalid username or password');
    }
});