const list = document.querySelectorAll('.list');
const indicator = document.querySelector('.ind');
const infoContent = document.getElementById('infoContent');
const infoContainer = document.querySelector('.info-container');

function setIndicator() {
    const activeItem = document.querySelector('.list.active');
    const itemRect = activeItem.getBoundingClientRect();
    const navRect = document.querySelector('.navigation').getBoundingClientRect();
    
    const centerX = itemRect.left + (itemRect.width / 2);
    const centerY = navRect.bottom - 40; // Высота индикатора смещена на 40px для визуального эффекта
    
    indicator.style.left = `${centerX}px`;
    indicator.style.top = `${centerY}px`;
}

function activeLink() {
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
    setIndicator(); // Обновляем позицию индикатора

    const clickedItem = this.querySelector('.text').innerText.toLowerCase();
    showInfo(clickedItem);
}

function showInfo(menuItem) {
    let content = '';
    switch (menuItem) {
        case 'home':
            content = '<h2>Welcome to Home!</h2>';
            infoContainer.classList.remove('show'); // Закрыть контейнер информации
            break;
        case 'telegram':
            content = '<h2>Telegram Link</h2><p><a href="https:"></a></p>';
            break;
        case 'tiktok':
            content = '<h2>Tik-Tok Link</h2><p><a href="https:"></a></p>';
            break;
        case 'github':
            content = '<h2>GitHub Link</h2><p><a href="https:"></a></p>';
            break;
        case 'bio':
            content = `<h2>Bio</h2>`;
            break;
        case 'setting':
            content = `<h2>Settings</h2>`;
            break;
    }
    if (menuItem !== 'home') {
        infoContent.innerHTML = content;
        infoContainer.classList.add('show'); // Показать контейнер с информацией
    }
}

list.forEach((item) => item.addEventListener('click', activeLink));
window.addEventListener('load', setIndicator); // Устанавливаем начальную позицию индикатора