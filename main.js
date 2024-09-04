'user strict';
let name = 'Джон';
let admin = name;
console.log(name);

// zadaine 2

let city = prompt('Из какого города?');
let oldCity = prompt('Когда построили ваш город?');
let peopleCity = prompt('Население вашего города?');
console.log(`Городу ${city} исполнилось ${2024 - oldCity} лет с момента его образования. Население - ${peopleCity} человек`);

// zadanie 3

let Radius = prompt('Напишите Радиус круга');
let Rad = 3.14*(Radius*Radius);
console.log(Rad);

// zadanie 4

let a = prompt('Напишите число');
let b = prompt('Напишите второе число');
let d = Number(a);
let g = Number(b);
let sum = d + g;
let raz = a - b;
let cha = a / b;
let pro = a * b;
console.log(`Сумма чисел: ${d+g}; Разность чисел: ${raz}; Частное чисел: ${cha}; Произведение чисел ${pro}`);