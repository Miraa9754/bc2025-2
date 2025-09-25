//Оголошуємо константи для параметрів (варіант 7)
const date = "202302";          // лютий 2023
const time_period = "m";        // місячний період
//Створюємо об'єкт URL
const url = new URL("https://bank.gov.ua/NBUStatService/v1/statdirectory/inflation");
//Додаємо параметри за допомогою URLSearchParams
url.searchParams.append("period", time_period);
url.searchParams.append("date", date);
url.searchParams.append("json", "");  // параметр json без значення
//Виводимо готовий URL у консоль
console.log(url.toString());
