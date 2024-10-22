
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form") as HTMLFormElement;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = (document.getElementById("name") as HTMLInputElement).value.trim();
        const email = (document.getElementById("email") as HTMLInputElement).value.trim();
        const phone = (document.getElementById("phone") as HTMLInputElement).value.trim();
        const subject = (document.getElementById("subject") as HTMLInputElement).value.trim();
        const message = (document.getElementById("message") as HTMLTextAreaElement).value.trim();

        // Validation
        if (!name || !email || !message) {
            alert("Please fill in all required fields.");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        const formData = {
            name,
            email,
            phone,
            subject,
            message,
        };

        
        fetch("https://6714e522690bf212c762deb5.mockapi.io/api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Submission Failed.");
            }
        })
        .then(result => {
            alert("Form Submitted Successfully!");
            console.log(result);
            form.reset(); // Reset the form fields after submission
        })
        .catch(error => {
            console.error("Error:", error);
            alert("An error occurred while submitting the form: " + error.message);
        });
    });
});
