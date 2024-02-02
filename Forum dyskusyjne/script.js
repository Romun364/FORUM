document.getElementById('editProfileForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        bio: document.getElementById('bio').value,
    };

    fetch(/user/${formData.username}, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.text())
    .then(data => alert(data))
    .catch(error => console.error('Error:', error));
});