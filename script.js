document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const dress = document.getElementById("dress").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    const message =
`New Tailoring Slot Booking

Name: ${name}
Phone: ${phone}
Dress Type: ${dress}
Date: ${date}
Time: ${time}`;

    const whatsappNumber = "919966701300"; // Replace with your WhatsApp number

    const whatsappURL =
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
});
