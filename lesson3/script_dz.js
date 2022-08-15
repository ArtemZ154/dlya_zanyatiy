/* 
cards = [
    {
        content: {
            title: "Test 1",
            description: "test",
        },
        description: { text: "testtest" }
    },
    {
        content: {
            title: "Test 2",
            description: "test",
        },
        description: { text: "test2test" }
    }
]

newCard = {
    content: {
        title: "",
        description: "",
    },
    description: { text: "" }
};

function assignNewCard(card) {
    cards.push(card)
};

assignNewCard(newCard)
newCard.content.title = 'test3'
console.log(cards[2].title)
*/

/* Второе задание начало */
let cards = [
    {
        brand: "Apple",
        name: "MacBook",
        model: "Air 13 2022",
        type: "Notebook",
        cost: "1300",
        color: "silver"
    },
    {
        brand: "Honor",
        name: "Book",
        model: "13 2020",
        type: "Notebook",
        cost: "650",
        color: "white"
    },
    {
        brand: "HP",
        name: "Pavilion",
        model: "15 eh-1022-ur",
        type: "Notebook",
        cost: "800",
        color: "blue"
    },
    {
        brand: "Asus",
        name: "Book",
        model: "13 2020",
        type: "Notebook",
        cost: "650",
        color: "white"
    },
    {
        brand: "Honor",
        name: "Book",
        model: "13 2020",
        type: "Notebook",
        cost: "650",
        color: "white"
    },
    {
        brand: "honor",
        name: "Book",
        model: "15 2018",
        type: "Notebook",
        cost: "1000",
        color: "black"
    },
    {
        brand: "Huawei",
        name: "Book",
        model: "16.5 2021",
        type: "Notebook",
        cost: "1400",
        color: "gray"
    },
    {
        brand: "Huawei",
        name: "Book",
        model: "15 2018",
        type: "Notebook",
        cost: "1000",
        color: "black"
    }
]

function costUpOrDown(typeq, dataq) {
    a = dataq
    if (typeq == 'up') {
        a.sort((data1, data2) => {
            return Number(data1.cost) - Number(data2.cost)
        });
    } else if (typeq == 'down') {
        a.sort((data1, data2) => {
            return Number(data2.cost) - Number(data1.cost) 
        });
    }
    return a
}
let lenCostDia = 0
var h = []
function costDiapazon(mincost, maxcost, dataq) {
    a = dataq;
    if (dataq.length == lenCostDia) {
        b = h;
        return b;
    };
    if (Number(dataq[lenCostDia]['cost']) >= mincost && Number(dataq[lenCostDia]['cost']) <= maxcost) {
        h.push(dataq[lenCostDia]);
        lenCostDia++;
        return costDiapazon(mincost, maxcost, dataq);
    } else {
        lenCostDia++;
        return costDiapazon(mincost, maxcost, dataq);
    };
};

var color = ['white', 'blue', 'black', 'silver', 'gray']

function colorSort(colorq, dataq) {
    dataq.sort((data1, data2) => {
        return colorq.indexOf(data1.color) - colorq.indexOf(data2.color)
    });
    return dataq
}
function alphabetSort(dataq) {
    dataq.sort(function(data1, data2) {
        if(data1.brand < data2.brand) { return -1; }
        else if(data1.brand > data2.brand) { return 1; }
    });
    return dataq
};

console.log(costUpOrDown('up', cards));
console.log(costUpOrDown('down', cards));
console.log(costDiapazon(800, 1300, cards));
console.log(colorSort(color, cards), 123);
console.log(alphabetSort(cards));

/* Второе задание конец(рекурсия!!!) */