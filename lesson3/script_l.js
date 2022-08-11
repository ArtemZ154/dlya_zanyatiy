let xx = 'sort'

let z = xx == 'sort' ? 1 : 0

/* иначе */

if (xx == 'sort') {
    z = 1
} else {
    z = 0
}

/* начало урока */

let mass = [1, 2, 3, 4, 5, 6];

const fruits = ['Banana', 'Apple', 'Orange', 'Mango'];

fruits.sort((data1, data2) => {
    return data1.length - data2.length
});

let height = [160, 162, 178, 152, 168, 173, 176, 170]

height.sort((data1, data2) => {
    return data1 - data2
});

let items = [
    {name: "Миша", age: 23},
    {name: "Вася", age: 44},
    {name: "Саша", age: 2},
    {name: "Рома", age: 99},
    {name: "Ашот", age: 19},
    {name: "фртем", age: 19}
];

items.sort((a, b) => {
    if (a.age == b.age) {
        return a.name < b.name ? -1 : 1
    } else {
        return a.age > b.age ? -1 : 1
    }
});
console.log(items);