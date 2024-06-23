function getDomainName(url) {
    // Удаляем протокол и двоеточие, если они есть
    url = url.replace(/^https?:\/\//, '');
    // Удаляем www., если оно есть
    url = url.replace(/^www\./, '');
    // Разбиваем URL на части по символу '/'
    const parts = url.split('/');
    // Возвращаем первую часть, которая является доменным именем
    return parts[0].split('.').slice(0, -1).join('.');
}

// Тестовые случаи
console.log(getDomainName("http://github.com/carbonfive/raygun"));  // Output: "github"
console.log(getDomainName("http://www.zombie-bites.com"));           // Output: "zombie-bites"
console.log(getDomainName("https://www.cnet.com"));                  // Output: "cnet"
