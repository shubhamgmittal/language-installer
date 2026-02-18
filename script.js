// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Only run this code on index.html (where language cards exist)
    const languageCards = document.querySelectorAll('.language-item');

    if (languageCards.length > 0) {
        // We're on index.html
        languageCards.forEach(card => {
            card.addEventListener('click', () => {
                // Optional: Get the name of the clicked language
                const languageName = card.querySelector('.language-name').textContent.trim();
                
                // You can store it in localStorage if you want to use it on main.html later
                localStorage.setItem('selectedLanguage', languageName);

                // Redirect to the operating system selection page
                window.location.href = 'main.html';
            });
        });
    }

    // Optional: Code that runs on main.html (if you want to show what was selected)
    const osCards = document.querySelectorAll('.language-item'); // same class used in both pages
    const selectedLang = localStorage.getItem('selectedLanguage');

    if (selectedLang && window.location.pathname.includes('main.html')) {
        // You could show a message like: "You chose Python → now choose your OS"
        const heading = document.querySelector('h1');
        if (heading) {
            heading.innerHTML = `You chose <strong>${selectedLang}</strong><br>Now choose your Operating System`;
        }

        // Optional: add click handler for OS selection
        osCards.forEach(card => {
            card.addEventListener('click', () => {
                const osName = card.querySelector('.language-name').textContent.trim();
                alert(`You selected:\nLanguage: ${selectedLang}\nOS: ${osName}`);
                // Here you could redirect to next step, save both choices, etc.
                // localStorage.setItem('selectedOS', osName);
            });
        });
    }
});