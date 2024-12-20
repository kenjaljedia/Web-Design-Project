function validateLoginForm() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
  
    if (username === "") {
      alert("Username is required.");
      return false;
    }
  
    if (password === "") {
      alert("Password is required.");
      return false;
    }
  
    const usernamePattern = /^[a-zA-Z0-9_]{3,15}$/;
    if (!usernamePattern.test(username)) {
      alert("Username must be 3-15 characters and contain only letters, numbers, and underscores.");
      return false;
    }
  
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return false;
    }
  
    alert("Login successful!");
    window.location.href = "Web Design event management page.html"; 
    return false; 
  }