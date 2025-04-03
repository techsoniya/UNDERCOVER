
document.addEventListener("DOMContentLoaded", function () {
    console.log("Page Loaded");
    // this validation is for login page
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); 
// default submission is prevented by preventDefault() function
            let email = document.getElementById("email").value.trim();
            let password = document.getElementById("password").value.trim();
            let role = document.getElementById("role").value;

// next email validation
            if (!validateEmail(email)) {
                alert("Please enter a valid email.");
                return;
            }
// password validation let it be 6 characters long
            if (!validatePassword(password)) {
                alert("Password must be at least 8 character long and include these \n- 1 uppercase etter\n- 1 lowercase letter\n- 1 number\n- 1 special characterr.");
                return;
            }
// role and pop up with redirection to admin and user dashboard page
            alert(`Login Successful as ${role}! Redirecting...`);
            if (role === "Admin") {
                window.location.href = "pages/admin-dashboard.html";
            } else {
                window.location.href = "pages/user-dashboard.html";
            }
        });
    }
// this is the validation for sign up page
    const signupForm = document.getElementById("signupForm");
    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let password = document.getElementById("password").value.trim();
            let confirmPassword = document.getElementById("confirm-password").value.trim();
            let terms = document.getElementById("terms").checked;
// name characters and also length validation
            if (!/^[A-Z][a-zA-Z\s]+$/.test(name) || name.length < 3) {
                alert("Name should start with a capital letter, contain only alphabets and spaces, and be at least 3 characters long.");
                return;
            }
            if (!validateEmail(email)) {
                alert("Please enter a valid email.");
                return;
            }

//we can check password strength
            if (!validatePassword(password)) {
                alert("Password must be at least 8 character long and include these \n- 1 uppercase etter\n- 1 lowercase letter\n- 1 number\n- 1 special characterr.");
                return;
            }

//does  confirm password match with above password 
            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return;
            }
// check box check uncheck 
            if (!terms) {
                alert("You must agree to the Terms & Conditions.");
                return;
            }
// redirection again
            alert("Sign Up Successful! Redirecting to Login");
            window.location.href = "login.html";
        });
    }
});

// email format @ validation
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// password strength validation
function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}

//dasboard data
document.addEventListener("DOMContentLoaded", function () {
    console.log("Dashboard Loaded");

    function fetchDevices() {
        return [
            { id: 101, type: "Security Camera", status: "Active" },
            { id: 102, type: "Alarm System", status: "Faulty" },
            { id: 103, type: "Motion Detector", status: "Inactive" }
        ];
    }

// admin dasboard 
    let table = document.querySelector("table");
    if (table) {
        let devices = fetchDevices();
        devices.forEach(device => {
            let row = `<tr><td>${device.id}</td><td>${device.type}</td><td>${device.status}</td></tr>`;
            table.innerHTML += row;
        });
    }
});





document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded");

// forgot-password.html form validation
    const forgotPasswordForm = document.getElementById("forgotPasswordForm");
    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener("submit", function (event) {
            event.preventDefault(); 

            let email = document.getElementById("resetEmail").value.trim();

            if (!validateEmail(email)) {
                alert("Please enter a valid email address.");
                return;
            }

// pop up
            alert("Password reset link has been sent to your email.");
            forgotPasswordForm.reset(); 
            // using this we can reset the page , make it blank
        });
    }

// this is for contact page validation
    const contactForm = document.querySelector(".contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault(); 

            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let message = document.getElementById("message").value.trim();

            if (!/^[a-zA-Z\s]+$/.test(name) || name.length < 3) {
                alert("Name should only contain alphabets and be at least 3 characters long.");
                return;
            }
            if (!validateEmail(email)) {
                alert("Please enter a valid email.");
                return;
            }

            // if (message.length < 3) {
            //     alert("Message must be at least 2 characters long.");
            //     return;
            // }

            // alert("Your message has been sent successfully!");
            // contactForm.reset(); // Clear form fields
        });
    }
});


function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");

        question.addEventListener("click", function () {
            // Toggle active class on clicked item
            item.classList.toggle("active");

            // Rotate the plus icon
            const icon = item.querySelector(".faq-icon");
            if (item.classList.contains("active")) {
                icon.textContent = "−"; // Change "+" to "−" when expanded
            } else {
                icon.textContent = "+"; // Change back to "+"
            }

            // Close other open FAQs
            faqItems.forEach((otherItem) => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                    otherItem.querySelector(".faq-icon").textContent = "+";
                }
            });
        });
    });
});





















































// document.getElementById('loginForm')?.addEventListener('submit', function(e) {
//     e.preventDefault();
//     let email = document.getElementById('email').value;
//     let role = document.getElementById('role').value;
    
//     if (role === "Admin") {
//         window.location.href = "pages/user-dashboard.html";
//     } else {
//         window.location.href = "pages/admin-dashboard.html";
//     }
// });





// document.getElementById('signupForm')?.addEventListener('submit', function(e) {
//     e.preventDefault();
//     alert("Sign Up successful! Redirecting to login page...");
//     window.location.href = "login.html";
// });