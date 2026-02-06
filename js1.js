// Инициализация Telegram Web App
        const tg = window.Telegram.WebApp;

        // Сообщаем Telegram, что приложение готово
        tg.ready();

        // Получаем данные пользователя
        const user = tg.initDataUnsafe?.user;

        if (user) {
            document.getElementById('first_name').innerText = user.first_name;
            document.getElementById('user_id').innerText = user.id;
            document.getElementById('username').innerText = user.username || 'не указан';
        } else {
            document.getElementById('user-card').innerText = "Данные не найдены (запустите через Telegram)";
        }