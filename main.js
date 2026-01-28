document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const menuContainer = document.getElementById('menu-container');
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const body = document.body;

    const lunchMenus = [
        { name: "김치찌개", image: "https://picsum.photos/id/237/200/300" },
        { name: "된장찌개", image: "https://picsum.photos/id/238/200/300" },
        { name: "부대찌개", image: "https://picsum.photos/id/239/200/300" },
        { name: "순두부찌개", image: "https://picsum.photos/id/240/200/300" },
        { name: "제육볶음", image: "https://picsum.photos/id/241/200/300" },
        { name: "오징어볶음", image: "https://picsum.photos/id/242/200/300" },
        { name: "불고기", image: "https://picsum.photos/id/243/200/300" },
        { name: "돈까스", image: "https://picsum.photos/id/244/200/300" },
        { name: "비빔밥", image: "https://picsum.photos/id/245/200/300" },
        { name: "김밥", image: "https://picsum.photos/id/246/200/300" },
        { name: "라면", image: "https://picsum.photos/id/247/200/300" },
        { name: "떡볶이", image: "https://picsum.photos/id/248/200/300" },
        { name: "짜장면", image: "https://picsum.photos/id/249/200/300" },
        { name: "짬뽕", image: "https://picsum.photos/id/250/200/300" },
        { name: "탕수육", image: "https://picsum.photos/id/251/200/300" },
        { name: "볶음밥", image: "https://picsum.photos/id/252/200/300" },
        { name: "초밥", image: "https://picsum.photos/id/253/200/300" },
        { name: "우동", image: "https://picsum.photos/id/254/200/300" },
        { name: "라멘", image: "https://picsum.photos/id/255/200/300" },
        { name: "카레", image: "https://picsum.photos/id/256/200/300" },
        { name: "햄버거", image: "https://picsum.photos/id/257/200/300" },
        { name: "피자", image: "https://picsum.photos/id/258/200/300" },
        { name: "파스타", image: "https://picsum.photos/id/259/200/300" },
        { name: "샌드위치", image: "https://picsum.photos/id/260/200/300" },
        { name: "쌀국수", image: "https://picsum.photos/id/261/200/300" },
        { name: "분짜", image: "https://picsum.photos/id/262/200/300" },
        { name: "팟타이", image: "https://picsum.photos/id/263/200/300" },
        { name: "나시고랭", image: "https://picsum.photos/id/264/200/300" }
    ];

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
            recommendLunchMenu();
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

    function recommendLunchMenu() {
        if (!menuContainer) return;
        const randomIndex = Math.floor(Math.random() * lunchMenus.length);
        const selectedMenu = lunchMenus[randomIndex];
        menuContainer.innerHTML = `
            <div class="menu-item">
                <img src="${selectedMenu.image}" alt="${selectedMenu.name}" class="menu-image">
                <span>${selectedMenu.name}</span>
            </div>
        `;
    }
});
