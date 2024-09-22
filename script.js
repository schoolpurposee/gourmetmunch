function openPopup() {
    const name = document.querySelector('input[name="username"]').value;
    const email = document.querySelector('input[name="userEmail"]').value;
    const phone = document.querySelector('input[name="userPhone"]').value;
    
    if (name.trim() === '' || email.trim() === '' || phone.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }

    const formData = new FormData();
    formData.append('username', name);
    formData.append('userEmail', email);
    formData.append('userPhone', phone);

    fetch('php/contact.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        alert('Message sent successfully!');
    })
    .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
        alert('If its an error, that means this website is for educational purposes only.');
    });
}
var addToCartButtons = document.querySelectorAll('.addToCartBtn');

// Loop through each button and attach event listener
addToCartButtons.forEach(function(button) {
    button.addEventListener('click', addToCart);
});

// Define the function to execute when the button is clicked
function addToCart(event) {
    // Your logic to add item to cart
    var itemID = event.target.getAttribute('data-item-id'); // Example: Get item ID from data attribute
    var quantity = 1; // Example: Default quantity is 1

    // Example: Send data to backend using fetch API
    fetch('/place-order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            itemID: itemID,
            quantity: quantity
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to place order');
        }
        return response.json();
    })
    .then(data => {
        // Handle successful response (if needed)
        alert('Order placed successfully!');
    })
    .catch(error => {
        // Handle error
        console.error('Error placing order:', error);
        alert('Failed to place order. Please try again later.');
    });
}

