//
// THEME TOGGLE
//

function setTheme(isDark) {
    const themeIcon = document.getElementById('theme-icon');
    const themeText = document.getElementById('theme-text');

    document.body.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    if (themeIcon && themeText) {
        themeIcon.textContent = isDark ? 'bedtime' : 'light_mode';
        themeText.textContent = isDark ? 'Dark Mode' : 'Light Mode';
    }
}

function toggleTheme() {
    const isDark = localStorage.getItem('theme') === 'dark';
    setTheme(!isDark);
}

function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme ? savedTheme === 'dark' : true;
    setTheme(isDark);
}
