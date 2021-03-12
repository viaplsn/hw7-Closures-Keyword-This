const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

//Створіть функцію яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. 
function getMyTaxes(salary = this.middleSalary) {
    return +(salary * this.tax).toFixed(2);
}
console.log(`Amount of taxes:`, getMyTaxes.call(ukraine, 3000));

//Створіть функцію яка рахує скільки у середньому податків платять IT-спеціалісти у кожній країні.
function getMiddleTaxes() {
    return +(this.tax * this.middleSalary).toFixed(2);
}
console.log(`Average amount of taxes in Ukraine: ${getMiddleTaxes.call(ukraine)}
Average amount of taxes in Latvia: ${getMiddleTaxes.call(latvia)}
Average amount of taxes in Litva: ${getMiddleTaxes.call(litva)}`);

//Створіть функцію яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні.
function getTotalTaxes() {
    return +(this.tax * this.middleSalary * this.vacancies).toFixed(2);
}
console.log(`Total amount of taxes in Ukraine: ${getTotalTaxes.call(ukraine)}
Total amount of taxes in Latvia: ${getTotalTaxes.call(latvia)}
Total amount of taxes in Litva: ${getTotalTaxes.call(litva)}`);

//Створіть функцію яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } кожні 10 секунд. 
function getMySalary(country = ukraine) {
    setInterval(function(){
        const salary = Math.round(1500 + Math.random() * (2000 - 1500));
        const taxes = +(country.tax * salary).toFixed(2);
        const profit = +(salary - taxes).toFixed(2);
        const object = {
            salary: salary,
            taxes: taxes,
            profit: profit        
        };
        console.log(object);
    }, 10000);
}
getMySalary(ukraine);