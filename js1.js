var WebApp = window.Telegram.WebApp;

WebApp.showAlert(`Добро пожаловать, @${WebApp.WebAppUser.username}.`);



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









