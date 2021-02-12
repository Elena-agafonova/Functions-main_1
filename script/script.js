//Задание 1! слова палиндромы.

polyndrom = prompt('Введите слово', '');

function foo(polyndrom)
{
    if(polyndrom === polyndrom.split('').reverse().join(''))
    {
        alert(`Это полиндром: ${polyndrom}`);
    }
    else
    {
        alert('Это не полиндром');
    }
}
foo(polyndrom);

//Задание 2! Массив уникальных случайных цифр.

var array = [];
while(array.length < 7)
{
    var RandomArray = Math.round(Math.random() * 10)
    if(array.indexOf(RandomArray) == -1)
    {
        array.push(RandomArray);
    }
}
array.sort((a, b) => a - b)
alert(array);
