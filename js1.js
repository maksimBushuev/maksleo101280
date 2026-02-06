// Инициализация WebApp
        const tg = window.Telegram.WebApp;
        tg.ready(); // Сообщаем Telegram, что приложение загрузилось
        tg.expand(); // Разворачиваем на все окно

        // Получаем данные
        const user = tg.initDataUnsafe?.user;

        if (user) {
            // Выводим данные на экран
            document.getElementById('welcome').innerText = `Привет, ${user.first_name}!`;
            document.getElementById('user-id').innerText = user.id;
            document.getElementById('user-username').innerText = user.username ? `@${user.username}` : 'не задан';
            document.getElementById('user-lang').innerText = user.language_code;
            
            // Показываем блок с инфой
            document.getElementById('user-info').style.display = 'block';
        } else {
            document.getElementById('welcome').innerText = "Ошибка: Данные не найдены!";
        }



// // Теперь это должно сработать
//         const tg = window.Telegram.WebApp;
        
//         if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
//             alert("Привет, " + tg.initDataUnsafe.user.first_name);
//         } else {
//             alert("Библиотека загружена, но данных нет. Открой сайт через кнопку в боте!");
//         }











