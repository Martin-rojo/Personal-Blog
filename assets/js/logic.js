function initializeTheme() {
    const toggle = document.getElementById('toggle');
    
    // Apply saved theme immediately
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.classList.toggle('dark-mode', savedTheme === 'dark');
    
    if (toggle) {
        // Set initial toggle state
        toggle.checked = savedTheme === 'dark';

        // Add toggle listener
        toggle.addEventListener('change', function() {
            document.body.classList.toggle('dark-mode');
            const isDarkMode = document.body.classList.contains('dark-mode');
            localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
            document.documentElement.style.setProperty('--circle-color', 
                isDarkMode ? '#333' : '#fff');
        });
    }
}

// Initialize theme when DOM loads
document.addEventListener('DOMContentLoaded', initializeTheme);

// Initialize theme immediately to prevent flash of wrong theme
const savedTheme = localStorage.getItem('theme') || 'light';
document.body.classList.toggle('dark-mode', savedTheme === 'dark');