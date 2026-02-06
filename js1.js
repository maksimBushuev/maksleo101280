window.onload = function() {
    const tg = window.Telegram.WebApp;
    tg.ready();

    const rawData = JSON.stringify(tg.initDataUnsafe, null, 2);
    
    // Выведет на экран всё содержимое объекта данных
    document.body.innerHTML = '<pre style="word-wrap: break-word; white-space: pre-wrap;">' + rawData + '</pre>';
    
    if (!tg.initDataUnsafe.user) {
        alert("Telegram не передал объект user! Проверь метод запуска.");
    }
};

