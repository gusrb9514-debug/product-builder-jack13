document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const numbersContainer = document.getElementById('numbers-container');
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const body = document.body;

    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light-mode') {
        body.classList.add('light-mode');
        themeToggleBtn.textContent = 'Dark Mode';
    } else {
        themeToggleBtn.textContent = 'White Mode';
    }

    if (generateBtn) {
        generateBtn.addEventListener('click', () => {
            generateAndDisplayNumbers();
        });
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            body.classList.toggle('light-mode');
            if (body.classList.contains('light-mode')) {
                themeToggleBtn.textContent = 'Dark Mode';
                localStorage.setItem('theme', 'light-mode');
            } else {
                themeToggleBtn.textContent = 'White Mode';
                localStorage.setItem('theme', 'dark-mode');
            }
        });
    }

    function generateAndDisplayNumbers() {
        if (!numbersContainer) return; // Ensure numbersContainer exists before proceeding
        numbersContainer.innerHTML = '';
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }

        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

        sortedNumbers.forEach(number => {
            const numberBall = document.createElement('div');
            numberBall.classList.add('number-ball');
            numberBall.textContent = number;
            numbersContainer.appendChild(numberBall);
        });
    }
});
