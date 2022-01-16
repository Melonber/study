
let user = {name: "Валик",age: 52};
let shop = ["Возраст: 52", "Рост: 193","Образование: высшее",
"Учёная степень: нет", "Спорт: баскетбол"];
let rest = ["Вавилон", "Звезда", "Главный"];
let zak = ["Пицца", "Роллы", "Мак"];
let prob = ' ';
const count = [1,5,"+"];
user.sayHi = function() {

user.infor = function() {
    for (let i = 0; i < 3; i++) 
    alert(shop[i])};
user.zakaz = function(){
    for (let i = 0; i < 3; i++) 
    alert('Ресторан'+prob+ rest[i]+prob+'одобрил заказ'+prob+zak[i] )};

function Student(name) {
    this.name = name;
    this.sayHi = function() {
    alert( "Меня зовут:" + this.name );
};
}
//1
let sum = (a, b) => a + b;
let min = (a, b) => a - b;
let del = (a, b) => a/b;
let ymn = (a, b) => a * b;

//Перввая работа
//#1
//user.sayHi();
//$#2	
//user.infor();
//#3
//user.zakaz();
///////////////////////
//#4
//let we = new hell("Вадим");
//alert(we.name); 
//alert(we.isAdmin); 
/////////////////////
//#5
//let std = new Student("Вадим");
//std.sayHi();

//Вторая работа
//1
//alert( min(1, 2) );


//2
//let age = prompt("Сколько у вас родственников");
//let welcome = (age < 3) ?
//() => alert("hi") :

//() => alert("pam ram");
//welcome();


//3
let pol = (fam) => {
    let ww = fam.split('').reverse().join('');
    if (fam == ww){
        return('Да');
    }
    else{
        return('Да');
    }
};
//alert(pol('аша'));

//4
let arr = [2,4,7,23,7]
//alert(arr.reduce((a,b) => (a+b))/arr.lenght);

//5

let year = (kol) => {
    let resolt = 31 - kol;
    return resolt};
//alert(year(12))


//6

//let a = () => {

//let a;

//}
//alert(a())

//7

let aaa = (arr) => {
    for (let i = 0; i < arr.lenght;i++);
        if (arr[i]%2 == 0){
            arr[i] = arr[i]*2;
        };
        return arr;
}
//alert(aaa([3,10,8,4,5,7,3]));

//8
let email = ['wwasfw@fdk.ru','sdfsd@gmail.ru']
email.forEach(function(item, i, arr) {
//alert( 'Пользователь: ' + item + " подключился!");});

//3 лабораторная
//1
