document.addEventListener("DOMContentLoaded", function() {
    // Проверяем, загрузился ли объект Telegram вообще
    if (window.Telegram && window.Telegram.WebApp) {
        const tg = window.Telegram.WebApp;
        tg.ready();
        
        const user = tg.initDataUnsafe?.user;
        if (user) {
            console.log("Успех! Имя:", user.first_name);
        } else {
            console.log("Приложение запущено не через Telegram");
        }
    } else {
        console.error("SDK Telegram не загружен! Проверь интернет или путь к скрипту.");
    }
});
