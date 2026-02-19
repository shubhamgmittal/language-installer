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