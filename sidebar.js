function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    const toggleBtns = document.querySelectorAll('.toggle-btn');

    if (sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        mainContent.style.marginLeft = '0';
        toggleBtns.forEach(btn => {
            btn.innerHTML = '>>';
            btn.style.left = '10px'; // Reset button position
        });
    } else {
        sidebar.classList.add('open');
        mainContent.style.marginLeft = '250px';
        toggleBtns.forEach(btn => {
            btn.innerHTML = '<<';
            btn.style.left = '260px'; // Move button with sidebar
        });
    }
}

const toggleBtn = document.querySelector('.toggle-btn');
toggleBtn.addEventListener('click', toggleSidebar);

document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.querySelector('.toggle-btn');
    const mainContent = document.querySelector('.main-content');  // Your main content container

    if (!toggleBtn) {
        console.error('Toggle button not found!');
        return;
    }

    // Simulate fetching user data from an API or database
    const user = {
        username: "Sidebar",
        profilePic: "path/to/profile-pic.jpg" // Replace with the actual path to the profile picture
    };

    // Update the profile picture and username in the sidebar
    document.getElementById("profile-pic").src = user.profilePic;
    document.getElementById("profile-info").textContent = user.username;
});