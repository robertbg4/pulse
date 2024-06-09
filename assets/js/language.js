const languageSwitcher = document.getElementById('language-switcher');
const langBlocks = document.querySelectorAll('.lang-block');

languageSwitcher.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName === 'BUTTON') {
        const lang = target.dataset.lang;

        // Удаляем класс 'active' у всех блоков
        langBlocks.forEach(block => block.classList.remove('active'));

        // Добавляем класс 'active' к блокам выбранного языка
        document.querySelectorAll(`.lang-${lang}`).forEach(block => block.classList.add('active'));

        // Удаляем классы 'primary' и 'color2' у всех кнопок
        const buttons = languageSwitcher.querySelectorAll('button');
        buttons.forEach(button => button.classList.remove('primary', 'color2'));

        // Добавляем классы 'primary' и 'color2' к нажатой кнопке
        target.classList.add('primary', 'color2');
    }

});

// Устанавливаем русский язык по умолчанию
document.querySelectorAll('.lang-en').forEach(block => block.classList.add('active'));
