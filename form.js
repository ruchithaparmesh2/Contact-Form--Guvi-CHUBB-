// form.ts
document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var name = document.getElementById("name").value.trim();
        var email = document.getElementById("email").value.trim();
        var phone = document.getElementById("phone").value.trim();
        var subject = document.getElementById("subject").value.trim();
        var message = document.getElementById("message").value.trim();
        // Validation
        if (!name || !email || !message) {
            alert("Please fill in all required fields.");
            return;
        }
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        var formData = {
            name: name,
            email: email,
            phone: phone,
            subject: subject,
            message: message,
        };
        // Send POST request to the API endpoint
        fetch("https://6714e522690bf212c762deb5.mockapi.io/api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then(function (response) {
            if (response.ok) {
                return response.json();
            }
            else {
                throw new Error("Submission Failed.");
            }
        })
            .then(function (result) {
            alert("Form Submitted Successfully!");
            console.log(result);
            form.reset(); // Reset the form fields after submission
        })
            .catch(function (error) {
            console.error("Error:", error);
            alert("An error occurred while submitting the form: " + error.message);
        });
    });
});
