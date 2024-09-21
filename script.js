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
