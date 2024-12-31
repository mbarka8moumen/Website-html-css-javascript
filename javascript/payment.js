// Payment form submission handler
document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to server

    // Get the values from the form fields
    const cardName = document.getElementById('card-name').value;
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    // Simple validation (you can add more complex validation here)
    if (cardName && cardNumber && expiryDate && cvv) {
        // For simplicity, we just simulate payment processing here
        document.getElementById('payment-message').innerText = "Payment Successful! Thank you for your purchase.";
    } else {
        document.getElementById('payment-message').innerText = "Please fill in all fields correctly.";
    }
});
