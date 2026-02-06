document.addEventListener("DOMContentLoaded", function() {
    // Инициализация
    const tg = window.Telegram.WebApp;
    tg.ready();

    // Выводим в alert для теста (увидишь сразу при открытии)
    if (!tg.initDataUnsafe || Object.keys(tg.initDataUnsafe).length === 0) {
        alert("Данные не получены. Открой приложение строго через бота!");
    } else {
        const user = tg.initDataUnsafe.user;
        if (user) {
            document.getElementById('first_name').innerText = user.first_name;
            console.log("Данные юзера:", user);
        } else {
            alert("Объект user пуст, хотя initData есть.");
        }
    }
});