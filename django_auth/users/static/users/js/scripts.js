
let clicks = getCookie('clicks') || 0; // получаем значение из cookie или устанавливаем 0, если cookie не установлены
document.getElementById('clicks').textContent = clicks; // отображаем текущее значение счетчика

function incrementClicks() {
    clicks++; // увеличиваем счетчик на 1
    document.getElementById('clicks').textContent = clicks; // отображаем новое значение счетчика
}

function saveClicks() {
    setCookie('clicks', clicks); // сохраняем текущее значение счетчика в cookie
}

function deleteClicks() {
    deleteCookie('clicks'); // удаляем cookie счетчика
    clicks = 0; // обнуляем счетчик
    document.getElementById('clicks').textContent = clicks; // отображаем новое значение счетчика

}
// Функция getCookie получает значение cookie по имени и возвращает его
function getCookie(name) {
    // Ищем в document.cookie значение, соответствующее заданному имени.
    let matches = document.cookie.match('clicks');
    // Если значение найдено, возвращаем его. В противном случае возвращаем undefined.
    return matches ? matches.input.split('=')[1] : undefined;
}

// Функция setCookie устанавливает cookie с заданным именем и значением
function setCookie(name, value, options = {}) {
    // Настраиваем опции cookie по умолчанию (path=/)
    options = {
        path: '/',
        ...options
    };
    // Если опция expires является объектом Date, преобразуем ее в строку
    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }
    // Создаем строку cookie с заданным именем и значением
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    // Добавляем опции к строке cookie
    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }
    // Устанавливаем cookie в document.cookie
    document.cookie = updatedCookie;
}

// Функция deleteCookie удаляет cookie с заданным именем
function deleteCookie(name) {
    // Устанавливаем значение cookie с именем name на пустую строку и с отрицательным временем жизни
    setCookie(name, "", {
        'max-age': -1
    })
}