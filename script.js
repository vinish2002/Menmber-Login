const toggleThemeButton = document.getElementById('toggleTheme');
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        toggleThemeButton.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        toggleThemeButton.innerHTML = '<i class="fas fa-sun"></i>';
    }
});