function sendMail(contactForm) {
    emailjs.send("service_jkuuy5i", "template_sr85cps", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "booking_request": contactForm.bookingsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCES", response);
        },
        function(error) {
            console.log("FAILED", error);
        });
}