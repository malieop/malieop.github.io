// RSVP form handling
function handleRSVP(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    // Here you would typically send the data to a server
    console.log('RSVP Data:', data);

    // Show success message
    alert('Thank you for your RSVP! We\'ll be in touch soon.');
    event.target.reset();
}