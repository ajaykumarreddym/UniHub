

    function register() {
        var x = document.getElementById("login");
        var y = document.getElementById("register");
        x.style.left = "-510px";
        y.style.right = "5px";
        x.style.opacity = 0;
        y.style.opacity = 1;
    }

    function login() {
        var x = document.getElementById("login");
        var y = document.getElementById("register");
        x.style.left = "4px";
        y.style.right = "-520px";
        x.style.opacity = 1;
        y.style.opacity = 0;
    }
    document.getElementById("registerForm").addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Get form values
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var collegeName = document.getElementById("universityname").value;
        var registrationId = document.getElementById("registrationId").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
    
        // Validate form fields
        if (firstName.trim() === "" || collegeName.trim() === "" || registrationId.trim() === "" || email.trim() === "" || password.trim() === "") {
            alert("Please fill out all fields.");
            return false;
        } else {
            // Create user object
            var userData = {
                firstName: firstName,
                lastName: lastName,
                collegeName: collegeName,
                registrationId: registrationId,
                email: email,
                password: password
            };
            localStorage.setItem("userData", JSON.stringify(userData));
            window.location.href = "dashboard.html";
        }
    });
    
    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault();
        var username = document.getElementById("user_id").value;
        var password = document.getElementById("password_login").value;
    
        if ((username === "demo@gmail.com" || username === "12300405") && password === "1234") {
            window.location.href = "dashboard.html";
        } else {
            alert("Invalid username or password");
        }
    });
    