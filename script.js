document.getElementById("volunteerBtn").addEventListener("click", function() {
    var volunteerForm = document.getElementById("volunteerForm");
    if (volunteerForm.style.display === "none" || volunteerForm.style.display === "") {
        volunteerForm.style.display = "block";
    } else {
        volunteerForm.style.display = "none";
    }
});

document.getElementById("volunteerForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    // You can handle the form data here, for example, send it to a server using AJAX.
    // For simplicity, let's just log the data to the console.
    console.log("Volunteer Name: " + name);
    console.log("Email: " + email);
    console.log("Phone: " + phone);

    // Optionally, you can reset the form fields after submission.
    document.getElementById("volunteerForm").reset();
});
