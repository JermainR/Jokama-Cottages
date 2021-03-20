function sendMail(contactForm) {
    emailjs.send("template_sr85cps", "service_jkuuy5i", {
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