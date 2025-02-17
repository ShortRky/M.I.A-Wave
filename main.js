// This file will contain global JS functions and setups for the website.
document.addEventListener("DOMContentLoaded", () => {
    console.log("W.A.V.E Early Access - Main JS Loaded!");

    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.querySelector('.toggle-btn');
    const mainContent = document.querySelector('main');
    const contentBox = document.querySelector('.main-content');

    if (!toggleBtn) {
        console.error('Toggle button not found!');
        return;
    }

    // Open sidebar on page load (for testing)
    setTimeout(() => {
        sidebar.classList.add('open');
        contentBox.classList.add('sidebar-open'); // Shift content when sidebar opens
    }, 500);

    // Toggle sidebar on button click
    toggleBtn.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent interference from parent elements
        console.log('Toggle button clicked'); // Debugging message
        sidebar.classList.toggle('open'); // Opens/closes sidebar
        
        // Toggle content shift
        if (sidebar.classList.contains('open')) {
            contentBox.classList.add('sidebar-open'); // Shift content when sidebar is open
        } else {
            contentBox.classList.remove('sidebar-open'); // Return content to original position
        }
    });
});