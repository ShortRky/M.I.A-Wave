document.getElementById('profilePic').addEventListener('click', () => {
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            document.getElementById('profilePic').src = e.target.result;
            // Save the new profile picture to localStorage or send it to the server
            localStorage.setItem('profilePic', e.target.result);
        };
        reader.readAsDataURL(file);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const savedProfilePic = localStorage.getItem('profilePic');
    if (savedProfilePic) {
        document.getElementById('profilePic').src = savedProfilePic;
    }

    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData) {
        document.getElementById('profile-name').innerText = `Name: ${userData.username}`;
        document.getElementById('profile-email').innerText = `Email: ${userData.email}`;
        const title = userData.username === 'Nsuu' ? 'Developer' : 'Guest';
        document.getElementById('profile-title').innerText = `Title: ${title}`;
    }
});

function saveProfile() {
    const name = document.getElementById('nameInput').value;
    const email = document.getElementById('emailInput').value;

    localStorage.setItem('profileName', name);
    localStorage.setItem('profileEmail', email);

    alert('Profile saved successfully!');
}
