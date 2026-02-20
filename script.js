// script.js

document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;

    // --- Language selection: ONLY on index.html ---
    if (path.includes('index.html')) {
        const languageCards = document.querySelectorAll('.language-item');

        languageCards.forEach(card => {
            card.addEventListener('click', () => {
                const languageName = card.querySelector('.language-name').textContent.trim();
                localStorage.setItem('selectedLanguage', languageName);
                window.location.href = 'main.html';
            });
        });
    }

    // Code that runs on main.html after a language is selected
    const osCards = document.querySelectorAll('.language-item'); // same class used in both pages
    const selectedLang = localStorage.getItem('selectedLanguage');

    if (selectedLang && window.location.pathname.includes('main.html')) {
        // Show which language was chosen
        const heading = document.querySelector('h1');
        if (heading) {
            heading.innerHTML = `You chose <strong>${selectedLang}</strong><br>Now choose your Operating System`;
        }

        // Add click handler for OS selection
        osCards.forEach(card => {
            card.addEventListener('click', () => {
                const osName = card.querySelector('.language-name').textContent.trim();

                // Special behavior when HTML is the selected language
                if (selectedLang.toLowerCase() === 'html') {
                    const lowerOs = osName.toLowerCase();

                    // 1) Any Windows option → HTML setup for Windows
                    if (lowerOs.includes('windows')) {
                        window.location.href = 'HTML setup/setup-html-win.html';
                        return;
                    }

                    // 2) macOS → HTML setup for mac
                    if (lowerOs.includes('mac')) {
                        window.location.href = 'HTML setup/setup-html-mac.html';
                        return;
                    }

                    // 3) All other options treated as Linux → HTML setup for Linux
                    window.location.href = 'HTML setup/setup-html-linux.html';
                    return;
                }

                // Default behavior for other languages (you can change this later)
                alert(`You selected:\nLanguage: ${selectedLang}\nOS: ${osName}`);
            });
        });
    }
});