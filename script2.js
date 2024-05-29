document.addEventListener('DOMContentLoaded', function () {
    var cardNumInput = document.querySelector('#cardNum');

    cardNumInput.addEventListener('input', function () {
        let cNumber = this.value.replace(/\D/g, ''); // Remove non-numeric characters
        cNumber = cNumber.replace(/(.{4})/g, '$1 '); // Add space after every 4 characters

        this.value = cNumber.trim(); // Trim any leading or trailing spaces
    });

    var form = document.querySelector('#paymentForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        // Simulate payment processing (replace this with your actual payment processing logic)
        setTimeout(function () {
            // Show payment success message
            alert('Payment done successfully!');

            // Redirect to the index page
            window.location.href = 'index.html';
        }, 2000); // 2000 milliseconds = 2 seconds (adjust this delay as needed)
    });
});
