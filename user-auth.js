document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !password) {
        alert("Please enter both username and password");
        return;
    }

    // Placeholder for authentication logic (e.g., check against a database)
    if (username === "admin" && password === "password123") {
        alert("Login Successful");
        window.location.href = "index.html";  // Redirect to homepage after successful login
    } else {
        alert("Invalid username or password");
    }
});