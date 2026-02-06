// 1. Инициализируем объект WebApp
const tg = window.Telegram.WebApp;

// 2. Сообщаем Telegram, что приложение готово (убирает лоадер)
tg.ready();

// 3. Получаем объект пользователя
const user = tg.initDataUnsafe?.user;

if (user) {
    // Теперь у вас есть доступ к следующим полям:
    const userData = {
        id: user.id,                      // ID пользователя (число)
        firstName: user.first_name,        // Имя
        lastName: user.last_name || "",    // Фамилия (может быть пустой)
        username: user.username || "",     // Никнейм @username
        language: user.language_code,      // Язык (например, 'ru')
        isPremium: user.is_premium         // Есть ли подписка Premium (true/false)
    };

    console.log("Данные получены:", userData);

    // Пример: выводим имя пользователя на страницу
    // Добавьте в HTML элемент <div id="user-name"></div>
    const nameElement = document.getElementById('user-name');
    if (nameElement) {
        nameElement.innerText = `Привет, ${userData.firstName}!`;
    }

} else {
    console.error("Сайт открыт не через Telegram или данные недоступны");
}

// Дополнительно: можно покрасить сайт в цвета темы пользователя
document.body.style.backgroundColor = tg.themeParams.bg_color;
document.body.style.color = tg.themeParams.text_color;




// Инициализация WebApp
// const tg = window.Telegram.WebApp;

// // Расширяем на весь экран (опционально)
// tg.expand();

// // Получаем данные пользователя
// const user = tg.initDataUnsafe?.user;

// if (user) {
//     console.log(`ID: ${user.id}`);
//     console.log(`Имя: ${user.first_name}`);
//     console.log(`Username: ${user.username}`);
// } else {
//     console.log("Данные пользователя не найдены (возможно, запуск вне Telegram)");
// }

// // Теперь это должно сработать
//         const tg = window.Telegram.WebApp;
        
//         if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
//             alert("Привет, " + tg.initDataUnsafe.user.first_name);
//         } else {
//             alert("Библиотека загружена, но данных нет. Открой сайт через кнопку в боте!");
//         }








