// Инициализация WebApp
const tg = window.Telegram.WebApp;

// Расширяем на весь экран (опционально)
tg.expand();

// Получаем данные пользователя
const user = tg.initDataUnsafe?.user;

if (user) {
    console.log(`ID: ${user.id}`);
    console.log(`Имя: ${user.first_name}`);
    console.log(`Username: ${user.username}`);
} else {
    console.log("Данные пользователя не найдены (возможно, запуск вне Telegram)");
}
alert(window.Telegram.WebApp.initData);



